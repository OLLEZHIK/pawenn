import type { Locale } from "./i18n";
import type { BusinessCategory } from "@prisma/client";

// URL slugs confirmed by keyword research (docs/seo/english-keywords.md) -
// docs/design-plan.md section 3 treats this list as final, not a draft.
export const CATEGORY_SLUG_TO_ENUM: Record<string, BusinessCategory> = {
  grooming: "GROOMING",
  "vet-clinics": "VET_CLINIC",
  "pet-hotels": "PET_HOTEL",
  "dog-training": "DOG_TRAINING",
  "pet-shops": "PET_SHOP",
  "pet-sitting": "PET_SITTING",
};

export const CATEGORY_ENUM_TO_SLUG: Record<BusinessCategory, string> = {
  GROOMING: "grooming",
  VET_CLINIC: "vet-clinics",
  PET_HOTEL: "pet-hotels",
  PET_SHOP: "pet-shops",
  DOG_TRAINING: "dog-training",
  PET_SITTING: "pet-sitting",
};

export const CATEGORY_LABELS: Record<BusinessCategory, string> = {
  GROOMING: "Grooming",
  VET_CLINIC: "Veterinary Clinics",
  PET_HOTEL: "Pet Hotels",
  PET_SHOP: "Pet Shops",
  DOG_TRAINING: "Dog Training",
  PET_SITTING: "Pet Sitting",
};

// Singular form, for copy like "Find a {label} in {city}".
export const CATEGORY_LABELS_SINGULAR: Record<BusinessCategory, string> = {
  GROOMING: "grooming salon",
  VET_CLINIC: "veterinary clinic",
  PET_HOTEL: "pet hotel",
  PET_SHOP: "pet shop",
  DOG_TRAINING: "dog trainer",
  PET_SITTING: "pet sitter",
};

export function categorySlugFromEnum(category: BusinessCategory): string {
  return CATEGORY_ENUM_TO_SLUG[category];
}

export function categoryEnumFromSlug(slug: string): BusinessCategory | null {
  return CATEGORY_SLUG_TO_ENUM[slug] ?? null;
}

export const ALL_CATEGORY_SLUGS = Object.keys(CATEGORY_SLUG_TO_ENUM);

// Visual identity per category: accent color (CSS var from
// design-tokens.css) and a one-line, fact-free description of what the
// service is - shown on category tiles and listing headers.
export const CATEGORY_THEME: Record<BusinessCategory, { accent: string; blurb: string }> = {
  GROOMING: { accent: "var(--cat-grooming)", blurb: "Baths, haircuts, trimming and nail care" },
  VET_CLINIC: { accent: "var(--cat-vet)", blurb: "Check-ups, vaccinations and emergencies" },
  PET_HOTEL: { accent: "var(--cat-hotel)", blurb: "Safe stays while you travel" },
  DOG_TRAINING: { accent: "var(--cat-training)", blurb: "Puppy classes, obedience and behaviour" },
  PET_SHOP: { accent: "var(--cat-shop)", blurb: "Food, toys and everyday supplies" },
  PET_SITTING: { accent: "var(--cat-sitting)", blurb: "Walks, visits and care at home" },
};

// ---------------------------------------------------------------------
// Per-locale slugs, labels and blurbs. English values mirror the maps
// above. Slovak slugs follow the original Slovak URL plan
// (docs/concept.md section 4, e.g. /psi-salon/) and the owner's example
// /sk/veterinar/bratislava/; live since language model v2 and checked by
// the keyword research (docs/seo/keywords/sk.md) - URLs, never changed.
// ---------------------------------------------------------------------

const SLUGS: Record<Locale, Record<BusinessCategory, string>> = {
  en: CATEGORY_ENUM_TO_SLUG,
  sk: {
    GROOMING: "psi-salon",
    VET_CLINIC: "veterinar",
    PET_HOTEL: "hotel-pre-zvierata",
    DOG_TRAINING: "vycvik-psov",
    PET_SHOP: "chovatelske-potreby",
    PET_SITTING: "opatrovanie-zvierat",
  },
  // docs/seo/keywords/pl.md, section 5.1 (PR #136).
  pl: {
    GROOMING: "groomer",
    VET_CLINIC: "weterynarz",
    PET_HOTEL: "hotel-dla-zwierzat",
    DOG_TRAINING: "szkolenie-psow",
    PET_SHOP: "sklep-zoologiczny",
    PET_SITTING: "opieka-nad-zwierzetami",
  },
};

const LABELS: Record<Locale, Record<BusinessCategory, string>> = {
  en: CATEGORY_LABELS,
  sk: {
    GROOMING: "Psie salóny",
    VET_CLINIC: "Veterinárne ambulancie",
    PET_HOTEL: "Hotely pre zvieratá",
    DOG_TRAINING: "Výcvik psov",
    PET_SHOP: "Chovateľské potreby",
    PET_SITTING: "Opatrovanie zvierat",
  },
  pl: {
    GROOMING: "Salony groomerskie",
    VET_CLINIC: "Lecznice weterynaryjne",
    PET_HOTEL: "Hotele dla zwierząt",
    DOG_TRAINING: "Szkolenie psów",
    PET_SHOP: "Sklepy zoologiczne",
    PET_SITTING: "Opieka nad zwierzętami",
  },
};

