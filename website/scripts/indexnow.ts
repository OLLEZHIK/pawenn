// IndexNow (Bing, Yandex, Seznam, Naver): tell the search engines which
// pages are new or changed, instead of waiting for their crawlers (owner,
// 2026-10-16). Google does not use IndexNow - for it the sitemap is enough.
//
//   npm run indexnow -- --all                 every URL in the live sitemap
//   npm run indexnow -- --since=2026-10-15    URLs whose <lastmod> is that day or later
//   npm run indexnow -- https://pawenn.com/sk/veterinar/kosice/ ...
//   add --dry to print what would be sent
//
// The key is public by design: the engines check that
// https://pawenn.com/<key>.txt holds it, which proves we own the site.
// The script checks that file first - before the first deploy with it the
// engines would answer 403. Run it after a deploy, not before: the pages
// must be live when the engines come.
import { SITE_URL } from "../lib/site";

const KEY = "51c490ffa14d4260b270a1e0138f218e";
const ENDPOINT = "https://api.indexnow.org/indexnow";
const BATCH = 10_000; // the protocol's limit per request

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const all = args.includes("--all");
const since = args.find((a) => a.startsWith("--since="))?.slice(8);
const given = args.filter((a) => a.startsWith("http"));
if (!all && !since && given.length === 0) {
  console.error("Usage: npm run indexnow -- --all | --since=YYYY-MM-DD | <url> ... [--dry]");
  process.exit(2);
}
const host = new URL(SITE_URL).host;

async function main() {
  const keyUrl = `${SITE_URL}/${KEY}.txt`;
  const keyRes = await fetch(keyUrl);
  const keyText = keyRes.ok ? (await keyRes.text()).trim() : "";
  if (keyText !== KEY) {
    console.error(`Key file ${keyUrl} answers ${keyRes.status}${keyRes.ok ? ` with "${keyText.slice(0, 40)}"` : ""} - deploy public/${KEY}.txt first.`);
    process.exit(1);
  }

  let urls = given;
  if (all || since) {
    const xml = await (await fetch(`${SITE_URL}/sitemap.xml`)).text();
    const entries = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].map((m) => ({
      loc: /<loc>([^<]+)<\/loc>/.exec(m[1])?.[1] ?? "",
      lastmod: /<lastmod>([^<]+)<\/lastmod>/.exec(m[1])?.[1] ?? "",
    }));
    urls = entries.filter((e) => e.loc && (all || e.lastmod.slice(0, 10) >= since!)).map((e) => e.loc);
  }
  urls = [...new Set(urls)].filter((u) => new URL(u).host === host);
  console.log(`${urls.length} URL(s) for ${host}${since ? ` changed since ${since}` : ""}`);
  if (dry || urls.length === 0) {
    urls.slice(0, 10).forEach((u) => console.log(`  ${u}`));
    return;
  }

  for (let i = 0; i < urls.length; i += BATCH) {
    const urlList = urls.slice(i, i + BATCH);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host, key: KEY, keyLocation: keyUrl, urlList }),
    });
    // 200 and 202 mean accepted; 403 key not found, 422 URLs not of this host
    const body = (await res.text()).slice(0, 300);
    console.log(`batch ${i / BATCH + 1}: ${urlList.length} URLs -> HTTP ${res.status}${body ? ` ${body}` : ""}`);
    if (res.status !== 200 && res.status !== 202) process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
