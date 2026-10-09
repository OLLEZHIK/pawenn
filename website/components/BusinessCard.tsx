import Link from "next/link";
import type { BusinessWithRelations } from "@/lib/data";
import { averageRating, cardDescription, logoUrl } from "@/lib/data";
import { CATEGORY_THEME, businessPath, categoryLabel } from "@/lib/categories";
import { getDictionary, type Locale } from "@/lib/i18n";
import { VerifiedBadge } from "./VerifiedBadge";
import { PartnerBadge } from "./PartnerBadge";
import { QuickActions } from "./QuickActions";
import { BusinessAvatar } from "./BusinessAvatar";
import { GoogleRating } from "./GoogleRating";
import { ArrowRightIcon, MapPinIcon, RouteIcon } from "./icons";
import { PriceTier } from "./PriceTier";
import type { PriceLevel } from "@/lib/priceMarket";
import { logoAspect } from "@/lib/logoSize";
import { money } from "@/lib/money";
import { parseReviewInsights, type InsightCard } from "@/lib/reviewInsights";

interface BusinessCardProps {
  business: BusinessWithRelations;
  priceTier?: PriceLevel | null;
  locale: Locale;
  /** Distance from the visitor, when the list is sorted by "near me". */
  distanceKm?: number | null;
  /** The category eyebrow only helps in mixed lists; a category page
   *  already says what every card is. */
  showCategory?: boolean;
}

