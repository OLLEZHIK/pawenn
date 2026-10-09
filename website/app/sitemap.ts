import type { MetadataRoute } from "next";
import { getAllCities, getAllDistricts, getCategoryAggregates, getAllPublishedBusinessSlugs, getBusinessCount, getMarketPrices, getAttributeCounts, getBestPages } from "@/lib/data";
import { getPriceSummary, pricesPath } from "@/lib/pricePages";
import { attributePath, minToIndex } from "@/lib/attributePages";
import { ALL_CATEGORIES, businessPath, cityPath, listingPath } from "@/lib/categories";
import { localePath, localesForCity, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";
import { bestPath } from "@/lib/bestPages";
import { guideAlternates, guidesPath, listGuides } from "@/lib/guides";

const MIN_LISTED_FOR_INDEX = 3;

type Entry = MetadataRoute.Sitemap[number];

// One entry per language version, each carrying hreflang alternates for
// the whole set (Google's sitemap flavour of hreflang).
function localized(
  locales: Locale[],
  pathFor: (locale: Locale) => string,
  extra: Omit<Entry, "url" | "alternates">
): Entry[] {
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${pathFor(l)}`]));
  return locales.map((l) => ({ url: `${SITE_URL}${pathFor(l)}`, alternates: { languages }, ...extra }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [cities, districts, businesses] = await Promise.all([
    getAllCities(),
    getAllDistricts(),
    getAllPublishedBusinessSlugs(),
  ]);

  // Home is shared by all cities; offer every language any city has.
  const homeLocales = [...new Set(cities.flatMap((c) => localesForCity(c)))];
  const entries: MetadataRoute.Sitemap = [
    ...localized(homeLocales.length ? homeLocales : ["en"], (l) => localePath(l, "/"), {
      changeFrequency: "weekly",
      priority: 1,
    }),
    { url: `${SITE_URL}/en/how-it-works/`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/en/add-or-fix-listing/`, changeFrequency: "monthly", priority: 0.3 },
  ];

  // The queries below run in parallel, not one after another: the build
  // starts with an empty data cache, and ~1,000 sequential round trips to
  // Neon (6 categories x 11 cities x every district) took the sitemap past
  // the 60-second page limit and failed the deploy (2026-10-07, #579).
  // Entries keep the same order as before: cities, then category x city.
  const cityTotals = await Promise.all(cities.map((city) => getBusinessCount(city.slug)));
  cities.forEach((city, i) => {
    if (cityTotals[i].total >= MIN_LISTED_FOR_INDEX) {
      entries.push(
        ...localized(localesForCity(city), (l) => cityPath(l, city.slug), { changeFrequency: "weekly", priority: 0.9 })
      );
    }
  });

  const blocks = await Promise.all(
    ALL_CATEGORIES.flatMap((category) =>
      cities.map(async (city): Promise<Entry[]> => {
        const out: Entry[] = [];
        const locales = localesForCity(city);
        const cityDistricts = districts.filter((d) => d.cityId === city.id);
        const [cityAggregates, attributeCounts, market, districtAggregates] = await Promise.all([
          getCategoryAggregates(category, city.slug),
          getAttributeCounts(category, city.slug),
          getMarketPrices(category, city.slug),
          Promise.all(cityDistricts.map((d) => getCategoryAggregates(category, city.slug, d.slug))),
        ]);
        if (cityAggregates.count >= MIN_LISTED_FOR_INDEX) {
          out.push(...localized(locales, (l) => listingPath(l, category, city.slug), { changeFrequency: "daily", priority: 0.9 }));
        }

        // Attribute pages (nonstop, Saturday, Sunday, exotics, home visits):
        // indexed from minToIndex places - lib/attributePages.ts.
        for (const [key, count] of attributeCounts) {
          if (count >= minToIndex(key)) {
            out.push(
              ...localized(locales, (l) => attributePath(l, category, city.slug, key), {
                changeFrequency: "daily",
                priority: 0.8,
              })
            );
          }
        }

        // Price pages: the overview and each service with a market price
        // (at least 3 comparable prices) - lib/pricePages.ts.
        if (market.size > 0) {
          const summaries = await Promise.all([...market.keys()].map((code) => getPriceSummary(category, city.slug, code)));
          const checked = summaries.map((s) => s.checked).filter((d): d is Date => d !== null);
          out.push(
            ...localized(locales, (l) => pricesPath(l, category, city.slug), {
              lastModified: checked.length ? new Date(Math.max(...checked.map((d) => d.getTime()))) : undefined,
              changeFrequency: "weekly",
              priority: 0.8,
            })
          );
          [...market.keys()].forEach((code, i) => {
            out.push(
              ...localized(locales, (l) => pricesPath(l, category, city.slug, code), {
                lastModified: summaries[i].checked ?? undefined,
                changeFrequency: "weekly",
                priority: 0.8,
              })
            );
          });
        }

        cityDistricts.forEach((district, i) => {
          if (districtAggregates[i].count >= MIN_LISTED_FOR_INDEX) {
            out.push(
              ...localized(locales, (l) => listingPath(l, category, city.slug, district.slug), {
                changeFrequency: "daily",
                priority: 0.7,
              })
            );
          }
        });
        return out;
      })
    )
  );
  for (const block of blocks) entries.push(...block);

  // "Best" pages of cities and districts (lib/bestPages.ts).
  const citiesBySlug = new Map(cities.map((c) => [c.slug, c]));
  for (const page of await getBestPages()) {
    const city = citiesBySlug.get(page.citySlug);
    if (!city) continue;
    entries.push(
      ...localized(localesForCity(city), (l) => bestPath(l, page.category, city.slug, page.districtSlug), {
        lastModified: page.lastModified ? new Date(page.lastModified) : undefined,
        changeFrequency: "weekly",
        priority: page.districtSlug ? 0.7 : 0.8,
      })
    );
  }

  for (const business of businesses) {
    entries.push(
      ...localized(localesForCity(business.city), (l) => businessPath(l, business.slug), {
        lastModified: business.verifiedAt ?? undefined,
        changeFrequency: "monthly",
        priority: 0.6,
      })
    );
  }

  // Guides: the section page and every guide of each language, with the
  // guide's other-language versions as alternates.
  for (const locale of homeLocales) {
    const guides = listGuides(locale);
    if (guides.length === 0) continue;
    entries.push({ url: `${SITE_URL}${guidesPath(locale)}`, changeFrequency: "weekly", priority: 0.6 });
    for (const g of guides) {
      const languages = Object.fromEntries(Object.entries(guideAlternates(g)).map(([l, p]) => [l, `${SITE_URL}${p}`]));
      entries.push({
        url: `${SITE_URL}${guidesPath(locale, g.slug)}`,
        lastModified: new Date(g.updated),
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: { languages },
      });
    }
  }

  return entries;
}
