// Checks every guide in website/content/guides/<locale>/*.md before a PR
// (docs/playbooks/guides.md). Exit code 1 means the PR is not ready.
//
//   npm run check-guides
//
// - front matter complete; title <= 60 and description <= 160 characters
//   (what Google shows);
// - at least one official source, each with https and a checked date;
// - data blocks name a real category and a service with prices;
// - links to other guides point to guides that exist;
// - no two guides of a language share a title.
import fs from "fs";
import path from "path";
import { parseGuide, type Guide } from "../lib/guides";
import { ALL_CATEGORIES } from "../lib/categories";
import type { Locale } from "../lib/i18n";

const root = path.join(process.cwd(), "content", "guides");
const locales = fs.existsSync(root) ? fs.readdirSync(root).filter((d) => fs.statSync(path.join(root, d)).isDirectory()) : [];
const guides: Guide[] = [];
const errors: string[] = [];

for (const locale of locales) {
  for (const file of fs.readdirSync(path.join(root, locale)).filter((f) => f.endsWith(".md"))) {
    const slug = file.replace(/\.md$/, "");
    try {
      guides.push(parseGuide(locale as Locale, slug, fs.readFileSync(path.join(root, locale, file), "utf-8")));
    } catch (e) {
      errors.push(`${locale}/${slug}: ${(e as Error).message}`);
    }
  }
}

const priceCodes = new Set(
  fs
    .readdirSync(path.join(process.cwd(), "..", "data", "cities"))
    .filter((c) => fs.existsSync(path.join(process.cwd(), "..", "data", "cities", c, "prices.csv")))
    .flatMap((c) =>
      fs
        .readFileSync(path.join(process.cwd(), "..", "data", "cities", c, "prices.csv"), "utf-8")
        .split("\n")
        .slice(1)
        .map((l) => l.split(",")[1])
        .filter(Boolean)
    )
);

for (const g of guides) {
  const id = `${g.locale}/${g.slug}`;
  const err = (m: string) => errors.push(`${id}: ${m}`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(g.slug)) err("slug: only a-z, 0-9 and single hyphens");
  for (const k of ["title", "description", "h1", "updated", "country"] as const) if (!g[k]) err(`no ${k}`);
  if (g.title.length > 60) err(`title ${g.title.length} characters, max 60`);
  if (g.description.length > 160) err(`description ${g.description.length} characters, max 160`);
  if (g.updated && isNaN(new Date(g.updated).getTime())) err(`updated "${g.updated}" is not a date`);
  if (g.sources.length === 0) err("no sources - every fact needs an official source");
  for (const s of g.sources) {
    if (!/^https:\/\//.test(s.url)) err(`source "${s.url}" is not an https link`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(s.checked)) err(`source ${s.url}: no checked date (YYYY-MM-DD)`);
  }
  for (const c of g.categories) if (!ALL_CATEGORIES.includes(c)) err(`unknown category ${c}`);
  for (const m of g.body.matchAll(/^::(\w+)\s+(\S+)(?:\s+(\S+))?\s*$/gm)) {
    if (!["price", "places"].includes(m[1])) err(`unknown block ::${m[1]}`);
    if (!ALL_CATEGORIES.includes(m[2] as (typeof ALL_CATEGORIES)[number])) err(`::${m[1]}: unknown category ${m[2]}`);
    if (m[1] === "price" && (!m[3] || !priceCodes.has(m[3]))) err(`::price: no prices for service "${m[3] ?? ""}"`);
  }
  for (const m of g.body.matchAll(/\]\((\/[a-z]{2}\/(?:poradna|poradnik|guides)\/([a-z0-9-]+)\/)\)/g)) {
    const [, locale] = m[1].split("/");
    if (!guides.some((o) => o.locale === locale && o.slug === m[2]) && !fs.existsSync(path.join(root, locale, `${m[2]}.md`)))
      err(`link to a guide that does not exist: ${m[1]}`);
  }
}

for (const locale of locales) {
  const titles = guides.filter((g) => g.locale === locale).map((g) => g.title);
  for (const t of new Set(titles)) if (titles.filter((x) => x === t).length > 1) errors.push(`${locale}: two guides titled "${t}"`);
}

console.log(`\nguides: ${guides.length} (${locales.map((l) => `${l} ${guides.filter((g) => g.locale === l).length}`).join(", ")})`);
for (const e of errors) console.log(`  ${e}`);
console.log(errors.length ? "\nNOT READY\n" : "\nREADY\n");
process.exit(errors.length ? 1 : 0);
