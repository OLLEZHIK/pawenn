// Offline-from-the-model extractor for the "site pass" (owner, 2026-10-06:
// agent windows are the bottleneck, so the mechanical part of reading a
// place's own site is done by a script). No model, no cost.
//
//   npm run site-extract -- wien
//   npm run site-extract -- wien --only=vetklinikum,anicura-tierarztpraxis-aspern
//   npm run site-extract -- wien --csv=../data/cities/wien/candidates.csv --limit=10
//
// For every place with its own website (not a social page, not Google
// Maps) it opens the home page and up to two linked pages (contact, prices)
// and writes data/cities/<city>/site-raw/<slug>.json: structured data
// (schema.org JSON-LD, tel: and mailto: links, social links, logo candidates,
// page language), the sentences that mention hours, emergency, languages and
// prices - each one word for word as it stands on the page, so it can go
// into evidence*.csv as a quote - and the text of the price page for the
// agent to turn into a table. The agent then only writes descriptions and
// translations and picks facts from this file instead of opening every site.
//
// What it does not do: sites built in JavaScript, PDFs, social pages (login
// is never bypassed, add-city.md). Those places get "unreadable" and stay
// with the agent. It writes no card values - verify-city still checks them.
import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { isGoogleMaps, isSocial } from "./evidence";

type Row = Record<string, string>;

const UA = "Mozilla/5.0 (compatible; pawenn-site-extract/1.0; +https://github.com/OLLEZHIK/pawenn)";
const MAX_BYTES = 1_500_000;
const TIMEOUT_MS = 12_000;

const slugify = (s: string) =>
  s
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

let lastError = "";

/** One try; a failed first try is repeated once (the first Vienna run lost
 *  18 live sites to timeouts under 4 parallel requests). lastError says why. */
async function get(url: string, tries = 2): Promise<{ url: string; html: string } | null> {
  for (let i = 0; i < tries; i++) {
    const t = setTimeout(() => ctl.abort(), TIMEOUT_MS);
    const ctl = new AbortController();
    try {
      const res = await fetch(url, { signal: ctl.signal, redirect: "follow", headers: { "user-agent": UA, "accept-language": "de,en;q=0.8,sk;q=0.6,pl;q=0.5,cs;q=0.5" } });
      if (!res.ok) {
        lastError = `HTTP ${res.status}`;
        if (res.status === 404 || res.status === 410) return null;
        continue;
      }
      if (!/html|xml/i.test(res.headers.get("content-type") ?? "html")) {
        lastError = `not HTML (${res.headers.get("content-type")})`;
        return null;
      }
      const buf = Buffer.from(await res.arrayBuffer()).subarray(0, MAX_BYTES);
      return { url: res.url, html: buf.toString("utf8") };
    } catch (e) {
      lastError = ctl.signal.aborted ? "timeout" : String((e as { cause?: { code?: string } }).cause?.code ?? (e as Error).message);
    } finally {
      clearTimeout(t);
    }
  }
  return null;
}

const decode = (s: string) =>
  s
    .replace(/&nbsp;|&#160;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)));

/** Visible text, one block per line (block tags become line breaks). */
function toText(html: string): string {
  return decode(
    html
      .replace(/<(script|style|noscript|svg|template)[\s\S]*?<\/\1>/gi, " ")
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<\/?(p|div|li|ul|ol|br|h[1-6]|tr|td|th|table|section|article|header|footer|nav|main|dd|dt|address)[^>]*>/gi, "\n")
      .replace(/<[^>]+>/g, " "),
  )
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter((l) => l.length > 0)
    .join("\n");
}

const attr = (tag: string, name: string) => decode((tag.match(new RegExp(`${name}\\s*=\\s*("([^"]*)"|'([^']*)'|([^\\s>]+))`, "i")) ?? [])[2] ?? (tag.match(new RegExp(`${name}\\s*=\\s*'([^']*)'`, "i")) ?? [])[1] ?? "");

function abs(href: string, base: string): string | null {
  try {
    return new URL(href, base).toString();
  } catch {
    return null;
  }
}

