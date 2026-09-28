// Card quality check for one city's data (docs/card-spec.md, "Минимум
// качества"). Data agents run it before opening a PR; reviewers run it on
// the PR branch. Exit code 1 means the PR is not ready.
//
//   npm run check-city -- bratislava
//
// Checks, per place: texts in both languages, coordinates, a way to
// contact, and for logo / Google rating / opening hours either a value or
// a "<field>: none (<where searched>)" line in notes. Per city: coverage
// of each field against its target.
import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { SERVICES } from "../lib/services";
import { VET_SPECIALTIES } from "../lib/vet";
import { EXCLUSIVE_FACTS, FACTS } from "../lib/facts";
import { parseOpeningHours } from "../lib/hours";
import { MIN_LOGO_LONG_SIDE, MIN_LOGO_SHORT_SIDE, logoTooSmall } from "../lib/imageSize";
import {
  EVIDENCE_COLUMNS,
  EVIDENCE_FROM,
  MAX_QUOTE,
  MIN_QUOTE,
  badField,
  domainOf,
  isGoogleMaps,
  isSocial,
  needsEvidence,
  priceInQuotes,
  quoteMismatch,
  requiredEvidence,
  squash,
} from "./evidence";

type Row = Record<string, string>;

const city = process.argv[2];
if (!city) {
  console.error("Usage: npm run check-city -- <city-slug>");
  process.exit(2);
}
const dir = path.join(process.cwd(), "..", "data", "cities", city);
const logosDir = path.join(process.cwd(), "public", "logos", city);
if (!fs.existsSync(dir)) {
  console.error(`No data folder: ${dir}`);
  process.exit(2);
}

const allRows: Row[] = fs
  .readdirSync(dir)
  .filter((f) => /^businesses.*\.csv$/.test(f))
  .flatMap((f) => Papa.parse<Row>(fs.readFileSync(path.join(dir, f), "utf-8"), { header: true, skipEmptyLines: true }).data);
// closed=yes: permanently closed after it was listed - kept only so its old
// URL redirects (docs/card-spec.md §11). Not shown, not counted below.
const isClosed = (r: Row) => /^yes$/i.test((r.closed ?? "").trim());
const rows = allRows.filter((r) => !isClosed(r));
const insights = new Set(
  fs.existsSync(path.join(dir, "review-insights"))
    ? fs.readdirSync(path.join(dir, "review-insights")).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, ""))
    : []
);

const has = (r: Row, key: string) => (r[key] ?? "").trim() !== "";
const noted = (r: Row, key: string) => new RegExp(`\\b${key}: none \\(.+\\)`).test(r.notes ?? "");
// Hours count only when they say when the place is open on weekdays: a
// line of weekend days alone ("sa closed; su closed", 35 Košice places;
// "sa 08:30-12:30; su closed", Vetis) leaves Monday to Friday blank.
const noWeekdays = (hours: string) => {
  const value = hours.trim();
  if (["24h", "by-appointment"].includes(value)) return false;
  return !value.split(";").some((d) => /^(mo|tu|we|th|fr)\s/.test(d.trim()));
};
const logoExists = (r: Row) => has(r, "logo_file") && fs.existsSync(path.join(logosDir, r.logo_file.trim()));
// A site icon (16-72 px) is not a logo: blurry in the card tile, and the
// seed doesn't load it (reported below, not counted).
const logoSmall = (r: Row) => (logoExists(r) ? logoTooSmall(path.join(logosDir, r.logo_file.trim())) : null);
const logoOk = (r: Row) => logoExists(r) && !logoSmall(r);

// Target share of places that must have each field. A field counts when
// it has a value or an honest "<field>: none (<where searched>)" line in
// notes (owner, 2026-09-28): a gap that is written down costs an agent less
// than a made-up value, so it never has to guess to reach a target. The
// share with a real value is printed next to it; below the target it is a
// warning the reviewer reads, not a failure.
// "warn": the owner's minimum is about real values (docs/card-spec.md,
// "Минимум качества"), so a low share of them is shown to the reviewer.
const CHECKS: { field: string; target: number; value: (r: Row) => boolean; none?: string; warn?: boolean }[] = [
  { field: "short_description + _local", target: 1, value: (r) => has(r, "short_description") && has(r, "short_description_local") },
  { field: "description + _local", target: 1, value: (r) => has(r, "description") && has(r, "description_local") },
  // Mobile services with no premises have no coordinates, only a
  // "coords: none (mobile service ...)" note (docs/card-spec.md, section 3).
  { field: "lat / lng", target: 1, value: (r) => has(r, "lat") && has(r, "lng"), none: "coords" },
  { field: "phone / email / website", target: 1, value: (r) => has(r, "phone") || has(r, "email") || has(r, "website") },
  // A Maps link copied from the place's card, or "maps: none (...)" where
  // no card was found or Maps would not open: an honest gap beats a made-up
  // link (PR #144, owner 2026-09-27). The reviewer checks the notes.
  { field: "google_maps_url", target: 0.95, value: (r) => has(r, "google_maps_url"), none: "maps", warn: true },
  { field: "logo", target: 0.8, value: logoOk, none: "logo", warn: true },
  // "Good to know" facts from the place's own site (docs/card-spec.md,
  // section 9): codes, or "facts: none (...)" where nothing is stated -
  // both count, as the spec says; counting codes only rewarded guessing
  // (Košice, PR #151).
  { field: "facts", target: 0.8, value: (r) => has(r, "facts"), none: "facts" },
  { field: "google_rating", target: 0.85, value: (r) => has(r, "google_rating") && has(r, "google_rating_count"), none: "rating", warn: true },
  { field: "opening_hours", target: 0.9, value: (r) => has(r, "opening_hours") && !noWeekdays(r.opening_hours), none: "hours", warn: true },
];
const counts = (c: (typeof CHECKS)[number], r: Row) => c.value(r) || (!!c.none && noted(r, c.none));

