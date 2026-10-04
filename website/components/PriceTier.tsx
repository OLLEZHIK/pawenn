import { getDictionary, type Locale } from "@/lib/i18n";
import { currencySign } from "@/lib/money";
import type { PriceLevel } from "@/lib/priceMarket";
import { TONE_TEXT } from "@/lib/priceTone";

// Price level against the city market (lib/priceMarket.ts): € signs like
// Google Maps plus the words - "City average", "Above city average" - so
// the signs mean something. `withLabel` off: signs only (tight spots).
export function PriceTier({
  level,
  currency,
  locale,
  withLabel = true,
  className = "",
}: {
  level: PriceLevel;
  currency: string | null | undefined;
  locale: Locale;
  withLabel?: boolean;
  className?: string;
}) {
  const sign = currencySign(locale, currency ?? "EUR");
  const t = getDictionary(locale).card;
  const words = t.vsMarket(level.pct, level.tier === 3);
  // Same colours as every price comparison: green cheaper, red dearer, grey about average.
  const tone = TONE_TEXT[level.tier === 3 ? "normal" : level.pct < 0 ? "less" : "more"];
  return (
    <span title={t.vsMarketHint} className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span role="img" aria-label={`${t.priceLevel(level.tier)}: ${words}`}>
        <span className={`font-semibold ${tone}`}>{sign.repeat(level.tier)}</span>
        <span className="text-foreground/25">{sign.repeat(5 - level.tier)}</span>
      </span>
      {withLabel && <span className={`text-xs font-medium ${tone}`}>{words}</span>}
    </span>
  );
}
