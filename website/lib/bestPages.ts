import type { BusinessCategory } from "@prisma/client";
import { listingPath } from "./categories";
import type { Locale } from "./locales";

// "Best" pages (owner, 2026-10-08): the top 10 places of a category in a
// city or a district, ranked by Google rating weighed by how many people
// rated, each with what customers praise (our review summary). Queries
// like "best dog groomer brooklyn" or "beste Tierarzt Berlin Mitte" have
// buying intent, and the review summaries make the page more than a list.
//
// URL: /<lang>/<category>/<city>/<best>/ and
//      /<lang>/<category>/<city>/<district>/<best>/

export const BEST_SEGMENT: Record<Locale, string> = { en: "best", sk: "najlepsie", pl: "najlepsze", cs: "nejlepsi", de: "beste" };

/** A place counts with at least this many Google ratings… */
export const MIN_RATINGS = 10;
/** …and at least this rating. */
export const MIN_RATING = 4.0;
/** A page exists from this many places that count. */
export const MIN_PLACES_BEST = 5;
/** Places shown. */
export const TOP_BEST = 10;
// Bayesian average: every place starts with PRIOR_WEIGHT imaginary
// ratings of PRIOR_MEAN, so 4.9 from 15 people ranks below 4.8 from 400.
const PRIOR_MEAN = 4.5;
const PRIOR_WEIGHT = 30;

export function bestScore(rating: number, count: number): number {
  return (rating * count + PRIOR_MEAN * PRIOR_WEIGHT) / (count + PRIOR_WEIGHT);
}

export function qualifies(b: { googleRating: number | null; googleRatingCount: number | null }): boolean {
  return b.googleRating !== null && b.googleRatingCount !== null && b.googleRating >= MIN_RATING && b.googleRatingCount >= MIN_RATINGS;
}

/** The places of a best page, best first; empty below MIN_PLACES_BEST. */
export function rankBest<T extends { googleRating: number | null; googleRatingCount: number | null; slug: string }>(places: T[]): T[] {
  const ranked = places
    .filter(qualifies)
    .sort(
      (a, b) =>
        bestScore(b.googleRating!, b.googleRatingCount!) - bestScore(a.googleRating!, a.googleRatingCount!) ||
        b.googleRatingCount! - a.googleRatingCount! ||
        a.slug.localeCompare(b.slug)
    );
  return ranked.length >= MIN_PLACES_BEST ? ranked.slice(0, TOP_BEST) : [];
}

export function bestPath(locale: Locale, category: BusinessCategory, citySlug: string, districtSlug?: string | null): string {
  return `${listingPath(locale, category, citySlug, districtSlug)}${BEST_SEGMENT[locale]}/`;
}

/** "Best dog groomers", "Die besten Tierärzte" - plural, agreeing in every language. */
const BEST_NAME: Record<Locale, Record<BusinessCategory, string>> = {
  en: {
    GROOMING: "Best dog groomers",
    VET_CLINIC: "Best vets",
    PET_HOTEL: "Best dog hotels",
    DOG_TRAINING: "Best dog trainers",
    PET_SHOP: "Best pet shops",
    PET_SITTING: "Best dog walkers and sitters",
  },
  sk: {
    GROOMING: "Najlepšie psie salóny",
    VET_CLINIC: "Najlepší veterinári",
    PET_HOTEL: "Najlepšie hotely pre psov",
    DOG_TRAINING: "Najlepší cvičitelia psov",
    PET_SHOP: "Najlepšie zverimexy",
    PET_SITTING: "Najlepšie stráženie a venčenie psov",
  },
  pl: {
    GROOMING: "Najlepsi groomerzy",
    VET_CLINIC: "Najlepsi weterynarze",
    PET_HOTEL: "Najlepsze hotele dla psów",
    DOG_TRAINING: "Najlepsi trenerzy psów",
    PET_SHOP: "Najlepsze sklepy zoologiczne",
    PET_SITTING: "Najlepsi petsitterzy",
  },
  cs: {
    GROOMING: "Nejlepší psí salony",
    VET_CLINIC: "Nejlepší veterináři",
    PET_HOTEL: "Nejlepší psí hotely",
    DOG_TRAINING: "Nejlepší cvičitelé psů",
    PET_SHOP: "Nejlepší zverimexy",
    PET_SITTING: "Nejlepší hlídání a venčení psů",
  },
  de: {
    GROOMING: "Die besten Hundesalons",
    VET_CLINIC: "Die besten Tierärzte",
    PET_HOTEL: "Die besten Hundepensionen",
    DOG_TRAINING: "Die besten Hundeschulen",
    PET_SHOP: "Die besten Tierhandlungen",
    PET_SITTING: "Die besten Hundesitter",
  },
};

export function bestName(category: BusinessCategory, locale: Locale): string {
  return BEST_NAME[locale][category];
}

export const BEST_TEXT: Record<
  Locale,
  {
    /** H1: "Best dog groomers in Brooklyn, New York". */
    h1: (name: string, where: string) => string;
    metaTitle: (name: string, where: string, n: number, year: number) => string[];
    metaDescription: (n: number, where: string) => string;
    lead: (n: number) => string;
    praised: string;
    mention: string;
    reviewsSummarised: (n: number) => string;
    howTitle: string;
    how: (min: number, date: string) => string;
    allPlaces: string;
    /** Chip on listing pages. */
    chip: string;
    /** Place page: "No. 2 · Best dog groomers in Brooklyn". */
    rank: (n: number) => string;
  }
