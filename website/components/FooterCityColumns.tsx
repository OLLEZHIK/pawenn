"use client";

import Link from "next/link";
import type { BusinessCategory } from "@prisma/client";
import { cityPath, listingPath } from "@/lib/categories";
import type { Locale } from "@/lib/i18n";
import { usePageCity } from "./useHead";

export interface FooterCity {
  slug: string;
  name: string;
  country: string;
  /** Languages the city's pages exist in, English included. */
  locales: Locale[];
}

// Services and Cities columns of the footer, for the page's own city
// (lib/pageCity.ts): an English Warszawa page lists Warszawa's services
// and the Polish cities, not Bratislava's (owner, 2026-09-29). Without a
// page city: the language's city from the server; an English page with no
// city (home, help) lists every city.
export function FooterCityColumns({
  locale,
  cities,
  fallbackCitySlug,
  categories,
  titles,
}: {
  locale: Locale;
  cities: FooterCity[];
  fallbackCitySlug: string;
  categories: { category: BusinessCategory; label: string }[];
  titles: { services: string; cities: string };
}) {
  const pageCity = usePageCity();
  const city = cities.find((c) => c.slug === (pageCity ?? fallbackCitySlug)) ?? cities[0];
  const listed = !pageCity && locale === "en" ? cities : cities.filter((c) => c.country === city?.country);

  return (
    <>
      <Column title={titles.services}>
        {categories.map(({ category, label }) => (
          <Item key={category} href={listingPath(locale, category, city?.slug ?? "")}>
            {label}
          </Item>
        ))}
      </Column>
      <Column title={titles.cities}>
        {listed.map((c) => (
          <Item key={c.slug} href={cityPath(c.locales.includes(locale) ? locale : "en", c.slug)}>
            {c.name}
          </Item>
        ))}
      </Column>
    </>
  );
}

function Column({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

function Item({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/75 transition hover:text-brand-orange">
        {children}
      </Link>
    </li>
  );
}