let failed = false;
const closedCount = allRows.length - rows.length;
console.log(`\n${city}: ${rows.length} places${closedCount ? ` (+ ${closedCount} closed, hidden)` : ""}\n`);
console.log("field                         value   none   share  target");
const lowValue: string[] = [];
// Batch 0 of a city has only its candidates list (add-city.md, "Партии").
if (!rows.length) console.log("(no places yet - batch 0: city.json and candidates.csv only)");
for (const c of rows.length ? CHECKS : []) {
  const withValue = rows.filter(c.value).length;
  const withNone = rows.filter((r) => !c.value(r) && counts(c, r)).length;
  const share = (withValue + withNone) / rows.length;
  const pass = share >= c.target;
  if (!pass) failed = true;
  if (c.warn && withValue / rows.length < c.target) lowValue.push(`${c.field}: ${Math.round((withValue / rows.length) * 100)}% with a value (target ${Math.round(c.target * 100)}%), ${withNone} "${c.none}: none (...)"`);
  console.log(
    `${c.field.padEnd(28)} ${String(withValue).padStart(6)} ${String(withNone).padStart(6)} ${`${Math.round(share * 100)}%`.padStart(7)} ${`${Math.round(c.target * 100)}%`.padStart(6)}  ${pass ? "ok" : "FAIL"}`
  );
}
if (lowValue.length) {
  console.log(`\nWarning - below target with a real value; the reviewer reads the "none" notes (${lowValue.length}):`);
  for (const l of lowValue) console.log(`  ${l}`);
}
// More than half without Google Maps data is not a city without cards -
// the tool did not work. Stop and say so in the PR (quality.md, rule 9).
for (const key of ["maps", "rating"]) {
  const none = rows.filter((r) => noted(r, key)).length;
  if (rows.length >= 4 && none > rows.length / 2) {
    console.log(`\nWarning - "${key}: none" at ${none} of ${rows.length} places: if Google Maps did not open, write it in the PR as an open question instead of collecting further.`);
  }
}

// Slugs: the seed refuses anything but a-z, 0-9 and single hyphens, and a
// refused slug stops the whole production seed (first Warszawa data:
// "kociocia---marta-galan", 2026-09-28).
const badSlugs = allRows.map((r) => r.slug ?? "").filter((s) => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(s));
if (badSlugs.length) {
  failed = true;
  console.log(`\nInvalid slug - only a-z, 0-9 and single hyphens (${badSlugs.length}):`);
  for (const s of badSlugs) console.log(`  "${s}"`);
}

// Opening hours the seed can read (docs/card-spec.md: "su closed", not
// "su off" - the seed drops unreadable hours silently; 32 Warszawa places).
const badHours = rows
  .map((r) => ({ slug: r.slug, error: r.opening_hours?.trim() ? parseOpeningHours(r.opening_hours).error : undefined }))
  .filter((h) => h.error);
if (badHours.length) {
  failed = true;
  console.log(`\nOpening hours the seed cannot read (${badHours.length}):`);
  for (const h of badHours) console.log(`  ${h.slug}: ${h.error}`);
}

// Descriptions are written for each place from its own site. One text per
// category with the name swapped in says nothing about the place and puts
// the same paragraph on dozens of pages: all of Košice and Warszawa
// (2026-09-28). Compared without the place's name, by the last 12 words.
const TEXT_FIELDS = ["short_description", "short_description_local", "description", "description_local"];
const templated: string[] = [];
for (const field of TEXT_FIELDS) {
  const byTail = new Map<string, string[]>();
  for (const r of rows) {
    const words = (r[field] ?? "").split(r.name).join(" ").toLowerCase().split(/[^\p{L}\p{N}]+/u).filter(Boolean);
    if (words.length < 6) continue;
    const tail = words.slice(-12).join(" ");
    byTail.set(tail, [...(byTail.get(tail) ?? []), r.slug]);
  }
  for (const slugs of byTail.values()) {
    if (slugs.length > 1) templated.push(`${field}: same text on ${slugs.length} places - ${slugs.slice(0, 4).join(", ")}${slugs.length > 4 ? ", ..." : ""}`);
  }
}
if (templated.length) {
  failed = true;
  console.log(`\nOne description on several places - write each from the place's site (${templated.length}):`);
  for (const t of templated) console.log(`  ${t}`);
}

// Every missing logo, rating or hours needs a trace of the search.
const silent: string[] = [];
for (const r of rows) {
  for (const c of CHECKS) {
    if (!c.none || counts(c, r)) continue;
    if (c.none === "logo" && logoSmall(r)) continue; // own list below
    silent.push(`${r.slug}: no ${c.field} and no "${c.none}: none (...)" in notes`);
  }
}
if (silent.length) {
  failed = true;
  console.log(`\nMissing without a search note (${silent.length}):`);
  for (const s of silent) console.log(`  ${s}`);
}

// Nonstop 24/7 is shown as "open now" at any hour: only for places whose
// hours are 24h all week (docs/card-spec.md, section 8, "Nonstop 24/7").
const DAYS = ["mo", "tu", "we", "th", "fr", "sa", "su"];
const allDay = (hours: string) =>
  DAYS.every((d) => new RegExp(`(^|;)\\s*${d}\\s+24h\\s*(;|$)`).test(hours ?? ""));
