import type { Locale } from "./locales";

// Prices in the city's own currency (city.json "currency": EUR, PLN, CZK,
// USD ...), written the way the page's language writes money. Pure module
// (no database), safe for client components.

/** 40 € / 33,90 € in Slovak, €40 in English, 40 zł in Polish. */
export function money(value: number, currency: string, locale: Locale): string {
  const digits = Number.isInteger(value) ? 0 : 2;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value);
}

/** A price range the way the language writes it, the sign once where the
 *  language allows: "150–240 zł", "15 – 21 €", "€15 – €21" (owner,
 *  2026-09-28: "150 zł–240 zł" read cramped). */
export function moneyRange(from: number, to: number, currency: string, locale: Locale): string {
  const digits = Number.isInteger(from) && Number.isInteger(to) ? 0 : 2;
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).formatRange(from, to);
}

/** The currency's own sign: € for EUR, zł for PLN, Kč for CZK - in every
 *  language (narrow symbol: an English page shows zł, not PLN), so price
 *  levels read "zł zł" rather than "PLNPLN". */
export function currencySign(locale: Locale, currency: string): string {
  try {
    return (
      new Intl.NumberFormat(locale, { style: "currency", currency, currencyDisplay: "narrowSymbol" })
        .formatToParts(0).find((p) => p.type === "currency")
        ?.value ?? currency
    );
  } catch {
    return currency;
  }
}
