// The gate after every chunk of 10 (docs/playbooks/quality.md, rule 10).
//
//   npm run gate -- <city>            the next chunk that has no valid PASS
//   npm run gate -- <city> <chunk>    one chunk by name ("03-vet", "insights-02")
//
// Runs check-city and verify-city on that chunk only - its places against
// their sites, its quotes against their pages, its review summaries against
// their feeds - and writes data/cities/<city>/checks/<chunk>.json with the
// result, each round, and a fingerprint of the chunk's data (scripts/
// chunks.ts). PASS: commit the chunk with its stamp and take the next 10.
// FAIL: fix the listed lines from the source and run the gate again.
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import {
  CHUNK_SIZE,
  MAX_ROUNDS,
  type Chunk,
  chunkHash,
  insightChunks,
  nextInsightsId,
  placeChunks,
  readStamp,
  stampPath,
  stampValid,
  writeStamp,
} from "./chunks";

const city = process.argv[2];
const wanted = process.argv[3];
if (!city) {
  console.error("Usage: npm run gate -- <city-slug> [chunk]");
  process.exit(2);
}
const dir = path.join(process.cwd(), "..", "data", "cities", city);
const logosDir = path.join(process.cwd(), "public", "logos", city);
if (!fs.existsSync(dir)) {
  console.error(`No data folder: ${dir}`);
  process.exit(2);
}

const places = placeChunks(dir);
const insights = insightChunks(dir);
const valid = (c: Chunk) => stampValid(dir, logosDir, readStamp(dir, c.id), c);

// Which chunk: the one asked for, else the first without a valid PASS -
// places first, then summaries whose files changed, then new summaries.
let chunk: Chunk | undefined;
let waiting = 0;
if (wanted) {
  chunk = places.find((c) => c.id === wanted) ?? insights.stamped.find((c) => c.id === wanted);
  if (!chunk) {
    console.error(`No chunk "${wanted}". Chunks: ${[...places, ...insights.stamped].map((c) => c.id).join(", ") || "none"}`);
    process.exit(2);
  }
} else {
  const pending = [...places, ...insights.stamped].filter((c) => !valid(c));
  chunk = pending[0];
  waiting = pending.length - 1;
  if (!chunk && insights.unstamped.length) {
    chunk = { id: nextInsightsId(dir), kind: "insights", slugs: insights.unstamped.slice(0, CHUNK_SIZE), files: [] };
    waiting = insights.unstamped.length > CHUNK_SIZE ? 1 : 0;
  }
}
if (!chunk) {
  console.log(`\n${city}: every chunk has a valid PASS - nothing to check.\n`);
  process.exit(0);
}

console.log(`\nGate: ${city}, chunk ${chunk.id} (${chunk.slugs.length} ${chunk.kind === "places" ? "places" : "review summaries"})\n`);

const problems: string[] = [];
if (chunk.slugs.length > CHUNK_SIZE) problems.push(`${chunk.slugs.length} in one chunk - ${CHUNK_SIZE} at most: split the file and check each part`);

const run = (script: string) => {
  const res = spawnSync("npx", ["tsx", `scripts/${script}`, city, `--only=${chunk!.slugs.join(",")}`], {
    encoding: "utf-8",
    shell: process.platform === "win32",
    maxBuffer: 20 * 1024 * 1024,
  });
  const out = `${res.stdout ?? ""}${res.stderr ?? ""}`;
  console.log(`---- ${script} ----${out}`);
  return { ok: res.status === 0, listed: out.split("\n").filter((l) => /^ {2}\S/.test(l)).length, out };
};
// A summaries chunk is judged by its summaries only: the places' texts and
// logos belong to other tasks and their own gates (PR #257 failed on
// Warsaw's template descriptions, not on a single summary).
const insightsOnly = (c: ReturnType<typeof run>) => {
  const section = c.out.split(/\n(?=\S)/).find((s) => /^review-insights format \(\d+\):/.test(s.trim())) ?? "";
  const listed = section.split("\n").filter((l) => /^ {2}\S/.test(l)).length;
  return { ...c, ok: listed === 0, listed };
};
const checks = [chunk.kind === "insights" ? insightsOnly(run("check-city.ts")) : run("check-city.ts")];
// Sites, phones and quotes are checked for places; summaries are checked
// against their own feed by check-city.
if (chunk.kind === "places") checks.push(run("verify-city.ts"));

const pass = problems.length === 0 && checks.every((c) => c.ok);
const listed = problems.length + checks.reduce((n, c) => n + (c.ok ? 0 : c.listed), 0);
const before = readStamp(dir, chunk.id);
const history = [...(before?.history ?? []), { at: new Date().toISOString(), result: pass ? ("PASS" as const) : ("FAIL" as const), listed }];
writeStamp(dir, {
  chunk: chunk.id,
  kind: chunk.kind,
  slugs: chunk.slugs,
  hash: chunkHash(dir, logosDir, chunk),
  result: pass ? "PASS" : "FAIL",
  history,
});

for (const p of problems) console.log(`  ${p}`);
const stamp = path.relative(path.join(process.cwd(), ".."), stampPath(dir, chunk.id));
if (pass) {
  console.log(`\nGATE PASS: ${chunk.id}, round ${history.length}. Stamp: ${stamp}`);
  console.log(`Next: commit this chunk together with its stamp, then collect the next ${CHUNK_SIZE}.`);
  console.log("Any later edit to this chunk needs the gate again - check-city compares the stamp with the data.");
  if (waiting > 0) console.log(`\n${waiting} more chunk(s) wait for their gate: run it again.`);
  console.log("");
  process.exit(0);
}
console.log(`\nGATE FAIL: ${chunk.id}, round ${history.length} of ${MAX_ROUNDS}. Stamp: ${stamp}`);
console.log("Fix the lines above from the source - open the page again, do not rewrite from memory - and run the gate again.");
if (history.length >= MAX_ROUNDS) {
  console.log(
    `\nRound ${history.length}: a value that still does not match its source is removed - the field empty and "<field>: none (<what did not match>)" in notes.\n` +
      "If the tool itself does not work (sites do not open, Google Maps limited), stop and ask in the PR under \"## Открытый вопрос\"."
  );
}
console.log("");
process.exit(1);
