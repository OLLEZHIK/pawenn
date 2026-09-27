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
const logoOk = (r: Row) => has(r, "logo_file") && fs.existsSync(path.join(logosDir, r.logo_file.trim()));

// Target share of places that must have each field. Logo, rating and
// hours can be genuinely missing (no logo anywhere, fewer than 5 ratings,
// hours not published) - the rest of the way to 100 % must be explained
// in notes, never left silent.
const CHECKS: { field: string; target: number; ok: (r: Row) => boolean; evidence?: string }[] = [
  { field: "short_description + _local", target: 1, ok: (r) => has(r, "short_description") && has(r, "short_description_local") },
  { field: "description + _local", target: 1, ok: (r) => has(r, "description") && has(r, "description_local") },
  // Mobile services with no premises have no coordinates, only a
  // "coords: none (mobile service ...)" note (docs/card-spec.md, section 3).
  { field: "lat / lng", target: 1, ok: (r) => (has(r, "lat") && has(r, "lng")) || noted(r, "coords") },
  { field: "phone / email / website", target: 1, ok: (r) => has(r, "phone") || has(r, "email") || has(r, "website") },
  // A Maps link copied from the place's card, or "maps: none (...)" where
  // no card was found or Maps would not open: an honest gap beats a made-up
  // link (PR #144, owner 2026-09-27). The reviewer checks the notes.
  { field: "google_maps_url", target: 1, ok: (r) => has(r, "google_maps_url") || noted(r, "maps"), evidence: "maps" },
  { field: "logo", target: 0.8, ok: logoOk, evidence: "logo" },
  // "Good to know" facts from the place's own site (docs/card-spec.md,
  // section 9): codes, or "facts: none (...)" where nothing is stated.
  { field: "facts", target: 0.8, ok: (r) => has(r, "facts"), evidence: "facts" },
  { field: "google_rating", target: 0.85, ok: (r) => has(r, "google_rating") && has(r, "google_rating_count"), evidence: "rating" },
  { field: "opening_hours", target: 0.9, ok: (r) => has(r, "opening_hours"), evidence: "hours" },
];

let failed = false;
const closedCount = allRows.length - rows.length;
console.log(`\n${city}: ${rows.length} places${closedCount ? ` (+ ${closedCount} closed, hidden)` : ""}\n`);
console.log("field                         have    share  target");
for (const c of CHECKS) {
  const n = rows.filter(c.ok).length;
  const share = n / rows.length;
  const pass = share >= c.target;
  if (!pass) failed = true;
  console.log(
    `${c.field.padEnd(28)} ${`${n}/${rows.length}`.padStart(7)} ${`${Math.round(share * 100)}%`.padStart(7)} ${`${Math.round(c.target * 100)}%`.padStart(6)}  ${pass ? "ok" : "FAIL"}`
  );
}

// Every missing logo, rating or hours needs a trace of the search.
const silent: string[] = [];
for (const r of rows) {
  for (const c of CHECKS) {
    if (!c.evidence || c.ok(r) || noted(r, c.evidence)) continue;
    silent.push(`${r.slug}: no ${c.field} and no "${c.evidence}: none (...)" in notes`);
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

// Review summaries follow one format (docs/playbooks/review-insights.md);
// every text in English and in each language of the city.
const slugs = new Set(allRows.map((r) => r.slug));
const cityLangs = ["en", ...(cityMeta.locales ?? (cityMeta.locale ? [cityMeta.locale] : []))];
const bothLangs = (v: unknown) => {
  const o = v as Record<string, unknown> | undefined;
  return cityLangs.every((l) => typeof o?.[l] === "string" && (o[l] as string).trim() !== "");
};
const insightErrors: string[] = [];
for (const slug of insights) {
  const file = path.join(dir, "review-insights", `${slug}.json`);
  let data: {
    slug?: string;
    cards?: { title?: unknown; text?: unknown; mentions?: number }[];
    faq?: { q?: unknown; a?: unknown }[];
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
  const cards = data.cards ?? [];
  if (cards.length !== 3) err(`${cards.length} cards, need exactly 3`);
  cards.forEach((c, i) => {
    if (!bothLangs(c.title) || !bothLangs(c.text)) err(`card ${i + 1}: title and text need ${cityLangs.join(" + ")}`);
    if ((c.mentions ?? 0) < 3) err(`card ${i + 1}: mentions ${c.mentions}, a topic needs 3+ reviewers`);
    const text = c.text as Record<string, string> | undefined;
    for (const l of cityLangs) {
      const n = text?.[l]?.length ?? 0;
      if (n && (n < 250 || n > 450)) err(`card ${i + 1}: text.${l} is ${n} characters, need 250-450`);
    }
  });
  const faq = data.faq ?? [];
  if (faq.length < 3 || faq.length > 6) err(`${faq.length} FAQ, need 3-6`);
  faq.forEach((f, i) => {
    if (!bothLangs(f.q) || !bothLangs(f.a)) err(`FAQ ${i + 1}: q and a need ${cityLangs.join(" + ")}`);
  });
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
if (madeUp.length) {
  failed = true;
  console.log(`\nnot copied from the source (${madeUp.length}):`);
  for (const m of madeUp) console.log(`  ${m}`);
}

// Review summaries are a second pass; coverage reported, not enforced.
const rated = rows.filter((r) => Number(r.google_rating_count) >= 10);
const withInsights = rated.filter((r) => insights.has(r.slug)).length;
console.log(`\nWhat customers say: ${withInsights}/${rated.length} places with 10+ Google ratings have review-insights`);

console.log(failed ? "\nNOT READY: fix the FAIL lines above.\n" : "\nREADY\n");
process.exit(failed ? 1 : 0);
