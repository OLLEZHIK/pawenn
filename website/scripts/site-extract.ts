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
// Some sites answer 403/429/503 to anything that is not a browser (Berlin:
// 4 of 100). The second try asks the way a browser does - still one page,
// no login, nothing a visitor could not open.
const BROWSER_UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36";
let acceptLanguage = "de,en;q=0.8,sk;q=0.6,pl;q=0.5,cs;q=0.5";
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
      const browser = i > 0 && /^HTTP (403|429|503)/.test(lastError);
      const headers: Record<string, string> = browser
        ? { "user-agent": BROWSER_UA, "accept-language": acceptLanguage, accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8" }
        : { "user-agent": UA, "accept-language": acceptLanguage };
      const res = await fetch(url, { signal: ctl.signal, redirect: "follow", headers });
      if (!res.ok) {
        lastError = `HTTP ${res.status}${browser ? " (also as a browser)" : ""}`;
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
      // A table row and a <dt>/<dd> pair stay one line ("Montag 08:00 - 18:00"):
      // verify-city compares quotes without spaces, so the joined line is
      // still word for word what the page says.
      .replace(/<\/?(td|th|dd)[^>]*>|<\/dt>/gi, " ")
      .replace(/<\/?(p|div|li|ul|ol|br|h[1-6]|tr|table|section|article|header|footer|nav|main|dt|address)[^>]*>/gi, "\n")
      .replace(/<[^>]+>/g, " "),
  )
    .split("\n")
    .map((l) => l.replace(/\s+/g, " ").trim())
    .filter((l) => l.length > 0)
    .reduce<string[]>((out, l) => {
      // "Mo - Fr" in one <div>, "08:00 - 18:00" in the next: one line
      const prev = out[out.length - 1];
      if (prev !== undefined && DAY_ONLY.test(prev) && TIME_START.test(l)) out[out.length - 1] = `${prev} ${l}`;
      else out.push(l);
      return out;
    }, [])
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

// Day names and abbreviations in the site languages (de, en, sk, cs, pl).
const DAY =
  "(montag|dienstag|mittwoch|donnerstag|freitag|samstag|sonntag|monday|tuesday|wednesday|thursday|friday|saturday|sunday|" +
  "pondelok|utorok|streda|štvrtok|piatok|sobota|nedeľa|pondělí|úterý|středa|čtvrtek|pátek|neděle|" +
  "poniedziałek|wtorek|środa|czwartek|piątek|niedziela|" +
  "mo|di|mi|do|fr|sa|so|mon|tue|tues|wed|thu|thur|thurs|fri|sat|sun|po|ut|út|st|št|čt|pi|pá|ne|pon|wt|śr|czw|pt|sob|nd|niedz)";
const TIME = "(\\d{1,2}[:.]\\d{2}|\\d{1,2}\\s?(am|pm|a\\.m\\.|p\\.m\\.|uhr|h\\b))";
// a line that is only days: "Mo - Fr", "Montag:", "Mon–Fri"
const DAY_ONLY = new RegExp(`^${DAY}\\.?(\\s*[-–—,&+/]\\s*${DAY}\\.?)*\\s*:?$`, "iu");
const TIME_START = new RegExp(
  `^(${TIME}|\\d{1,2}\\s*(-|–|—|bis\\b|to\\b|do\\b|until\\b)|geschlossen|closed|zatvoren|zavřeno|zamknięte|nieczynne|nach vereinbarung|by appointment)`,
  "iu",
);
const TIME_ANY = new RegExp(TIME, "iu");
// with no time in it, a line about hours is evidence only when it says how the place works
const HOURS_NO_TIME = /(vereinbarung|appointment|dohode|objednání|umówieniu|rund um die uhr|24\s?h\b|24\s?\/\s?7|nonstop|non-stop|24 stunden|24 hours)/i;
const HOURS_LINE = new RegExp(`(^|[^\\p{L}])${DAY}(?!\\p{L})\\.?[^\\p{L}\\d\\n]{0,6}(${DAY}(?!\\p{L})\\.?)?[^\\n]{0,25}?${TIME}`, "iu");
const HOURS_WORDS =
  /(öffnungszeit|oeffnungszeit|ordinationszeit|sprechzeit|sprechstunde|opening hours|business hours|office hours|hours of operation|open daily|godziny otwarcia|godziny przyjęć|otváracie hodiny|ordinačné hodiny|otevírací doba|ordinační hodiny|nach (telefonischer )?vereinbarung|by appointment only|po dohode|na objednání|po wcześniejszym umówieniu)/i;
// Language names as whole words ("deutsch", not "Deutschland") and a word
// about speaking them: the staff's languages, not the site's language
// switcher or the law's "German law applies" (Berlin, 2026-10-06).
const LANGUAGE_NAME =
  /(^|[^\p{L}])(englisch\p{L}{0,2}|english|deutsch\p{L}{0,2}|german|französisch\p{L}{0,2}|french|spanisch\p{L}{0,2}|spanish|italienisch\p{L}{0,2}|italian|türkisch\p{L}{0,2}|turkish|russisch\p{L}{0,2}|russian|polnisch\p{L}{0,2}|polish|ukrainisch\p{L}{0,2}|ukrainian|arabisch\p{L}{0,2}|arabic|ungarisch\p{L}{0,2}|hungarian|kroatisch\p{L}{0,2}|serbisch\p{L}{0,2}|slowakisch\p{L}{0,2}|tschechisch\p{L}{0,2}|angličtin\p{L}*|anglicky|nemčin\p{L}*|němčin\p{L}*|angielsk\p{L}*|niemieck\p{L}*|rosyjsk\p{L}*|ukraińsk\p{L}*)(?![\p{L}])/iu;
const SPEAK_WORDS =
  /(sprechen|spreche|spricht|sprachkenntnis|fremdsprach|sprachen\s*:|mehrsprachig|auch auf|speak|spoken|speaking|languages\s*:|in english|po anglicky|po angielsku|w języku|hovoríme|hovorí|komunikujeme|mluvíme|mluví|domluvíte|mówimy|mówi|porozumiesz|obsługa w języku|języki\s*:)/i;
const LEGAL_PAGE = /(impressum|datenschutz|privacy|cookie|agb|terms|nutzungsbedingung|gdpr|dsgvo|ochrana-osobnych|ochrana-osobních|polityka-prywatnosci|rodo|regulamin)/i;

type Match = RegExp | ((line: string) => boolean);
const matches = (m: Match, line: string) => (typeof m === "function" ? m(line) : m.test(line));

const KEYWORDS: Record<"hours" | "emergency" | "languages" | "price" | "homeVisit", Match> = {
  // "Sprechzeiten" alone is a heading, not a quote of the hours
  hours: (l) => HOURS_LINE.test(l) || (HOURS_WORDS.test(l) && (TIME_ANY.test(l) || HOURS_NO_TIME.test(l))),
  emergency: /\b(notdienst|notfall|notaufnahme|24\s?\/\s?7|24[- ]?(stunden|h\b|hodin|godz)|non[- ]?stop|nonstop|rund um die uhr|pohotovos|pogotowie|całodobow|emergency)/i,
  languages: (l) => LANGUAGE_NAME.test(l) && SPEAK_WORDS.test(l) && !/cookie|datenschutz|privacy|impressum/i.test(l),
  price: /(€|eur\b|zł|pln\b|kč|czk\b|\$|usd\b)\s?\d|\d\s?(€|eur\b|zł|pln\b|kč|czk\b|usd\b)|\b(preise?|preisliste|honorar|gebühr(en)?|tarife?|cennik|cenník|ceník|ceny|price)\b/i,
  homeVisit: /(hausbesuch|home visit|domov(é|ská) návštev|wizyty domowe|výjezd|výjezdy)/i,
};

/** Sentences/lines copied word for word, 10-400 chars (the evidence limits). */
function quotes(text: string, re: Match, max: number): string[] {
  const out: string[] = [];
  for (const line of text.split("\n")) {
    if (!matches(re, line)) continue;
    const parts = line.length > 400 ? line.split(/(?<=[.!?])\s+/) : [line];
    for (const p of parts) {
      const q = p.trim();
      if (q.length >= 10 && q.length <= 400 && !out.includes(q)) out.push(q);
      if (out.length >= max) return out;
    }
  }
  return out;
}

type Quote = { quote: string; url: string };

/** Quotes from several pages, each with the page it stands on (evidence needs source_url). */
function quotesFrom(pages: { url: string; text: string }[], re: Match, max: number): Quote[] {
  const out: Quote[] = [];
  for (const pg of pages) {
    for (const quote of quotes(pg.text, re, max)) {
      if (!out.some((o) => o.quote === quote)) out.push({ quote, url: pg.url });
      if (out.length >= max) return out;
    }
  }
  return out;
}

const digits = (v: string) => v.replace(/\D/g, "");

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
    // the link's own text, not just its opening tag: "Öffnungszeiten" in <a href="/praxis">Öffnungszeiten</a>
    links: [...html.matchAll(/<a\s[^>]*>([\s\S]*?)<\/a>/gi)]
      .map((m) => ({ href: abs(attr(m[0].slice(0, m[0].indexOf(">") + 1), "href"), url), label: toText(m[1]).replace(/\n/g, " ") }))
      .filter((l) => l.href),
    html,
  };
}

