// Evidence for card values (docs/playbooks/quality.md, rule 8; owner,
// 2026-09-28): every value an agent takes from a place's site - a fact, a
// specialty, a language, hours, a price, what the description is built on -
// comes with the page and a word-for-word quote from it, one row per value
// in data/cities/<city>/evidence*.csv. check-city checks the file offline
// (format, which values still need a quote); verify-city opens every page
// and looks for the quote on it.
//
// Lesson: a PR with check-city READY could still be made up (Warszawa
// phones and domains, Košice Maps links, facts "proved" by a home page that
// does not name them). A quote copied from a page either is on that page or
// is not - a check nobody can pass without opening the page.

export type Row = Record<string, string>;

/** Rows collected or re-checked from this day on need evidence (their
 *  observed_at is the day of collection). Older data is not re-proved. */
export const EVIDENCE_FROM = "2026-09-29";

export const EVIDENCE_COLUMNS = ["business_slug", "field", "quote", "source_url", "observed_at"];

/** What a quote may prove: "<column>" or "<column>:<code>". */
export const EVIDENCE_FIELDS = [
  "facts",
  "specialties",
  "languages",
  "emergency_24_7",
  "emergency_note",
  "home_visits",
  "opening_hours",
  "description",
  "price",
  "address",
  "email",
  "closed",
] as const;
const WITH_CODE = new Set(["facts", "specialties", "languages", "price"]);

export const MIN_QUOTE = 10;
export const MAX_QUOTE = 400;

