// "The city is ready" in one command: runs every free gate on a whole city,
// then draws a few places per category for the human spot check and prints
// everything as one Markdown report to paste into the city -> main PR.
// Owner decision 2026-10-02: the agents finish a city, the reviewer merges
// after a quick look at 2 places per category (docs/pc-agents/pipeline.md,
// "Город готов").
//
//   npm run ready-city -- warszawa
//   npm run ready-city -- warszawa --per=3 --seed=7
//
// Exit code 1 if any gate fails, so the dispatcher can stop on it. The
// spot-check list is a checklist for a human or for the CLI on the PC: open
// the place page, the place's own site and Google Maps, compare the values
// and the quotes. Not a replacement for the gates - they run first.
import { spawnSync } from "child_process";
import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { SITE_URL } from "../lib/site";

type Row = Record<string, string>;

const city = process.argv[2];
if (!city || city.startsWith("--")) {
  console.error("Usage: npm run ready-city -- <city-slug> [--per=2] [--seed=N]");
  process.exit(2);
}
const arg = (name: string) => process.argv.find((a) => a.startsWith(`--${name}=`))?.slice(name.length + 3);
const per = Math.max(1, Number(arg("per") ?? 2));
const seed = Number(arg("seed") ?? Date.now() % 100000);

const dataDir = path.join(process.cwd(), "..", "data", "cities", city);
if (!fs.existsSync(path.join(dataDir, "city.json"))) {
  console.error(`No data/cities/${city}/city.json`);
  process.exit(2);
}

function readCsv(file: string): Row[] {
  const text = fs.readFileSync(file, "utf8");
  return Papa.parse<Row>(text, { header: true, skipEmptyLines: true }).data;
}