// Which linked pages to open besides the home page, at most one of each.
// Hours are on the contact or "about the practice" page more often than on
// the home page (Berlin: 14 of 21 hour quotes stood elsewhere). The legal
// notice is opened only when there is no contact page (it has the phone,
// but its "Sprache: Deutsch" is not a language the staff speaks).
type Kind = "price" | "hours" | "contact" | "about" | "legal";
const LINKS: [Kind, RegExp][] = [
  ["price", /(preis|tarif|leistungen-und-kosten|kosten|gebühr|honorar|cennik|cenník|ceník|ceny|price|pricing|rates)/i],
  ["hours", /(öffnungszeit|oeffnungszeit|sprechzeit|sprechstunde|ordinationszeit|opening|hours|godziny|otv[aá]rac|otev[ií]rac|ordina[cč]n)/i],
  ["contact", /(kontakt|contact|anfahrt|standort|location|kontakty)/i],
  ["about", /(über-uns|ueber-uns|über uns|about|team|praxis|unsere-praxis|o-nas|o nás|o-nás)/i],
  ["legal", /(impressum|imprint)/i],
];

function subpages(base: string, links: { href: string | null; label: string }[]): { kind: Kind; url: string }[] {
  const host = new URL(base).hostname.replace(/^www\./, "");
  const found: { kind: Kind; url: string }[] = [];
  for (const l of links) {
    if (!l.href) continue;
    let u: URL;
    try {
      u = new URL(l.href);
    } catch {
      continue;
    }
    if (u.hostname.replace(/^www\./, "") !== host || /\.(pdf|jpe?g|png|zip)$/i.test(u.pathname)) continue;
    const hay = `${decodeURIComponent(u.pathname)} ${l.label}`;
    const kind = LINKS.find(([, re]) => re.test(hay))?.[0];
    const url = u.toString().split("#")[0];
    if (kind && url !== base && !found.some((f) => f.kind === kind || f.url === url)) found.push({ kind, url });
  }
  return found.some((f) => f.kind === "contact") ? found.filter((f) => f.kind !== "legal") : found;
}

