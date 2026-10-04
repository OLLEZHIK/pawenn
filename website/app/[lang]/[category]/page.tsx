import type { Metadata } from "next";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { CATEGORY_THEME, categoryFromSlug, categoryHubPath, categoryLabel, listingPath } from "@/lib/categories";
import { getAllCities, getBusinessCount, getCityPoints } from "@/lib/data";
import { getDictionary, isLocale, localesForCity } from "@/lib/i18n";
import { CityPicker } from "@/components/CityPicker";
import { NearestCityNav } from "@/components/NearestCityNav";
import { ArrowRightIcon, MapPinIcon } from "@/components/icons";

// A service across cities: /en/vet-clinics/, /sk/veterinar/ (owner,
// 2026-09-27; docs/architecture/multi-city.md 3.1). Where a home-page card
// leads when the visitor's location is unknown: pick a city, or "nearest
// to me". With one city it is just that city's list (redirect).

interface PageParams {
  lang: string;
  category: string;
}

async function resolve(params: Promise<PageParams>) {
  const { lang, category: slug } = await params;
  if (!isLocale(lang)) return null;
  const category = categoryFromSlug(slug, lang);
  if (!category) return null;
  const cities = (await getAllCities()).filter((c) => localesForCity(c).includes(lang));
  const counts = await Promise.all(cities.map((c) => getBusinessCount(c.slug)));
  const rows = cities
    .map((c, i) => ({ city: c, count: counts[i].byCategory[category] ?? 0 }))
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count);
  return { locale: lang, category, rows };
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const resolved = await resolve(params);
  if (!resolved) return {};
  const { locale, category } = resolved;
  const title = `${getDictionary(locale).home.chooseCityTitle(categoryLabel(category, locale))} | Pawenn`;
  // A picker, not an answer: the city lists are what should rank.
  return { title: { absolute: title }, robots: { index: false, follow: true } };
}

export default async function CategoryHubPage({ params }: { params: Promise<PageParams> }) {
  const resolved = await resolve(params);
  if (!resolved) notFound();
  const { locale, category, rows } = resolved;
  if (rows.length === 0) notFound();
  if (rows.length === 1) redirect(listingPath(locale, category, rows[0].city.slug));

  const d = getDictionary(locale);
  const t = d.home;
  const points = (await getCityPoints()).filter((p) => rows.some((r) => r.city.slug === p.slug));
  const accent = CATEGORY_THEME[category].accent;

  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-10" style={{ "--accent": accent } as React.CSSProperties}>
      <h1 className="text-3xl font-extrabold text-foreground md:text-4xl">
        {t.chooseCityTitle(categoryLabel(category, locale))}
      </h1>
      <p className="mt-3 text-foreground/70">{t.chooseCityIntro}</p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
      <NearestCityNav
        locale={locale}
        cities={points.map(({ slug, name, lat, lng }) => ({ slug, name, lat, lng }))}
        defaultCitySlug={rows[0].city.slug}
      >
        <Link
          href={categoryHubPath(locale, category)}
          data-category={category}
          className="accent-solid inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-5 py-3 font-semibold"
        >
          <MapPinIcon className="h-5 w-5" />
          {t.nearMe}
        </Link>
      </NearestCityNav>
      <CityPicker
        locale={locale}
        category={category}
        cities={rows.map(({ city }) => ({ slug: city.slug, name: city.name }))}
        placeholder={d.search.cityPlaceholder}
        label={d.search.cityLabel}
      />
      </div>

      <ul className="mt-8 divide-y divide-line overflow-hidden rounded-[var(--radius-card)] bg-surface shadow-[var(--shadow-card)]">
        {rows.map(({ city, count }) => (
          <li key={city.slug}>
            <Link
              href={listingPath(locale, category, city.slug)}
              className="flex items-center justify-between gap-4 px-5 py-4 hover:bg-surface-sunken"
            >
              <span className="font-semibold text-foreground">{city.name}</span>
              <span className="flex items-center gap-3 text-sm text-foreground/60">
                {t.places(count)}
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