export const isSocial = (u: string) => /(^|\.)(facebook\.com|instagram\.com|fb\.com)(\/|$)/i.test(u.replace(/^https?:\/\//, ""));
export const isGoogleMaps = (u: string) =>
  /^https?:\/\/(www\.)?google\.[a-z.]+\/maps|^https?:\/\/maps\.google\.|^https?:\/\/(maps\.app\.)?goo\.gl\//i.test(u);
export const domainOf = (u: string) =>
  u.trim().toLowerCase().replace(/^https?:\/\//, "").replace(/^(www\.|m\.)/, "").split(/[/?#]/)[0];

const codes = (v: string | undefined) =>
  (v ?? "")
    .split(/[;,]/)
    .map((c) => c.trim())
    .filter(Boolean);

export const needsEvidence = (r: Row) => (r.observed_at ?? "").trim() >= EVIDENCE_FROM;

/** Evidence keys a place row needs ("facts:parking", "description", ...). */
export function requiredEvidence(r: Row): string[] {
  const need: string[] = [];
  for (const c of codes(r.facts)) need.push(`facts:${c}`);
  for (const c of codes(r.specialties)) need.push(`specialties:${c}`);
  for (const c of codes(r.languages_spoken)) need.push(`languages:${c}`);
  if (/^yes$/i.test((r.emergency_24_7 ?? "").trim())) need.push("emergency_24_7");
  if ((r.emergency_note ?? "").trim()) need.push("emergency_note");
  if (/^yes$/i.test((r.home_visits ?? "").trim())) need.push("home_visits");
  // Hours read off the Google Maps card cannot be quoted from a page the
  // script opens; hours from the site or a social page can.
  if ((r.opening_hours ?? "").trim() && !isGoogleMaps(r.hours_source_url ?? "")) need.push("opening_hours");
  // The description is written from the place's own site: at least one
  // quote from it shows it was read (all Košice and Warszawa texts were one
  // template per category, 2026-09-28). No site at all - no quote needed.
  if ((r.website ?? "").trim()) need.push("description");
  return need;
}

/** "facts:parking" -> ok; returns an error text for a malformed key. */
export function badField(field: string): string | null {
  const [base, code, extra] = field.split(":");
  if (extra !== undefined || !(EVIDENCE_FIELDS as readonly string[]).includes(base)) {
    return `field "${field}" - use one of ${EVIDENCE_FIELDS.join(", ")} (facts, specialties, languages and price with ":<code>")`;
  }
  if (WITH_CODE.has(base) !== (code !== undefined && code !== "")) {
    return WITH_CODE.has(base) ? `field "${field}" needs a code: "${base}:<code>"` : `field "${field}" takes no code`;
  }
  return null;
}

// Words a quote must contain for the value it proves - sk, pl, cs, en.
// A quote about something else is not evidence. Codes not listed are not
// checked for wording (the page check still applies).
export const FACT_WORDS: Record<string, RegExp> = {
  card_payment: /kart(ou|ami|ą|a płatnicz|y płatnicz|u)|kreditn[aá]?\s*kart|platb\w* kart|płatno\w* kart|terminal|\bblik|visa|mastercard|card payment|pay by card/i,
  pharmacy_on_site: /lekáre|lekárn|\bapte(k|cz)|pharmacy/i,
  pet_passport: /\bpas(u|y|ov|om|ů)?\b|pet\s*pas|paszport|passport/i,
  parking: /parkov|parking/i,
  natural_cosmetics: /prírodn\w* kozmet|naturaln\w* kosmety|kosmetyk\w* naturaln|organic|bio kozmet|hypoalerg|hipoalerg/i,
  cage_free: /bez klietok|bez klatek|bezklatk|bez kotc|cage[- ]free|no cages/i,
  vaccination_required: /očkovan|szczepi|vaccin/i,
  supervision_24h: /24\s*hod|nonstop|non-stop|nepretržit|całodob|całą dobę|24 godziny na dobę|24\/7|round the clock/i,
  appointment_only: /len na objedn|iba na objedn|výhradne na objedn|výlučne na objedn|podľa objedn|objedn[^.]{0,40}nutn|nutn[^.]{0,40}objedn|tylko po (wcześniejszym )?umówieni|wyłącznie po umówieni|wizyty wyłącznie|nie ?umówien\w*[^.]{0,60}nie (będą |są )?przyjmowan|przyjmujemy (wyłącznie|tylko) umówion|by appointment only|appointment only|only by appointment/i,
  walk_in: /bez objedn|bez obiednania|bez umówieni|bez zapisów|bez rejestracji|walk[- ]in|no appointment/i,
  online_booking: /online|on-line|rezerva|rezerwac|objedna|umów|zarezerwuj|book/i,
};

const LANGUAGE_WORDS: Record<string, RegExp> = {
  en: /english|anglick|angličtin|angielsk|po angielsku|englisch|\ben\b|🇬🇧|🇺🇸/i,
  de: /deutsch|nemeck|nemčin|německ|němčin|niemieck|po niemiecku|german|\bde\b|🇩🇪|🇦🇹/i,
  hu: /magyar|maďar|węgiersk|hungar|\bhu\b|🇭🇺/i,
  // Polish "ukraińskim" has ń, Slovak "ukrajinsky" has j (Kraków batch 1).
  uk: /ukrai[nń]|ukrajin|україн|\bua\b|🇺🇦/i,
  ru: /rusk|rusky|ruštin|rosyjsk|po rosyjsku|russian|русск|\bru\b|🇷🇺/i,
  pl: /pols(k|ki)|poľsk|polish|polnisch|🇵🇱/i,
  cs: /česk|češtin|czesk|czech|tschech|🇨🇿/i,
  sk: /slovensk|słowack|slovak|slowak|🇸🇰/i,
  es: /španiel|hiszpańsk|spanish|español|spanisch|🇪🇸/i,
  fr: /francúz|francusk|french|français|französisch|🇫🇷/i,
  it: /talian|włosk|italian|italiano|italienisch|🇮🇹/i,
};

const NONSTOP_WORDS = /24\s*\/\s*7|24\s*h|24\s*hod|nonstop|non-stop|nepretržit|całodob|całą dobę|round the clock|24 hours/i;

/** The page is the site's own version in that language: "?lang=en",
 *  "/en/", "en." - docs/card-spec.md §8 counts a language version of the
 *  site as that language (Retina, Kraków batch 1: WPML English pages). */
export function isLanguageVersion(url: string, code: string): boolean {
  return new RegExp(`[?&](lang|language|hl|locale)=${code}\\b|/${code}(/|$|\\?|#)|^https?://${code}\\.`, "i").test(url.trim());
}

/** A quote that does not name what it should prove: text of the error, or null. */
export function quoteMismatch(field: string, quote: string, url = ""): string | null {
  const [base, code] = field.split(":");
  if (base === "languages" && isLanguageVersion(url, code)) return null;
  const re =
    base === "facts" ? FACT_WORDS[code] : base === "languages" ? LANGUAGE_WORDS[code] : base === "emergency_24_7" ? NONSTOP_WORDS : undefined;
  if (re && !re.test(quote)) return `quote does not name ${field}`;
  return null;
}

/** Numbers written in a quote, "18,50 €" -> 18.5; "1 300 zł" -> 1300. */
export function numbersIn(text: string): number[] {
  return [...text.replace(/(\d)[\s ](?=\d{3}\b)/g, "$1").matchAll(/\d+(?:[.,]\d{1,2})?/g)].map((m) =>
    Number(m[0].replace(",", "."))
  );
}

/** A price is proved when its number is in a quote, or is the sum of two
 *  numbers from the quotes (parts added up: docs/card-spec.md, "Цены"). */
export function priceInQuotes(price: number, quotes: string[]): boolean {
  const nums = quotes.flatMap(numbersIn);
  const same = (a: number, b: number) => Math.abs(a - b) < 0.005;
  if (nums.some((n) => same(n, price))) return true;
  for (let i = 0; i < nums.length; i++) for (let j = i + 1; j < nums.length; j++) if (same(nums[i] + nums[j], price)) return true;
  return false;
}

const ENTITIES: Record<string, string> = {
  nbsp: " ", amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", ndash: "-", mdash: "-", minus: "-", hellip: "...",
  euro: "€", laquo: '"', raquo: '"', bdquo: '"', ldquo: '"', rdquo: '"', lsquo: "'", rsquo: "'", sbquo: "'",
  aacute: "á", eacute: "é", iacute: "í", oacute: "ó", uacute: "ú", yacute: "ý", auml: "ä", ouml: "ö", uuml: "ü",
  ocirc: "ô", Aacute: "Á", Eacute: "É", Iacute: "Í", Oacute: "Ó", Uacute: "Ú", Yacute: "Ý", scaron: "š", Scaron: "Š",
  zcaron: "ž", Zcaron: "Ž", ccaron: "č", Ccaron: "Č", times: "×", deg: "°", middot: "·", bull: "•",
};

export function decodeEntities(s: string): string {
  return s
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, name) => ENTITIES[name] ?? m);
}

/** Visible text of an HTML page. */
export function pageText(html: string): string {
  return decodeEntities(
    html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<!--[\s\S]*?-->/gi, " ").replace(/<[^>]+>/g, " ")
  );
}

