"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { BusinessCategory } from "@prisma/client";
import { listingPath } from "@/lib/categories";
import type { Locale } from "@/lib/locales";

// The footer's cities follow the page, not the language (owner,
// 2026-09-30; docs/architecture/multi-city.md, "Footer"). English is
// spoken in many countries, so "English page -> country" does not work:
// - a page with a city in its URL (listing, place, city hub) lists the
//   cities of that city's country, and "Services" links into that city;
// - a page without a city lists the country of its language when the
//   language has one (sk -> Slovakia, pl -> Poland), otherwise every
//   city grouped by country.
// Read from the URL in the component, so every page stays static.

export interface FooterCity {
  slug: string;
  name: string;
  country: string;
  href: string;
}

export interface FooterScope {
  tagline: string;
  made: string;
}

export function FooterPlaces({
  locale,
  categories,
  cities,
  countryNames,
  homeCountry,
  defaultSlug,
  scopes,
  labels,
  brand,
  badge,
  about,
  legal,
  bottomLeft,
  bottomMiddle,
}: {
  locale: Locale;
  categories: { category: BusinessCategory; label: string }[];
  cities: FooterCity[];
  countryNames: Record<string, string>;
  /** The one country of this language (sk -> SK); null when there are several or none (en). */
  homeCountry: string | null;
  defaultSlug: string;
  /** Tagline and bottom line per country code, "*" for every country. */
  scopes: Record<string, FooterScope>;
  labels: { services: string; cities: string };
  brand: React.ReactNode;
  badge: React.ReactNode;
  about: React.ReactNode;
  legal: React.ReactNode;
  bottomLeft: React.ReactNode;
  bottomMiddle: React.ReactNode;
}) {
  const segments = (usePathname() ?? "").split("/").filter(Boolean).slice(1);
  const pageCity = cities.find((c) => segments.includes(c.slug));
  const country = pageCity?.country ?? homeCountry;
  const shown = country ? cities.filter((c) => c.country === country) : cities;
  const servicesSlug = pageCity?.slug ?? (shown.find((c) => c.slug === defaultSlug) ?? shown[0])?.slug ?? defaultSlug;
  const scope = scopes[country ?? "*"] ?? scopes["*"];
  const countries = [...new Set(shown.map((c) => c.country))];

  return (
    <>
      <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
        <div>
          {brand}
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">{scope.tagline}</p>
          {badge}
        </div>

        <FooterColumn title={labels.services}>
          {categories.map(({ category, label }) => (
            <FooterLink key={category} href={listingPath(locale, category, servicesSlug)}>
              {label}
            </FooterLink>
          ))}
        </FooterColumn>

        <FooterColumn title={labels.cities}>
          {countries.map((code) => (
            <li key={code} className="space-y-2.5">
              {countries.length > 1 && <p className="pt-1 text-xs font-semibold text-white/50">{countryNames[code] ?? code}</p>}
              <ul className="space-y-2.5">
                {shown
                  .filter((c) => c.country === code)
                  .map((c) => (
                    <FooterLink key={c.slug} href={c.href}>
                      {c.name}
                    </FooterLink>
                  ))}
              </ul>
            </li>
          ))}
        </FooterColumn>

        {about}
        {legal}
      </div>

      <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center">
        {bottomLeft}
        {bottomMiddle}
        <p>{scope.made}</p>
      </div>
    </>
  );
}

export function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/60">{title}</p>
      <ul className="mt-4 space-y-2.5 text-sm">{children}</ul>
    </div>
  );
}

export function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="text-white/75 transition hover:text-brand-orange">
        {children}
      </Link>
    </li>
  );
}