const falseNonstop = rows.filter((r) => /^yes$/i.test((r.emergency_24_7 ?? "").trim()) && !allDay(r.opening_hours));
if (falseNonstop.length) {
  failed = true;
  console.log(`\nemergency_24_7=yes without 24h hours on all 7 days (${falseNonstop.length}):`);
  for (const r of falseNonstop) console.log(`  ${r.slug}: ${r.opening_hours || "(no hours)"}`);
}

// Coordinates at the city centre are a placeholder, not a place: they put
// a pin where the business is not (docs/card-spec.md, section 3).
const cityMeta = fs.existsSync(path.join(dir, "city.json"))
  ? (JSON.parse(fs.readFileSync(path.join(dir, "city.json"), "utf-8")) as {
      lat?: number;
      lng?: number;
      locale?: string;
      locales?: string[];
      currency?: string;
    })
  : {};
const atCentre = rows.filter(
  (r) =>
    cityMeta.lat !== undefined &&
    cityMeta.lng !== undefined &&
    has(r, "lat") &&
    Math.abs(Number(r.lat) - cityMeta.lat) < 0.0005 &&
    Math.abs(Number(r.lng) - cityMeta.lng) < 0.0005
);
if (atCentre.length) {
  failed = true;
  console.log(`\nCoordinates at the city centre - placeholder, not the place (${atCentre.length}):`);
  for (const r of atCentre) console.log(`  ${r.slug}: ${r.lat}, ${r.lng}`);
}

// Logos are shown at avatar size: a heavy file only slows the page
// (docs/card-spec.md, "Логотип").
const MAX_LOGO_KB = 200;
const heavyLogos = rows.filter(
  (r) => logoOk(r) && fs.statSync(path.join(logosDir, r.logo_file.trim())).size > MAX_LOGO_KB * 1024
);
if (heavyLogos.length) {
  failed = true;
  console.log(`\nLogos over ${MAX_LOGO_KB} KB - compress or resize to 512 px (${heavyLogos.length}):`);
  for (const r of heavyLogos) {
    const kb = Math.round(fs.statSync(path.join(logosDir, r.logo_file.trim())).size / 1024);
    console.log(`  ${r.slug}: ${r.logo_file} ${kb} KB`);
  }
}

// Too small for the card tile: a site icon or a thin strip
// (docs/playbooks/add-city.md, section 5). Find a bigger file or write
// "logo: none (...)".
const smallLogos = rows.filter((r) => logoSmall(r));
if (smallLogos.length) {
  failed = true;
  console.log(
    `\nLogos too small - need ${MIN_LOGO_LONG_SIDE} px on the long side and ${MIN_LOGO_SHORT_SIDE} px on the short one; a site icon is not a logo (${smallLogos.length}):`
  );
  for (const r of smallLogos) {
    const size = logoSmall(r)!;
    console.log(`  ${r.slug}: ${r.logo_file} ${size.width}x${size.height}`);
  }
}