const KEYWORDS = {
  hours: /\b(öffnungszeiten|ordinationszeiten|sprechzeiten|opening hours|business hours|godziny otwarcia|otváracie hodiny|otevírací doba|ordinační hodiny|otwarte|mo(ntag)?\b[^.\n]{0,12}\d{1,2}[:.]\d{2}|pon(delok|iedziałek)?\b[^.\n]{0,12}\d{1,2}[:.]\d{2})/i,
  emergency: /\b(notdienst|notfall|notaufnahme|24\s?\/\s?7|24[- ]?(stunden|h\b|hodin|godz)|non[- ]?stop|nonstop|rund um die uhr|pohotovos|pogotowie|całodobow|emergency)/i,
  languages: /\b(englisch|english|deutsch|german|slowakisch|tschechisch|ungarisch|türkisch|russisch|polnisch|sprachen|languages|jazyk|języki|angličtin|angielsk)/i,
  price: /(€|eur\b|zł|pln\b|kč|czk\b)\s?\d|\d\s?(€|eur\b|zł|pln\b|kč|czk\b)|\b(preise?|preisliste|honorar|gebühr(en)?|tarife?|cennik|cenník|ceník|ceny|price)\b/i,
  homeVisit: /(hausbesuch|home visit|domov(é|ská) návštev|wizyty domowe|výjezd|výjezdy)/i,
};

/** Sentences/lines copied word for word, 10-400 chars (the evidence limits). */
function quotes(text: string, re: RegExp, max: number): string[] {
  const out: string[] = [];
  for (const line of text.split("\n")) {
    if (!re.test(line)) continue;
    const parts = line.length > 400 ? line.split(/(?<=[.!?])\s+/) : [line];
    for (const p of parts) {
      const q = p.trim();
      if (q.length >= 10 && q.length <= 400 && !out.includes(q)) out.push(q);
      if (out.length >= max) return out;
    }
  }
  return out;
}