/** Everything in the page, scripts included - text of sites that render
 *  from JSON (á escapes decoded). */
export function rawText(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, " ")).replace(/\\u([0-9a-f]{4})/gi, (_, h) => String.fromCharCode(parseInt(h, 16)));
}

/** Compared without spaces, case, and typographic dashes and quotes: a
 *  page splits "8:00<span>-</span>18:00" into pieces, a quote does not. */
export function squash(s: string): string {
  return s
    .normalize("NFC")
    .toLowerCase()
    .replace(/[‐-―−]/g, "-")
    .replace(/[“”„«»]/g, '"')
    .replace(/[‘’‚´`]/g, "'")
    .replace(/\s+/g, "");
}

/** A Google Maps link copied from a place card carries the place twice:
 *  the feature ID "!1s0x<a>:0x<b>" and the place ID "!19sChIJ…", which is
 *  those two numbers encoded. A link put together by hand gets them out of
 *  step. Returns an error text, or null when the link agrees with itself
 *  (or does not carry both parts). Kraków batch 0: 481 of 481 agreed. */
export function mapsLinkMismatch(url: string, placeId?: string): string | null {
  const feature = /!1s0x([0-9a-f]+):0x([0-9a-f]+)/i.exec(url);
  const pid = /!19s(ChIJ[0-9A-Za-z_-]+)/.exec(url)?.[1];
  if (placeId && pid && placeId.trim() !== pid) return `google_place_id ${placeId.trim()} is not the one in its Maps link (${pid})`;
  if (!feature || !pid) return null;
  const bytes = Buffer.from(pid.replace(/-/g, "+").replace(/_/g, "/"), "base64");
  if (bytes.length < 20 || bytes[0] !== 0x0a || bytes[2] !== 0x09 || bytes[11] !== 0x11) return `place ID ${pid} in the Maps link is not a Google place ID`;
  const a = bytes.readBigUInt64LE(3).toString(16);
  const b = bytes.readBigUInt64LE(12).toString(16);
  if (a !== feature[1].toLowerCase().replace(/^0+/, "") || b !== feature[2].toLowerCase().replace(/^0+/, "")) {
    return "the place ID and the feature ID in the Maps link are of two different places - copy the link from the card";
  }
  return null;
}