// Review summaries follow one format (docs/playbooks/review-insights.md);
// every text in English and in each language of the city.
const slugs = new Set(allRows.map((r) => r.slug));
const cityLangs = ["en", ...(cityMeta.locales ?? (cityMeta.locale ? [cityMeta.locale] : []))];
const bothLangs = (v: unknown) => {
  const o = v as Record<string, unknown> | undefined;
  return cityLangs.every((l) => typeof o?.[l] === "string" && (o[l] as string).trim() !== "");
};
const TOPICS = ["staff", "results", "prices", "waiting", "place", "communication", "animals"];
type FeedItem = { ago?: unknown; months?: unknown; stars?: unknown; topics?: unknown };
function checkFeed(
  data: { reviews_in_period?: number; period_from?: string; period_to?: string; cards?: { topic?: string; sentiment?: string; mentions?: number }[]; feed?: unknown },
  ratings: number
): string[] {
  const errors: string[] = [];
  if (!Array.isArray(data.feed)) return [`no "feed" - list every review with text in the period (review-insights.md, "Лента")`];
  const feed = data.feed as FeedItem[];
  if (feed.length !== data.reviews_in_period) errors.push(`feed has ${feed.length} reviews, reviews_in_period says ${data.reviews_in_period}`);
  const from = new Date(data.period_from ?? ""), to = new Date(data.period_to ?? "");
  const period = Math.round((to.getTime() - from.getTime()) / (30.44 * 24 * 3600 * 1000));
  if (![6, 12, 24].includes(period)) errors.push(`period ${data.period_from} - ${data.period_to} is ${period} months, need 6, 12 or 24`);
  let prev = 0;
  const tally = new Map<string, { plus: number; minus: number; mixed: number }>();
  feed.forEach((f, i) => {
    const at = `feed ${i + 1}`;
    if (typeof f.ago !== "string" || !f.ago.trim()) errors.push(`${at}: "ago" - copy it as Google shows it ("3 months ago")`);
    const months = f.months as number;
    if (!Number.isInteger(months) || months < 0) errors.push(`${at}: "months" ${JSON.stringify(f.months)} - a whole number from "ago"`);
    else {
      if (months < prev) errors.push(`${at}: ${months} months after ${prev} - list newest first`);
      if ([6, 12, 24].includes(period) && months >= period) errors.push(`${at}: ${months} months ago is outside the ${period}-month period`);
      prev = months;
    }
    const stars = f.stars as number;
    if (!Number.isInteger(stars) || stars < 1 || stars > 5) errors.push(`${at}: "stars" ${JSON.stringify(f.stars)} - 1 to 5`);
    const topics = (f.topics ?? {}) as Record<string, unknown>;
    if (typeof topics !== "object" || Array.isArray(topics)) {
      errors.push(`${at}: "topics" - an object like {"staff": "+"}`);
      return;
    }
    for (const [t, v] of Object.entries(topics)) {
      if (!TOPICS.includes(t)) errors.push(`${at}: topic "${t}" - one of ${TOPICS.join(", ")}`);
      else if (v !== "+" && v !== "-" && v !== "~") errors.push(`${at}: ${t} "${v}" - "+", "-" or "~"`);
      else {
        const c = tally.get(t) ?? { plus: 0, minus: 0, mixed: 0 };
        if (v === "+") c.plus++;
        else if (v === "-") c.minus++;
        else c.mixed++;
        tally.set(t, c);
      }
    }
    // A 1-2 star review with text complains about something.
    if (Number.isInteger(stars) && stars <= 2 && !Object.values(topics).some((v) => v === "-" || v === "~")) {
      errors.push(`${at}: ${stars} stars but no "-" topic - what does it criticise?`);
    }
  });
  // Steps 6 -> 12 -> 24 months: the shortest period with 5+ reviews.
  if (period === 12 && feed.filter((f) => (f.months as number) < 6).length >= 5) errors.push("5+ reviews in the last 6 months - the period is 6 months");
  if (period === 24 && feed.filter((f) => (f.months as number) < 12).length >= 5) errors.push("5+ reviews in the last 12 months - the period is 12 months");
  // Cards: the three most discussed topics, counted from the feed.
  const countOf = (t: string) => {
    const c = tally.get(t);
    return c ? c.plus + c.minus + c.mixed : 0;
  };
  const ranked = [...tally.keys()].sort((a, b) => countOf(b) - countOf(a));
  const third = countOf(ranked[2] ?? "");
  for (const card of data.cards ?? []) {
    const t = card.topic ?? "";
    const n = countOf(t);
    if (card.mentions !== n) errors.push(`card "${t}": mentions ${card.mentions}, the feed has ${n} reviews on it`);
    if (n < third) errors.push(`card "${t}" (${n}) - not among the three most discussed topics (${ranked.slice(0, 3).map((x) => `${x} ${countOf(x)}`).join(", ")})`);
    const c = tally.get(t);
    if (c && n) {
      // 4 complaints in 20 is a mixed card (review-insights.md, "Честность").
      const expected = c.minus > c.plus ? "negative" : (c.minus + c.mixed / 2) / n >= 0.2 ? "mixed" : "positive";
      if (card.sentiment !== expected) errors.push(`card "${t}": sentiment ${card.sentiment}, the feed says ${expected} (+${c.plus} -${c.minus} ~${c.mixed})`);
    }
  }
  if (ratings > 0 && feed.length > ratings) errors.push(`feed has ${feed.length} reviews, the place has ${ratings} Google ratings in all`);
  return errors;
}
const insightErrors: string[] = [];
// Texts padded to 250 characters with one stock phrase (lesson from PR
// #156): the same last four words in texts of many places.
const tailFiles = new Map<string, Set<string>>();
for (const slug of insights) {
  const file = path.join(dir, "review-insights", `${slug}.json`);
  let data: {
    slug?: string;
    reviews_in_period?: number;
    period_from?: string;
    period_to?: string;
    observed_at?: string;
    cards?: { topic?: string; sentiment?: string; title?: unknown; text?: unknown; mentions?: number }[];
    faq?: { q?: unknown; a?: unknown }[];
    feed?: unknown;
  };
  try {
    data = JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    insightErrors.push(`${slug}: not valid JSON`);
    continue;
  }
  const err = (m: string) => insightErrors.push(`${slug}: ${m}`);
  if (!slugs.has(slug)) err("no place with this slug in businesses.csv");
  if (data.slug !== slug) err(`"slug" is "${data.slug}", file name says "${slug}"`);
  // More text reviews in the period than half of all Google ratings ever
  // is not a count from the feed (Warszawa draft: 89 of 120).
  const total = Number(allRows.find((r) => r.slug === slug)?.google_rating_count ?? 0);
  if (total > 0 && (data.reviews_in_period ?? 0) > total / 2)
    err(`reviews_in_period ${data.reviews_in_period} is more than half of all ${total} Google ratings - count the feed again`);
  const cards = data.cards ?? [];
  if (cards.length !== 3) err(`${cards.length} cards, need exactly 3`);
  cards.forEach((c, i) => {
    if (!bothLangs(c.title) || !bothLangs(c.text)) err(`card ${i + 1}: title and text need ${cityLangs.join(" + ")}`);
    if ((c.mentions ?? 0) < 3) err(`card ${i + 1}: mentions ${c.mentions}, a topic needs 3+ reviewers`);
    if (data.reviews_in_period !== undefined && (c.mentions ?? 0) > data.reviews_in_period)
      err(`card ${i + 1}: mentions ${c.mentions} > reviews_in_period ${data.reviews_in_period}`);
    const text = c.text as Record<string, string> | undefined;
    for (const l of cityLangs) {
      const t = text?.[l];
      if (t) {
        const tail = t.toLowerCase().replace(/[.!\s]+$/, "").split(/\s+/).slice(-4).join(" ");
        (tailFiles.get(tail) ?? tailFiles.set(tail, new Set()).get(tail)!).add(slug);
      }
      const n = text?.[l]?.length ?? 0;
      if (n && (n < 250 || n > 450)) err(`card ${i + 1}: text.${l} is ${n} characters, need 250-450`);
    }
  });
  // The feed the summary is built from (docs/playbooks/review-insights.md,
  // "Лента"): every review with text in the period, newest first, as
  // Google shows it - how long ago, stars, and the topics it talks about.
  // Mentions and sentiment of the cards are counted from it, so a summary
  // either follows the reviews or fails here (Warszawa draft, PR #182: two
  // critical reviews out of three, all cards positive).
  if ((data.observed_at ?? "") >= EVIDENCE_FROM) {
    const feedErrors = checkFeed(data, total);
    for (const e of feedErrors) err(e);
  }
  const faq = data.faq ?? [];
  if (faq.length < 3 || faq.length > 6) err(`${faq.length} FAQ, need 3-6`);
  faq.forEach((f, i) => {
    if (!bothLangs(f.q) || !bothLangs(f.a)) err(`FAQ ${i + 1}: q and a need ${cityLangs.join(" + ")}`);
  });
}
for (const [tail, files] of tailFiles) {
  if (files.size >= 4) insightErrors.push(`${files.size} places end a text with the same "…${tail}" - stock padding, write from the reviews`);
}
if (insightErrors.length) {
  failed = true;
  console.log(`\nreview-insights format (${insightErrors.length}):`);
  for (const e of insightErrors) console.log(`  ${e}`);
}

