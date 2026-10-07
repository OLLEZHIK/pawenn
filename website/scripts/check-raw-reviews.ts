// Checks the collector's output before the writer uses it: the raw Google
// review feed of a place, one file per place. Part of the two-stage review
// pipeline (docs/playbooks/review-insights.md, "Два этапа"; owner 2026-10-03).
//
//   npm run check-raw-reviews -- krakow             (all files of the city)
//   npm run check-raw-reviews -- krakow slug-a slug-b
//
// File: data/cities/<city>/raw-reviews/<slug>.json. It holds review TEXT, so
// it lives on the working branch `reviews-raw/<city>` and never in `main`
// (personal data and copyright; the published summary keeps dates, stars and
// topics only). Format:
//   { "slug", "google_maps_url", "fetched_at": "YYYY-MM-DD", "sort": "newest",
//     "ratings_total": 412, "complete": true,
//     "reviews": [ { "ago": "2 miesiące temu", "months": 2, "stars": 5, "text": "…" }, … ] }
// `reviews` = only reviews WITH text, newest first, back to 24 months or the
// end of the list (`complete: true` = the collector scrolled that far).
//
// Prints per place how many text reviews fall in 6 / 12 / 24 months, which
// period the summary takes (shortest with >= 5) or "skip" (< 5 in 24 months),
// and exits 1 on a malformed file.
import fs from "fs";
import path from "path";
import Papa from "papaparse";

type Review = { ago: string; months: number; stars: number; text: string };
type Raw = {
  slug: string;
  google_maps_url: string;
  fetched_at: string;
  sort: string;
  ratings_total?: number;
  complete: boolean;
  reviews: Review[];
};

const city = process.argv[2];
if (!city || city.startsWith("--")) {
  console.error("Usage: npm run check-raw-reviews -- <city> [slug ...]");
  process.exit(2);
}
const only = process.argv.slice(3);
const dir = path.join(process.cwd(), "..", "data", "cities", city);
const rawDir = path.join(dir, "raw-reviews");
if (!fs.existsSync(rawDir)) {
  console.error(`No data/cities/${city}/raw-reviews/`);
  process.exit(2);
}
const slugs = new Set(
  fs
    .readdirSync(dir)
    .filter((f) => /^businesses.*\.csv$/.test(f))
    .flatMap((f) => Papa.parse<Record<string, string>>(fs.readFileSync(path.join(dir, f), "utf8"), { header: true, skipEmptyLines: true }).data)
    .map((r) => r.slug),
);

// "2 miesiące temu" / "pred 3 mesiacmi" / "vor 4 Monaten" / "před 2 měsíci" / "a year ago" -> months
// (days, weeks, hours and "yesterday/today" = 0). "Bearbeitet: vor …" / "Edited …" prefixes are fine.
function monthsFromAgo(ago: string): number | null {
  const s = ago.toLowerCase();
  // de: Tag(en), Woche(n), Stunde(n), Minute(n), gestern, heute; cs: den/dny/dní, týden/týdny, hodin, minut
  if (/(dzień|dni|dnia|dňom|dňami|deň|day|week|tydz|týž|tyd|hour|godz|hod|\btage?n?\b|woche|stunde|\bstd\b|minut|gestern|heute|\bden\b|\bdny\b|\bdní\b|týden|týdn|hodin)/.test(s)) return 0;
  const n = s.match(/\d+/);
  const k = n ? Number(n[0]) : 1;
  // years: pl rok/lat, sk rok, en year, de Jahr(en), cs rok/roky/let
  if (/(rok|lat|lata|roku|rokov|rokmi|rokom|year|jahr|\blet\b|\blety\b)/.test(s)) return 12 * k;
  // months: pl miesiąc, sk mesiac, en month, de Monat(en), cs měsíc
  if (/(miesi|mesiac|mesiaci|mesiacmi|mesiacom|month|monat|měsíc|měsíci|měsíce|měsíců)/.test(s)) return k;
  return null;
}

const files = (only.length ? only.map((s) => `${s}.json`) : fs.readdirSync(rawDir).filter((f) => f.endsWith(".json"))).sort();
let failed = false;
const rows: string[] = [];
for (const f of files) {
  const slug = f.replace(/\.json$/, "");
  const problems: string[] = [];
  let d: Raw;
  try {
    d = JSON.parse(fs.readFileSync(path.join(rawDir, f), "utf8"));
  } catch (e) {
    console.log(`FAIL ${slug}: not readable JSON (${(e as Error).message})`);
    failed = true;
    continue;
  }
  if (d.slug !== slug) problems.push(`slug "${d.slug}" differs from the file name`);
  if (!slugs.has(slug)) problems.push("slug is not a place of this city");
  if (!/^https?:\/\//.test(d.google_maps_url ?? "")) problems.push("google_maps_url missing");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(d.fetched_at ?? "")) problems.push("fetched_at must be YYYY-MM-DD");
  if (d.sort !== "newest") problems.push('sort must be "newest" (the feed is read newest first)');
  if (d.complete !== true) problems.push("complete is not true: the collector did not reach 24 months or the end of the list");
  if (!Array.isArray(d.reviews)) problems.push("reviews is not a list");
  let last = -1;
  (d.reviews ?? []).forEach((r, i) => {
    const at = `review ${i + 1}`;
    if (!r.text || r.text.trim().length < 3) problems.push(`${at}: empty text (reviews without text are not recorded)`);
    if (!Number.isInteger(r.stars) || r.stars < 1 || r.stars > 5) problems.push(`${at}: stars must be 1-5`);
    if (!Number.isInteger(r.months) || r.months < 0) problems.push(`${at}: months must be a whole number >= 0`);
    else {
      const m = monthsFromAgo(r.ago ?? "");
      if (m === null) problems.push(`${at}: cannot read "${r.ago}" - copy Google's wording`);
      else if (m !== r.months) problems.push(`${at}: "${r.ago}" is ${m} months, file says ${r.months}`);
      if (r.months < last) problems.push(`${at}: not newest first (${r.months} after ${last} months)`);
      last = Math.max(last, r.months);
      if (r.months > 24) problems.push(`${at}: older than 24 months - cut the list at 24`);
    }
  });
  const count = (limit: number) => (d.reviews ?? []).filter((r) => r.months < limit).length;
  const [m6, m12, m24] = [count(6), count(12), count(24)];
  const period = m6 >= 5 ? "6" : m12 >= 5 ? "12" : m24 >= 5 ? "24" : "skip";
  if (problems.length) {
    failed = true;
    console.log(`FAIL ${slug}`);
    for (const p of problems.slice(0, 6)) console.log(`  - ${p}`);
  }
  rows.push(`${slug} | ${m6} / ${m12} / ${m24} | ${period === "skip" ? "skip (< 5 in 24 months)" : `summary for ${period} months`}`);
}
console.log("\nslug | text reviews in 6 / 12 / 24 months | period");
for (const r of rows) console.log(r);
console.log(failed ? "\nRAW REVIEWS FAIL" : `\nRAW REVIEWS OK (${files.length} files)`);
process.exit(failed ? 1 : 0);
