import Link from "next/link";
import type { Metadata } from "next";
import type { BusinessCategory } from "@prisma/client";
import { safeJsonLd } from "@/lib/safeJsonLd";
import { getAllCities, getAttributeCounts, getCategoryAggregates } from "@/lib/data";
import { categoryLabel, listingPath } from "@/lib/categories";
import { formatDate, getDictionary, inCity, localePath, localesForCity, type Locale } from "@/lib/i18n";
import { moneyRange } from "@/lib/money";
import { GUIDE_TEXT, guideAlternates, guidesFor, guidesPath, listGuides, type Guide } from "@/lib/guides";
import { answerText, getPriceSummary, money, pricesPath } from "@/lib/pricePages";
import { attributePath, type AttributeKey } from "@/lib/attributePages";
import { serviceLabel } from "@/lib/services";
import { localeAlternates, socialMeta } from "@/lib/seo";
import { SITE_URL } from "@/lib/site";
import { MarkdownContent } from "./MarkdownContent";
import { Breadcrumbs } from "./Breadcrumbs";
import { ArrowRightIcon } from "./icons";

// Guide pages (docs/playbooks/guides.md). The text is Markdown; lines like
// "::price VET_CLINIC microchip" become live blocks from the catalogue, so
// a guide links into the directory and its numbers never go stale.

// A guide about one city (front matter `city`) shows its blocks for that
// city only; otherwise for every city of the country in the guide's language.
async function countryCities(locale: Locale, country: string, citySlug?: string | null) {
  return (await getAllCities()).filter(
    (c) => c.country === country && localesForCity(c).includes(locale) && (!citySlug || c.slug === citySlug)
  );
}

