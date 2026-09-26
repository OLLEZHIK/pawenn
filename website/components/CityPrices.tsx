import type { BusinessCategory } from "@prisma/client";
import Link from "next/link";
import type { MarketPrice } from "@/lib/priceMarket";
import { pricesPath } from "@/lib/priceSlugs";
import { SERVICES, serviceLabel } from "@/lib/services";
import { getDictionary, type Locale } from "@/lib/i18n";
import { TagIcon } from "./icons";

// For a place that publishes no prices: what the same services cost in
// its city (owner, 2026-09-26; docs/research/place-page-needs.md, 2).
// Labelled as the city's prices, never as this place's. Only services
// with a market price (3+ places, lib/priceMarket.ts).
export function CityPrices({
  category,
  market,
  locale,
  citySlug,
  where,
}: {
  category: BusinessCategory;
  market: Map<string, MarketPrice>;
  locale: Locale;
  citySlug: string;
  where: string;
}) {
  const t = getDictionary(locale).business;
  const rows = (SERVICES[category] ?? []).filter((s) => market.has(s.code));
  if (rows.length === 0) return null;
  const money = (n: number, currency: string) =>
    new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
      maximumFractionDigits: Number.isInteger(n) ? 0 : 2,
    }).format(n);

  return (
    <section className="rounded-[var(--radius-card)] bg-surface p-6 shadow-[var(--shadow-card)]">
      <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
        <TagIcon className="h-5 w-5 text-[var(--accent,var(--brand-blue))]" />
        {t.cityPricesTitle(where)}
      </h2>
      <p className="mt-2 text-sm text-foreground/60">{t.cityPricesIntro}</p>
      <ul className="mt-3 divide-y divide-line">
        {rows.map((s) => {
          const m = market.get(s.code)!;
          return (
            <li key={s.code} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 py-2.5 text-sm">
              <Link
                href={pricesPath(locale, category, citySlug, s.code)}
                prefetch={false}
                className="text-foreground/80 hover:text-brand-blue hover:underline"
              >
                {serviceLabel(category, s.code, locale)}
              </Link>
              <span className="text-foreground/60">{t.cityPricesRow(money(m.min, m.currency), money(m.median, m.currency), m.places)}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