export function BusinessCard({ business, priceTier = null, locale, distanceKm = null, showCategory = true }: BusinessCardProps) {
  const t = getDictionary(locale);
  const rating = averageRating(business.reviews);
  const description = cardDescription(business, locale);
  const accent = CATEGORY_THEME[business.category].accent;
  // Wide wordmark logos get a wide tile; in a square one they shrank to a
  // thin line and the card looked logo-less (owner, 2026-10-07).
  // On a phone the logo sits on its own row above the name (owner,
  // 2026-10-08): its shape no longer pushes the text and the buttons to the
  // right, so every card lines up the same whatever the logo looks like.
  const aspect = business.logoFile ? logoAspect(business.logoFile) : null;
  const tile =
    aspect !== null && aspect >= 2.2
      ? "h-14 w-36 sm:h-16 sm:w-28"
      : aspect !== null && aspect >= 1.5
        ? "h-14 w-28 sm:h-16 sm:w-[5.5rem]"
        : "h-14 w-14 sm:h-16 sm:w-16";
  // One line from the review summary under the rating (owner, 2026-10-07):
  // the most-mentioned praise, else the most-mentioned topic as it is; text
  // only, no icons (owner, 2026-10-07).
  const insights = parseReviewInsights(business.reviewInsights, locale);
  const highlight = insights ? pickHighlight(insights.cards) : null;
  // A price for every place that has one: the € level when the city has a
  // market to compare with, otherwise "from 45 €" (owner, 2026-10-07).
  const fromPrice =
    priceTier === null
      ? business.priceItems
          .filter((p) => !p.partial && !p.unit)
          .map((p) => ({ value: Number(p.priceFrom), currency: p.currency }))
          .filter((p) => p.value > 0)
          .sort((a, b) => a.value - b.value)[0] ?? null
      : null;

  return (
    <article
      className="group relative flex flex-col gap-3 rounded-[var(--radius-card)] border border-transparent bg-surface p-4 shadow-[var(--shadow-card)] transition duration-200 hover:-translate-y-0.5 hover:border-brand-blue-muted-border hover:shadow-[var(--shadow-card-hover)] sm:flex-row sm:gap-5 sm:p-5"
      style={{ "--accent": accent } as React.CSSProperties}
    >
      {/* The whole card is the link; its text is the place's name, so the
          link has a real anchor text for search engines (SEO audit T12). */}
      <Link href={businessPath(locale, business.slug)} className="absolute inset-0 z-0 rounded-[var(--radius-card)]">
        <span className="sr-only">{business.name}</span>
      </Link>

      {/* Card format (owner, 2026-09-24): the business's logo, or its
          initials when it has none; photos live on the place page. */}
      {/* Wider screens: the logo sits centred in a column of one width for
          every card, so names, details and buttons start on the same line
          whatever the logo's shape (owner, 2026-10-08). */}
      <div className="shrink-0 sm:flex sm:w-28 sm:justify-center">
        <BusinessAvatar
          name={business.name}
          category={business.category}
          logoUrl={logoUrl(business.logoFile)}
          className={`${tile} shrink-0 text-lg`}
        />
      </div>

      <div className="pointer-events-none relative z-10 min-w-0 flex-1">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            {showCategory && (
              <p className="mb-0.5 text-xs font-semibold uppercase tracking-wider" style={{ color: accent }}>
                {categoryLabel(business.category, locale)}
              </p>
            )}
            <h3 className="font-heading text-lg font-bold leading-snug text-foreground transition group-hover:text-brand-blue md:text-xl">
              {business.name}
            </h3>
          </div>
          <ArrowRightIcon className="mt-1 hidden h-5 w-5 shrink-0 text-foreground/25 transition group-hover:translate-x-0.5 group-hover:text-brand-blue sm:block" />
        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground/65">
          {business.googleRating !== null && business.googleRatingCount !== null ? (
            <GoogleRating rating={business.googleRating} count={business.googleRatingCount} locale={locale} />
          ) : rating !== null && (
            <span className="inline-flex items-center gap-1">
              <StarRow rating={rating} />
              <span className="font-semibold text-foreground">{rating.toFixed(1)}</span>
              <span>({business.reviews.length})</span>
            </span>
          )}
          {business.district && (
            <span className="inline-flex items-center gap-1">
              <MapPinIcon className="h-4 w-4" />
              {business.district.name}
            </span>
          )}
          {distanceKm !== null && (
            <span className="inline-flex items-center gap-1 font-semibold text-brand-blue">
              <RouteIcon className="h-3.5 w-3.5" />
              {t.listing.kmAway(distanceKm < 10 ? distanceKm.toFixed(1) : distanceKm.toFixed(0))}
            </span>
          )}
          {priceTier !== null && <PriceTier level={priceTier} currency={business.city?.currency} locale={locale} />}
          {fromPrice && (
            <span className="font-semibold text-foreground">{t.business.priceFrom(money(fromPrice.value, fromPrice.currency, locale))}</span>
          )}
        </div>

        {highlight && (
          <p className="mt-1.5 line-clamp-2 text-sm font-medium text-foreground/85">
            <span className="sr-only">{t.insights.title}: </span>
            {highlight.title[locale] ?? highlight.title.en}
          </p>
        )}

        {description && <p className="mt-2 line-clamp-2 text-sm text-foreground/70">{description}</p>}

        {(business.verifiedAt || business.featured) && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            <VerifiedBadge verifiedAt={business.verifiedAt} locale={locale} />
            <PartnerBadge featured={business.featured} locale={locale} />
          </div>
        )}

        {/* Phone: the buttons share one row in equal widths; wider screens
            keep them at their natural width. */}
        <div className="pointer-events-auto mt-4 sm:hidden">
          <QuickActions
            businessId={business.id}
            phone={business.phone}
            website={business.website}
            address={business.address}
            size="sm"
            layout="grid"
            locale={locale}
          />
        </div>
        <div className="pointer-events-auto mt-4 hidden sm:block">
          <QuickActions
            businessId={business.id}
            phone={business.phone}
            website={business.website}
            address={business.address}
            size="sm"
            locale={locale}
          />
        </div>
      </div>
    </article>
  );
}

function pickHighlight(cards: InsightCard[]): InsightCard | null {
  const byMentions = [...cards].sort((a, b) => b.mentions - a.mentions);
  return byMentions.find((c) => c.sentiment === "positive") ?? byMentions[0] ?? null;
}

export function StarRow({ rating }: { rating: number }) {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} viewBox="0 0 20 20" className="h-3.5 w-3.5" fill={n <= Math.round(rating) ? "var(--brand-amber)" : "#E5E7EB"}>
          <path d="M10 2.8 12.4 7.7 17.8 8.5 13.9 12.3 14.8 17.7 10 15.1 5.2 17.7 6.1 12.3 2.2 8.5 7.6 7.7 10 2.8Z" />
        </svg>
      ))}
    </span>
  );
}
