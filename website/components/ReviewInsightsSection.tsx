import { safeJsonLd } from "@/lib/safeJsonLd";
import type { ReviewInsights, Sentiment } from "@/lib/reviewInsights";
import { getDictionary, type Locale } from "@/lib/i18n";
import { ArrowRightIcon } from "./icons";
import { GoogleRating } from "./GoogleRating";

// "What customers say" (docs/design-plan.md, "Сводка отзывов"): our
// summary of public Google reviews. Deliberately not styled as reviews -
// no avatars, names or stars - and never marked up as Review /
// AggregateRating. Only the FAQ gets FAQPage JSON-LD (our own content).

const SENTIMENT_STYLE: Record<Sentiment, string> = {
  positive: "bg-brand-green/10 text-brand-green",
  mixed: "bg-brand-amber/15 text-[#9a5b00]",
  negative: "bg-red-500/10 text-red-700",
};

function periodLabel(from: Date, to: Date, locale: Locale): string {
  const month = new Intl.DateTimeFormat(locale, { month: "long" });
  const monthYear = new Intl.DateTimeFormat(locale, { month: "long", year: "numeric" });
  return from.getFullYear() === to.getFullYear()
    ? `${month.format(from)} – ${monthYear.format(to)}`
    : `${monthYear.format(from)} – ${monthYear.format(to)}`;
}

export function ReviewInsightsSection({ insights, locale }: { insights: ReviewInsights; locale: Locale }) {
  const t = getDictionary(locale).insights;
  const n = insights.reviewsInPeriod;

  const faqJsonLd =
    insights.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: insights.faq.map((f) => ({
            "@type": "Question",
            name: f.q[locale],
            acceptedAnswer: { "@type": "Answer", text: f.a[locale] },
          })),
        }
      : null;

  return (
    <section className="rounded-[var(--radius-card)] bg-surface p-6 shadow-[var(--shadow-card)]">
      {faqJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(faqJsonLd) }} />
      )}
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h2 className="text-xl font-bold text-foreground">{t.title}</h2>
          <p className="mt-1 text-sm text-foreground/60">
            {t.summary(n, periodLabel(insights.periodFrom, insights.periodTo, locale))}
          </p>
        </div>
        {insights.googleMapsUrl && (
          <a
            href={insights.googleMapsUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
          >
            {t.allOnGoogle}
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {insights.cards.map((card) => (
          <article key={card.topic} className="rounded-[var(--radius-control)] bg-surface-sunken p-4">
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className={`rounded-[var(--radius-pill)] px-2 py-0.5 font-semibold ${SENTIMENT_STYLE[card.sentiment]}`}>
                {t.sentiment[card.sentiment]}
              </span>
              <span className="text-foreground/60">{t.mentions(card.mentions, n)}</span>
            </div>
            <h3 className="mt-2 font-semibold text-foreground">{card.title[locale]}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-foreground/75">{card.text[locale]}</p>
          </article>
        ))}
      </div>

      {insights.faq.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-foreground">{t.faqTitle}</h3>
          <div className="mt-2 divide-y divide-line">
            {insights.faq.map((f) => (
              <details key={f.q.en} className="group py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium text-foreground">
                  {f.q[locale]}
                  <span aria-hidden="true" className="text-foreground/40 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{f.a[locale]}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      <p className="mt-5 text-xs text-foreground/60">{t.disclosure}</p>
    </section>
  );
}

/**
 * The same block for a place without a summary - fewer than 5 reviews with
 * text even over 24 months, or not collected yet (docs/playbooks/
 * review-insights.md, owner 2026-09-28). The note fits both, so it never
 * claims "too few reviews" for a place nobody has read yet. No words about
 * what reviews say - only Google's rating, the way to all reviews there and
 * to leaving one here.
 */
export function ReviewInsightsShort({
  rating,
  count,
  googleMapsUrl,
  locale,
}: {
  rating: number;
  count: number;
  googleMapsUrl: string;
  locale: Locale;
}) {
  const dict = getDictionary(locale);
  const t = dict.insights;
  return (
    <section className="rounded-[var(--radius-card)] bg-surface p-6 shadow-[var(--shadow-card)]">
      <h2 className="text-xl font-bold text-foreground">{t.title}</h2>
      <p className="mt-3">
        <GoogleRating rating={rating} count={count} locale={locale} className="text-base text-foreground/70" />
      </p>
      <p className="mt-2 text-sm text-foreground/60">{t.shortNote}</p>
      <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
        >
          {t.allOnGoogle}
          <ArrowRightIcon className="h-4 w-4" />
        </a>
        <a href="#reviews" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline">
          {dict.business.leaveReview}
          <ArrowRightIcon className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