// Vets: the languages they serve in, or a note that none is stated -
// the "english speaking vet" answer (docs/card-spec.md, section 8).
// Emergency note in both languages, like every visible text.
const vetGaps: string[] = [];
for (const r of rows) {
  if (r.category !== "VET_CLINIC") continue;
  // Not needed where the city's language is English (no such page there).
  if (cityMeta.locale !== "en" && !has(r, "languages_spoken") && !noted(r, "languages")) {
    vetGaps.push(`${r.slug}: no languages_spoken and no "languages: none (...)" in notes`);
  }
  if (has(r, "emergency_note") !== has(r, "emergency_note_local")) {
    vetGaps.push(`${r.slug}: emergency_note and emergency_note_local go together`);
  }
}
if (vetGaps.length) {
  failed = true;
  console.log(`\nVet clinics (${vetGaps.length}):`);
  for (const g of vetGaps) console.log(`  ${g}`);
}

// Closed places (owner, 2026-09-26): a place that looks permanently
// closed is never collected as new, and one that closed after it was
// listed carries closed=yes with the evidence in notes.
const CLOSED_WORDS = /(possibly|permanently) closed|trvalo zatvoren|natrvalo zatvoren|dauerhaft geschlossen|trvale zavřen/i;
const closedIssues: string[] = [];
for (const r of allRows) {
  if (isClosed(r) && !/\bclosed: \S/.test(r.notes ?? "")) {
    closedIssues.push(`${r.slug}: closed=yes needs "closed: (<where seen>, <date>)" in notes`);
  }
  if (!isClosed(r) && CLOSED_WORDS.test(r.notes ?? "")) {
    closedIssues.push(`${r.slug}: notes say closed - drop a new place, or set closed=yes for one already on the site`);
  }
}
if (closedIssues.length) {
  failed = true;
  console.log(`\nClosed places (${closedIssues.length}):`);
  for (const c of closedIssues) console.log(`  ${c}`);
}

// Languages: 2-letter codes, never the city's own language (the page
// "English spoken" and the card read these as foreign languages served).
const cityLocales = cityMeta.locales ?? (cityMeta.locale ? [cityMeta.locale] : []);
const badLanguages = rows.flatMap((r) =>
  (r.languages_spoken ?? "")
    .split(";")
    .map((x) => x.trim())
    .filter((x) => x && (!/^[a-z]{2}$/.test(x) || cityLocales.includes(x)))
    .map((x) => `${r.slug}: "${x}"`)
);
if (badLanguages.length) {
  failed = true;
  console.log(`\nlanguages_spoken: only 2-letter codes, not the city's language ${cityLocales.join("/")} (${badLanguages.length}):`);
  for (const b of badLanguages) console.log(`  ${b}`);
}

// Facts: only the category's codes (lib/facts.ts), never two that
// contradict each other.
const badFacts: string[] = [];
for (const r of rows) {
  const codes = (r.facts ?? "").split(";").map((x) => x.trim()).filter(Boolean);
  const allowed = (FACTS as Record<string, { code: string }[]>)[r.category]?.map((f) => f.code) ?? [];
  for (const c of codes) if (!allowed.includes(c)) badFacts.push(`${r.slug}: "${c}" is not a ${r.category} fact (allowed: ${allowed.join(", ")})`);
  for (const [a, b] of EXCLUSIVE_FACTS) if (codes.includes(a) && codes.includes(b)) badFacts.push(`${r.slug}: "${a}" and "${b}" contradict`);
}
if (badFacts.length) {
  failed = true;
  console.log(`\nfacts (${badFacts.length}):`);
  for (const b of badFacts) console.log(`  ${b}`);
}

// Vet specialties: only codes the site knows (lib/vet.ts); anything else
// is dropped by the seed and never shown.
const badSpecialties = rows.flatMap((r) =>
  (r.specialties ?? "")
    .split(";")
    .map((x) => x.trim())
    .filter((x) => x && !(VET_SPECIALTIES as readonly string[]).includes(x))
    .map((x) => `${r.slug}: "${x}"`)
);
if (badSpecialties.length) {
  failed = true;
  console.log(`\nspecialties not in lib/vet.ts (${badSpecialties.length}) - allowed: ${VET_SPECIALTIES.join(", ")}:`);
  for (const b of badSpecialties) console.log(`  ${b}`);
}

