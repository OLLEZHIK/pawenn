// Google Maps exam for an agent that has not collected Maps data before
// (docs/pc-agents/maps-exam.md). The agent collects the Maps fields of
// places a trusted agent already collected into candidates.csv, without
// seeing them; this script compares every value with that reference.
//
//   npx tsx scripts/maps-exam.ts presov ../data/cities/presov/maps-exam-pc1.csv
//
// Per value: OK, WRONG (a value that differs from the reference), BLANK
// (no value where the reference has one: an honest gap, it lowers
// coverage, not accuracy). PASS needs at most 2 % WRONG among the values
// given and coverage of at least 80 %. Exit code 1 means FAIL.
import fs from "fs";
import path from "path";
import Papa from "papaparse";

type Row = Record<string, string>;

const [city, examArg] = process.argv.slice(2);
if (!city || !examArg) {
  console.error("Usage: npx tsx scripts/maps-exam.ts <city> <exam.csv>");
  process.exit(2);
}
const read = (file: string): Row[] =>
  Papa.parse<Row>(fs.readFileSync(file, "utf8"), { header: true, skipEmptyLines: true }).data;

const referencePath = path.join(process.cwd(), "..", "data", "cities", city, "candidates.csv");
// The check is blind: another agent collects the places again. Comparing
// candidates.csv with itself proves nothing (PR #254).
if (path.resolve(examArg) === path.resolve(referencePath) || fs.readFileSync(path.resolve(examArg), "utf8") === fs.readFileSync(referencePath, "utf8")) {
  console.error("The exam file is candidates.csv itself - another agent must collect the places blind (pipeline.md). Lesson У-12.");
  process.exit(2);
}
const reference = read(referencePath);
const exam = read(path.resolve(examArg));

const fold = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const placeId = (url: string) => url.match(/!19s([^?&!]+)/)?.[1] ?? url.match(/!1s(0x[0-9a-f]+:0x[0-9a-f]+)/i)?.[1] ?? "";
const coords = (url: string) => {
  const m = url.match(/!3d(-?[\d.]+)!4d(-?[\d.]+)/);
  return m ? [Number(m[1]), Number(m[2])] : null;
};
const metres = (a: number[], b: number[]) => {
  const rad = Math.PI / 180;
  const x = (b[1] - a[1]) * rad * Math.cos(((a[0] + b[0]) / 2) * rad);
  const y = (b[0] - a[0]) * rad;
  return Math.sqrt(x * x + y * y) * 6371000;
};
const digits = (s: string) => s.replace(/\D/g, "").slice(-9);
const domain = (s: string) => s.toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").split(/[/?#]/)[0];
const words = (s: string) => new Set(fold(s).split(" ").filter((w) => w.length > 1));
const overlap = (a: string, b: string) => {
  const x = words(a);
  const y = words(b);
  const common = [...x].filter((w) => y.has(w)).length;
  return common / Math.max(1, Math.min(x.size, y.size));
};

// Each check gets the exam value and the reference value, both non-empty.
const CHECKS: Record<string, (got: string, want: string) => boolean> = {
  place_id: (g, w) => placeId(g) !== "" && placeId(g) === placeId(w),
  coords: (g, w) => {
    const a = coords(g);
    const b = coords(w);
    return !!a && !!b && metres(a, b) <= 50;
  },
  google_rating: (g, w) => Number(g.replace(",", ".")) === Number(w.replace(",", ".")),
  google_rating_count: (g, w) => Math.abs(Number(g) - Number(w)) <= Math.max(2, Number(w) * 0.03),
  address: (g, w) => overlap(g, w) >= 0.6,
  phone: (g, w) => digits(g) === digits(w),
  website: (g, w) => domain(g) === domain(w),
  opening_hours: (g, w) => g.replace(/\s+/g, " ").trim() === w.replace(/\s+/g, " ").trim(),
};
const SOURCE: Record<string, string> = {
  place_id: "google_maps_url",
  coords: "google_maps_url",
  google_rating: "google_rating",
  google_rating_count: "google_rating_count",
  address: "address",
  phone: "phone",
  website: "website",
  opening_hours: "opening_hours",
};

const byName = new Map(reference.map((r) => [fold(r.name ?? ""), r]));
const tally = { OK: 0, WRONG: 0, BLANK: 0 };
const perField: Record<string, { OK: number; WRONG: number; BLANK: number }> = {};
const wrong: string[] = [];
const missing: string[] = [];

for (const row of exam) {
  const ref = byName.get(fold(row.name ?? ""));
  if (!ref) {
    missing.push(row.name ?? "(no name)");
    continue;
  }
  for (const [field, check] of Object.entries(CHECKS)) {
    const want = (ref[SOURCE[field]] ?? "").trim();
    if (!want) continue; // the reference has nothing to compare with
    const got = (row[SOURCE[field]] ?? "").trim();
    const stat = (perField[field] ??= { OK: 0, WRONG: 0, BLANK: 0 });
    const result = !got ? "BLANK" : check(got, want) ? "OK" : "WRONG";
    tally[result]++;
    stat[result]++;
    if (result === "WRONG") wrong.push(`  ${row.name} - ${field}: got "${got.slice(0, 90)}", reference "${want.slice(0, 90)}"`);
  }
}

console.log(`${city}: maps exam, ${exam.length} places\n`);
console.log("field                  ok  wrong  blank");
for (const [field, s] of Object.entries(perField)) {
  console.log(`${field.padEnd(20)} ${String(s.OK).padStart(4)} ${String(s.WRONG).padStart(6)} ${String(s.BLANK).padStart(6)}`);
}
if (missing.length) console.log(`\nNot in candidates.csv by name (${missing.length}):\n  ${missing.join("\n  ")}`);
if (wrong.length) console.log(`\nWrong values (${wrong.length}):\n${wrong.join("\n")}`);

const given = tally.OK + tally.WRONG;
const total = given + tally.BLANK;
const wrongShare = given ? tally.WRONG / given : 0;
const coverage = total ? given / total : 0;
console.log(
  `\nWrong: ${tally.WRONG}/${given} (${(wrongShare * 100).toFixed(1)}%, limit 2%)` +
    `\nCoverage: ${given}/${total} (${(coverage * 100).toFixed(0)}%, need 80%)`,
);
const pass = given > 0 && wrongShare <= 0.02 && coverage >= 0.8 && missing.length === 0;
console.log(pass ? "\nPASS" : "\nFAIL");
process.exit(pass ? 0 : 1);