async function PriceBlock({
  locale,
  country,
  category,
  code,
  citySlug,
}: {
  locale: Locale;
  country: string;
  category: BusinessCategory;
  code: string;
  citySlug?: string | null;
}) {
  const cities = await countryCities(locale, country, citySlug);
  if (citySlug && cities.length === 1) {
    // One city: the answer in a sentence ("Costs from $74 to $150, median
    // $90. We compared 11 places; prices checked 7 Oct 2026.").
    const summary = await getPriceSummary(category, cities[0].slug, code);
    const answer = answerText(locale, summary);
    if (!answer) return null;
    return (
      <div className="mt-6 rounded-[var(--radius-card)] bg-surface-sunken p-5">
        <p className="font-semibold text-foreground">
          {serviceLabel(category, code, locale)} · {cities[0].name}
        </p>
        <p className="mt-2 text-foreground/80">{answer}</p>
        <Link
          href={pricesPath(locale, category, cities[0].slug, code)}
          className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
        >
          {GUIDE_TEXT[locale].pricesLink}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    );
  }
  const rows = (
    await Promise.all(cities.map(async (c) => ({ city: c, market: (await getPriceSummary(category, c.slug, code)).market })))
  ).filter((r) => r.market);
  if (rows.length === 0) return null;
  const t = GUIDE_TEXT[locale];
  return (
    <div className="mt-6 rounded-[var(--radius-card)] bg-surface-sunken p-5">
      <p className="font-semibold text-foreground">{serviceLabel(category, code, locale)}</p>
      <ul className="mt-3 space-y-2">
        {rows.map(({ city, market }) => (
          <li key={city.slug} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <span className="text-foreground/80">
              <span className="font-semibold text-foreground">{city.name}</span>
              {": "}
              {t.priceLine(
                money(market!.median, market!.currency, locale),
                moneyRange(market!.min, market!.max, market!.currency, locale),
                market!.places
              )}
            </span>
            <Link href={pricesPath(locale, category, city.slug, code)} className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline">
              {t.pricesLink}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function PlacesBlock({
  locale,
  country,
  category,
  citySlug,
}: {
  locale: Locale;
  country: string;
  category: BusinessCategory;
  citySlug?: string | null;
}) {
  const cities = await countryCities(locale, country, citySlug);
  const rows = (await Promise.all(cities.map(async (c) => ({ city: c, count: (await getCategoryAggregates(category, c.slug)).count })))).filter(
    (r) => r.count > 0
  );
  if (rows.length === 0) return null;
  // "Veterinárne ambulancie: Bratislava (54) · Košice (28)" - the count in
  // brackets avoids declining the noun after a number.
  return (
    <div className="mt-6 rounded-[var(--radius-card)] bg-surface-sunken p-5">
      <p className="font-semibold text-foreground">{categoryLabel(category, locale)}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {rows.map(({ city, count }) => (
          <Link
            key={city.slug}
            href={listingPath(locale, category, city.slug)}
            className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] bg-surface px-4 py-2 text-sm font-semibold text-foreground hover:text-brand-blue"
          >
            {city.name} ({count})
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        ))}
      </div>
    </div>
  );
}

/** "::attr VET_CLINIC nonstop": "12 of 100 vet clinics take patients 24 hours a day…" with a link to the page. */
async function AttrBlock({
  locale,
  country,
  category,
  attr,
  citySlug,
}: {
  locale: Locale;
  country: string;
  category: BusinessCategory;
  attr: AttributeKey;
  citySlug?: string | null;
}) {
  const t = getDictionary(locale).attributes[attr];
  const cities = await countryCities(locale, country, citySlug);
  const rows = (
    await Promise.all(
      cities.map(async (c) => ({
        city: c,
        n: (await getAttributeCounts(category, c.slug)).get(attr) ?? 0,
        total: (await getCategoryAggregates(category, c.slug)).count,
      }))
    )
  ).filter((r) => r.n > 0);
  if (rows.length === 0) return null;
  return (
    <div className="mt-6 space-y-3 rounded-[var(--radius-card)] bg-surface-sunken p-5">
      {rows.map(({ city, n, total }) => (
        <div key={city.slug}>
          <p className="font-semibold text-foreground">
            {t.chip} · {city.name}
          </p>
          <p className="mt-1 text-foreground/80">{t.lead(n, total)}</p>
          <Link
            href={attributePath(locale, category, city.slug, attr)}
            className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:underline"
          >
            {t.h1(inCity(locale, city))}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      ))}
    </div>
  );
}

function renderBody(guide: Guide) {
  const parts: React.ReactNode[] = [];
  let text: string[] = [];
  const flush = () => {
    if (text.join("").trim()) parts.push(<MarkdownContent key={parts.length} content={text.join("\n")} />);
    text = [];
  };
  for (const line of guide.body.split("\n")) {
    const block = /^::(price|places|attr)\s+([A-Z_]+)(?:\s+([a-z0-9_-]+))?\s*$/.exec(line.trim());
    if (!block) {
      text.push(line);
      continue;
    }
    flush();
    const category = block[2] as BusinessCategory;
    const key = parts.length;
    const common = { locale: guide.locale, country: guide.country, category, citySlug: guide.city };
    parts.push(
      block[1] === "price" && block[3] ? (
        <PriceBlock key={key} {...common} code={block[3]} />
      ) : block[1] === "attr" && block[3] ? (
        <AttrBlock key={key} {...common} attr={block[3] as AttributeKey} />
      ) : (
        <PlacesBlock key={key} {...common} />
      )
    );
  }
  flush();
  return parts;
}

export function guideMetadata(guide: Guide): Metadata {
  const path = guidesPath(guide.locale, guide.slug);
  return {
    title: { absolute: guide.title },
    description: guide.description,
    ...socialMeta({ title: guide.title, description: guide.description, path, locale: guide.locale }),
    alternates: localeAlternates(guide.locale, guideAlternates(guide), guideAlternates(guide).en ?? path),
  };
}

export function GuideArticle({ guide }: { guide: Guide }) {
  const t = GUIDE_TEXT[guide.locale];
  const updated = formatDate(new Date(guide.updated), guide.locale);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.h1,
    description: guide.description,
    inLanguage: guide.locale,
    dateModified: guide.updated,
    mainEntityOfPage: `${SITE_URL}${guidesPath(guide.locale, guide.slug)}`,
    publisher: { "@type": "Organization", name: "Pawenn", url: SITE_URL },
    citation: guide.sources.map((s) => s.url),
  };
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJsonLd(jsonLd) }} />
      <Breadcrumbs
        items={[
          { label: t.home, href: localePath(guide.locale, "/") },
          { label: t.hubH1, href: guidesPath(guide.locale) },
          { label: guide.h1 },
        ]}
      />
      <article className="mt-6 rounded-[28px] bg-surface p-6 shadow-[var(--shadow-card)] md:p-10">
        <h1 className="text-3xl font-extrabold text-foreground md:text-4xl">{guide.h1}</h1>
        <p className="mt-2 text-sm text-foreground/60">
          {t.updated} {updated}
        </p>
        {renderBody(guide)}
        {guide.sources.length > 0 && (
          <section className="mt-10 border-t border-line pt-6">
            <h2 className="text-lg font-bold text-foreground">{t.sources}</h2>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-sm text-foreground/70">
              {guide.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
                    {s.label}
                  </a>
                  {s.checked && ` · ${formatDate(new Date(s.checked), guide.locale)}`}
                </li>
              ))}
            </ol>
          </section>
        )}
      </article>
    </main>
  );
}