// ---- 1. gates -------------------------------------------------------------
const GATES: { name: string; script: string; ok: RegExp }[] = [
  { name: "gate (chunk stamps)", script: "gate", ok: /GATE PASS|every chunk has a valid PASS/ },
  { name: "check-city", script: "check-city", ok: /^READY\s*$/m },
  { name: "verify-city", script: "verify-city", ok: /^VERIFIED\s*$/m },
  { name: "sanity", script: "sanity", ok: /SANITY OK/ },
];
const results: { name: string; pass: boolean; tail: string }[] = [];
for (const g of GATES) {
  const r = spawnSync("npm", ["run", "-s", g.script, "--", city], { encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  const out = `${r.stdout ?? ""}${r.stderr ?? ""}`;
  const pass = r.status === 0 && g.ok.test(out);
  const lines = out.split("\n").map((l) => l.trimEnd()).filter(Boolean);
  results.push({ name: g.name, pass, tail: lines.slice(-4).join("\n") });
}

// Slugs are page addresses and must be unique across ALL cities: the
// production seed stops on a duplicate and the whole deploy fails (Kraków and
// Warszawa both had "przychodnia-weterynaryjna-lupus", 2026-10-03).
{
  const owner = new Map<string, string>();
  const dupes: string[] = [];
  const citiesRoot = path.join(process.cwd(), "..", "data", "cities");
  for (const c of fs.readdirSync(citiesRoot)) {
    const dir = path.join(citiesRoot, c);
    if (!fs.existsSync(path.join(dir, "city.json"))) continue;
    for (const f of fs.readdirSync(dir).filter((x) => /^businesses.*\.csv$/.test(x))) {
      for (const r of readCsv(path.join(dir, f))) {
        if (!r.slug) continue;
        const prev = owner.get(r.slug);
        if (prev && prev !== c) dupes.push(`${r.slug}: ${prev} and ${c}`);
        else owner.set(r.slug, c);
      }
    }
  }
  results.push({ name: "slugs unique across cities", pass: dupes.length === 0, tail: dupes.slice(0, 6).join("\n") });
}

// ---- 2. numbers -----------------------------------------------------------
const businessFiles = fs.readdirSync(dataDir).filter((f) => /^businesses.*\.csv$/.test(f));
const rows = businessFiles.flatMap((f) => readCsv(path.join(dataDir, f))).filter((r) => r.slug && !r.closed);
const priceFile = path.join(dataDir, "prices.csv");
const pricedSlugs = new Set(fs.existsSync(priceFile) ? readCsv(priceFile).map((r) => r.business_slug) : []);
const insightsDir = path.join(dataDir, "review-insights");
const insightSlugs = new Set(
  fs.existsSync(insightsDir) ? fs.readdirSync(insightsDir).filter((f) => f.endsWith(".json")).map((f) => f.replace(/\.json$/, "")) : [],
);
const evidence = new Map<string, Row[]>();
for (const f of fs.readdirSync(dataDir).filter((x) => /^evidence.*\.csv$/.test(x))) {
  for (const r of readCsv(path.join(dataDir, f))) {
    if (!r.business_slug) continue;
    const list = evidence.get(r.business_slug) ?? [];
    list.push(r);
    evidence.set(r.business_slug, list);
  }
}
const share = (n: number, total: number) => (total ? `${n} (${Math.round((100 * n) / total)} %)` : "0");
const categories = [...new Set(rows.map((r) => r.category))].sort();

// ---- 3. spot-check draw (seeded, repeatable) --------------------------------
let state = seed || 1;
const rand = () => {
  state = (state * 1664525 + 1013904223) % 4294967296;
  return state / 4294967296;
};
function draw<T>(list: T[], n: number): T[] {
  const copy = [...list];
  const picked: T[] = [];
  while (copy.length && picked.length < n) picked.push(copy.splice(Math.floor(rand() * copy.length), 1)[0]);
  return picked;
}

// ---- 4. report -------------------------------------------------------------
const out: string[] = [];
const allPass = results.every((r) => r.pass);
out.push(`# Город готов? ${city} — ${allPass ? "ворота зелёные" : "ЕСТЬ КРАСНЫЕ ВОРОТА"}`);
out.push(`\nДата: ${new Date().toISOString().slice(0, 10)}, мест: ${rows.length}, выборка: ${per} на категорию, seed ${seed}\n`);
out.push("## Ворота\n\n| Проверка | Итог |\n|---|---|");
for (const r of results) out.push(`| ${r.name} | ${r.pass ? "PASS" : "**FAIL**"} |`);
for (const r of results.filter((x) => !x.pass)) out.push(`\n\`${r.name}\`, последние строки:\n\`\`\`\n${r.tail}\n\`\`\``);

out.push("\n## Покрытие по категориям\n\n| Категория | Мест | Логотип | Рейтинг | Часы | Цены | Сводка отзывов |\n|---|---|---|---|---|---|---|");
for (const cat of categories) {
  const c = rows.filter((r) => r.category === cat);
  out.push(
    `| ${cat} | ${c.length} | ${share(c.filter((r) => r.logo_file).length, c.length)} | ${share(c.filter((r) => r.google_rating).length, c.length)} | ${share(c.filter((r) => r.opening_hours).length, c.length)} | ${share(c.filter((r) => pricedSlugs.has(r.slug)).length, c.length)} | ${share(c.filter((r) => insightSlugs.has(r.slug)).length, c.length)} |`,
  );
}

out.push("\n## Выборка для быстрой проверки\n");
out.push(
  "Для каждого места: открыть страницу на сайте, сайт места и карточку Google; сверить значения и цитаты. Одна неверная цитата или значение — город возвращается агенту «Поправкой» и выборка повторяется с новым `--seed`.\n",
);
for (const cat of categories) {
  const c = rows.filter((r) => r.category === cat);
  out.push(`### ${cat}\n`);
  for (const r of draw(c, per)) {
    out.push(`- **${r.name}** (\`${r.slug}\`)`);
    out.push(`  - страница: ${SITE_URL}/en/business/${r.slug}/`);
    if (r.website) out.push(`  - сайт: ${r.website}`);
    if (r.google_maps_url) out.push(`  - Google Maps: ${r.google_maps_url}`);
    out.push(`  - адрес: ${r.address || "—"}; телефон: ${r.phone || "—"}`);
    out.push(`  - рейтинг: ${r.google_rating ? `${r.google_rating} (${r.google_rating_count} оценок, ${r.rating_observed_at})` : "—"}`);
    out.push(`  - часы: ${r.opening_hours || "—"}`);
    if (insightSlugs.has(r.slug)) out.push(`  - сводка отзывов: есть (\`review-insights/${r.slug}.json\`, лента \`feed\` — сверить 2–3 записи с Google)`);
    const ev = (evidence.get(r.slug) ?? []).slice(0, 2);
    for (const e of ev) out.push(`  - цитата (${e.field}): «${(e.quote ?? "").slice(0, 160)}» — ${e.source_url}`);
    if (!ev.length) out.push("  - цитат в evidence нет — сверить значения с сайтом места вручную");
    out.push("  - [ ] проверено");
  }
  out.push("");
}
console.log(out.join("\n"));
process.exit(allPass ? 0 : 1);
