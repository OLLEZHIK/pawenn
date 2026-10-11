import type { BusinessCategory } from "@prisma/client";
import type { Locale } from "./locales";
import { getMarketPrices, getServicePriceRows, type ServicePriceRow } from "./data";
import { formatDate, getDictionary } from "./i18n";
import type { MarketPrice } from "./priceMarket";

// Price pages: data-backed summary. URLs and slugs (no database, safe for
// client components) live in lib/priceSlugs.ts and are re-exported here.
export { PRICES_SEGMENT, pricesPath, serviceCodeFromSlug, serviceSlugFor } from "./priceSlugs";

import { money } from "./money";

export { money };

// Compared: every full price for the whole service - not partial, not per
// hour or km. The same rows that make the market median (lib/data.ts,
// COMPARABLE_PRICE). A note ("incl. hospitalisation") is shown next to the
// price, it no longer takes it out of the comparison (owner, 2026-10-08: the
// place pages showed prices with no city comparison while the median and the
// card signs already counted them).
export const comparable = (r: { partial: boolean; unit: string | null }) => !r.partial && r.unit === null;

export interface PriceSummary {
  market: MarketPrice | undefined;
  rows: ServicePriceRow[];
  checked: Date | null;
}

export async function getPriceSummary(category: BusinessCategory, citySlug: string, code: string): Promise<PriceSummary> {
  const [market, rows] = await Promise.all([
    getMarketPrices(category, citySlug).then((m) => m.get(code)),
    getServicePriceRows(category, citySlug, code),
  ]);
  const dates = rows.filter(comparable).map((r) => r.observedAt.getTime());
  return { market, rows, checked: dates.length ? new Date(Math.max(...dates)) : null };
}

/** "Costs from 70 € to 150 €, median 79 €. We compared 8 places…" */
export function answerText(locale: Locale, summary: PriceSummary): string | null {
  const { market, checked } = summary;
  if (!market || !checked) return null;
  const t = getDictionary(locale).prices;
  return t.answer(
    money(market.min, market.currency, locale),
    money(market.max, market.currency, locale),
    money(market.median, market.currency, locale),
    market.places,
    formatDate(checked, locale)
  );
}