/** Linked PDFs that look like a price list: the script does not read PDFs, the agent opens them. */
function pricePdfs(links: { href: string | null; label: string }[]): string[] {
  return [
    ...new Set(
      links
        .filter((l) => l.href && /\.pdf($|\?)/i.test(l.href) && LINKS[0][1].test(`${l.href} ${l.label}`))
        .map((l) => l.href as string),
    ),
  ].slice(0, 5);
}

type Result = Record<string, unknown>;

// Country calling codes of the cities (as in sanity.ts).
const DIAL: Record<string, string> = { PL: "48", SK: "421", CZ: "420", AT: "43", DE: "49", US: "1" };
let dial = "";

/** The number without country code, trunk 0 or "(0)": "+43 (0)1 347 43",
 *  "0043 1 34743" and "01 34743" are all "134743". */
function national(phone: string): string {
  let d = phone.replace(/\(0\)/g, "").replace(/[^\d+]/g, "");
  if (d.startsWith("+")) d = d.slice(1).startsWith(dial) ? d.slice(1 + dial.length) : d.slice(1);
  else if (dial && d.startsWith("00" + dial)) d = d.slice(2 + dial.length);
  return d.replace(/^0+/, "");
}

function phoneCheck(csvPhone: string, tels: string[], text: string): string {
  const want = national(csvPhone);
  if (want.length < 5) return "no-phone-in-csv";
  // tel: links and JSON-LD by the whole number; the page text by its digits
  // (separators, spaces and "(0)" dropped), where a trunk 0 may stand before it.
  const onSite = tels.some((t) => national(t) === want) || digits(text.replace(/\(0\)/g, "")).includes(want);
  return onSite ? "on-site" : "not-found";
}

