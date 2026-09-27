// Online check of one city's data against the places' own websites - what
// check-city (offline) cannot see. Data agents run it before opening a PR;
// reviewers run it on the PR branch. Exit code 1 means the PR is not ready.
//
//   npm run verify-city -- warszawa
//
// Per place with a website (lesson from the first Warszawa data, 2026-09-27:
// invented phone numbers and domains that do not exist passed check-city):
// - the domain exists and the site answers;
// - the phone from businesses.csv is written on the site (home page or a
//   "kontakt" / "contact" page);
// - "prices: none (no cenník page ...)" while the site links a price page
//   (cenník, cennik, ceny, price) - a missed price list.
// Uses curl with a desktop browser user agent: some sites refuse short
// ones (docs/playbooks/quality.md).
import { execFile } from "child_process";
import fs from "fs";
import path from "path";
import Papa from "papaparse";

type Row = Record<string, string>;

const city = process.argv[2];
if (!city) {
  console.error("Usage: npm run verify-city -- <city-slug>");
  process.exit(2);
}
const dir = path.join(process.cwd(), "..", "data", "cities", city);
if (!fs.existsSync(dir)) {
  console.error(`No data folder: ${dir}`);
  process.exit(2);
}
const rows: Row[] = fs
  .readdirSync(dir)
  .filter((f) => /^businesses.*\.csv$/.test(f))
  .flatMap((f) => Papa.parse<Row>(fs.readFileSync(path.join(dir, f), "utf-8"), { header: true, skipEmptyLines: true }).data)
  .filter((r) => !/^yes$/i.test((r.closed ?? "").trim()));

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36";

function curl(url: string): Promise<{ code: number; body: string }> {
  return new Promise((resolve) => {
    execFile(
      "curl",
      ["-sL", "-A", UA, "--max-time", "25", "-w", "\n%{http_code}", url],
      { maxBuffer: 20 * 1024 * 1024 },
      (_err, stdout) => {
        const out = String(stdout ?? "");
        const i = out.lastIndexOf("\n");
        resolve({ code: Number(out.slice(i + 1)) || 0, body: out.slice(0, i) });
      }
    );
  });
}

async function dnsExists(host: string): Promise<boolean | null> {
  const { body } = await curl(`https://dns.google/resolve?name=${encodeURIComponent(host)}&type=A`);
  try {
    return (JSON.parse(body) as { Status: number }).Status !== 3; // 3 = NXDOMAIN
  } catch {
    return null; // resolver unreachable: unknown
  }
}

const absolute = (href: string, base: string) => {
  try {
    return new URL(href, base).toString();
  } catch {
    return null;
  }
};
const links = (html: string, base: string, re: RegExp) =>
  [...html.matchAll(/href=["']([^"'#]+)["']/gi)]
    .map((m) => m[1])
    .filter((h) => re.test(h) && !/\.(css|js|png|jpe?g|svg|webp)(\?|$)/i.test(h))
    .map((h) => absolute(h, base))
    .filter((h): h is string => !!h);
const digitsOf = (s: string) => s.replace(/\D/g, "");

type Result = { slug: string; dead?: string; phone?: string; missedPrices?: string };

async function check(r: Row): Promise<Result | null> {
  const site = (r.website ?? "").trim();
  if (!site || /facebook\.com|instagram\.com/i.test(site)) return null;
  const res: Result = { slug: r.slug };
  let host = "";
  try {
    host = new URL(site).hostname;
  } catch {
    res.dead = `not a URL: ${site}`;
    return res;
  }
  if ((await dnsExists(host)) === false) {
    res.dead = `domain does not exist: ${host}`;
    return res;
  }
  const home = await curl(site);
  if (!home.body || home.code >= 400 || home.code === 0) {
    res.dead = `site does not answer (HTTP ${home.code}): ${site}`;
    return res;
  }
  // Phone: last 9 digits, on the home page or up to two contact pages.
  const phone = digitsOf(r.phone ?? "").slice(-9);
  if (phone.length === 9) {
    let text = digitsOf(home.body);
    if (!text.includes(phone)) {
      for (const u of links(home.body, site, /kontakt|contact/i).slice(0, 2)) text += digitsOf((await curl(u)).body);
    }
    if (!text.includes(phone)) res.phone = `${r.phone} is not on ${site} (home, contact page)`;
  }
  // Price page while notes say there is none.
  // A note that names the price page and why it does not count ("cenník -
  // price only on request") is fine; "no cenník page" next to a link is not.
  const none = (r.notes ?? "").match(/prices: none \(([^)]*)\)/i)?.[1];
  if (none !== undefined && (/\bno (cenn?[ií]k|price)/i.test(none) || !/cenn?[ií]k|price/i.test(none))) {
    const priceLinks = links(home.body, site, /cenn?[ií]k|\/ceny|price|pricing|oplaty|op%C5%82aty/i);
    if (priceLinks.length) res.missedPrices = `notes say "prices: none", site links ${priceLinks[0]}`;
  }
  return res.dead || res.phone || res.missedPrices ? res : null;
}

async function main() {
  const withSite = rows.filter((r) => (r.website ?? "").trim() && !/facebook\.com|instagram\.com/i.test(r.website));
  const results: Result[] = [];
  const queue = [...rows];
  await Promise.all(
    Array.from({ length: 10 }, async () => {
      for (let r = queue.shift(); r; r = queue.shift()) {
        const res = await check(r);
        if (res) results.push(res);
      }
    })
  );
  results.sort((a, b) => a.slug.localeCompare(b.slug));
  const dead = results.filter((r) => r.dead);
  const phones = results.filter((r) => r.phone);
  const prices = results.filter((r) => r.missedPrices);

  console.log(`\n${city}: ${rows.length} places, ${withSite.length} with a website\n`);
  const section = (title: string, list: Result[], line: (r: Result) => string) => {
    console.log(`${title} (${list.length}):`);
    for (const r of list) console.log(`  ${r.slug}: ${line(r)}`);
    console.log("");
  };
  section("Website does not exist or does not answer", dead, (r) => r.dead!);
  section("Phone not found on the place's site", phones, (r) => r.phone!);
  section("Price page on the site, but notes say none", prices, (r) => r.missedPrices!);

  // A domain that does not exist is always wrong. A phone can legitimately
  // be missing from a site (an image, a booking widget) - a few are fine,
  // a pattern is not. Every missed price page must be looked at.
  const checkedPhones = withSite.length - dead.length;
  const phoneShare = checkedPhones ? phones.length / checkedPhones : 0;
  const failed = dead.some((r) => r.dead!.startsWith("domain does not exist")) || phoneShare > 0.25 || prices.length > 0;
  console.log(
    `Phones not on the site: ${phones.length}/${checkedPhones} (${Math.round(phoneShare * 100)}%, limit 25%)`
  );
  console.log(failed ? "\nNOT VERIFIED: fix the lines above." : "\nVERIFIED");
  process.exit(failed ? 1 : 0);
}

main();
