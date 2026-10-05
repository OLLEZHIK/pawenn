import type { BusinessCategory } from "@prisma/client";
import type { Locale } from "./locales";
import { listingPath } from "./categories";
import { hoursFromStored, type DayHours } from "./hours";

// Attribute pages (owner, 2026-09-25; docs/seo/README.md 2.3): a listing
// of one category in one city narrowed to one attribute people search
// for - "vet open on Sunday", "vet for exotic animals". Same list as the
// category page, with its own URL, title and one-sentence answer. The
// slug sits in the district slot like "prices"; no district may use it.
// Pure module (no database): safe for client components.

export type AttributeKey = "nonstop" | "saturday" | "sunday" | "exotics" | "home-visits" | "english";

/** URL slug per attribute and language - as people search it. */
const SLUGS: Record<AttributeKey, Record<Locale, string>> = {
  nonstop: { en: "nonstop", sk: "nonstop", pl: "calodobowy", cs: "nonstop" },
  saturday: { en: "open-saturday", sk: "sobota", pl: "sobota", cs: "sobota" },
  sunday: { en: "open-sunday", sk: "nedela", pl: "niedziela", cs: "nedele" },
  exotics: { en: "exotic-animals", sk: "exoticke-zvierata", pl: "zwierzeta-egzotyczne", cs: "exoticka-zvirata" },
  "home-visits": { en: "home-visits", sk: "vyjazd-domov", pl: "wizyty-domowe", cs: "vyjezd-domu" },
  // "english speaking vet bratislava" / "veterinár po anglicky"
  // (docs/seo/keywords/en.md, sk.md; owner, 2026-09-26).
  english: { en: "english-speaking", sk: "po-anglicky", pl: "po-angielsku", cs: "anglicky" },
};

/** Which attributes each category offers, in chip order. Only attributes
 *  with real search demand - not one page per specialty (thin content). */
export const CATEGORY_ATTRIBUTES: Partial<Record<BusinessCategory, AttributeKey[]>> = {
  VET_CLINIC: ["nonstop", "saturday", "sunday", "exotics", "home-visits", "english"],
};

/** Attributes a city offers for the category. In a city whose language
 *  is English, "English spoken" says nothing - every place speaks it -
 *  so there is no page and no chip (owner, 2026-09-26). */
export function attributesForCity(category: BusinessCategory, cityLocale: string): AttributeKey[] {
  return (CATEGORY_ATTRIBUTES[category] ?? []).filter((key) => !(key === "english" && cityLocale === "en"));
}

/** Places a page needs to be indexed. Nonstop is indexed from one: an
 *  emergency answer is worth a page even with a single clinic. */
export function minToIndex(key: AttributeKey): number {
  return key === "nonstop" ? 1 : 3;
}

export function attributeSlug(key: AttributeKey, locale: Locale): string {
  return SLUGS[key][locale];
}

export function attributeFromSlug(category: BusinessCategory, slug: string, locale: Locale): AttributeKey | null {
  return (CATEGORY_ATTRIBUTES[category] ?? []).find((key) => SLUGS[key][locale] === slug) ?? null;
}

export function attributePath(locale: Locale, category: BusinessCategory, citySlug: string, key: AttributeKey): string {
  return listingPath(locale, category, citySlug, SLUGS[key][locale]);
}

const isOpenDay = (h: DayHours | undefined) => h !== undefined && (h.kind === "24h" || h.kind === "intervals");

/** Does a place have the attribute? Nonstop places count as open every day. */
export function hasAttribute(
  b: { emergency247: boolean; homeVisits: boolean; specialties: string[]; openingHours: unknown; languagesSpoken: string[] },
  key: AttributeKey
): boolean {
  switch (key) {
    case "nonstop":
      return b.emergency247;
    case "saturday":
      return b.emergency247 || isOpenDay(hoursFromStored(b.openingHours)?.sa);
    case "sunday":
      return b.emergency247 || isOpenDay(hoursFromStored(b.openingHours)?.su);
    case "exotics":
      return b.specialties.includes("exotics");
    case "home-visits":
      return b.homeVisits;
    case "english":
      // As the place itself states it (English site or "we speak
      // English"; docs/card-spec.md section 8, languages_spoken).
      return b.languagesSpoken.includes("en");
  }
}
