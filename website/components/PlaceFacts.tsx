import type { BusinessCategory } from "@prisma/client";
import { safeJsonLd } from "@/lib/safeJsonLd";
import { factFaq, factLabel } from "@/lib/facts";
import { getDictionary, type Locale } from "@/lib/i18n";
import { ShieldCheckIcon } from "./icons";

// "Good to know" (owner, 2026-09-26; docs/card-spec.md section 9): the
// practical facts the place states on its own site, and the questions
// they answer. The FAQ is shown (with FAQPage JSON-LD) only when the page
// has no review-summary FAQ - one FAQPage per page.
export function PlaceFacts({
  category,
  facts,
  locale,
  withFaq,
}: {
  category: BusinessCategory;
  facts: string[];
  locale: Locale;
  withFaq: boolean;
}) {
  const t = getDictionary(locale).business;
  const items = facts
    .map((code) => ({ code, label: factLabel(category, code, locale) }))
    .filter((f): f is { code: string; label: string } => f.label !== null);
  if (items.length === 0) return null;
  const faq = withFaq ? factFaq(category, facts, locale) : [];

  return (
    <section className="rounded-[var(--radius-card)] bg-surface p-6 shadow-[var(--shadow-card)]">
      {faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: safeJsonLd({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
            }),
          }}
        />
      )}
      <h2 className="text-xl font-bold text-foreground">{t.goodToKnow}</h2>
      <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
        {items.map((f) => (
          <li key={f.code} className="flex items-center gap-2 text-foreground/85">
            <ShieldCheckIcon className="h-4 w-4 shrink-0 text-[var(--accent,var(--brand-blue))]" />
            {f.label}
          </li>
        ))}
      </ul>

      {faq.length > 0 && (
        <div className="mt-5">
          <h3 className="font-semibold text-foreground">{t.faqTitle}</h3>
          <div className="mt-2 divide-y divide-line">
            {faq.map((f) => (
              <details key={f.q} className="group py-3">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-medium text-foreground">
                  {f.q}
                  <span aria-hidden="true" className="text-foreground/40 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      <p className="mt-4 text-xs text-foreground/60">{t.goodToKnowNote}</p>
    </section>
  );
}
