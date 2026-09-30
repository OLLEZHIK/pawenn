"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useBeta } from "./BetaGate";
import { QuickActions } from "./QuickActions";
import { MapPinIcon, RouteIcon } from "./icons";
import type { Locale } from "@/lib/locales";

// "List | Map" on listing pages (owner, 2026-09-30; docs/architecture/map.md).
// The list stays in the HTML either way (search engines, no JS); the map
// is drawn only after the visitor switches to it. Beta: only browsers
// opened with ?beta=1 see the switch until the owner approves it.

export interface MapPoint {
  id: number;
  name: string;
  href: string;
  lat: number;
  lng: number;
  phone: string | null;
  address: string;
  district: string | null;
  rating: string | null;
  km: string | null;
}

const ListingMapInner = dynamic(() => import("./ListingMapInner"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full animate-pulse bg-surface-sunken" />
  ),
});

export function ListingMap({
  locale,
  points,
  missing,
  accent,
  origin,
  labels,
  children,
}: {
  locale: Locale;
  points: MapPoint[];
  /** Places in the list without coordinates: said under the map, never guessed. */
  missing: number;
  accent: string;
  origin: { lat: number; lng: number } | null;
  labels: {
    list: string;
    map: string;
    details: string;
    close: string;
    missing: string;
  };
  children: React.ReactNode;
}) {
  const beta = useBeta();
  const [view, setView] = useState<"list" | "map">("list");
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const showMap = beta && view === "map" && points.length > 0;
  const selected = showMap
    ? points.find((p) => p.id === selectedId)
    : undefined;

  // Hide the floating "Veterinár teraz" button while the map is open.
  useEffect(() => {
    if (!showMap) return;
    document.documentElement.dataset.mapOpen = "1";
    return () => {
      delete document.documentElement.dataset.mapOpen;
    };
  }, [showMap]);

  return (
    <>
      {beta && points.length > 0 && (
        <div
          role="tablist"
          className="mt-3 inline-flex rounded-[var(--radius-pill)] bg-surface-sunken p-1 text-sm font-semibold"
        >
          {(["list", "map"] as const).map((v) => (
            <button
              key={v}
              type="button"
              role="tab"
              aria-selected={view === v}
              onClick={() => setView(v)}
              className={`min-h-10 rounded-[var(--radius-pill)] px-5 transition ${
                view === v
                  ? "bg-surface text-foreground shadow-[var(--shadow-card)]"
                  : "text-foreground/60"
              }`}
            >
              {labels[v]}
            </button>
          ))}
        </div>
      )}

      {showMap && (
        <div className="mt-3">
          <div className="relative isolate h-[70vh] min-h-[420px] overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-card)]">
            <ListingMapInner
              points={points}
              accent={accent}
              origin={origin}
              selectedId={selectedId}
              onSelect={setSelectedId}
            />
            {selected && (
              <div className="absolute inset-x-2 bottom-2 z-[1000] rounded-[var(--radius-card)] bg-surface p-4 shadow-[var(--shadow-card-hover)]">
                <div className="flex items-start justify-between gap-3">
                  <Link
                    href={selected.href}
                    className="font-heading text-lg font-bold leading-snug text-foreground hover:text-brand-blue"
                  >
                    {selected.name}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setSelectedId(null)}
                    aria-label={labels.close}
                    className="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xl text-foreground/50 hover:bg-surface-sunken"
                  >
                    ×
                  </button>
                </div>
                <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-foreground/65">
                  {selected.rating && (
                    <span className="font-semibold text-foreground">
                      ★ {selected.rating}
                    </span>
                  )}
                  {selected.district && (
                    <span className="inline-flex items-center gap-1">
                      <MapPinIcon className="h-4 w-4" />
                      {selected.district}
                    </span>
                  )}
                  {selected.km && (
                    <span className="inline-flex items-center gap-1 font-semibold text-brand-blue">
                      <RouteIcon className="h-3.5 w-3.5" />
                      {selected.km}
                    </span>
                  )}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <QuickActions
                    businessId={selected.id}
                    phone={selected.phone}
                    website={null}
                    address={selected.address}
                    size="sm"
                    locale={locale}
                  />
                  <Link
                    href={selected.href}
                    className="inline-flex min-h-11 items-center rounded-[var(--radius-pill)] bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-brand-blue"
                  >
                    {labels.details}
                  </Link>
                </div>
              </div>
            )}
          </div>
          {missing > 0 && (
            <p className="mt-2 text-sm text-foreground/60">{labels.missing}</p>
          )}
        </div>
      )}

      <div className={showMap ? "hidden" : undefined}>{children}</div>
    </>
  );
}