export function guidesHubMetadata(locale: Locale): Metadata {
  const t = GUIDE_TEXT[locale];
  const path = guidesPath(locale);
  return {
    title: { absolute: t.hubTitle },
    description: t.hubIntro,
    ...socialMeta({ title: t.hubTitle, description: t.hubIntro, path, locale }),
    alternates: localeAlternates(locale, { [locale]: path }, path),
  };
}

export function GuidesHub({ locale }: { locale: Locale }) {
  const t = GUIDE_TEXT[locale];
  const guides = listGuides(locale);
  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-8">
      <Breadcrumbs items={[{ label: t.home, href: localePath(locale, "/") }, { label: t.hubH1 }]} />
      <h1 className="mt-6 text-3xl font-extrabold text-foreground md:text-4xl">{t.hubH1}</h1>
      <p className="mt-3 text-foreground/70">{t.hubIntro}</p>
      <ul className="mt-8 space-y-3">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link
              href={guidesPath(locale, g.slug)}
              className="block rounded-[var(--radius-card)] bg-surface p-5 shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-card-hover)]"
            >
              <span className="text-lg font-bold text-foreground">{g.h1}</span>
              <span className="mt-1 block text-sm text-foreground/70">{g.description}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

/** "Good to know" on a category page: guides on the same topic, same language and country. */
export function GuideLinks({
  locale,
  category,
  country,
  citySlug,
}: {
  locale: Locale;
  category: BusinessCategory;
  country: string | null | undefined;
  citySlug?: string;
}) {
  // City-only guides first: on a Berlin page, "Hundesteuer Berlin" before country-wide topics.
  const guides = guidesFor(locale, category, country, citySlug)
    .sort((a, b) => Number(!!b.city) - Number(!!a.city))
    .slice(0, 4);
  if (guides.length === 0) return null;
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-foreground">{GUIDE_TEXT[locale].related}</h2>
      <ul className="mt-3 grid gap-3 md:grid-cols-2">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link
              href={guidesPath(locale, g.slug)}
              className="flex h-full items-center justify-between gap-3 rounded-[var(--radius-card)] bg-surface p-4 shadow-[var(--shadow-card)] hover:text-brand-blue"
            >
              <span className="font-semibold">{g.h1}</span>
              <ArrowRightIcon className="h-4 w-4 shrink-0" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
