"use client";

import { useEffect, useMemo, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { BusinessCategory } from "@prisma/client";
import { cityPath, listingPath } from "@/lib/categories";
import { getDictionary, type Locale } from "@/lib/i18n";
import { Dropdown } from "./Dropdown";
import { CategoryIcon } from "./CategoryIcon";
import { ChevronDownIcon, MapPinIcon, PawIcon, StarIcon } from "./icons";
import { MIN_RATINGS, type ListingSort, type MinRating } from "@/lib/listingSort";

export interface PickerService {
  category: BusinessCategory | null;
  href: string;
  label: string;
  blurb: string;
  accent: string;
}

export interface PickerCity {
  slug: string;
  name: string;
  country: string;
  href: string;
}

interface ListingControlsProps {
  locale: Locale;
  /** null: the city page listing every service. */
  category: BusinessCategory | null;
  citySlug: string;
  cityName: string;
  /** Country of the page's city (ISO code). */
  country: string;
  services: PickerService[];
  cities: PickerCity[];
  /** ISO code -> country name in the page language. */
  countryNames: Record<string, string>;
  /** District or attribute page the visitor is on, kept by the filters. */
  currentDistrictSlug?: string;
  /** "lat,lng" when the list is sorted by distance - kept across filters. */
  near?: string;
  sort?: ListingSort;
  minRating?: MinRating;
  openNow?: boolean;
  showOpenNow?: boolean;
  /** Attribute pages (vets: Nonstop, Saturday, ...): own indexable URLs. */
  attributes?: { key: string; label: string; href: string; active: boolean }[];
}

type SheetName = "service" | "where" | "filters";

export function ListingControls({
  locale,
  category,
  citySlug,
  cityName,
  country,
  services,
  cities,
  countryNames,
  currentDistrictSlug,
  near,
  sort,
  minRating,
  openNow = false,
  showOpenNow = true,
  attributes = [],
}: ListingControlsProps) {
  const router = useRouter();
  const t = getDictionary(locale);
  const locationPath = category ? listingPath(locale, category, citySlug, currentDistrictSlug) : cityPath(locale, citySlug);
  const [sheet, setSheet] = useState<SheetName | null>(null);
  const [locating, setLocating] = useState(false);
  const [geoOff, setGeoOff] = useState(false);
  const [query, setQuery] = useState("");
  // The visitor's own country (browser language region) is read after hydration, so the page itself stays cached.
  const languages = useSyncExternalStore(
    () => () => {},
    () => (navigator.languages ?? []).join(","),
    () => ""
  );
  const home =
    languages
      .split(",")
      .map((lang) => lang.split("-")[1]?.toUpperCase())
      .find((region) => region && countryNames[region]) ?? country;

  useEffect(() => {
    if (!sheet) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSheet(null);
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [sheet]);

  const current = services.find((s) => s.category === category) ?? services[0];

  function withQuery(
    path: string,
    changes: { sort?: string | null; rating?: string | null; open?: string | null; near?: string | null } = {}
  ) {
    const params = new URLSearchParams();
    const sortValue = "sort" in changes ? changes.sort : sort;
    const rating = "rating" in changes ? changes.rating : minRating;
    const openValue = "open" in changes ? changes.open : openNow ? "1" : null;
    const nearValue = "near" in changes ? changes.near : near;
    if (nearValue) params.set("near", nearValue);
    if (sortValue) params.set("sort", sortValue);
    if (rating) params.set("rating", rating);
    if (openValue) params.set("open", openValue);
    const q = params.toString();
    return q ? `${path}?${q}` : path;
  }

  // "Near me": asked only on tap; the list re-sorts by distance.
  function toggleNear() {
    if (near) {
      setSheet(null);
      return router.push(withQuery(locationPath, { near: null }), { scroll: false });
    }
    if (!("geolocation" in navigator)) return setGeoOff(true);
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocating(false);
        setSheet(null);
        const value = `${pos.coords.latitude.toFixed(4)},${pos.coords.longitude.toFixed(4)}`;
        router.push(withQuery(locationPath, { near: value }), { scroll: false });
      },
      () => {
        setLocating(false);
        setGeoOff(true);
      },
      { timeout: 8000, maximumAge: 10 * 60 * 1000 }
    );
  }

  const groups = useMemo(() => {
    const needle = query.trim().toLowerCase();
    const byCountry = new Map<string, PickerCity[]>();
    for (const c of cities) {
      if (needle && !c.name.toLowerCase().includes(needle)) continue;
      byCountry.set(c.country, [...(byCountry.get(c.country) ?? []), c]);
    }
    // The country of the chosen city first, then the visitor's own, then the rest.
    const rank = (code: string) => (code === country ? 0 : code === home ? 1 : 2);
    return [...byCountry.entries()]
      .map(([code, list]) => ({ code, name: countryNames[code] ?? code, list: list.sort((a, b) => a.name.localeCompare(b.name, locale)) }))
      .sort((a, b) => rank(a.code) - rank(b.code) || a.name.localeCompare(b.name, locale));
  }, [cities, query, countryNames, home, country, locale]);

  const numberFormat = new Intl.NumberFormat(locale, { minimumFractionDigits: 1 });
  const activeFilters = (minRating ? 1 : 0) + attributes.filter((a) => a.active).length;
  const sheetClass = (name: SheetName) => (sheet === name ? "" : "hidden");

  const row =
    "flex w-full items-center gap-3 rounded-[18px] px-3 py-2.5 text-left transition hover:bg-foreground/[0.04] focus-visible:bg-foreground/[0.04]";
  const pill = (on: boolean) =>
    `inline-flex min-h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-[var(--radius-pill)] border px-3.5 text-sm font-semibold transition ${
      on ? "border-transparent bg-ink text-white" : "border-line bg-surface text-foreground/75 hover:text-brand-blue"
    }`;

  return (
    <div className="space-y-3">
      {/* The place and the service in one card (owner, 2026-10-17). */}
      <div className="rounded-[26px] bg-surface p-1.5 shadow-[var(--shadow-card)]">
        <button type="button" onClick={() => setSheet("service")} className={row} aria-haspopup="dialog">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
            style={{ background: current.accent }}
          >
            {current.category ? <CategoryIcon category={current.category} className="h-5 w-5" /> : <PawIcon className="h-5 w-5" />}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{t.listing.picker.service}</span>
            <span className="block truncate font-semibold text-foreground">{current.label}</span>
          </span>
          <ChevronDownIcon className="h-4 w-4 shrink-0 text-foreground/50" />
        </button>
        <div className="mx-3 border-t border-line" />
        <button type="button" onClick={() => setSheet("where")} className={row} aria-haspopup="dialog">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
            <MapPinIcon className="h-5 w-5" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[11px] font-semibold uppercase tracking-wider text-foreground/50">{t.listing.picker.where}</span>
            <span className="block truncate font-semibold text-foreground">
              {cityName}
              {near && <span className="font-normal text-brand-blue"> · {t.search.nearYou}</span>}
            </span>
          </span>
          <ChevronDownIcon className="h-4 w-4 shrink-0 text-foreground/50" />
        </button>
      </div>

      {/* One slim row: filters, open now, sort. */}
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" onClick={() => setSheet("filters")} className={pill(activeFilters > 0)} aria-haspopup="dialog">
          <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M3 6h9M16 6h1M3 14h1M8 14h9" />
            <circle cx="14" cy="6" r="2" />
            <circle cx="6" cy="14" r="2" />
          </svg>
          {t.listing.picker.filters}
          {activeFilters > 0 && <span className="rounded-full bg-white/25 px-1.5 text-xs">{activeFilters}</span>}
        </button>
        {showOpenNow && (
          <Link
            href={withQuery(locationPath, { open: openNow ? null : "1" })}
            aria-current={openNow ? "true" : undefined}
            scroll={false}
            className={`${pill(false)} ${openNow ? "!border-transparent !bg-brand-green !text-white" : ""}`}
          >
            <span className={`h-2 w-2 rounded-full ${openNow ? "bg-white" : "bg-brand-green"}`} aria-hidden="true" />
            {t.listing.openNowFilter}
          </Link>
        )}
        <Dropdown
          ariaLabel={t.listing.sortLabel}
          placeholder={t.listing.sortLabel}
          value={sort ?? "default"}
          options={[
            { value: "default", label: near ? t.listing.sortNearest : t.listing.sortRecommended },
            { value: "rating", label: t.listing.sortRating },
            { value: "reviews", label: t.listing.sortReviews },
          ]}
          onChange={(value) => router.push(withQuery(locationPath, { sort: value === "default" ? null : value }), { scroll: false })}
          className="min-w-0 flex-1 sm:max-w-48"
        />
      </div>
      {geoOff && <p className="text-sm text-foreground/60">{t.listing.geoOff}</p>}

      {/* Sheets stay in the page (hidden), so the service and city links are
          there for search engines as before. */}
      <div className={sheet ? "fixed inset-0 z-[70] flex items-end justify-center sm:items-center" : "contents"}>
        {sheet && <button type="button" aria-label={t.listing.picker.done} className="absolute inset-0 bg-ink/50" onClick={() => setSheet(null)} />}

        <section
          role="dialog"
          aria-modal="true"
          aria-label={t.listing.picker.service}
          className={`${sheetClass("service")} relative max-h-[86vh] w-full overflow-y-auto rounded-t-[28px] bg-surface p-3 pb-6 shadow-2xl sm:max-w-md sm:rounded-[28px]`}
        >
          <SheetHeader title={t.listing.picker.service} done={t.listing.picker.done} onClose={() => setSheet(null)} />
          <ul>
            {services.map((s) => {
              const active = s.category === category;
              return (
                <li key={s.category ?? "all"}>
                  <Link href={s.href} onClick={() => setSheet(null)} aria-current={active ? "page" : undefined} className={`${row} ${active ? "bg-brand-orange-muted" : ""}`}>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: s.accent }}>
                      {s.category ? <CategoryIcon category={s.category} className="h-5 w-5" /> : <PawIcon className="h-5 w-5" />}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-semibold text-foreground">{s.label}</span>
                      <span className="block truncate text-sm text-foreground/60">{s.blurb}</span>
                    </span>
                    {active && <Check />}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section
          role="dialog"
          aria-modal="true"
          aria-label={t.listing.picker.where}
          className={`${sheetClass("where")} relative max-h-[86vh] w-full overflow-y-auto rounded-t-[28px] bg-surface p-3 pb-6 shadow-2xl sm:max-w-md sm:rounded-[28px]`}
        >
          <SheetHeader title={t.listing.picker.where} done={t.listing.picker.done} onClose={() => setSheet(null)} />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.listing.picker.searchCity}
            aria-label={t.listing.picker.searchCity}
            className="mb-2 w-full rounded-[var(--radius-control)] border border-line bg-background px-4 py-3 text-base outline-none focus:border-brand-blue"
          />
          <button type="button" onClick={toggleNear} aria-pressed={!!near} className={`${row} bg-brand-blue/10 text-brand-blue`}>
            <MapPinIcon className={`h-5 w-5 ${locating ? "animate-pulse" : ""}`} />
            <span className="flex-1 font-semibold">{locating ? t.search.locatingYou : near ? t.search.nearYou : t.search.nearMe}</span>
            {near && <Check />}
          </button>
          {groups.map((g) => (
            <div key={g.code} className="mt-3">
              <p className="px-3 pb-1 text-xs font-semibold uppercase tracking-wider text-foreground/50">{g.name}</p>
              <ul>
                {g.list.map((c) => {
                  const active = c.slug === citySlug;
                  return (
                    <li key={c.slug}>
                      <Link href={c.href} onClick={() => setSheet(null)} aria-current={active ? "page" : undefined} className={`${row} ${active ? "bg-brand-orange-muted" : ""}`}>
                        <span className="flex-1 font-medium text-foreground">{c.name}</span>
                        {active && <Check />}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </section>

        <section
          role="dialog"
          aria-modal="true"
          aria-label={t.listing.picker.filters}
          className={`${sheetClass("filters")} relative max-h-[86vh] w-full overflow-y-auto rounded-t-[28px] bg-surface p-3 pb-6 shadow-2xl sm:max-w-md sm:rounded-[28px]`}
        >
          <SheetHeader title={t.listing.picker.filters} done={t.listing.picker.done} onClose={() => setSheet(null)} />
          <p className="px-3 pb-2 text-sm font-semibold text-foreground">{t.listing.picker.rating}</p>
          <div className="flex flex-wrap gap-2 px-3" role="group" aria-label={t.listing.filterRating}>
            {[null, ...MIN_RATINGS].map((value) => {
              const active = (minRating ?? null) === value;
              return (
                <Link
                  key={value ?? "any"}
                  href={withQuery(locationPath, { rating: value })}
                  aria-current={active ? "true" : undefined}
                  scroll={false}
                  onClick={() => setSheet(null)}
                  className={pill(active)}
                >
                  {value ? (
                    <>
                      <StarIcon className={`h-4 w-4 ${active ? "text-white" : "text-brand-amber"}`} />
                      {numberFormat.format(Number(value))}+
                    </>
                  ) : (
                    t.listing.ratingAny
                  )}
                </Link>
              );
            })}
          </div>
          {attributes.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2 px-3">
              {attributes.map((a) => (
                <Link key={a.key} href={withQuery(a.href)} aria-current={a.active ? "page" : undefined} onClick={() => setSheet(null)} className={pill(a.active)}>
                  {a.label}
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}

function SheetHeader({ title, done, onClose }: { title: string; done: string; onClose: () => void }) {
  return (
    <div className="sticky top-0 z-10 -mx-3 -mt-3 mb-2 flex items-center justify-between bg-surface px-6 py-4">
      <h2 className="font-heading text-lg font-bold text-foreground">{title}</h2>
      <button type="button" onClick={onClose} className="rounded-full px-3 py-1.5 text-sm font-semibold text-brand-blue hover:bg-brand-blue/10">
        {done}
      </button>
    </div>
  );
}

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-brand-orange" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m4 10.5 4 4 8-9" />
    </svg>
  );
}
