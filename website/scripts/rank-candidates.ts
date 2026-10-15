// Which places go into a city: the ones with a site, prices and a full card,
// not only the most rated (owner, 2026-10-13: «нужно выбирать те где есть
// сайты есть цены наиболее подходящие по всем параметрам»). Italy and France
// went live with 5-10 places with prices out of ~90 because the list was
// cut by Google ratings alone.
//
//   npm run site-extract -- roma --csv=../data/cities/roma/candidates.csv
//   npm run rank-candidates -- roma
//   npm run rank-candidates -- roma --quota=VET_CLINIC:40,GROOMING:20
//
// Reads candidates.csv and the site-extract files (site-raw/<slug>.json),
// scores every candidate and prints, per category, who to take. Writes
// data/cities/<city>/site-raw/ranking.csv (not committed, like site-raw).
// A score is a proposal: the agent still opens the site, and the gates check
// every value. No network, no model.
//
// Score (docs/playbooks/add-city.md, «Отбор»):
//   own site read (not social, not Maps)        required, else "no site"
//   prices on the site (rows or a price PDF)    +40
//   logo candidate on the site                  +10
//   hours on the site                           +10
//   phone from Maps found on the site           +5
//   popularity: 10 x log10(Google ratings)      up to ~35
//   rating below 4.0                            -15
// Places with no own site are taken only to fill a category that has too
// few candidates with one.
import fs from "fs";
import path from "path";
import Papa from "papaparse";

type Row = Record<string, string>;

const slugify = (s: string) =>
  s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// 100 places (AGENTS.md, «Проект»): PET_SHOP at most 10 %, vets at most half.
// Vets get 40, not 50: they publish prices least, and the other categories
// are where a visitor compares prices.
const DEFAULT_QUOTA: Record<string, number> = {
  VET_CLINIC: 40,
  GROOMING: 20,
  PET_HOTEL: 10,
  DOG_TRAINING: 12,
  PET_SITTING: 8,
  PET_SHOP: 10,
};

const city = process.argv[2];
if (!city || city.startsWith("--")) {
  console.error("Usage: npm run rank-candidates -- <city> [--quota=CATEGORY:N,...] [--csv=path]");
  process.exit(2);
}
const opt = (name: string) => process.argv.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const dir = path.join(process.cwd(), "..", "data", "cities", city);
const csvPath = opt("csv") ?? path.join(dir, "candidates.csv");
const rawDir = path.join(dir, "site-raw");
if (!fs.existsSync(csvPath)) {
  console.error(`No ${csvPath}`);
  process.exit(2);
}
if (!fs.existsSync(rawDir)) {
  console.error(`No ${rawDir}: run npm run site-extract -- ${city} --csv=${path.relative(process.cwd(), csvPath)} first`);
  process.exit(2);
}
const quota = { ...DEFAULT_QUOTA };
for (const part of (opt("quota") ?? "").split(",").filter(Boolean)) {
  const [k, v] = part.split(":");
  if (!(k in quota) || !Number.isFinite(Number(v))) {
    console.error(`Bad --quota part: ${part}`);
    process.exit(2);
  }
  quota[k] = Number(v);
}

// places already in the city (by Maps link) - marked, so a re-selection
// shows who stays and who is replaced
const mapsKey = (u: string) => (u ?? "").split("/data=")[0].split("?")[0];
const inCity = new Set<string>();
for (const f of fs.readdirSync(dir).filter((f) => /^businesses.*\.csv$/.test(f))) {
  for (const r of Papa.parse<Row>(fs.readFileSync(path.join(dir, f), "utf8"), { header: true, skipEmptyLines: true }).data) {
    if (r.closed !== "yes") inCity.add(mapsKey(r.google_maps_url));
  }
}

type Raw = {
  status?: string;
  logo_candidates?: unknown[];
  price_rows?: unknown[];
  price_pdfs?: unknown[];
  price_page?: string | null;
  phone_check?: string | null;
  quotes?: Record<string, unknown[]>;
};

const rows = Papa.parse<Row>(fs.readFileSync(csvPath, "utf8"), { header: true, skipEmptyLines: true }).data.filter((r) => r.name);
const scored = rows.map((r) => {
  const slug = slugify(r.name);
  const file = path.join(rawDir, `${slug}.json`);
  const raw: Raw = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : {};
  const site = raw.status === "ok" || raw.status === "thin";
  const prices = site && ((raw.price_rows?.length ?? 0) > 0 || (raw.price_pdfs?.length ?? 0) > 0);
  const logo = site && (raw.logo_candidates?.length ?? 0) > 0;
  const hours = site && (raw.quotes?.hours?.length ?? 0) > 0;
  const phone = raw.phone_check === "on-site";
  const count = Number(r.google_rating_count) || 0;
  const rating = Number(r.google_rating) || 0;
  let score = 10 * Math.log10(Math.max(count, 1));
  if (prices) score += 40;
  if (logo) score += 10;
  if (hours) score += 10;
  if (phone) score += 5;
  if (rating && rating < 4) score -= 15;
  const closed = /closed|fermé|chiuso|zatvoren|geschlossen/i.test(r.notes ?? "");
  return {
    category: r.category,
    slug,
    name: r.name,
    ratings: count,
    rating: rating || "",
    site: site ? "yes" : raw.status ?? "not read",
    prices: prices ? "yes" : "",
    logo: logo ? "yes" : "",
    hours: hours ? "yes" : "",
    score: Math.round(score),
    in_city: inCity.has(mapsKey(r.google_maps_url)) ? "yes" : "",
    pick: "",
    closed,
    website: r.website ?? "",
  };
});

const out: typeof scored = [];
console.log(`# Ranking: ${city} (${rows.length} candidates)\n`);
for (const [cat, n] of Object.entries(quota)) {
  const list = scored.filter((s) => s.category === cat && !s.closed);
  // own site first, then score; places with no site only fill what is left
  list.sort((a, b) => Number(b.site === "yes") - Number(a.site === "yes") || b.score - a.score || b.ratings - a.ratings);
  list.forEach((s, i) => (s.pick = i < n ? (s.site === "yes" ? "take" : "take (no site - fill)") : ""));
  const taken = list.filter((s) => s.pick);
  const withPrices = taken.filter((s) => s.prices).length;
  const out_ = taken.filter((s) => !s.in_city).length;
  console.log(
    `## ${cat}: take ${taken.length} of ${list.length} (quota ${n}) - with site ${taken.filter((s) => s.site === "yes").length}, with prices ${withPrices}, new vs city ${out_}`,
  );
  for (const s of taken) {
    console.log(`  ${String(s.score).padStart(3)}  ${s.prices ? "€" : " "} ${s.logo ? "L" : " "} ${s.hours ? "H" : " "} ${s.in_city ? " " : "+"} ${s.slug} (${s.ratings})`);
  }
  const dropped = scored.filter((s) => s.category === cat && s.in_city && !s.pick);
  if (dropped.length) console.log(`  in the city now, not taken: ${dropped.map((s) => s.slug).join(", ")}`);
  console.log("");
  out.push(...list);
}
console.log("€ prices on the site, L logo, H hours, + not in the city yet. Short category: collect more candidates on Maps.");
const file = path.join(rawDir, "ranking.csv");
fs.writeFileSync(file, Papa.unparse(out.map((s) => ({ ...s, closed: undefined }))) + "\n");
console.log(`Written: ${path.relative(process.cwd(), file)}`);
