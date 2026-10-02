// Guides ("Poradňa" / "Poradnik" / "Guides"): articles that answer what
// pet owners search for - chip, rabies, travel, dog tax, what a service
// costs - written in the country's language, every fact with an official
// source, and linked both ways with the catalogue (docs/playbooks/guides.md,
// owner 2026-09-30).
//
// Articles are Markdown files in website/content/guides/<locale>/<slug>.md
// (inside website/, so a new guide triggers a site build), with front matter:
//
//   ---
//   title: Čipovanie psa: povinnosť, termín a cena | Pawenn
//   description: Do kedy treba psa začipovať, kto to robí ...
//   h1: Čipovanie psa na Slovensku
//   updated: 2026-09-30
//   country: SK
//   categories: VET_CLINIC
//   pair: microchip-dog            (same key in another language = hreflang)
//   sources:
//     - https://svps.sk/zvierata/cipovanie-psov/ | ŠVPS: Čipovanie psov | 2026-09-30
//   ---
//
// In the body, a line of its own pulls live data from the catalogue:
//   ::price VET_CLINIC microchip   what the service costs in each city of the country
//   ::places VET_CLINIC            links to the category in each city
import fs from "fs";
import path from "path";
import type { BusinessCategory } from "@prisma/client";
import type { Locale } from "./i18n";
import { plural } from "./locales";

export const GUIDE_SEGMENT: Record<Locale, string> = { en: "guides", sk: "poradna", pl: "poradnik" };

export const GUIDE_TEXT: Record<
  Locale,
  {
    hubTitle: string;
    hubH1: string;
    hubIntro: string;
    sources: string;
    updated: string;
    related: string;
    home: string;
    priceLine: (median: string, range: string, places: number) => string;
    pricesLink: string;
    nav: string;
  }
> = {
  en: {
    hubTitle: "Guides for pet owners | Pawenn",
    hubH1: "Guides for pet owners",
    hubIntro: "Rules, deadlines and prices that pet owners ask about - each fact with its official source.",
    sources: "Sources",
    updated: "Updated",
    related: "Good to know",
    home: "Home",
    priceLine: (median, range, places) => `median ${median}, ${range} (${places} ${places === 1 ? "place" : "places"})`,
    pricesLink: "All prices",
    nav: "Guides",
  },
  sk: {
    hubTitle: "Poradňa pre majiteľov zvierat | Pawenn",
    hubH1: "Poradňa pre majiteľov zvierat",
    hubIntro: "Povinnosti, termíny a ceny, na ktoré sa pýtajú majitelia zvierat - každý údaj s oficiálnym zdrojom.",
    sources: "Zdroje",
    updated: "Aktualizované",
    related: "Užitočné vedieť",
    home: "Domov",
    priceLine: (median, range, places) =>
      `medián ${median}, ${range} (${places} ${plural("sk", places, { one: "podnik", few: "podniky", other: "podnikov" })})`,
    pricesLink: "Všetky ceny",
    nav: "Poradňa",
  },
  pl: {
    hubTitle: "Poradnik dla opiekunów zwierząt | Pawenn",
    hubH1: "Poradnik dla opiekunów zwierząt",
    hubIntro: "Obowiązki, terminy i ceny, o które pytają opiekunowie zwierząt - każda informacja z oficjalnym źródłem.",
    sources: "Źródła",
    updated: "Zaktualizowano",
    related: "Warto wiedzieć",
    home: "Strona główna",
    priceLine: (median, range, places) =>
      `mediana ${median}, ${range} (${places} ${plural("pl", places, { one: "miejsce", few: "miejsca", many: "miejsc", other: "miejsc" })})`,
    pricesLink: "Wszystkie ceny",
    nav: "Poradnik",
  },
};

export interface GuideSource {
  url: string;
  label: string;
  checked: string;
}

export interface Guide {
  locale: Locale;
  slug: string;
  title: string;
  description: string;
  h1: string;
  updated: string;
  country: string;
  categories: BusinessCategory[];
  pair: string | null;
  sources: GuideSource[];
  body: string;
}

const ROOT = path.join(process.cwd(), "content", "guides");

/** The small front matter subset guides use: `key: value` and `key:` + `  - item` lists. */
export function parseGuide(locale: Locale, slug: string, raw: string): Guide {
  const m = /^---\n([\s\S]*?)\n---\n?([\s\S]*)$/.exec(raw.replace(/\r\n/g, "\n"));
  if (!m) throw new Error(`guide ${locale}/${slug}: no front matter`);
  const meta: Record<string, string | string[]> = {};
  let listKey: string | null = null;
  for (const line of m[1].split("\n")) {
    const item = /^\s+-\s+(.*)$/.exec(line);
    if (item && listKey) {
      (meta[listKey] as string[]).push(item[1].trim());
      continue;
    }
    const kv = /^([a-z0-9_]+):\s*(.*)$/.exec(line);
    if (!kv) continue;
    if (kv[2] === "") {
      listKey = kv[1];
      meta[listKey] = [];
    } else {
      listKey = null;
      meta[kv[1]] = kv[2].trim();
    }
  }
  const str = (k: string) => (typeof meta[k] === "string" ? (meta[k] as string) : "");
  const sources = ((meta.sources as string[] | undefined) ?? []).map((s) => {
    const [url, label, checked] = s.split("|").map((p) => p.trim());
    return { url, label: label || url, checked: checked || "" };
  });
  return {
    locale,
    slug,
    title: str("title"),
    description: str("description"),
    h1: str("h1"),
    updated: str("updated"),
    country: str("country"),
    categories: str("categories").split(/[,\s]+/).filter(Boolean) as BusinessCategory[],
    pair: str("pair") || null,
    sources,
    body: m[2].trim(),
  };
}

export function listGuides(locale: Locale): Guide[] {
  const dir = path.join(ROOT, locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseGuide(locale, f.replace(/\.md$/, ""), fs.readFileSync(path.join(dir, f), "utf-8")))
    .sort((a, b) => a.h1.localeCompare(b.h1, locale));
}

export function getGuide(locale: Locale, slug: string): Guide | null {
  const file = path.join(ROOT, locale, `${slug}.md`);
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug) || !fs.existsSync(file)) return null;
  return parseGuide(locale, slug, fs.readFileSync(file, "utf-8"));
}

export function guidesPath(locale: Locale, slug?: string): string {
  return `/${locale}/${GUIDE_SEGMENT[locale]}/${slug ? `${slug}/` : ""}`;
}

/** The same guide in other languages (same `pair`), for hreflang and the language switch. */
export function guideAlternates(guide: Guide): Partial<Record<Locale, string>> {
  const out: Partial<Record<Locale, string>> = { [guide.locale]: guidesPath(guide.locale, guide.slug) };
  if (!guide.pair) return out;
  for (const locale of Object.keys(GUIDE_SEGMENT) as Locale[]) {
    if (locale === guide.locale) continue;
    const other = listGuides(locale).find((g) => g.pair === guide.pair);
    if (other) out[locale] = guidesPath(locale, other.slug);
  }
  return out;
}

/** Guides for a category page ("Good to know"): same language, same country. */
export function guidesFor(locale: Locale, category: BusinessCategory, country: string | null | undefined): Guide[] {
  return listGuides(locale).filter((g) => g.categories.includes(category) && (!country || g.country === country));
}
