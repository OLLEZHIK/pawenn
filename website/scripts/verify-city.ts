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
//   (cenník, cennik, ceny, price) - a missed price list;
// - a fact code with an evidence page ("card_payment: <url>" in notes)
//   is actually named on that page (FACT_WORDS).
// Uses curl with a desktop browser user agent: some sites refuse short
// ones (docs/playbooks/quality.md).
import { execFile } from "child_process";
import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { FACT_WORDS, isGoogleMaps, isSocial, pageText, rawText, squash } from "./evidence";

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

// Fact codes whose evidence page ("code: <url>" in notes, the format before
// evidence.csv) must carry the wording: FACT_WORDS in ./evidence. Lesson
// from Warszawa (2026-09-28): the same card_payment;pet_passport;
// pharmacy_on_site on 28 clinics, each "proved" by a home page that says
// none of it. Codes not listed are not checked.

type Result = { slug: string; dead?: string; phone?: string; missedPrices?: string; facts?: string[]; factsChecked?: number };

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
  // Facts: the evidence page names the fact.
  const pages = new Map<string, string>();
  res.factsChecked = 0;
  for (const code of (r.facts ?? "").split(/[;,]/).map((c) => c.trim()).filter(Boolean)) {
    const words = FACT_WORDS[code];
    const url = (r.notes ?? "").match(new RegExp(`(?:^|;\\s*)${code}: (https?://[^\\s;]+)`))?.[1];
    if (!words || !url) continue;
    if (!pages.has(url)) pages.set(url, (await curl(url)).body.replace(/<[^>]+>/g, " "));
    res.factsChecked++;
    if (!words.test(pages.get(url)!)) (res.facts ??= []).push(`${code} not stated on ${url}`);
  }
  return res;
}

// Evidence quotes (evidence*.csv, docs/playbooks/quality.md rule 8): each
// quote is on its page. Social pages, Google Maps, PDFs and pages that
// render only with JavaScript cannot be read here - listed for the
// reviewer to open by hand.
type Quote = { slug: string; field: string; url: string; quote: string };
const quotes: Quote[] = fs
  .readdirSync(dir)
  .filter((f) => /^evidence.*\.csv$/.test(f))
  .flatMap((f) => Papa.parse<Row>(fs.readFileSync(path.join(dir, f), "utf-8"), { header: true, skipEmptyLines: true }).data)
  .map((e) => ({ slug: e.business_slug, field: (e.field ?? "").trim(), url: (e.source_url ?? "").trim(), quote: (e.quote ?? "").trim() }))
  .filter((e) => e.url && e.quote);
const pageCache = new Map<string, Promise<{ code: number; body: string }>>();
const page = (url: string) => pageCache.get(url) ?? pageCache.set(url, curl(url)).get(url)!;

