import type { BusinessCategory } from "@prisma/client";
import type { BusinessWithRelations } from "@/lib/data";
import { SERVICES, serviceLabel } from "@/lib/services";
import { formatDate, getDictionary, type Locale } from "@/lib/i18n";
import Link from "next/link";
import { TagIcon } from "./icons";
import { pricesPath } from "@/lib/priceSlugs";
import { moneyRange } from "@/lib/money";
import { MARKET_BAND, pctAgainst, type MarketPrice } from "@/lib/priceMarket";

type PriceRow = BusinessWithRelations["priceItems"][number];

// Prices for the category's 6 services (docs/card-spec.md, "Цены"), one
// row per weight range. When they were checked and their sources - the
// trust rule: no price without a source - go once under the table, not
// on every row (owner, 2026-09-26: lighter to read). Under each service
// name: what its price must include to be compared; a price per hour/km
// or a partial one carries its note and "not compared". Colour only in
// the category's accent (owner, 2026-09-26), no green/orange.
export function PriceTable({
  items,
  category,
  locale,
  market,
  citySlug,
}: {
  items: PriceRow[];
  category: BusinessCategory;
  locale: Locale;
  /** City market price per service code (lib/priceMarket.ts). */
  market?: Map<string, MarketPrice>;
  /** With a city: services that have a price page link to it. */
  citySlug?: string;
}) {
  const t = getDictionary(locale).business;
  const card = getDictionary(locale).card;
  const order = (SERVICES[category] ?? []).map((s) => s.code);
  const rows = items
    .filter((i) => i.service.code && order.includes(i.service.code))
    .sort(
      (a, b) =>
        order.indexOf(a.service.code!) - order.indexOf(b.service.code!) ||
        (a.weightFromKg ?? -1) - (b.weightFromKg ?? -1)
    );
  if (rows.length === 0) return null;

  const num = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
  // Whole amounts without decimals (€40), others with both (€33.90).
  const money = (value: unknown, currency: string) => {
    const n = Number(value);
    const digits = Number.isInteger(n) ? 0 : 2;
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      minimumFractionDigits: digits,
      maximumFractionDigits: digits,
    }).format(n);
  };
  const weight = (from: number | null, to: number | null) =>
    from !== null && to !== null
      ? t.weightRange(num.format(from), num.format(to))
      : to !== null
        ? t.weightUpTo(num.format(to))
        : from !== null
          ? t.weightOver(num.format(from))
          : null;

  // Checked: the date, or the range of dates, of all rows; sources: each
  // distinct price list once, numbered when there are several.
  const dates = rows.map((r) => r.observedAt.getTime());
  const first = formatDate(new Date(Math.min(...dates)), locale);
  const last = formatDate(new Date(Math.max(...dates)), locale);
  const sources = [...new Set(rows.map((r) => r.sourceUrl))];

  // One block per service (owner, 2026-10-04): the headline "from" price, and
  // under it, for every service the city has a market for, a bar - where the
  // price sits between the cheapest and the dearest place in the city. The
  // rows by weight, notes and "not compared" go behind "All prices".
  const codes = [...new Set(rows.map((r) => r.service.code!))];
  const services = codes.map((code) => {
    const own = rows.filter((r) => r.service.code === code);
    const comparable = own.filter((r) => !r.partial && r.unit === null && !r.note);
    const headline = (comparable.length ? comparable : own).reduce((min, r) => (Number(r.priceFrom) < Number(min.priceFrom) ? r : min));
    const from = Number(headline.priceFrom);
    const cityMarket = market?.get(code);
    const compare =
      comparable.length > 0 && cityMarket && cityMarket.currency === headline.currency
        ? {
            pct: pctAgainst(from, cityMarket.median),
            at: cityMarket.max > cityMarket.min ? Math.min(100, Math.max(0, ((from - cityMarket.min) / (cityMarket.max - cityMarket.min)) * 100)) : 50,
          }
        : null;
    return { code, own, headline, from, compare, bySize: own.length > 1 };
  });

  return (
    <section className="rounded-[var(--radius-card)] bg-surface p-6 shadow-[var(--shadow-card)]">
      <h2 className="flex items-center gap-2 text-xl font-bold text-foreground">
        <TagIcon className="h-5 w-5 text-[var(--accent,var(--brand-blue))]" />
        {t.prices}
      </h2>
      <ul className="mt-2 divide-y divide-line">
        {services.map(({ code, headline, from, compare, bySize }) => {
          const unit = headline.unit ? t.perUnit[headline.unit] : null;
          const to = headline.priceTo === null ? null : Number(headline.priceTo);
          const single = !bySize && to !== null && to !== from;
          const level = compare ? (Math.abs(compare.pct) <= MARKET_BAND ? "avg" : compare.pct < 0 ? "below" : "above") : null;
          return (
            <li key={code} className="py-4">
              <div className="flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="font-semibold text-foreground">
                    {citySlug && market?.has(code) ? (
                      <Link href={pricesPath(locale, category, citySlug, code)} prefetch={false} className="hover:text-brand-blue hover:underline">
                        {serviceLabel(category, code, locale)}
                      </Link>
                    ) : (
                      serviceLabel(category, code, locale)
                    )}
                  </div>
                  {(bySize || headline.partial) && (
                    <div className="text-sm text-foreground/60">
                      {[bySize ? t.priceBySize : null, headline.partial ? t.notCompared : null].filter(Boolean).join(" · ")}
                    </div>
                  )}
                </div>
                <div className="shrink-0 text-right">
                  {(bySize || headline.partial || to === null) && !unit && <span className="mr-1 text-xs font-medium text-foreground/60">{t.priceFrom("").trim()}</span>}
                  <span className="text-xl font-extrabold text-foreground">
                    {single ? moneyRange(from, to!, headline.currency, locale) : money(from, headline.currency)}
                  </span>
                  {unit && <span className="ml-1 text-sm font-normal text-foreground/60">{unit}</span>}
                </div>
              </div>
              {compare && level && (
                <div className="mt-3" title={card.vsMarket(compare.pct, level === "avg")}>
                  <div className="relative h-1.5 rounded-full bg-[var(--accent,var(--brand-blue))]/15" aria-hidden="true">
                    <span
                      className="absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent,var(--brand-blue))] ring-2 ring-surface"
                      style={{ left: `${compare.at}%` }}
                    />
                  </div>
                  <p
                    className={`mt-1.5 text-xs font-bold ${
                      level === "below" ? "text-green-700" : level === "above" ? "text-[var(--accent,var(--brand-blue))]" : "text-foreground/60"
                    }`}
                  >
                    {level === "below" ? t.priceBelow : level === "above" ? t.priceAbove : t.priceAverage}
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      {rows.length > services.length && (
        <details className="group mt-1">
          <summary className="flex cursor-pointer list-none items-center justify-center gap-2 rounded-full bg-surface-sunken px-4 py-3 font-semibold text-foreground">
            {t.allPrices(rows.length)}
            <span aria-hidden="true" className="transition group-open:rotate-180">⌄</span>
          </summary>
          <ul className="mt-2 divide-y divide-line">
            {rows.map((item) => {
              const w = weight(item.weightFromKg, item.weightToKg);
              const unit = item.unit ? t.perUnit[item.unit] : null;
              const note = locale === "en" ? item.note : (item.noteLocal ?? item.note);
              const notCompared = item.partial || item.unit !== null || Boolean(item.note);
              const from = Number(item.priceFrom);
              const to = item.priceTo === null ? null : Number(item.priceTo);
              const price =
                to === null ? t.priceFrom(money(from, item.currency)) : to === from ? money(from, item.currency) : moneyRange(from, to, item.currency, locale);
              return (
                <li key={item.id} className="flex flex-wrap items-baseline justify-between gap-x-4 py-2 text-sm">
                  <span className="text-foreground/80">
                    {serviceLabel(category, item.service.code!, locale)}
                    {w && <span className="text-foreground/60"> · {w}</span>}
                  </span>
                  <span className="font-semibold text-foreground">
                    {price}
                    {unit && <span className="font-normal text-foreground/60"> {unit}</span>}
                  </span>
                  {(note || notCompared) && (
                    <span className="w-full text-xs text-foreground/60">
                      {[note, notCompared ? t.notCompared : null].filter(Boolean).join(" · ")}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </details>
      )}
      <p className="mt-3 border-t border-line pt-3 text-xs text-foreground/60">
        {t.pricesChecked(first === last ? first : `${first} – ${last}`)} ·{" "}
        {sources.map((url, i) => (
          <span key={url}>
            {i > 0 && ", "}
            <a href={url} target="_blank" rel="nofollow noopener noreferrer" className="underline-offset-2 hover:underline">
              {sources.length > 1 ? `${t.priceList} ${i + 1}` : t.priceList}
            </a>
          </span>
        ))}
        <span className="mt-1 block">{t.pricesDisclaimer}</span>
      </p>
    </section>
  );
}
