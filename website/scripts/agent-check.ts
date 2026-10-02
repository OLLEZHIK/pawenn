// Mechanical check of an agent's branch for the PC dispatcher
// (docs/pc-agents/dispatcher.md, "Поправка"). It does not judge the data -
// the gate, the peer and the reviewer do that. It catches what breaks the
// pipeline: files the agent must not touch, data without its gate stamp,
// a PR too big to review, secrets, the exam reference.
//
//   npm run agent-check -- origin/pc2/warszawa-descriptions
//   npm run agent-check -- origin/pc1/krakow-03-vet origin/city/krakow
//
// Every FAIL line names the lesson or rule to quote in the correction.
// Exit code 1 means at least one FAIL.
import { spawnSync } from "child_process";

const [branch, baseArg] = process.argv.slice(2);
if (!branch) {
  console.error("Usage: npm run agent-check -- <branch> [base, default origin/main]");
  process.exit(2);
}
const base = baseArg ?? "origin/main";
const git = (...args: string[]) => {
  const r = spawnSync("git", args, { encoding: "utf8", cwd: "..", maxBuffer: 64 * 1024 * 1024 });
  if (r.status !== 0) {
    console.error(`git ${args.join(" ")} failed:\n${r.stderr}`);
    process.exit(2);
  }
  return r.stdout;
};

const name = branch.replace(/^origin\//, "");
const files = git("diff", "--name-only", `${base}...${branch}`).split("\n").filter(Boolean);
const diff = git("diff", "-U0", `${base}...${branch}`);
const fails: string[] = [];
const warns: string[] = [];

// 1. Branch name: the agent's own prefix.
if (!/^(pc\d+|mac2?|cmac|cli|antigravity)\//.test(name)) fails.push(`branch "${name}" has no agent prefix (pcN/…) - AGENTS.md, "Ветки"`);

// 2. Files an executor never changes.
const FORBIDDEN: [RegExp, string][] = [
  [/^website\/scripts\//, "check scripts are not touched - lessons.md У-01"],
  [/^website\/(app|components)\//, "frontend is CLI only - AGENTS.md"],
  [/^\.github\//, "GitHub settings are critical infrastructure - AGENTS.md"],
  [/^(AGENTS\.md|docs\/)/, "rules are changed by the reviewer - AGENTS.md"],
  [/^website\/(package(-lock)?\.json)$/, "dependencies are not changed in a data task"],
  [/^data\/exams\/.*reference/, "exam reference is not opened or changed - reviews-exam.md"],
];
for (const f of files) {
  const hit = FORBIDDEN.find(([re]) => re.test(f));
  if (hit) fails.push(`${f}: ${hit[1]}`);
  else if (f.startsWith("tasks/")) warns.push(`${f}: task files - only a "Вопрос от исполнителя" section may be added`);
}

// 3. Place data without the gate stamp of its chunk. The gate sees only
// chunk files (businesses-NN-*.csv, evidence-NN-*.csv) and review summaries;
// an edit of an old single businesses.csv has no chunk to stamp - there
// check-city READY and verify-city VERIFIED are the check (PR #244).
const GATED = /^data\/cities\/([^/]+)\/((businesses|evidence)-\d[^/]*\.csv|review-insights\/[^/]+\.json)$/;
const cities = new Set(files.map((f) => f.match(GATED)?.[1]).filter(Boolean) as string[]);
for (const city of cities) {
  if (!files.some((f) => f.startsWith(`data/cities/${city}/checks/`)))
    fails.push(`data/cities/${city}: data changed, no gate stamp in checks/ - lessons.md У-10`);
}
for (const city of new Set(files.map((f) => f.match(/^data\/cities\/([^/]+)\/businesses\.csv$/)?.[1]).filter(Boolean) as string[]))
  if (!cities.has(city)) warns.push(`data/cities/${city}/businesses.csv: old single file, no gate - PR needs check-city READY and verify-city VERIFIED output`);

// 4. Size: a PR is at most 3 chunks of 10.
const rowsChanged = (file: string) => {
  const part = diff.split(/^diff --git /m).find((p) => p.startsWith(`a/${file} `));
  return part ? part.split("\n").filter((l) => l.startsWith("+") && !l.startsWith("+++")).length : 0;
};
for (const f of files.filter((f) => /businesses\.csv$/.test(f))) {
  const n = rowsChanged(f);
  if (n > 30) warns.push(`${f}: ${n} rows changed - a PR is at most 3 chunks of 10 (AGENTS.md)`);
}

// 5. Secrets in added lines.
const added = diff.split("\n").filter((l) => l.startsWith("+") && !l.startsWith("+++"));
if (added.some((l) => /gh[pousr]_[A-Za-z0-9]{20,}|github_pat_|AIza[0-9A-Za-z_-]{30,}|postgres(ql)?:\/\/[^ ]*:[^ ]*@/.test(l)))
  fails.push("a token or password is in the diff - remove it, tell the owner to revoke it");

// 6. Commits straight on top of main with nothing in them.
const commits = git("log", "--format=%s", `${base}..${branch}`).split("\n").filter(Boolean);
if (!commits.length) warns.push("no commits ahead of the base");

console.log(`${name} vs ${base}: ${files.length} files, ${commits.length} commits`);
for (const w of warns) console.log(`WARN  ${w}`);
for (const f of fails) console.log(`FAIL  ${f}`);
console.log(fails.length ? "\nAGENT-CHECK FAIL" : "\nAGENT-CHECK OK");
process.exit(fails.length ? 1 : 0);
