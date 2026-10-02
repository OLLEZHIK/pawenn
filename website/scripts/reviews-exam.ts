// Google reviews exam (docs/pc-agents/reviews-exam.md). A trusted agent
// (the CLI) writes the review feed of a few places into a reference file;
// the agent taking the exam collects the same feeds without seeing it.
// This script compares them place by place.
//
//   npx tsx scripts/reviews-exam.ts ../data/exams/presov-reviews-reference.json ../data/exams/presov-reviews-mac2.json
//
// Both files: [{ "name", "observed_at", "feed": [{ "ago", "months", "stars" }] }],
// feed newest first, reviews with text from the last 24 months.
// Collected on different days, the newer feed can start with a few new
// reviews and its "months" can be one higher, so the feeds are lined up
// at the shift (0-3 entries) where most stars agree.
// PASS: every place found, review counts within 2 of the reference after
// the shift, and at least 90 % of lined-up entries with the same stars
// and months within 1. Exit code 1 means FAIL.
import fs from "fs";
import path from "path";

type Entry = { ago?: string; months: number; stars: number };
type Place = { name: string; observed_at?: string; feed: Entry[] };

const [refArg, examArg] = process.argv.slice(2);
if (!refArg || !examArg) {
  console.error("Usage: npx tsx scripts/reviews-exam.ts <reference.json> <exam.json>");
  process.exit(2);
}
const read = (file: string): Place[] => JSON.parse(fs.readFileSync(path.resolve(file), "utf8"));
const fold = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

const reference = read(refArg);
const exam = new Map(read(examArg).map((p) => [fold(p.name), p]));

let pairs = 0;
let agree = 0;
let failed = false;
console.log("place                                   ref  exam shift  agree");
for (const ref of reference) {
  const got = exam.get(fold(ref.name));
  const label = ref.name.slice(0, 38).padEnd(38);
  if (!got || !Array.isArray(got.feed)) {
    console.log(`${label}  missing`);
    failed = true;
    continue;
  }
  // The exam may be newer (extra reviews on top) or older (reference has extra on top).
  let best = { shift: 0, ok: -1, n: 0 };
  for (let shift = -3; shift <= 3; shift++) {
    const a = shift >= 0 ? got.feed.slice(shift) : got.feed;
    const b = shift >= 0 ? ref.feed : ref.feed.slice(-shift);
    const n = Math.min(a.length, b.length);
    let ok = 0;
    for (let i = 0; i < n; i++) {
      if (a[i].stars === b[i].stars && Math.abs(a[i].months - b[i].months) <= 1) ok++;
    }
    if (ok > best.ok) best = { shift, ok, n };
  }
  const countGap = Math.abs(got.feed.length - Math.abs(best.shift) - ref.feed.length);
  pairs += best.n;
  agree += best.ok;
  const share = best.n ? best.ok / best.n : 0;
  if (countGap > 2 || share < 0.9) failed = true;
  console.log(
    `${label} ${String(ref.feed.length).padStart(4)} ${String(got.feed.length).padStart(5)} ${String(best.shift).padStart(5)}  ${best.ok}/${best.n}` +
      (countGap > 2 ? `  count off by ${countGap}` : "") +
      (share < 0.9 ? "  entries disagree" : ""),
  );
}
const total = pairs ? agree / pairs : 0;
console.log(`\nEntries that agree: ${agree}/${pairs} (${(total * 100).toFixed(0)}%, need 90% per place)`);
console.log(failed ? "\nFAIL" : "\nPASS");
process.exit(failed ? 1 : 0);
