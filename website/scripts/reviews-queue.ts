// Queue for the review-summary stage: which places of a city still need a
// "what customers say" summary, in the order they are worth doing. Offline,
// free, no model. Owner decision 2026-10-03: collect the Google review feed
// by script (docs/playbooks/review-insights.md, "Два этапа"), start with the
// places that make the best card.
//
//   npm run reviews-queue -- krakow
//   npm run reviews-queue -- krakow --limit=40 --min-ratings=5
//   npm run reviews-queue -- krakow --slugs      (slugs only, one per line)
//
// Order = popularity first (number of Google ratings), then what makes the
// card look complete: own site, logo, prices, hours. A place without a
// summary file, with enough ratings, is in the queue. It does not know the
// number of text reviews - the collector measures that, and the writer skips
// a place with fewer than 3 text reviews in 24 months (owner, 2026-10-07:
// was 5; and from 5 Google ratings, was 20).
import fs from "fs";
import path from "path";
import Papa from "papaparse";

type Row = Record<string, string>;

const city = process.argv[2];
if (!city || city.startsWith("--")) {
  console.error("Usage: npm run reviews-queue -- <city> [--limit=N] [--min-ratings=5] [--slugs]");
  process.exit(2);
}
const arg = (name: string) => process.argv.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const limit = Number(arg("limit") ?? 0);
const minRatings = Number(arg("min-ratings") ?? 5);
const slugsOnly = process.argv.includes("--slugs");

const dir = path.join(process.cwd(), "..", "data", "cities", city);
if (!fs.existsSync(path.join(dir, "city.json"))) {
  console.error(`No data/cities/${city}/city.json`);
  process.exit(2);
}
const read = (f: string) => Papa.parse<Row>(fs.readFileSync(f, "utf8"), { header: true, skipEmptyLines: true }).data;

const rows = fs
  .readdirSync(dir)
  .filter((f) => /^businesses.*\.csv$/.test(f))
  .flatMap((f) => read(path.join(dir, f)))
  .filter((r) => r.slug && !(r.closed ?? "").trim());
const priced = new Set(
  fs.existsSync(path.join(dir, "prices.csv")) ? read(path.join(dir, "prices.csv")).map((r) => r.business_slug) : [],
);
const insightsDir = path.join(dir, "review-insights");
const done = new Set(
  fs.existsSync(insightsDir) ? fs.readdirSync(insightsDir).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, "")) : [],
);
const rawDir = path.join(dir, "raw-reviews");
const collected = new Set(
  fs.existsSync(rawDir) ? fs.readdirSync(rawDir).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, "")) : [],
);

const queue = rows
  .filter((r) => !done.has(r.slug) && Number(r.google_rating_count || 0) >= minRatings && r.google_maps_url)
  .map((r) => ({
    slug: r.slug,
    name: r.name,
    category: r.category,
    ratings: Number(r.google_rating_count),
    // Card completeness bonus: breaks ties between places with a similar number of ratings.
    bonus: (r.website ? 1 : 0) + (r.logo_file ? 1 : 0) + (priced.has(r.slug) ? 1 : 0) + (r.opening_hours ? 1 : 0),
    stage: collected.has(r.slug) ? "collected" : "to-collect",
  }))
  .sort((a, b) => Math.floor(Math.log2(b.ratings)) - Math.floor(Math.log2(a.ratings)) || b.bonus - a.bonus || b.ratings - a.ratings);

const out = limit ? queue.slice(0, limit) : queue;
if (slugsOnly) {
  console.log(out.map((q) => q.slug).join("\n"));
  process.exit(0);
}
console.log(`${city}: ${rows.length} places, ${done.size} summaries, ${queue.length} in the queue (>= ${minRatings} ratings)`);
console.log(`stage: ${queue.filter((q) => q.stage === "to-collect").length} to collect, ${queue.filter((q) => q.stage === "collected").length} collected, waiting for the writer\n`);
console.log("slug | category | ratings | card bonus | stage");
for (const q of out) console.log(`${q.slug} | ${q.category} | ${q.ratings} | ${q.bonus}/4 | ${q.stage}`);
