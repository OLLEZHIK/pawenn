import Link from "next/link";
import { getAllCities, getDefaultCity, getCityPoints } from "@/lib/data";
import { ALL_CATEGORIES, CATEGORY_THEME, categoryBlurb, categoryLabel, categorySlug, listingPath } from "@/lib/categories";
import { getDictionary, localePath, localesForCity, type Locale } from "@/lib/i18n";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { BrowseMenu, type ServiceLink } from "./BrowseMenu";
import { FindCareButton, SearchDialog } from "./SearchDialog";
import { HeaderShell } from "./HeaderShell";
import { LanguageSwitch } from "./LanguageSwitch";

export async function Header({ locale }: { locale: Locale }) {
  const [defaultCity, allCities, cityPoints] = await Promise.all([getDefaultCity(), getAllCities(), getCityPoints()]);
  // Only cities that have this language: a Polish page linked the menu to
  // /pl/.../bratislava/, which does not exist (404). The menu's city is the
  // language's city, as in the footer; English keeps the default city.
  const langCities = allCities.filter((c) => localesForCity(c).includes(locale));
  const city =
    defaultCity && langCities.some((c) => c.slug === defaultCity.slug) ? defaultCity : (langCities[0] ?? defaultCity);
  const citySlug = city?.slug ?? "";
  const t = getDictionary(locale);

  const services: ServiceLink[] = ALL_CATEGORIES.map((category) => ({
    href: listingPath(locale, category, citySlug),
    label: categoryLabel(category, locale),
    category,
    blurb: categoryBlurb(category, locale),
    accent: CATEGORY_THEME[category].accent,
  }));
  const cities = cityPoints
    .filter((p) => langCities.some((c) => c.slug === p.slug))
    .map(({ slug, name, lat, lng }) => ({ slug, name, lat, lng }));
  const searchCategories = ALL_CATEGORIES.map((category) => ({
    slug: categorySlug(category, locale),
    label: categoryLabel(category, locale),
    category,
  }));

  return (
    <HeaderShell>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 md:py-4">
        <Link href={localePath(locale, "/")} aria-label="pawenn home" className="flex shrink-0 items-center">
          <Logo className="h-8 w-auto sm:h-9 md:h-10" />
        </Link>

        {/* Zocdoc-style: Browse dropdown, plain text links, a divider,
            then one bright primary button. No log in / sign up - the
            product has no accounts (PRODUCT.md). */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          <BrowseMenu
            locale={locale}
            t={t.nav}
            food={t.food}
            services={services}
            cities={cities}
            defaultCitySlug={citySlug}
          />
          <Link
            href="/en/how-it-works/"
            className="inline-flex h-12 items-center rounded-[var(--radius-control)] px-4 text-[17px] font-medium text-foreground transition hover:bg-surface-sunken"
          >
            {t.nav.help}
          </Link>
          <Link
            href="/en/add-or-fix-listing/"
            className="inline-flex h-12 items-center rounded-[var(--radius-control)] px-4 text-[17px] font-medium text-foreground transition hover:bg-surface-sunken"
          >
            {t.nav.listBusiness}
          </Link>
          <LanguageSwitch variant="header" />
          <span aria-hidden="true" className="mx-2 h-8 w-px bg-foreground/15" />
          <FindCareButton
            label={t.nav.findCare}
            className="ml-2 inline-flex h-12 items-center rounded-[var(--radius-control)] bg-brand-orange px-6 text-[17px] font-semibold text-white transition hover:bg-brand-orange-deep"
          />
        </nav>

        {/* Phones: a search button next to Browse opens the same dialog. */}
        <div className="flex items-center gap-1.5 lg:hidden">
          <LanguageSwitch variant="header" compact />
          <FindCareButton
            compact
            label={t.nav.findCare}
            className="inline-flex h-11 w-11 items-center justify-center rounded-[var(--radius-control)] bg-brand-orange text-white"
          />
          <MobileMenu
          locale={locale}
          services={services}
          cities={cities}
          defaultCitySlug={citySlug}
          />
        </div>
      </div>

      <SearchDialog
        locale={locale}
        citySlug={citySlug}
        cityName={city?.name ?? "Bratislava"}
        categories={searchCategories}
        cities={cities}
      />
    </HeaderShell>
  );
}