> = {
  en: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `The ${n} highest-rated places ${where}, ranked by Google rating and number of reviews, with what customers praise in each.`,
    lead: (n) =>
      `The ${n} places with the best Google ratings, weighed by how many people rated them. Under each: what customers praise most, from our summary of recent reviews.`,
    praised: "What customers praise",
    mention: "Some mention",
    reviewsSummarised: (n) => `from ${n} recent ${n === 1 ? "review" : "reviews"}`,
    howTitle: "How we ranked",
    how: (min, date) =>
      `By Google rating, weighed by the number of ratings: a 4.9 from 15 people ranks below a 4.8 from 400. Only places with at least ${min} ratings. Ratings checked ${date}. No place pays to be on this list.`,
    allPlaces: "All places",
    chip: "Best rated",
    rank: (n) => `No. ${n}`,
  },
  sk: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `${n} najlepšie hodnotených podnikov ${where} podľa hodnotenia na Google a počtu recenzií – a za čo ich zákazníci chvália.`,
    lead: (n) =>
      `${n} podnikov s najlepším hodnotením na Google, so zohľadnením počtu hodnotení. Pri každom: za čo ho zákazníci chvália najviac, podľa nášho zhrnutia nedávnych recenzií.`,
    praised: "Za čo ho chvália",
    mention: "Niektorí spomínajú",
    reviewsSummarised: (n) => `z ${n} nedávnych recenzií`,
    howTitle: "Ako sme poradie zostavili",
    how: (min, date) =>
      `Podľa hodnotenia na Google so zohľadnením počtu hodnotení: 4,9 od 15 ľudí je nižšie ako 4,8 od 400. Len podniky s aspoň ${min} hodnoteniami. Hodnotenia overené ${date}. Za miesto v rebríčku nikto neplatí.`,
    allPlaces: "Všetky podniky",
    chip: "Najlepšie hodnotené",
    rank: (n) => `${n}. miesto`,
  },
  pl: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `${n} najwyżej ocenianych miejsc ${where} według ocen w Google i liczby opinii – i za co chwalą je klienci.`,
    lead: (n) =>
      `${n} miejsc z najlepszą oceną w Google, z uwzględnieniem liczby ocen. Przy każdym: za co klienci chwalą je najbardziej, według naszego podsumowania ostatnich opinii.`,
    praised: "Za co chwalą",
    mention: "Niektórzy wspominają",
    reviewsSummarised: (n) => `z ${n} ostatnich opinii`,
    howTitle: "Jak ułożyliśmy ranking",
    how: (min, date) =>
      `Według oceny w Google z uwzględnieniem liczby ocen: 4,9 od 15 osób jest niżej niż 4,8 od 400. Tylko miejsca z co najmniej ${min} ocenami. Oceny sprawdzone ${date}. Nikt nie płaci za miejsce w rankingu.`,
    allPlaces: "Wszystkie miejsca",
    chip: "Najlepiej oceniane",
    rank: (n) => `${n}. miejsce`,
  },
  cs: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: top ${n} (${year}) | Pawenn`, `${name} ${where}: top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `${n} nejlépe hodnocených podniků ${where} podle hodnocení na Google a počtu recenzí – a za co je zákazníci chválí.`,
    lead: (n) =>
      `${n} podniků s nejlepším hodnocením na Google, s ohledem na počet hodnocení. U každého: za co ho zákazníci chválí nejvíc, podle našeho shrnutí nedávných recenzí.`,
    praised: "Za co ho chválí",
    mention: "Někteří zmiňují",
    reviewsSummarised: (n) => `z ${n} nedávných recenzí`,
    howTitle: "Jak jsme pořadí sestavili",
    how: (min, date) =>
      `Podle hodnocení na Google s ohledem na počet hodnocení: 4,9 od 15 lidí je níž než 4,8 od 400. Jen podniky s alespoň ${min} hodnoceními. Hodnocení ověřena ${date}. Za místo v žebříčku nikdo neplatí.`,
    allPlaces: "Všechny podniky",
    chip: "Nejlépe hodnocené",
    rank: (n) => `${n}. místo`,
  },
  de: {
    h1: (name, where) => `${name} ${where}`,
    metaTitle: (name, where, n, year) => [`${name} ${where}: Top ${n} (${year}) | Pawenn`, `${name} ${where}: Top ${n} (${year})`, `${name} ${where} (${year})`, `${name} ${where}`],
    metaDescription: (n, where) =>
      `Die ${n} am besten bewerteten Adressen ${where}, nach Google-Bewertung und Zahl der Rezensionen – und wofür Kunden sie loben.`,
    lead: (n) =>
      `Die ${n} Adressen mit den besten Google-Bewertungen, gewichtet nach der Zahl der Bewertungen. Bei jeder: wofür Kunden sie am meisten loben, aus unserer Zusammenfassung aktueller Rezensionen.`,
    praised: "Wofür Kunden loben",
    mention: "Manche erwähnen",
    reviewsSummarised: (n) => `aus ${n} aktuellen Rezensionen`,
    howTitle: "So haben wir sortiert",
    how: (min, date) =>
      `Nach Google-Bewertung, gewichtet nach der Zahl der Bewertungen: 4,9 von 15 Personen steht unter 4,8 von 400. Nur Adressen mit mindestens ${min} Bewertungen. Bewertungen geprüft am ${date}. Niemand bezahlt für einen Platz in dieser Liste.`,
    allPlaces: "Alle Adressen",
    chip: "Am besten bewertet",
    rank: (n) => `Platz ${n}`,
  },
};
