/**
 * City populations for the home page's "people who could use Pawenn" number
 * (owner, 2026-10-04): the sum over the cities on the site, times a tenth.
 * Figures are the latest official ones on Wikidata (statistical offices),
 * checked 2026-10-04. A new city adds one line here; a city without a line
 * is simply left out of the sum.
 */
export const CITY_POPULATION: Record<string, { people: number; year: number }> = {
  warszawa: { people: 1_862_402, year: 2024 }, // GUS
  krakow: { people: 804_237, year: 2023 }, // GUS
  bratislava: { people: 480_902, year: 2025 }, // ŠÚ SR
  kosice: { people: 222_286, year: 2025 }, // ŠÚ SR
};

/** The share of residents that could, in theory, use the site. */
export const POTENTIAL_SHARE = 0.1;

/** Potential users across the given cities, rounded down to ten thousand
 *  so the figure does not pretend to be exact. */
export function potentialUsers(citySlugs: string[]): number {
  const people = citySlugs.reduce((sum, slug) => sum + (CITY_POPULATION[slug]?.people ?? 0), 0);
  return Math.floor((people * POTENTIAL_SHARE) / 10_000) * 10_000;
}