const SINGULAR: Record<Locale, Record<BusinessCategory, string>> = {
  en: CATEGORY_LABELS_SINGULAR,
  sk: {
    GROOMING: "psí salón",
    VET_CLINIC: "veterinárna ambulancia",
    PET_HOTEL: "hotel pre zvieratá",
    DOG_TRAINING: "výcvik psa",
    PET_SHOP: "chovateľské potreby",
    PET_SITTING: "opatrovanie zvierat",
  },
  pl: {
    GROOMING: "salon groomerski",
    VET_CLINIC: "lecznica weterynaryjna",
    PET_HOTEL: "hotel dla zwierząt",
    DOG_TRAINING: "szkolenie psa",
    PET_SHOP: "sklep zoologiczny",
    PET_SITTING: "opieka nad zwierzętami",
  },
};

// Plural noun for running copy ("Compare 10 grooming salons..."). The
// English labels are headings ("Grooming", "Dog Training") and read
// wrong after a number.
const PLURAL: Record<Locale, Record<BusinessCategory, string>> = {
  en: {
    GROOMING: "grooming salons",
    VET_CLINIC: "vet clinics",
    PET_HOTEL: "pet hotels",
    DOG_TRAINING: "dog trainers",
    PET_SHOP: "pet shops",
    PET_SITTING: "pet sitters",
  },
  sk: {
    GROOMING: "psie salóny",
    VET_CLINIC: "veterinárne ambulancie",
    PET_HOTEL: "hotely pre zvieratá",
    DOG_TRAINING: "výcvik psov",
    PET_SHOP: "chovateľské potreby",
    PET_SITTING: "opatrovanie zvierat",
  },
  pl: {
    GROOMING: "salony groomerskie",
    VET_CLINIC: "lecznice weterynaryjne",
    PET_HOTEL: "hotele dla zwierząt",
    DOG_TRAINING: "szkoły i trenerzy psów",
    PET_SHOP: "sklepy zoologiczne",
    PET_SITTING: "petsitterzy",
  },
};

// Page <title> wording: the phrases people actually type, per language
// (docs/seo/keywords/<locale>.md, "главный" first, then the site's own
// term). A pattern for every city of the language, not for one city.
// "Grooming in Bratislava" alone also matches barbershops, so the
// English titles say which animals.
const SEO_TITLE: Record<Locale, Record<BusinessCategory, string>> = {
  en: {
    GROOMING: "Dog Grooming & Groomers",
    VET_CLINIC: "Vets & Veterinary Clinics",
    PET_HOTEL: "Dog Hotels & Pet Boarding",
    DOG_TRAINING: "Dog Training & Puppy Classes",
    PET_SHOP: "Pet Shops",
    PET_SITTING: "Dog Sitters & Dog Walkers",
  },
  sk: {
    GROOMING: "Strihanie psov a psie salóny",
    VET_CLINIC: "Veterinári a veterinárne ambulancie",
    PET_HOTEL: "Hotely pre psov a mačky",
    DOG_TRAINING: "Výcvik psov a kynológovia",
    PET_SHOP: "Zverimex a chovateľské potreby",
    PET_SITTING: "Venčenie a stráženie psov",
  },
  pl: {
    GROOMING: "Groomer i strzyżenie psów",
    VET_CLINIC: "Weterynarze i lecznice weterynaryjne",
    PET_HOTEL: "Hotele dla psów i kotów",
    DOG_TRAINING: "Szkolenie psów i behawioryści",
    PET_SHOP: "Sklepy zoologiczne",
    PET_SITTING: "Petsitterzy i wyprowadzanie psów",
  },
};

// Price overview (/<category>/<city>/prices) name: the main "prices"
// query of the category from docs/seo/keywords/<locale>.md, section 3.
// English carries "prices" itself; Slovak adds "– cenník a ceny" in the
// dictionary template.
const PRICES_NAME: Record<Locale, Record<BusinessCategory, string>> = {
  en: {
    GROOMING: "Dog grooming prices",
    VET_CLINIC: "Vet prices & clinic fees",
    PET_HOTEL: "Dog hotel & boarding prices",
    DOG_TRAINING: "Dog training prices",
    PET_SHOP: "Pet shop prices",
    PET_SITTING: "Dog sitting & walking prices",
  },
  sk: {
    GROOMING: "Strihanie psa",
    VET_CLINIC: "Veterina",
    PET_HOTEL: "Hotel pre psov",
    DOG_TRAINING: "Výcvik psa",
    PET_SHOP: "Chovateľské potreby",
    PET_SITTING: "Stráženie a venčenie psa",
  },
  pl: {
    GROOMING: "Strzyżenie psów",
    VET_CLINIC: "Weterynarz",
    PET_HOTEL: "Hotel dla psów",
    DOG_TRAINING: "Szkolenie psa",
    PET_SHOP: "Sklep zoologiczny",
    PET_SITTING: "Opieka nad psem",
  },
};

