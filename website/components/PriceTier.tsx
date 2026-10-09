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
  // "Kč"/"zł" repeated back to back read as one word ("KčKčKč"): space every sign, wider for letter signs.
  const gap = sign.length > 1 ? "gap-1" : "gap-px";
  const words = t.vsMarket(level.pct, level.tier === 3);
  // Same colours as every price comparison: green cheaper, red dearer, grey about average.
  const tone = TONE_TEXT[level.tier === 3 ? "normal" : level.pct < 0 ? "less" : "more"];
  return (
    <span title={t.vsMarketHint} className={`inline-flex items-baseline gap-1.5 ${className}`}>
      <span role="img" aria-label={`${t.priceLevel(level.tier)}: ${words}`} className={`inline-flex ${gap}`}>
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} aria-hidden="true" className={i < level.tier ? `font-semibold ${tone}` : "text-foreground/25"}>
            {sign}
          </span>
        ))}
      </span>
      {withLabel && <span className={`text-xs font-medium ${tone}`}>{words}</span>}
    </span>
  );
}
