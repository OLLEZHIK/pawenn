import { getAllCities, getDefaultCity } from "@/lib/data";
import { LanguageSwitch } from "./LanguageSwitch";
import { ALL_CATEGORIES, categoryLabel, cityPath } from "@/lib/categories";
import { getDictionary, inCity, localesForCity, type Locale } from "@/lib/i18n";
import { DATE_LOCALE } from "@/lib/locales";
import { Logo } from "./Logo";
import { ShieldCheckIcon } from "./icons";
import { GUIDE_TEXT, guidesPath, listGuides } from "@/lib/guides";
import { FooterColumn, FooterLink, FooterPlaces, type FooterScope } from "./FooterPlaces";

export async function Footer({ locale }: { locale: Locale }) {
  const [defaultCity, allCities] = await Promise.all([getDefaultCity(), getAllCities()]);
  const t = getDictionary(locale).footer;

  // Default city's country first, then the rest in data order.
  const cities = [...allCities].sort(
    (a, b) => Number(b.country === defaultCity?.country) - Number(a.country === defaultCity?.country)
  );
  // The country of this language, when there is exactly one: cities that
  // list the language as their own (sk -> SK, pl -> PL). English is
  // everyone's second language, so it has none until a city lists "en".
  const ownCountries = [...new Set(cities.filter((c) => (c.locales ?? []).includes(locale)).map((c) => c.country))];
  const homeCountry = ownCountries.length === 1 ? ownCountries[0] : null;

  // Tagline and bottom line per country: "in <city>" only while the
  // country has one city (the site is generic with several).
  const scope = (list: typeof cities): FooterScope => {
    const where = list.length === 1 ? inCity(locale, list[0]) : null;
    return { tagline: t.tagline(where), made: t.madeWithCare(where) };
  };
  const countries = [...new Set(cities.map((c) => c.country))];
  const scopes: Record<string, FooterScope> = { "*": scope(cities) };
  for (const code of countries) scopes[code] = scope(cities.filter((c) => c.country === code));

  const regionNames = new Intl.DisplayNames([DATE_LOCALE[locale]], { type: "region" });
  const countryNames = Object.fromEntries(countries.map((code) => [code, regionNames.of(code) ?? code]));

  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--brand-orange)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16">
        <FooterPlaces
          locale={locale}
          categories={ALL_CATEGORIES.map((category) => ({ category, label: categoryLabel(category, locale) }))}
          // Every city's hub, in this language where the city has it.
          cities={cities.map((c) => ({
            slug: c.slug,
            name: c.name,
            country: c.country,
            href: cityPath(localesForCity(c).includes(locale) ? locale : "en", c.slug),
          }))}
          countryNames={countryNames}
          homeCountry={homeCountry}
          defaultSlug={defaultCity?.slug ?? ""}
          scopes={scopes}
          labels={{ services: t.services, cities: t.cities }}
          brand={<Logo className="h-10 w-auto" wordmarkColor="#FFFFFF" />}
          badge={
            <p className="mt-5 inline-flex items-center gap-2 rounded-[var(--radius-pill)] bg-white/10 px-3 py-1.5 text-xs text-white/80">
              <ShieldCheckIcon className="h-4 w-4 text-brand-green" />
              {t.sourced}
            </p>
          }
          about={
            <FooterColumn title={t.about}>
              {listGuides(locale).length > 0 && <FooterLink href={guidesPath(locale)}>{GUIDE_TEXT[locale].nav}</FooterLink>}
              <FooterLink href="/en/how-it-works/">{t.howItWorks}</FooterLink>
              <FooterLink href="/en/add-or-fix-listing/">{t.addBusiness}</FooterLink>
              <FooterLink href="/en/add-or-fix-listing/">{t.fixListing}</FooterLink>
            </FooterColumn>
          }
          legal={
            <FooterColumn title={t.legal}>
              <FooterLink href="/en/privacy-policy/">{t.privacy}</FooterLink>
              <FooterLink href="/en/terms-of-use/">{t.terms}</FooterLink>
            </FooterColumn>
          }
          bottomLeft={<p>&copy; {new Date().getFullYear()} pawenn.com</p>}
          bottomMiddle={<LanguageSwitch />}
        />
      </div>
    </footer>
  );
}
