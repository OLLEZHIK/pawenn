import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryFromSlug } from "@/lib/categories";
import { getDictionary, inCity, isLocale, localesForCity } from "@/lib/i18n";
import { PRICES_SEGMENT, answerText, getPriceSummary, pricesPath, serviceCodeFromSlug } from "@/lib/pricePages";
import { MIN_PLACES } from "@/lib/priceMarket";
import { serviceSeoName } from "@/lib/services";
import { localeAlternates, socialMeta } from "@/lib/seo";
import { ServicePricePage } from "@/components/PricePages";
import { BEST_SEGMENT } from "@/lib/bestPages";
import { BestList, bestMetadata, getBestPlaces } from "@/components/BestPage";
import { whereLabel } from "@/components/CategoryListing";
import { getCityBySlug, getDistrictBySlug } from "@/lib/data";

// /<category>/<city>/prices/<service>/ - what one service costs in one
// city (lib/pricePages.ts). Exists while at least one place publishes the
// price; indexed from MIN_PLACES comparable prices (docs/seo/README.md).
// /<category>/<city>/<district>/best/ - the top places of the district
// (lib/bestPages.ts), while at least MIN_PLACES_BEST qualify.

// Built on the first visit, then served from Vercel's cache until the next
// deploy (owner, 2026-10-09: the free plan ran out of CPU rendering these
// pages on every visit and crawler hit). Nothing here reads the query.
export function generateStaticParams() {
  return [];
}

interface PageParams {
  lang: string;
  category: string;
  city: string;
  district: string;
  service: string;
}

async function resolve(params: Promise<PageParams>) {
  const { lang, category: slug, city: citySlug, district: segment, service: serviceSlug } = await params;
  if (!isLocale(lang) || segment !== PRICES_SEGMENT[lang]) return null;
  const category = categoryFromSlug(slug, lang);
  if (!category) return null;
  const code = serviceCodeFromSlug(category, serviceSlug, lang);
  if (!code) return null;
  const city = await getCityBySlug(citySlug);
  if (!city || !localesForCity(city).includes(lang)) return null;
  const summary = await getPriceSummary(category, citySlug, code);
  if (summary.rows.length === 0) return null;
  return { locale: lang, category, city, code, summary };
}

async function resolveBest(params: Promise<PageParams>) {
  const { lang, category: slug, city: citySlug, district: districtSlug, service: segment } = await params;
  if (!isLocale(lang) || segment !== BEST_SEGMENT[lang]) return null;
  const category = categoryFromSlug(slug, lang);
  if (!category) return null;
  const city = await getCityBySlug(citySlug);
  if (!city || !localesForCity(city).includes(lang)) return null;
  const district = await getDistrictBySlug(citySlug, districtSlug);
  if (!district) return null;
  const best = await getBestPlaces(category, citySlug, district.slug);
  if (best.length === 0) return null;
  return { locale: lang, category, city, district, best };
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const best = await resolveBest(params);
  if (best) return bestMetadata(best.locale, best.category, best.city, best.district, best.best.length, best.best);
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { locale, category, city, code, summary } = resolved;
  const tp = getDictionary(locale).prices;
  const where = inCity(locale, city);
  const service = serviceSeoName(category, code, locale);
  const market = summary.market;
  const from = market
    ? new Intl.NumberFormat(locale, { style: "currency", currency: market.currency, maximumFractionDigits: Number.isInteger(market.min) ? 0 : 2 }).format(market.min)
    : null;
  const title = from ? tp.serviceMetaTitle(service, where, from) : `${tp.serviceH1(service, where)} | Pawenn`;
  const description = answerText(locale, summary) ?? tp.fewPlaces(summary.rows.length);
  const path = pricesPath(locale, category, city.slug, code);
  return {
    title: { absolute: title },
    description,
    alternates: localeAlternates(
      locale,
      Object.fromEntries(localesForCity(city).map((l) => [l, pricesPath(l, category, city.slug, code)]))
    ),
    robots: !market || market.places < MIN_PLACES ? { index: false, follow: true } : undefined,
    ...socialMeta({ title, description, path, locale, image: { title: tp.serviceH1(service, where), subtitle: description.split(". ")[0], category } }),
  };
}

export default async function ServicePrices({ params }: { params: Promise<PageParams> }) {
  const best = await resolveBest(params);
  if (best) {
    const { locale, category, city, district } = best;
    return (
      <BestList locale={locale} category={category} city={city} district={district} places={best.best} where={whereLabel(locale, city, district)} />
    );
  }
  const resolved = await resolve(params);
  if (!resolved) notFound();
  return <ServicePricePage locale={resolved.locale} category={resolved.category} city={resolved.city} code={resolved.code} />;
}
