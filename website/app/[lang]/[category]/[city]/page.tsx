import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { categoryFromSlug, categoryLabel, categoryPlural, categorySeoTitle, categorySingular, cityPath, isCitySegment, listingPath } from "@/lib/categories";
import { getBusinessCount, getCityBySlug, getCategoryAggregates } from "@/lib/data";
import { getDictionary, inCity, isLocale, localesForCity } from "@/lib/i18n";
import { localeAlternates, socialMeta, withPage } from "@/lib/seo";
import { isFiltered, parsePage } from "@/components/Pagination";
import { CategoryListing, whereLabel } from "@/components/CategoryListing";

interface PageParams {
  lang: string;
  category: string;
  city: string;
}

async function resolve(params: Promise<PageParams>) {
  const { lang, category: slug, city: citySlug } = await params;
  if (!isLocale(lang)) return null;
  const hub = isCitySegment(slug, lang);
  const category = hub ? null : categoryFromSlug(slug, lang);
  if (!hub && !category) return null;
  const city = await getCityBySlug(citySlug);
  // A locale is only served for cities that speak it (city.json locales).
  if (!city || !localesForCity(city).includes(lang)) return null;
  return { locale: lang, category, city, citySlug };
}

// Rendered per request (filters come from the query string) with data
// from the per-deploy cache (lib/data.ts). Nothing is prerendered per
// city or district, so builds don't grow with cities
// (docs/architecture/multi-city.md).

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams?: Promise<{ page?: string; near?: string; sort?: string; rating?: string; open?: string }>;
}): Promise<Metadata> {
  const resolved = await resolve(params);
  if (!resolved) return {};

  const { locale, category, city } = resolved;
  const locales = localesForCity(city);

  if (!category) {
    const counts = await getBusinessCount(city.slug);
    const where = inCity(locale, city);
    const hub = getDictionary(locale).cityHub;
    return {
      alternates: localeAlternates(locale, Object.fromEntries(locales.map((l) => [l, cityPath(l, city.slug)]))),
      title: { absolute: hub.metaTitle(where) },
      description: hub.metaDescription(counts.total, where),
      ...socialMeta({
        title: hub.metaTitle(where),
        description: hub.metaDescription(counts.total, where),
        path: cityPath(locale, city.slug),
        locale,
        image: { title: `${hub.h1Before} ${where}` },
      }),
      robots: counts.total < 3 ? { index: false, follow: true } : undefined,
    };
  }

  const t = getDictionary(locale).listing;
  const aggregates = await getCategoryAggregates(category, city.slug);
  const where = whereLabel(locale, city);
  const what = aggregates.count === 1 ? categorySingular(category, locale) : categoryPlural(category, locale);

  const meta: Metadata = {
    // Filter variants (?near=, ?sort=, ?rating=, ?open=) point at the unfiltered page.
    alternates: localeAlternates(
      locale,
      Object.fromEntries(locales.map((l) => [l, listingPath(l, category, city.slug)]))
    ),
    title: t.metaTitle(categorySeoTitle(category, locale), where),
    description: t.metaDescription(aggregates.count, what, where),
    ...socialMeta({
      title: t.metaTitle(categorySeoTitle(category, locale), where),
      description: t.metaDescription(aggregates.count, what, where),
      path: listingPath(locale, category, city.slug),
      locale,
      image: { title: `${categoryLabel(category, locale)} ${where}`, category },
    }),
    robots: aggregates.count < 3 ? { index: false, follow: true } : undefined,
  };
  // ?page=2...: own canonical and title (the cached twin passes it as a route param).
  const sp = await searchParams;
  return isFiltered(sp) ? meta : withPage(meta, locale, listingPath(locale, category, city.slug), parsePage(sp?.page));
}

export default async function CategoryCityPage({
  params,
  searchParams,
}: {
  params: Promise<PageParams>;
  searchParams: Promise<{ near?: string; sort?: string; rating?: string; open?: string; page?: string }>;
}) {
  const resolved = await resolve(params);
  if (!resolved) notFound();

  const { near, sort, rating, open, page } = await searchParams;
  const { locale, category, city } = resolved;

  // No category: the city page, one list with every service.
  return (
    <CategoryListing
      locale={locale}
      category={category}
      city={city}
      near={near}
      page={page}
      sort={sort}
      rating={rating}
      open={open}
    />
  );
}