// Prices follow docs/card-spec.md, "Цены": only the category's 6 codes,
// a source for every row, and note/note_local as a short visible remark
// (a row with a note is shown but not compared with the market).
const pricesFile = path.join(dir, "prices.csv");
const priceErrors: string[] = [];
if (fs.existsSync(pricesFile)) {
  const categoryOf = new Map(allRows.map((r) => [r.slug, r.category]));
  const prices = Papa.parse<Row>(fs.readFileSync(pricesFile, "utf-8"), { header: true, skipEmptyLines: true }).data;
  prices.forEach((p, i) => {
    const at = `prices.csv line ${i + 2} (${p.business_slug}, ${p.price_code})`;
    const category = categoryOf.get(p.business_slug);
    if (!category) return priceErrors.push(`${at}: no place with this slug`);
    const codes = (SERVICES[category as keyof typeof SERVICES] ?? []).map((s) => s.code);
    if (!codes.includes(p.price_code)) {
      priceErrors.push(`${at}: not a ${category} code (allowed: ${codes.join(", ") || "none"})`);
    }
    if (!(Number(p.price_from) > 0)) priceErrors.push(`${at}: price_from "${p.price_from}" is not a number`);
    if (!/^https?:\/\//.test(p.source_url ?? "")) priceErrors.push(`${at}: no source_url`);
    if (!["", "per_hour", "per_km"].includes((p.unit ?? "").trim())) priceErrors.push(`${at}: unit "${p.unit}"`);
    // One currency per city: the one in city.json (an empty cell means it).
    const currency = (p.currency ?? "").trim().toUpperCase();
    if (currency && cityMeta.currency && currency !== cityMeta.currency.toUpperCase()) {
      priceErrors.push(`${at}: currency ${currency}, city.json says ${cityMeta.currency}`);
    }
    const note = (p.note ?? "").trim();
    const noteLocal = (p.note_local ?? "").trim();
    if (/^yes$/i.test((p.partial ?? "").trim()) && (!note || !noteLocal)) {
      priceErrors.push(`${at}: partial=yes needs note and note_local`);
    }
    if (!!note !== !!noteLocal) priceErrors.push(`${at}: note and note_local go together`);
    if (note.length > 40 || noteLocal.length > 40) priceErrors.push(`${at}: note over 40 characters`);
  });
}
if (priceErrors.length) {
  failed = true;
  console.log(`\nprices (${priceErrors.length}):`);
  for (const e of priceErrors) console.log(`  ${e}`);
}

// prices.csv keeps every column of docs/card-spec.md, "Цены" - a file
// without price_to cannot say "fixed price" or "from" (PR #144).
const PRICE_COLUMNS = [
  "business_slug", "price_code", "weight_from_kg", "weight_to_kg", "price_from", "price_to", "currency",
  "source_url", "observed_at", "notes", "unit", "partial", "note", "note_local",
];
if (fs.existsSync(pricesFile)) {
  const header = Papa.parse<string[]>(fs.readFileSync(pricesFile, "utf-8").split("\n")[0]).data[0] ?? [];
  const missing = PRICE_COLUMNS.filter((c) => !header.includes(c));
  if (missing.length) {
    failed = true;
    console.log(`\nprices.csv: missing columns ${missing.join(", ")} (docs/card-spec.md, "Цены")`);
  }
}

// Data that was not copied from its source (PR #144): one place listed
// several times, Google Maps links made up rather than copied (real cid
// numbers never share a long run of digits), coordinates rounded to a
// guess, and the retired animals column (docs/card-spec.md §10; Bratislava
// keeps its old values).
const madeUp: string[] = [];
const byKey = new Map<string, string[]>();
for (const r of rows) {
  const keys = [
    r.google_maps_url && `maps ${r.google_maps_url}`,
    r.google_place_id && `place_id ${r.google_place_id}`,
    r.phone && r.address && `phone+address ${r.phone} ${r.address}`,
  ].filter(Boolean) as string[];
  for (const k of keys) byKey.set(`${r.category} ${k}`, [...(byKey.get(`${r.category} ${k}`) ?? []), r.slug]);
}
for (const [key, slugs] of byKey) {
  if (slugs.length > 1) madeUp.push(`same place listed ${slugs.length} times (${key.split(" ").slice(1, 2)}): ${slugs.join(", ")}`);
}
// A clinic and its vet often have two Google cards for one practice:
// same category, same website, pins within 200 m (PR #144). One entry,
// or "duplicate-check: different place (...)" in the notes of both.
const domain = (u: string) => u.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^(www\.|m\.)/, "").split("/")[0];
const metres = (a: Row, b: Row) => {
  const dLat = (Number(a.lat) - Number(b.lat)) * 111_320;
  const dLng = (Number(a.lng) - Number(b.lng)) * 111_320 * Math.cos((Number(a.lat) * Math.PI) / 180);
  return Math.hypot(dLat, dLng);
};
const siteRows = rows.filter((r) => has(r, "website") && has(r, "lat") && !/facebook\.com|instagram\.com/.test(r.website));
for (let i = 0; i < siteRows.length; i++) {
  for (let j = i + 1; j < siteRows.length; j++) {
    const [a, b] = [siteRows[i], siteRows[j]];
    if (a.category !== b.category || domain(a.website) !== domain(b.website) || metres(a, b) > 200) continue;
    if (/duplicate-check: /.test(a.notes ?? "") && /duplicate-check: /.test(b.notes ?? "")) continue;
    madeUp.push(`probably one place twice (same website ${domain(a.website)}, ${Math.round(metres(a, b))} m apart): ${a.slug}, ${b.slug}`);
  }
}
const cids = rows
  .map((r) => ({ slug: r.slug, cid: /cid=(\d+)/.exec(r.google_maps_url ?? "")?.[1] }))
  .filter((x): x is { slug: string; cid: string } => !!x.cid);
