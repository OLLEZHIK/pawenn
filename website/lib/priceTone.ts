import { MARKET_BAND } from "./priceMarket";

/**
 * How a price stands against the city average, for colour (owner, 2026-10-04):
 * green - cheaper, red - dearer, grey - about average (within MARKET_BAND).
 */
export type PriceTone = "less" | "more" | "normal";

export function priceTone(pct: number): PriceTone {
  if (Math.abs(pct) <= MARKET_BAND) return "normal";
  return pct < 0 ? "less" : "more";
}

export const TONE_TEXT: Record<PriceTone, string> = {
  less: "text-green-700",
  more: "text-red-700",
  normal: "text-foreground/60",
};