// Price lines: "Baden & Föhnen ab 45 €", "Kastration Kater | 120,00 EUR" (a
// table row is one line). The service text and the amount as the page writes
// them; which price code it is, the agent decides.
const CUR = "(€|eur|zł|pln|kč|czk|\\$|usd|us\\$)";
const AMOUNT = "(\\d{1,3}(?:[ .]\\d{3})*(?:[.,]\\d{1,2})?|\\d+)(?:,-|,–)?";
const PRICE_LINE = new RegExp(`(?:${CUR}\\s?${AMOUNT}|${AMOUNT}\\s?${CUR})`, "iu");
const CURRENCY: Record<string, string> = { "€": "EUR", eur: "EUR", "zł": "PLN", pln: "PLN", "kč": "CZK", czk: "CZK", $: "USD", usd: "USD", "us$": "USD" };

function priceRows(pages: { url: string; text: string }[]) {
  const out: { service: string; amount: number; currency: string; quote: string; url: string }[] = [];
  for (const pg of pages) {
    for (const line of pg.text.split("\n")) {
      if (line.length > 200) continue;
      const m = PRICE_LINE.exec(line);
      if (!m) continue;
      const service = line.slice(0, m.index).replace(/[\s:|.…–-]+$/u, "").replace(/\b(ab|from|od|już od|pauschal)$/i, "").trim();
      const raw = (m[2] ?? m[3]).replace(/[ .](?=\d{3}\b)/g, "").replace(",", ".");
      const amount = Number(raw);
      // a service is words ("+", "(", "125g" are not); shipping is not a service
      if (!/\p{L}{3}/u.test(service) || service.length > 120 || !(amount > 0) || /versand|shipping|lieferung|doprava|wysyłka/i.test(line)) continue;
      if (out.some((o) => o.quote === line)) continue;
      out.push({ service, amount, currency: CURRENCY[(m[1] ?? m[4]).toLowerCase()] ?? "", quote: line, url: pg.url });
      if (out.length >= 40) return out;
    }
  }
  return out;
}

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
  const kindOf = (x: (typeof pages)[number]) => (x as { kind?: Kind }).kind ?? "home";
  const allText = pages.map((x) => x.text).join("\n");
  const priceText = pages.filter((x) => kindOf(x) === "price").map((x) => x.text).join("\n");
  // hours: the hours and contact pages first; languages: never the legal pages
  const ORDER: Record<string, number> = { hours: 0, contact: 1, home: 2, about: 3, price: 4, legal: 5 };
  const forHours = [...pages].sort((a, b) => ORDER[kindOf(a)] - ORDER[kindOf(b)]);
  const forLanguages = pages.filter((x) => kindOf(x) !== "legal" && !LEGAL_PAGE.test(new URL(x.url).pathname));
  const pricePages = priceText ? pages.filter((x) => kindOf(x) === "price") : pages;
  const structuredAll = pages.map((x) => x.structured).filter(Boolean);
  const ldPhones = structuredAll.map((x) => x?.telephone).flat().filter((t): t is string => typeof t === "string");
  const sparse = p.text.length < 300;
  return {
    ...base,
    status: sparse ? "thin" : "ok",
    note: sparse ? "almost no text in the HTML: a JavaScript site or a splash page, the agent must open it" : undefined,
    pages: pages.map((x) => ({ url: x.url, kind: kindOf(x), lang: x.lang, title: x.title })),
    lang: p.lang,
    metaDescription: p.metaDescription,
    structured: pages.map((x) => x.structured).find(Boolean) ?? null,
    phones_on_site: [...new Set(pages.flatMap((x) => x.tel))],
    emails: [...new Set(pages.flatMap((x) => x.mail))],
    social: [...new Set(pages.flatMap((x) => x.social))],
    logo_candidates: [...new Set(pages.flatMap((x) => x.logoCandidates))].slice(0, 10),
    price_page: pages.find((x) => kindOf(x) === "price")?.url ?? null,
    // phone from candidates.csv against the site (verify-city does the same later)
    phone_check: phoneCheck(row.phone ?? "", [...pages.flatMap((x) => x.tel), ...ldPhones], allText),
    // each quote is a verbatim line of the page named in its url: usable in evidence*.csv
    quotes: {
      hours: quotesFrom(forHours, KEYWORDS.hours, 8),
      emergency: quotesFrom(pages, KEYWORDS.emergency, 4),
      languages: quotesFrom(forLanguages, KEYWORDS.languages, 4),
      home_visits: quotesFrom(pages, KEYWORDS.homeVisit, 2),
      prices: quotesFrom(pricePages, KEYWORDS.price, 12),
    },
    // service + amount as written, for prices.csv (the agent picks the code)
    price_rows: priceRows(pricePages),
    price_pdfs: [...new Set(pages.flatMap((x) => pricePdfs(x.links)))].slice(0, 5),
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
    console.error("usage: npm run site-extract -- <city> [--csv=path] [--only=slug,slug] [--limit=N] [--refresh]");
    process.exit(2);
  }
  const opt = (k: string) => (args.find((a) => a.startsWith(`--${k}=`)) ?? "").slice(k.length + 3);
  const dir = path.join(__dirname, "..", "..", "data", "cities", city);
  const csv = opt("csv") || path.join(dir, "candidates.csv");
  const only = opt("only") ? new Set(opt("only").split(",")) : null;
  const limit = Number(opt("limit")) || Infinity;
  const refresh = args.includes("--refresh");
  // the city's language first in Accept-Language; its country code for phones
  try {
    const meta = JSON.parse(fs.readFileSync(path.join(dir, "city.json"), "utf8")) as { country?: string; locale?: string };
    dial = DIAL[(meta.country ?? "").toUpperCase()] ?? "";
    if (meta.locale && meta.locale !== "en") acceptLanguage = `${meta.locale},en;q=0.8`;
    else if (meta.locale === "en") acceptLanguage = "en-US,en;q=0.9";
  } catch {
    /* no city.json yet (batch 0): defaults */
  }
  let rows = (Papa.parse<Row>(fs.readFileSync(csv, "utf8"), { header: true, skipEmptyLines: true }).data as Row[]).filter((r) => r.name);
  if (only) rows = rows.filter((r) => only.has(slugify(r.name)));
  rows = rows.slice(0, limit);
  const out = path.join(dir, "site-raw");
  fs.mkdirSync(out, { recursive: true });

  const t0 = Date.now();
  const results = await pool(rows, 3, async (r, i) => {
    const file = path.join(out, `${slugify(r.name)}.json`);
    // a place read well before is not opened again (--refresh forces it); failures are retried
    if (!refresh && fs.existsSync(file)) {
      const old = JSON.parse(fs.readFileSync(file, "utf8")) as Result;
      if (old.status === "ok" || old.status === "thin" || old.status === "no-site" || old.status === "social-or-maps") {
        process.stderr.write(`\r${i + 1}/${rows.length}`);
        return old;
      }
    }
    const res = await extract(r);
    fs.writeFileSync(file, JSON.stringify(res, null, 1) + "\n");
    process.stderr.write(`\r${i + 1}/${rows.length}`);
    return res;
  });
  process.stderr.write("\n");

  // _summary.json: one line per place - what the agent still has to open by hand
  const found = (res: Result, k: string) => ((res.quotes as Record<string, Quote[]> | undefined)?.[k]?.length ?? 0) > 0;
  const readOk = (res: Result) => res.status === "ok" || res.status === "thin";
  const summary = rows.map((r, i) => ({
    slug: slugify(r.name),
    status: results[i].status,
    why: results[i].note ?? null,
    website: r.website || null,
    phone_check: results[i].phone_check ?? null,
    // read but not found: the agent opens the site for these fields
    hours_found: readOk(results[i]) ? found(results[i], "hours") : null,
    languages_found: readOk(results[i]) ? found(results[i], "languages") : null,
    prices_found: readOk(results[i]) ? ((results[i].price_rows as unknown[]).length > 0 || (results[i].price_pdfs as unknown[]).length > 0) : null,
  }));
  fs.writeFileSync(path.join(out, "_summary.json"), JSON.stringify(summary, null, 1) + "\n");
  // _missing.json: the same as lists - which sites to open by hand for which field
  const missing = (k: "hours_found" | "languages_found" | "prices_found") => summary.filter((x) => x[k] === false).map((x) => x.slug);
  fs.writeFileSync(
    path.join(out, "_missing.json"),
    JSON.stringify(
      {
        not_read: summary.filter((x) => x.status === "unreadable" || x.status === "thin").map((x) => x.slug),
        hours_not_found: missing("hours_found"),
        languages_not_found: missing("languages_found"),
        prices_not_found: missing("prices_found"),
        phone_not_found: summary.filter((x) => x.phone_check === "not-found").map((x) => x.slug),
      },
      null,
      1,
    ) + "\n",
  );

  // evidence-suggestions.csv: unambiguous fields only (hours, emergency note, home visits).
  // languages / facts / price need a code the agent decides; the agent copies a row
  // into evidence*.csv only after reading the line in its context.
  const today = new Date().toISOString().slice(0, 10);
  const ev: string[][] = [["business_slug", "field", "quote", "source_url", "observed_at"]];
  rows.forEach((r, i) => {
    const q = results[i].quotes as Record<string, Quote[]> | undefined;
    if (!q) return;
    const add = (field: string, list: Quote[], n: number) => list.slice(0, n).forEach((x) => ev.push([slugify(r.name), field, x.quote, x.url, today]));
    add("opening_hours", q.hours, 1);
    add("emergency_note", q.emergency, 1);
    add("home_visits", q.home_visits, 1);
  });
  fs.writeFileSync(path.join(out, "evidence-suggestions.csv"), Papa.unparse(ev) + "\n");

  const count = (s: string) => results.filter((r) => r.status === s).length;
  const have = (f: (r: Result) => boolean) => results.filter((r) => r.status === "ok" || r.status === "thin").filter(f).length;
  const read = count("ok") + count("thin");
  console.log(`site-extract ${city}: ${rows.length} places in ${Math.round((Date.now() - t0) / 1000)} s -> ${path.relative(process.cwd(), out)}`);
  console.log(`  read ok ${count("ok")}, thin (JS) ${count("thin")}, unreadable ${count("unreadable")}, social/Maps ${count("social-or-maps")}, no site ${count("no-site")}`);
  const q = (k: string) => have((r) => ((r.quotes as Record<string, Quote[]>)?.[k]?.length ?? 0) > 0);
  console.log(`  of ${read} read: phone on site ${have((r) => (r.phones_on_site as string[]).length > 0)}, JSON-LD ${have((r) => !!r.structured)}, social links ${have((r) => (r.social as string[]).length > 0)}, logo candidates ${have((r) => (r.logo_candidates as string[]).length > 0)}, price page ${have((r) => !!r.price_page)}`);
  console.log(`  phone from candidates.csv: on site ${have((r) => r.phone_check === "on-site")}, NOT found ${have((r) => r.phone_check === "not-found")}`);
  console.log(`  quotes found: hours ${q("hours")}, emergency ${q("emergency")}, languages ${q("languages")}, prices ${q("prices")}`);
  console.log(`  price rows (service + amount) ${have((r) => (r.price_rows as unknown[]).length > 0)}, price PDFs to open ${have((r) => (r.price_pdfs as unknown[]).length > 0)}`);
  console.log(`  files: ${path.relative(process.cwd(), out)}/{_summary.json, _missing.json, evidence-suggestions.csv, <slug>.json}`);
}

main();
