"use client";

import type { BusinessCategory } from "@prisma/client";
import { categoryHubPath } from "@/lib/categories";
import type { CityPointLite } from "@/lib/geo";
import type { Locale } from "@/lib/i18n";
import { useServiceNavigation } from "./useServiceNavigation";

/**
 * Several cities (docs/architecture/multi-city.md 3.1): a click on a
 * service card (an <a data-category=...> inside) opens the nearest city's
 * list; no location -> the page where the visitor picks a city. The
 * cards stay plain server-rendered links; this only intercepts clicks.
 */
export function NearestCityNav({
  locale,
  cities,
  defaultCitySlug,
  children,
  className,
}: {
  locale: Locale;
  cities: CityPointLite[];
  defaultCitySlug: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { open } = useServiceNavigation(locale, cities, defaultCitySlug, undefined, (category) =>
    categoryHubPath(locale, category)
  );
  return (
    <div
      className={className}
      onClick={(e) => {
        const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-category]");
        if (link) open(link.dataset.category as BusinessCategory, e);
      }}
    >
      {children}
    </div>
  );
}