function jsonLd(html: string): unknown[] {
  const out: unknown[] = [];
  for (const m of html.matchAll(/<script[^>]+type\s*=\s*["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const v = JSON.parse(decode(m[1]).trim());
      out.push(...(Array.isArray(v) ? v : v["@graph"] ?? [v]));
    } catch {
      /* broken JSON-LD: ignore */
    }
  }
  return out;
}

const BUSINESS_TYPE = /(LocalBusiness|VeterinaryCare|AnimalShelter|Store|PetStore|HealthAndBeautyBusiness|ProfessionalService|Organization)/i;

function structured(html: string) {
  const items = jsonLd(html).filter((x): x is Record<string, unknown> => typeof x === "object" && x !== null);
  const biz = items.find((x) => BUSINESS_TYPE.test(String(([] as unknown[]).concat(x["@type"] ?? []).join(" "))));
  if (!biz) return null;
  const pick = (k: string) => biz[k];
  return {
    type: pick("@type"),
    name: pick("name"),
    telephone: pick("telephone"),
    email: pick("email"),
    address: pick("address"),
    openingHours: pick("openingHours") ?? pick("openingHoursSpecification"),
    sameAs: pick("sameAs"),
    priceRange: pick("priceRange"),
  };
}

function page(url: string, html: string) {
  const text = toText(html);
  const tags = (re: RegExp) => [...html.matchAll(re)].map((m) => m[0]);
  const links = tags(/<a\s[^>]*>/gi).map((t) => ({ href: attr(t, "href"), tag: t }));
  const tel = [...new Set(links.map((l) => l.href).filter((h) => /^tel:/i.test(h)).map((h) => decodeURIComponent(h.slice(4)).trim()))];
  const mail = [...new Set(links.map((l) => l.href).filter((h) => /^mailto:/i.test(h)).map((h) => h.slice(7).split("?")[0].trim()))];
  const social = [...new Set(links.map((l) => abs(l.href, url)).filter((h): h is string => !!h && isSocial(h)))];
  const imgs = tags(/<(meta|link)\s[^>]*>/gi);
  const og = imgs.filter((t) => /property\s*=\s*["']og:image["']|name\s*=\s*["']twitter:image["']/i.test(t)).map((t) => abs(attr(t, "content"), url));
  const icons = imgs.filter((t) => /rel\s*=\s*["'][^"']*(icon|apple-touch-icon)[^"']*["']/i.test(t)).map((t) => abs(attr(t, "href"), url));
  const logos = tags(/<img\s[^>]*>/gi)
    .filter((t) => /logo/i.test(t))
    .map((t) => abs(attr(t, "src") || attr(t, "data-src"), url));
  const lang = (html.match(/<html[^>]*\slang\s*=\s*["']?([a-zA-Z-]+)/i) ?? [])[1] ?? null;
  return {
    url,
    lang,
    title: decode((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) ?? [])[1] ?? "").replace(/\s+/g, " ").trim(),
    metaDescription: attr((html.match(/<meta\s[^>]*name\s*=\s*["']description["'][^>]*>/i) ?? [""])[0], "content"),
    tel,
    mail,
    social,
    logoCandidates: [...new Set([...logos, ...icons, ...og].filter((x): x is string => !!x))].slice(0, 8),
    structured: structured(html),
    text,
    links: links.map((l) => ({ href: abs(l.href, url), label: toText(l.tag) })).filter((l) => l.href),
    html,
  };
}

const LINK_CONTACT = /(kontakt|contact|impressum|ordination|anfahrt|standort)/i;
const LINK_PRICE = /(preis|preise|tarif|leistungen|gebühr|honorar|cennik|cenník|ceník|ceny|price|pricing)/i;

function subpages(base: string, links: { href: string | null; label: string }[]): { kind: "contact" | "price"; url: string }[] {
  const host = new URL(base).hostname.replace(/^www\./, "");
  const found: { kind: "contact" | "price"; url: string }[] = [];
  for (const l of links) {
    if (!l.href) continue;
    let u: URL;
    try {
      u = new URL(l.href);
    } catch {
      continue;
    }
    if (u.hostname.replace(/^www\./, "") !== host || /\.(pdf|jpe?g|png|zip)$/i.test(u.pathname)) continue;
    const hay = `${u.pathname} ${l.label}`;
    const kind = LINK_PRICE.test(hay) ? "price" : LINK_CONTACT.test(hay) ? "contact" : null;
    if (kind && !found.some((f) => f.kind === kind)) found.push({ kind, url: u.toString().split("#")[0] });
  }
  return found;
}

type Result = Record<string, unknown>;

async function extract(row: Row): Promise<Result> {
  const site = (row.website ?? "").trim();
  const base: Result = { name: row.name, website: site, fetched_at: new Date().toISOString().slice(0, 10) };
  if (!site) return { ...base, status: "no-site" };
  if (isSocial(site) || isGoogleMaps(site)) return { ...base, status: "social-or-maps", note: "not opened: social/Maps pages are read by the agent (no login bypass)" };
  const home = await get(site);
  if (!home) return { ...base, status: "unreadable", note: `no HTML answer: ${lastError} (the agent opens the site; a 404 may mean a wrong URL in candidates.csv)` };
  const p = page(home.url, home.html);
  const pages = [p];
  for (const s of subpages(home.url, p.links)) {
    const r = await get(s.url);
    if (r) pages.push({ ...page(r.url, r.html), kind: s.kind } as (typeof pages)[number]);
  }
  const allText = pages.map((x) => x.text).join("\n");
  const priceText = pages.filter((x) => (x as { kind?: string }).kind === "price").map((x) => x.text).join("\n");
  const sparse = p.text.length < 300;
  return {
    ...base,
    status: sparse ? "thin" : "ok",
    note: sparse ? "almost no text in the HTML: a JavaScript site or a splash page, the agent must open it" : undefined,
    pages: pages.map((x) => ({ url: x.url, kind: (x as { kind?: string }).kind ?? "home", lang: x.lang, title: x.title })),
    lang: p.lang,
    metaDescription: p.metaDescription,
    structured: pages.map((x) => x.structured).find(Boolean) ?? null,
    phones_on_site: [...new Set(pages.flatMap((x) => x.tel))],
    emails: [...new Set(pages.flatMap((x) => x.mail))],
    social: [...new Set(pages.flatMap((x) => x.social))],
    logo_candidates: [...new Set(pages.flatMap((x) => x.logoCandidates))].slice(0, 10),
    price_page: pages.find((x) => (x as { kind?: string }).kind === "price")?.url ?? null,
    // each string below is a verbatim line of a page: usable as an evidence quote
    quotes: {
      hours: quotes(allText, KEYWORDS.hours, 6),
      emergency: quotes(allText, KEYWORDS.emergency, 4),
      languages: quotes(allText, KEYWORDS.languages, 4),
      home_visits: quotes(allText, KEYWORDS.homeVisit, 2),
      prices: quotes(priceText || allText, KEYWORDS.price, 12),
    },
    home_text: p.text.slice(0, 3500),
    price_text: priceText.slice(0, 6000) || null,
  };
}

async function pool<T, R>(items: T[], n: number, fn: (x: T, i: number) => Promise<R>): Promise<R[]> {
  const out: R[] = new Array(items.length);
  let next = 0;
  await Promise.all(
    Array.from({ length: n }, async () => {
      while (next < items.length) {
        const i = next++;
        out[i] = await fn(items[i], i);
      }
    }),
  );
  return out;
}

async function main() {
  const args = process.argv.slice(2);
  const city = args.find((a) => !a.startsWith("--"));
  if (!city) {
    console.error("usage: npm run site-extract -- <city> [--csv=path] [--only=slug,slug] [--limit=N]");
    process.exit(2);
  }
  const opt = (k: string) => (args.find((a) => a.startsWith(`--${k}=`)) ?? "").slice(k.length + 3);
  const dir = path.join(__dirname, "..", "..", "data", "cities", city);
  const csv = opt("csv") || path.join(dir, "candidates.csv");
  const only = opt("only") ? new Set(opt("only").split(",")) : null;
  const limit = Number(opt("limit")) || Infinity;
  let rows = (Papa.parse<Row>(fs.readFileSync(csv, "utf8"), { header: true, skipEmptyLines: true }).data as Row[]).filter((r) => r.name);
  if (only) rows = rows.filter((r) => only.has(slugify(r.name)));
  rows = rows.slice(0, limit);
  const out = path.join(dir, "site-raw");
  fs.mkdirSync(out, { recursive: true });

  const t0 = Date.now();
  const results = await pool(rows, 3, async (r, i) => {
    const res = await extract(r);
    fs.writeFileSync(path.join(out, `${slugify(r.name)}.json`), JSON.stringify(res, null, 1) + "\n");
    process.stderr.write(`\r${i + 1}/${rows.length}`);
    return res;
  });
  process.stderr.write("\n");

  const count = (s: string) => results.filter((r) => r.status === s).length;
  const have = (f: (r: Result) => boolean) => results.filter((r) => r.status === "ok" || r.status === "thin").filter(f).length;
  const read = count("ok") + count("thin");
  console.log(`site-extract ${city}: ${rows.length} places in ${Math.round((Date.now() - t0) / 1000)} s -> ${path.relative(process.cwd(), out)}`);
  console.log(`  read ok ${count("ok")}, thin (JS) ${count("thin")}, unreadable ${count("unreadable")}, social/Maps ${count("social-or-maps")}, no site ${count("no-site")}`);
  const q = (k: string) => have((r) => ((r.quotes as Record<string, string[]>)?.[k]?.length ?? 0) > 0);
  console.log(`  of ${read} read: phone on site ${have((r) => (r.phones_on_site as string[]).length > 0)}, JSON-LD ${have((r) => !!r.structured)}, social links ${have((r) => (r.social as string[]).length > 0)}, logo candidates ${have((r) => (r.logo_candidates as string[]).length > 0)}, price page ${have((r) => !!r.price_page)}`);
  console.log(`  quotes found: hours ${q("hours")}, emergency ${q("emergency")}, languages ${q("languages")}, prices ${q("prices")}`);
}

main();
