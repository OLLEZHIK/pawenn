import { getAllCities, getMarketPrices } from "@/lib/data";
import { pricesPath } from "@/lib/pricePages";
import { serviceLabel } from "@/lib/services";
import { ALL_CATEGORIES, categoryLabel, listingPath } from "@/lib/categories";
import { getDictionary, inCity, localePath, localesForCity } from "@/lib/i18n";
import { guidesPath, listGuides } from "@/lib/guides";
import { LOCALES } from "@/lib/locales";
import { SITE_URL } from "@/lib/site";

// Machine-readable site summary for LLM crawlers: every city, every
// language it has, every category page (docs/seo/README.md, 2.6).
export async function GET() {
  const cities = await getAllCities();

  const sections = await Promise.all(cities.map(async (city) => {
    const blocks = await Promise.all(
      localesForCity(city).map(async (locale) => {
        const lines = ALL_CATEGORIES.map(
          (category) =>
            `- [${categoryLabel(category, locale)} ${inCity(locale, city)}](${SITE_URL}${listingPath(locale, category, city.slug)})`
        ).join("\n");
        // Price pages: comparable prices per service, our own data.
        const priceLines: string[] = [];
        for (const category of ALL_CATEGORIES) {
          const market = await getMarketPrices(category, city.slug);
          for (const code of market.keys()) {
            priceLines.push(
              `- [${serviceLabel(category, code, locale)} ${inCity(locale, city)}](${SITE_URL}${pricesPath(locale, category, city.slug, code)})`
            );
          }
        }
        const prices = priceLines.length ? `\n\n#### ${getDictionary(locale).prices.crumb}\n\n${priceLines.join("\n")}` : "";
        return `### ${locale === "en" ? "English" : locale.toUpperCase()}\n\n${lines}${prices}`;
      })
    );
    return `## ${city.name} (${city.country})\n\n${blocks.join("\n\n")}`;
  }));

  // Guides: answers with an official source for every fact, per language.
  const guideBlocks = LOCALES.flatMap((locale) => {
    const guides = listGuides(locale);
    if (guides.length === 0) return [];
    const lines = guides.map((g) => `- [${g.h1}](${SITE_URL}${guidesPath(locale, g.slug)}): ${g.description}`).join("\n");
    return [`### ${locale === "en" ? "English" : locale.toUpperCase()}\n\n${lines}`];
  });
  const guidesSection = guideBlocks.length
    ? `## Guides\n\nPlain-language answers to what pet owners search for (microchip, rabies, travel, dog tax, what a service costs). Every fact cites an official source with the date it was checked; prices come from our own comparison.\n\n${guideBlocks.join("\n\n")}\n\n`
    : "";

  const homeLocales = [...new Set(cities.flatMap((c) => localesForCity(c)))];
  const body = `# pawenn

> A directory of pet services: grooming salons, veterinary clinics, pet hotels, dog trainers, pet shops and pet sitters, with real contact details, opening hours and prices sourced from each business, and price pages that compare what each service costs across a city (average, range, date checked). Cities: ${cities.map((c) => c.name).join(", ")}. Every page is in English, and also in the city's local language where it has one.

${homeLocales.map((l) => `- [Home${l === "en" ? "" : ` (${l.toUpperCase()})`}](${SITE_URL}${localePath(l, "/")})`).join("\n")}
- [How it works](${SITE_URL}/en/how-it-works/)

${guidesSection}${sections.join("\n\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
