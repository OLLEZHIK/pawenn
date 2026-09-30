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
            // One layout for every row (owner, 2026-09-30: rows "floated"
            // between one and two lines): service and its range on the
            // left, the typical (median) price big on the right.
            <li key={s.code} className="flex items-center justify-between gap-4 py-3">
              <div className="min-w-0">
                <Link
                  href={pricesPath(locale, category, citySlug, s.code)}
                  prefetch={false}
                  className="font-semibold text-foreground hover:text-brand-blue hover:underline"
                >
                  {serviceLabel(category, s.code, locale)}
                </Link>
                <p className="mt-0.5 text-xs text-foreground/55">{t.cityPricesMeta(money(m.min, m.currency), m.places)}</p>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-lg font-bold tabular-nums text-foreground">{money(m.median, m.currency)}</p>
                <p className="text-xs text-foreground/55">{t.cityPricesMedian}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