async function checkQuote(q: Quote): Promise<{ missing?: string; unchecked?: string }> {
  if (isSocial(q.url)) return { unchecked: "social page" };
  if (isGoogleMaps(q.url)) return { unchecked: "Google Maps" };
  if (/\.pdf(\?|#|$)/i.test(q.url)) return { unchecked: "PDF" };
  const { code, body } = await page(q.url);
  if (!body || code >= 400 || code === 0) return { missing: `page does not open (HTTP ${code})` };
  if (body.startsWith("%PDF")) return { unchecked: "PDF" };
  const want = squash(q.quote);
  if (squash(pageText(body)).includes(want) || squash(rawText(body)).includes(want)) return {};
  // A page built by scripts shows curl almost no text; a short plain page
  // (no scripts) is read as it is.
  const builtByScripts =
    /id=["'](root|__next|__nuxt|app)["']|data-reactroot|ng-app|enable javascript|zapnite javascript|włącz javascript/i.test(body) ||
    (body.length > 20_000 && /<script/i.test(body));
  if (pageText(body).replace(/\s+/g, " ").trim().length < 300 && builtByScripts) {
    return { unchecked: "page has almost no text (JavaScript site?)" };
  }
  return { missing: "quote not on the page" };
}

async function main() {
  const withSite = rows.filter((r) => (r.website ?? "").trim() && !/facebook\.com|instagram\.com/i.test(r.website));
  const results: Result[] = [];
  let factsChecked = 0;
  const queue = [...rows];
  await Promise.all(
    Array.from({ length: 10 }, async () => {
      for (let r = queue.shift(); r; r = queue.shift()) {
        const res = await check(r);
        if (res) {
          factsChecked += res.factsChecked ?? 0;
          if (res.dead || res.phone || res.missedPrices || res.facts) results.push(res);
        }
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
  const factMisses = results.flatMap((r) => (r.facts ?? []).map((f) => ({ slug: r.slug, f })));
  console.log(`Fact not stated on its evidence page (${factMisses.length}):`);
  for (const m of factMisses) console.log(`  ${m.slug}: ${m.f}`);
  console.log("");

  // A domain that does not exist is always wrong. A phone can legitimately
  // be missing from a site (an image, a booking widget) - a few are fine,
  // a pattern is not; the same for a fact worded differently than the
  // check expects. Every missed price page must be looked at.
  const checkedPhones = withSite.length - dead.length;
  const phoneShare = checkedPhones ? phones.length / checkedPhones : 0;
  const factShare = factsChecked ? factMisses.length / factsChecked : 0;
  // Quotes: copied from the page, so all of them should be there; a few
  // pages change or hide text from curl - up to 10 %, every one listed.
  const missingQuotes: (Quote & { why: string })[] = [];
  const uncheckedQuotes: (Quote & { why: string })[] = [];
  const quoteQueue = [...quotes];
  await Promise.all(
    Array.from({ length: 10 }, async () => {
      for (let q = quoteQueue.shift(); q; q = quoteQueue.shift()) {
        const res = await checkQuote(q);
        if (res.missing) missingQuotes.push({ ...q, why: res.missing });
        if (res.unchecked) uncheckedQuotes.push({ ...q, why: res.unchecked });
      }
    })
  );
  const checkedQuotes = quotes.length - uncheckedQuotes.length;
  const quoteShare = checkedQuotes ? missingQuotes.length / checkedQuotes : 0;
  if (quotes.length) {
    console.log(`Evidence quote not on its page (${missingQuotes.length}):`);
    for (const q of missingQuotes.sort((a, b) => a.slug.localeCompare(b.slug)))
      console.log(`  ${q.slug} ${q.field}: ${q.why} - ${q.url} - "${q.quote.slice(0, 60)}"`);
    console.log("");
    console.log(`Evidence the script cannot read - the reviewer opens 5 of these by hand (${uncheckedQuotes.length}):`);
    for (const q of uncheckedQuotes.slice(0, 20)) console.log(`  ${q.slug} ${q.field}: ${q.why} - ${q.url}`);
    if (uncheckedQuotes.length > 20) console.log(`  ... and ${uncheckedQuotes.length - 20} more`);
    console.log("");
  }

  const failed =
    dead.some((r) => r.dead!.startsWith("domain does not exist")) ||
    phoneShare > 0.25 ||
    prices.length > 0 ||
    factShare > 0.25 ||
    quoteShare > 0.1;
  console.log(
    `Phones not on the site: ${phones.length}/${checkedPhones} (${Math.round(phoneShare * 100)}%, limit 25%)`
  );
  console.log(`Facts not on their page: ${factMisses.length}/${factsChecked} (${Math.round(factShare * 100)}%, limit 25%)`);
  if (quotes.length) console.log(`Evidence quotes not on their page: ${missingQuotes.length}/${checkedQuotes} (${Math.round(quoteShare * 100)}%, limit 10%)`);
  console.log(failed ? "\nNOT VERIFIED: fix the lines above." : "\nVERIFIED");
  process.exit(failed ? 1 : 0);
}

main();