// Keyed by number: one firm in two categories shares one Maps listing.
const runs = new Map<string, Set<string>>();
for (const { cid } of cids) {
  for (let i = 0; i + 9 <= cid.length; i++) runs.set(cid.slice(i, i + 9), (runs.get(cid.slice(i, i + 9)) ?? new Set()).add(cid));
}
const madeUpCids = new Set([...runs.values()].filter((set) => set.size > 1).flatMap((set) => [...set]));
const sharing = new Set(cids.filter((x) => madeUpCids.has(x.cid)).map((x) => x.slug));
if (sharing.size) madeUp.push(`google_maps_url numbers look made up (share digit runs), copy each from Google Maps: ${[...sharing].join(", ")}`);
for (const r of rows) {
  const decimals = (v: string) => (v.split(".")[1] ?? "").replace(/0+$/, "").length;
  if (has(r, "lat") && (decimals(r.lat) <= 3 || decimals(r.lng) <= 3)) {
    madeUp.push(`${r.slug}: lat/lng rounded to 3 decimals or less (${r.lat}, ${r.lng}) - copy from Google Maps`);
  }
  if (city !== "bratislava" && (r.animals ?? "").trim()) madeUp.push(`${r.slug}: animals is not collected - leave it empty`);
}
// The Google place ID is the "ChIJ..." one (in a copied link after
// "!19s"), not the "0x...:0x..." feature ID; the pin is the one in the
// copied link (!3d lat !4d lng), not a guess nearby (PR #144).
for (const r of rows) {
  if (has(r, "google_place_id") && !/^ChIJ[0-9A-Za-z_-]{20,}$/.test(r.google_place_id.trim())) {
    madeUp.push(`${r.slug}: google_place_id "${r.google_place_id}" is not a place ID (ChIJ...) - take it from the Maps link after !19s`);
  }
  const pin = /!3d(-?[\d.]+)!4d(-?[\d.]+)/.exec(r.google_maps_url ?? "");
  if (pin && has(r, "lat")) {
    const off = metres(r, { lat: pin[1], lng: pin[2] } as Row);
    if (off > 200) madeUp.push(`${r.slug}: lat/lng ${Math.round(off)} m from the pin in its Maps link - use ${pin[1]}, ${pin[2]}`);
  }
}
if (madeUp.length) {
  failed = true;
  console.log(`\nnot copied from the source (${madeUp.length}):`);
  for (const m of madeUp) console.log(`  ${m}`);
}

// Prices: a place of a priced category either has rows or says where it
// looked ("prices: none (site - no cenník page, fb - not posted)").
if (fs.existsSync(pricesFile)) {
  const priced = new Set(
    Papa.parse<Row>(fs.readFileSync(pricesFile, "utf-8"), { header: true, skipEmptyLines: true }).data.map((p) => p.business_slug)
  );
  const pricedCategory = rows.filter((r) => (SERVICES[r.category as keyof typeof SERVICES] ?? []).length > 0);
  const withPrices = pricedCategory.filter((r) => priced.has(r.slug)).length;
  const searched = pricedCategory.filter((r) => !priced.has(r.slug) && noted(r, "prices")).length;
  const silentPrices = pricedCategory.length - withPrices - searched;
  console.log(
    `\nPrices: ${withPrices}/${pricedCategory.length} places with prices, ${searched} "prices: none (...)", ${silentPrices} without a search note`
  );
  if (silentPrices > 0) {
    failed = true;
    for (const r of pricedCategory.filter((x) => !priced.has(x.slug) && !noted(x, "prices"))) {
      console.log(`  ${r.slug}: no prices and no "prices: none (...)" in notes`);
    }
  }
}

