"use client";

import Link from "next/link";
import type { BusinessCategory } from "@prisma/client";
import { listingPath } from "@/lib/categories";
import type { Locale } from "@/lib/i18n";
import { usePageCity } from "./useHead";

export interface FooterCity {
  slug: string;
  name: string;
  country: string;
  /** Languages the city's pages exist in, English included. */
  locales: Locale[];
}

// Services column of the footer, for the page's own city (lib/pageCity.ts):
// an English Warszawa page lists Warszawa's services, not Bratislava's
// (owner, 2026-09-29). Without a page city: the language's city from the
// server. The Cities column was dropped (owner, 2026-10-04): more cities
// are coming and the list would only grow.
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
  titles: { services: string };
}) {
  const pageCity = usePageCity();
  const city = cities.find((c) => c.slug === (pageCity ?? fallbackCitySlug)) ?? cities[0];

  return (
    <>
      <Column title={titles.services}>
        {categories.map(({ category, label }) => (
          <Item key={category} href={listingPath(locale, category, city?.slug ?? "")}>
            {label}
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