const BLURBS: Record<Locale, Record<BusinessCategory, string>> = {
  en: {
    GROOMING: CATEGORY_THEME.GROOMING.blurb,
    VET_CLINIC: CATEGORY_THEME.VET_CLINIC.blurb,
    PET_HOTEL: CATEGORY_THEME.PET_HOTEL.blurb,
    DOG_TRAINING: CATEGORY_THEME.DOG_TRAINING.blurb,
    PET_SHOP: CATEGORY_THEME.PET_SHOP.blurb,
    PET_SITTING: CATEGORY_THEME.PET_SITTING.blurb,
  },
  sk: {
    GROOMING: "Kúpanie, strihanie, trimovanie a starostlivosť o pazúry",
    VET_CLINIC: "Prehliadky, očkovanie a pohotovosť",
    PET_HOTEL: "Bezpečný pobyt, kým ste na cestách",
    DOG_TRAINING: "Kurzy pre šteňatá, poslušnosť a správanie",
    PET_SHOP: "Krmivo, hračky a potreby na každý deň",
    PET_SITTING: "Venčenie, návštevy a starostlivosť doma",
  },
  pl: {
    GROOMING: "Kąpiel, strzyżenie, trymowanie i pazury",
    VET_CLINIC: "Badania, szczepienia i pomoc w nagłych przypadkach",
    PET_HOTEL: "Bezpieczny pobyt na czas Twojego wyjazdu",
    DOG_TRAINING: "Psie przedszkole, posłuszeństwo i zachowanie",
    PET_SHOP: "Karmy, zabawki i artykuły na co dzień",
    PET_SITTING: "Spacery, wizyty i opieka w domu",
  },
};

export const ALL_CATEGORIES: BusinessCategory[] = [
  "GROOMING",
  "VET_CLINIC",
  "PET_HOTEL",
  "DOG_TRAINING",
  "PET_SHOP",
  "PET_SITTING",
];

export function categorySlug(category: BusinessCategory, locale: Locale): string {
  return SLUGS[locale][category];
}

export function categoryFromSlug(slug: string, locale: Locale): BusinessCategory | null {
  const entry = Object.entries(SLUGS[locale]).find(([, s]) => s === slug);
  return entry ? (entry[0] as BusinessCategory) : null;
}

export function categoryLabel(category: BusinessCategory, locale: Locale): string {
  return LABELS[locale][category];
}

export function categorySingular(category: BusinessCategory, locale: Locale): string {
  return SINGULAR[locale][category];
}

export function categoryPlural(category: BusinessCategory, locale: Locale): string {
  return PLURAL[locale][category];
}

export function categorySeoTitle(category: BusinessCategory, locale: Locale): string {
  return SEO_TITLE[locale][category];
}

export function categoryPricesName(category: BusinessCategory, locale: Locale): string {
  return PRICES_NAME[locale][category];
}

export function categoryBlurb(category: BusinessCategory, locale: Locale): string {
  return BLURBS[locale][category];
}

// Locale-aware paths. English is unprefixed; see lib/i18n.ts.
const BUSINESS_SEGMENT: Record<Locale, string> = { en: "business", sk: "podnik", pl: "miejsce" };

export function businessSegment(locale: Locale): string {
  return BUSINESS_SEGMENT[locale];
}

export function listingPath(
  locale: Locale,
  category: BusinessCategory,
  citySlug: string,
  districtSlug?: string | null
): string {
  const base = `/${categorySlug(category, locale)}/${citySlug}/${districtSlug ? `${districtSlug}/` : ""}`;
  return `/${locale}${base}`;
}

/** A service across cities: /en/vet-clinics/, /sk/veterinar/ - where the
 *  visitor picks a city (docs/architecture/multi-city.md 3.1). */
export function categoryHubPath(locale: Locale, category: BusinessCategory): string {
  return `/${locale}/${categorySlug(category, locale)}/`;
}

// City hub: /city/<slug>/, /sk/mesto/<slug>/ - served by the
// [category]/[city] route (this segment is never a category slug).
export const CITY_SEGMENT: Record<Locale, string> = { en: "city", sk: "mesto", pl: "miasto" };

export function isCitySegment(segment: string, locale: Locale): boolean {
  return CITY_SEGMENT[locale] === segment;
}

export function cityPath(locale: Locale, citySlug: string): string {
  const base = `/${CITY_SEGMENT[locale]}/${citySlug}/`;
  return `/${locale}${base}`;
}

export function businessPath(locale: Locale, slug: string): string {
  const base = `/${BUSINESS_SEGMENT[locale]}/${slug}/`;
  return `/${locale}${base}`;
}