// Evidence (docs/playbooks/quality.md, rule 8): one row per value taken
// from a place's site - the page and a word-for-word quote from it. Rows
// collected from EVIDENCE_FROM on need it; verify-city then looks for every
// quote on its page. Older data is not re-proved.
const evidenceRows: Row[] = [];
const evidenceErrors: string[] = [];
for (const f of fs.readdirSync(dir).filter((x) => /^evidence.*\.csv$/.test(x)).sort()) {
  const text = fs.readFileSync(path.join(dir, f), "utf-8");
  const header = Papa.parse<string[]>(text.split("\n")[0]).data[0]?.map((h) => h.trim()) ?? [];
  const missingCols = EVIDENCE_COLUMNS.filter((c) => !header.includes(c));
  if (missingCols.length) {
    evidenceErrors.push(`${f}: missing columns ${missingCols.join(", ")} (header: ${EVIDENCE_COLUMNS.join(",")})`);
    continue;
  }
  Papa.parse<Row>(text, { header: true, skipEmptyLines: true }).data.forEach((e, i) => {
    const at = `${f} line ${i + 2} (${e.business_slug}, ${e.field})`;
    evidenceRows.push(e);
    if (!slugs.has(e.business_slug)) evidenceErrors.push(`${at}: no place with this slug`);
    const fieldError = badField((e.field ?? "").trim());
    if (fieldError) evidenceErrors.push(`${at}: ${fieldError}`);
    const quote = (e.quote ?? "").trim();
    if (quote.length < MIN_QUOTE || quote.length > MAX_QUOTE) {
      evidenceErrors.push(`${at}: quote of ${quote.length} characters - copy ${MIN_QUOTE}-${MAX_QUOTE} characters from the page as they are`);
    }
    const mismatch = quote && !fieldError ? quoteMismatch(e.field.trim(), quote) : null;
    if (mismatch) evidenceErrors.push(`${at}: ${mismatch} - "${quote.slice(0, 60)}"`);
    if (!/^https?:\/\/\S+$/.test((e.source_url ?? "").trim())) evidenceErrors.push(`${at}: source_url must be the page with the quote`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test((e.observed_at ?? "").trim())) evidenceErrors.push(`${at}: observed_at YYYY-MM-DD`);
  });
}
const evidenceOf = (slug: string, field: string) => evidenceRows.filter((e) => e.business_slug === slug && e.field.trim() === field);
const missingEvidence: string[] = [];
const needing = rows.filter(needsEvidence);
for (const r of needing) {
  const need = requiredEvidence(r).filter((k) => evidenceOf(r.slug, k).length === 0);
  if (need.length) missingEvidence.push(`${r.slug}: ${need.join(", ")}`);
}
// Prices: the quote of each price line carries the number (or its parts).
if (fs.existsSync(pricesFile)) {
  const prices = Papa.parse<Row>(fs.readFileSync(pricesFile, "utf-8"), { header: true, skipEmptyLines: true }).data;
  for (const p of prices.filter((x) => (x.observed_at ?? "").trim() >= EVIDENCE_FROM)) {
    const quotes = evidenceOf(p.business_slug, `price:${p.price_code}`).map((e) => e.quote);
    if (!quotes.length) {
      missingEvidence.push(`${p.business_slug}: price:${p.price_code}`);
      continue;
    }
    for (const v of [p.price_from, p.price_to].map((x) => (x ?? "").trim()).filter(Boolean)) {
      if (!priceInQuotes(Number(v), quotes)) evidenceErrors.push(`${p.business_slug}, ${p.price_code}: ${v} is not in its quote(s) - "${quotes[0].slice(0, 60)}"`);
    }
  }
}
// One quote on many places from different sites is not copied from them.
const byQuote = new Map<string, { slugs: Set<string>; domains: Set<string> }>();
for (const e of evidenceRows) {
  const q = squash(e.quote ?? "");
  if (q.length < 20) continue;
  const entry = byQuote.get(q) ?? { slugs: new Set(), domains: new Set() };
  entry.slugs.add(e.business_slug);
  entry.domains.add(domainOf(e.source_url ?? ""));
  byQuote.set(q, entry);
}
for (const [q, { slugs: s, domains }] of byQuote) {
  if (s.size >= 3 && domains.size >= 3) evidenceErrors.push(`same quote on ${s.size} places from ${domains.size} sites - "${q.slice(0, 50)}": ${[...s].slice(0, 4).join(", ")}`);
}
// Not the place's own site, a social page or its Maps card: a catalog is
// never a source (add-city.md, "Откуда брать факты"). Listed for the
// reviewer - a place can have a second domain (booking, chain site).
const foreign = evidenceRows.filter((e) => {
  const place = allRows.find((r) => r.slug === e.business_slug);
  const url = (e.source_url ?? "").trim();
  if (!place || !url || isSocial(url) || isGoogleMaps(url)) return false;
  return !has(place, "website") || domainOf(place.website) !== domainOf(url);
});
console.log(
  `\nEvidence: ${evidenceRows.length} quotes; ${needing.length} places collected from ${EVIDENCE_FROM} need them, ${missingEvidence.length} still miss some`
);
if (missingEvidence.length) {
  failed = true;
  console.log(`\nEvidence missing - a quote from the page for each value (quality.md, rule 8) (${missingEvidence.length}):`);
  for (const m of missingEvidence) console.log(`  ${m}`);
}
if (evidenceErrors.length) {
  failed = true;
  console.log(`\nevidence (${evidenceErrors.length}):`);
  for (const e of evidenceErrors) console.log(`  ${e}`);
}
if (foreign.length) {
  console.log(`\nWarning - evidence not from the place's own site (${foreign.length}); a catalog is not a source:`);
  for (const e of foreign.slice(0, 20)) console.log(`  ${e.business_slug} ${e.field}: ${e.source_url}`);
}

// Candidates (add-city.md, "Партии"): the list a city is collected from,
// batch by batch - one row per place found, before the details.
const candidatesFile = path.join(dir, "candidates.csv");
if (fs.existsSync(candidatesFile)) {
  const CATEGORIES = ["VET_CLINIC", "PET_SHOP", "GROOMING", "PET_HOTEL", "DOG_TRAINING", "PET_SITTING"];
  const cands = Papa.parse<Row>(fs.readFileSync(candidatesFile, "utf-8"), { header: true, skipEmptyLines: true }).data;
  const candErrors: string[] = [];
  const seen = new Map<string, number>();
  cands.forEach((c, i) => {
    const at = `candidates.csv line ${i + 2} (${c.name})`;
    if (!CATEGORIES.includes((c.category ?? "").trim())) candErrors.push(`${at}: category "${c.category}"`);
    if (!(c.name ?? "").trim()) candErrors.push(`${at}: no name`);
    const url = (c.google_maps_url ?? "").trim();
    if (!url && !/maps: none \(.+\)/.test(c.notes ?? "")) candErrors.push(`${at}: no google_maps_url and no "maps: none (...)" in notes`);
    if (url) {
      if (seen.has(url)) candErrors.push(`${at}: same Maps link as line ${seen.get(url)}`);
      seen.set(url, i + 2);
    }
    const n = (c.google_rating_count ?? "").trim();
    if (n && !/^\d+$/.test(n)) candErrors.push(`${at}: google_rating_count "${n}" - a whole number as on the card`);
  });
  const perCategory = CATEGORIES.map((k) => `${k} ${cands.filter((c) => c.category === k).length}`).join(", ");
  console.log(`\nCandidates: ${cands.length} (${perCategory})`);
  if (candErrors.length) {
    failed = true;
    for (const e of candErrors) console.log(`  ${e}`);
  }
}

// Review summaries are a second pass; coverage reported, not enforced.
const rated = rows.filter((r) => Number(r.google_rating_count) >= 10);
const withInsights = rated.filter((r) => insights.has(r.slug)).length;
console.log(`\nWhat customers say: ${withInsights}/${rated.length} places with 10+ Google ratings have review-insights`);

console.log(failed ? "\nNOT READY: fix the FAIL lines above.\n" : "\nREADY\n");
process.exit(failed ? 1 : 0);
