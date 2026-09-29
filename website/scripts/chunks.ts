// Chunks and gates (docs/playbooks/quality.md, rule 10; owner, 2026-09-29).
// An agent collects 10 places (or 10 review summaries) at a time and runs
// `npm run gate -- <city>` before the next 10. The gate checks only that
// chunk - against the places' sites, not against the agent's memory - and
// writes data/cities/<city>/checks/<chunk>.json: the result, every round
// it took, and a fingerprint of the chunk's data. check-city refuses new
// data without a PASS stamp whose fingerprint matches the files as they
// are now, so "I checked it" cannot be claimed, only run.
//
// Why a program and not the agent rereading its work: the same model
// confirms what it wrote. Self-checks in PR #144, #160 and #186 were all
// ticked while the data was made up.
import crypto from "crypto";
import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { EVIDENCE_FROM } from "./evidence";

export type Row = Record<string, string>;

export const CHUNK_SIZE = 10;
export const MAX_ROUNDS = 3;

export type Stamp = {
  chunk: string;
  kind: "places" | "insights";
  slugs: string[];
  hash: string;
  result: "PASS" | "FAIL";
  history: { at: string; result: "PASS" | "FAIL"; listed: number }[];
};

export type Chunk = { id: string; kind: "places" | "insights"; slugs: string[]; files: string[] };

const readCsv = (file: string) =>
  Papa.parse<Row>(fs.readFileSync(file, "utf-8"), { header: true, skipEmptyLines: true }).data;
const isNew = (observedAt: string | undefined) => (observedAt ?? "").trim() >= EVIDENCE_FROM;

/** Chunk files of places: every businesses-<NN>-<category>.csv, whatever
 *  its dates say - a back-dated observed_at must not skip the gate. */
export function placeChunks(dir: string): (Chunk & { rows: Row[] })[] {
  return fs
    .readdirSync(dir)
    .filter((f) => /^businesses-.+\.csv$/.test(f))
    .sort()
    .map((f) => {
      const rows = readCsv(path.join(dir, f));
      const id = f.replace(/^businesses-/, "").replace(/\.csv$/, "");
      const files = [f, `evidence-${id}.csv`].filter((x) => fs.existsSync(path.join(dir, x)));
      return { id, kind: "places" as const, slugs: rows.map((r) => r.slug), files, rows };
    });
}

/** Review summaries collected under the gate rule (observed_at from EVIDENCE_FROM). */
export function newInsights(dir: string): string[] {
  const d = path.join(dir, "review-insights");
  if (!fs.existsSync(d)) return [];
  return fs
    .readdirSync(d)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .filter((f) => {
      try {
        return isNew(JSON.parse(fs.readFileSync(path.join(d, f), "utf-8")).observed_at);
      } catch {
        return true; // broken JSON is new work too - the gate reports it
      }
    })
    .map((f) => f.replace(/\.json$/, ""));
}

/** Fingerprint of what a chunk is made of: its files, its rows in
 *  prices.csv and its logo files (places), or its summary files. */
export function chunkHash(dir: string, logosDir: string, c: Pick<Chunk, "kind" | "slugs" | "files">): string {
  const h = crypto.createHash("sha256");
  const add = (name: string, content: Buffer | string) => h.update(name).update("\0").update(content).update("\0");
  if (c.kind === "insights") {
    for (const s of [...c.slugs].sort()) {
      const f = path.join(dir, "review-insights", `${s}.json`);
      add(s, fs.existsSync(f) ? fs.readFileSync(f) : "missing");
    }
    return h.digest("hex");
  }
  for (const f of [...c.files].sort()) add(f, fs.readFileSync(path.join(dir, f)));
  const prices = path.join(dir, "prices.csv");
  if (fs.existsSync(prices)) {
    const mine = fs
      .readFileSync(prices, "utf-8")
      .split(/\r?\n/)
      .filter((line) => c.slugs.some((s) => line.startsWith(`${s},`)))
      .sort();
    add("prices", mine.join("\n"));
  }
  const bFile = c.files.find((f) => f.startsWith("businesses-"));
  if (bFile) {
    for (const r of readCsv(path.join(dir, bFile))) {
      const logo = (r.logo_file ?? "").trim();
      if (logo && fs.existsSync(path.join(logosDir, logo))) add(`logo ${logo}`, fs.readFileSync(path.join(logosDir, logo)));
    }
  }
  return h.digest("hex");
}

export const stampPath = (dir: string, id: string) => path.join(dir, "checks", `${id}.json`);

export function readStamp(dir: string, id: string): Stamp | null {
  try {
    return JSON.parse(fs.readFileSync(stampPath(dir, id), "utf-8")) as Stamp;
  } catch {
    return null;
  }
}

export function allStamps(dir: string): Stamp[] {
  const d = path.join(dir, "checks");
  if (!fs.existsSync(d)) return [];
  return fs
    .readdirSync(d)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => readStamp(dir, f.replace(/\.json$/, "")))
    .filter((s): s is Stamp => !!s);
}

export function writeStamp(dir: string, s: Stamp) {
  fs.mkdirSync(path.join(dir, "checks"), { recursive: true });
  fs.writeFileSync(stampPath(dir, s.chunk), JSON.stringify(s, null, 2) + "\n");
}

/** A stamp that still describes the data: PASS and the same fingerprint. */
export const stampValid = (dir: string, logosDir: string, s: Stamp | null, c: Pick<Chunk, "kind" | "slugs" | "files">) =>
  !!s && s.result === "PASS" && s.hash === chunkHash(dir, logosDir, c);

/** Summary chunks as they stand: those with a stamp (re-checked if their
 *  files changed), then new summaries not in any stamp, 10 at a time. */
export function insightChunks(dir: string): { stamped: Chunk[]; unstamped: string[] } {
  const fresh = new Set(newInsights(dir));
  const stamped: Chunk[] = allStamps(dir)
    .filter((s) => s.kind === "insights")
    .map((s) => ({ id: s.chunk, kind: "insights" as const, slugs: s.slugs, files: [] }));
  const covered = new Set(stamped.flatMap((c) => c.slugs));
  return { stamped, unstamped: [...fresh].filter((s) => !covered.has(s)) };
}

export function nextInsightsId(dir: string): string {
  const n = allStamps(dir)
    .filter((s) => s.kind === "insights")
    .map((s) => Number(s.chunk.replace(/\D/g, "")) || 0);
  return `insights-${String((n.length ? Math.max(...n) : 0) + 1).padStart(2, "0")}`;
}
