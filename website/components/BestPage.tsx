import Link from "next/link";
import type { Metadata } from "next";
import type { BusinessCategory, City } from "@prisma/client";
import { safeJsonLd } from "@/lib/safeJsonLd";
import { cardDescription, logoUrl, searchBusinesses, type BusinessWithRelations } from "@/lib/data";
import { CATEGORY_THEME, businessPath, listingPath } from "@/lib/categories";
import { formatDate, type Locale } from "@/lib/i18n";
import { BEST_TEXT, MIN_RATINGS, bestName, bestPath, rankBest } from "@/lib/bestPages";
import { localesForCity } from "@/lib/i18n";
import { localeAlternates, socialMeta } from "@/lib/seo";
import { whereLabel } from "./CategoryListing";
import { parseReviewInsights, type InsightCard } from "@/lib/reviewInsights";
import { SITE_URL } from "@/lib/site";
import { BusinessAvatar } from "./BusinessAvatar";
import { GoogleRating } from "./GoogleRating";
import { PageHeader } from "./PricePages";
import { PageCity } from "./PageCity";
import { ArrowRightIcon } from "./icons";

// "Best" page (lib/bestPages.ts): the top places of a category in a city
// or district, each with what customers praise and, when people mention a
// drawback often, that too - the honest part is what makes the list worth
// reading, not just the order.

export async function getBestPlaces(category: BusinessCategory, citySlug: string, districtSlug?: string | null) {
  return rankBest(await searchBusinesses({ category, citySlug, districtSlug: districtSlug ?? undefined }));
}

function praise(cards: InsightCard[]): InsightCard | null {
  return [...cards].filter((c) => c.sentiment === "positive").sort((a, b) => b.mentions - a.mentions)[0] ?? null;
}

/** A drawback worth knowing: a negative or mixed point at least two people make. */
function drawback(cards: InsightCard[]): InsightCard | null {
  return [...cards].filter((c) => c.sentiment !== "positive" && c.mentions >= 2).sort((a, b) => b.mentions - a.mentions)[0] ?? null;
}

const text = (v: Record<string, string>, locale: Locale) => v[locale] ?? v.en;

export function BestList({
  locale,
  category,
  city,
  district,
  places,
  where,
}: {
  locale: Locale;
  category: BusinessCategory;
  city: City;
  district: { slug: string; name: string } | null;
  places: BusinessWithRelations[];
  where: string;
}) {
  const t = BEST_TEXT[locale];
  const name = bestName(category, locale);
  const accent = CATEGORY_THEME[category].accent;
  const path = bestPath(locale, category, city.slug, district?.slug);
  const checked = places
    .map((p) => p.ratingObservedAt?.getTime() ?? 0)
    .filter(Boolean)
    .reduce((a, b) => Math.max(a, b), 0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.h1(name, where),
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: places.length,
    itemListElement: places.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: `${SITE_URL}${businessPath(locale, p.slug)}`,
    })),
    url: `${SITE_URL}${path}`,
  };

  return (
    <main style={{ "--accent": accent } as React.CSSProperties}>
      <PageCity slug={city.slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <PageHeader
        locale={locale}
        category={category}
        city={city}
        crumbs={[
          ...(district ? [{ label: district.name, href: listingPath(locale, category, city.slug, district.slug) }] : []),
          { label: t.chip },
        ]}
        title={t.h1(name, where)}
        lead={t.lead(places.length)}
      />

      <div className="mx-auto max-w-4xl space-y-4 px-4 pt-8">
        <ol className="space-y-4">
          {places.map((p, i) => {
            const insights = parseReviewInsights(p.reviewInsights, locale);
            const good = insights ? praise(insights.cards) : null;
            const bad = insights ? drawback(insights.cards) : null;
            const about = good ? null : cardDescription(p, locale);
            return (
              <li key={p.id} className="relative rounded-[var(--radius-card)] bg-surface p-5 shadow-[var(--shadow-card)] md:p-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 w-7 shrink-0 text-2xl font-extrabold text-[var(--accent,var(--brand-blue))]">{i + 1}</span>
                  <BusinessAvatar name={p.name} category={category} logoUrl={logoUrl(p.logoFile)} className="h-14 w-14 shrink-0 text-base" />
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-lg font-bold leading-snug text-foreground md:text-xl">
                      <Link href={businessPath(locale, p.slug)} className="hover:text-brand-blue after:absolute after:inset-0 after:content-['']">
                        {p.name}
                      </Link>
                    </h2>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground/65">
                      <GoogleRating rating={p.googleRating!} count={p.googleRatingCount!} locale={locale} />
                      {p.district && <span>{p.district.name}</span>}
                    </div>
                  </div>
                </div>
                {good && (
                  <div className="mt-4 md:pl-[6.75rem]">
                    <p className="text-sm font-semibold text-foreground">
                      {t.praised}: {text(good.title, locale)}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/75">{text(good.text, locale)}</p>
                    {bad && (
                      <p className="mt-2 text-sm text-foreground/65">
                        <span className="font-semibold text-foreground/80">{t.mention}:</span> {text(bad.title, locale)}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-foreground/50">{t.reviewsSummarised(insights!.reviewsInPeriod)}</p>
                  </div>
                )}
                {about && <p className="mt-4 text-sm leading-relaxed text-foreground/75 md:pl-[6.75rem]">{about}</p>}
                {p.phone && (
                  <a
                    href={`tel:${p.phone.replace(/\s+/g, "")}`}
                    className="relative z-10 mt-3 inline-block text-sm font-semibold text-brand-orange hover:underline md:ml-[6.75rem]"
                  >
                    {p.phone}
                  </a>
                )}
              </li>
            );
          })}
        </ol>

        <section className="rounded-[var(--radius-card)] bg-surface-sunken px-6 py-5 text-sm text-foreground/75">
          <h2 className="text-base font-bold text-foreground">{t.howTitle}</h2>
          <p className="mt-2">{t.how(MIN_RATINGS, checked ? formatDate(new Date(checked), locale) : "—")}</p>
        </section>

        <Link
          href={listingPath(locale, category, city.slug, district?.slug)}
          className="inline-flex items-center gap-1 font-semibold text-brand-blue hover:underline"
        >
          {t.allPlaces}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
}

/** Title, description and alternates of a best page (city or district). */
export function bestMetadata(
  locale: Locale,
  category: BusinessCategory,
  city: City,
  district: { slug: string; name: string; inPhrases?: unknown } | null,
  n: number,
  places: { ratingObservedAt: Date | null }[]
): Metadata {
  const t = BEST_TEXT[locale];
  const where = whereLabel(locale, city, district);
  const year = Math.max(...places.map((p) => p.ratingObservedAt?.getFullYear() ?? 0), new Date().getFullYear() - 1);
  const title = t.metaTitle(bestName(category, locale), where, n, year).find((o) => o.length <= 60) ?? t.h1(bestName(category, locale), where);
  const description = t.metaDescription(n, where);
  const path = bestPath(locale, category, city.slug, district?.slug);
  return {
    title: { absolute: title },
    description,
    alternates: localeAlternates(
      locale,
      Object.fromEntries(localesForCity(city).map((l) => [l, bestPath(l, category, city.slug, district?.slug)]))
    ),
    ...socialMeta({ title, description, path, locale, image: { title: t.h1(bestName(category, locale), where), category } }),
  };
}
