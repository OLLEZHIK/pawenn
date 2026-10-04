"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { categoryHubPath, listingPath } from "@/lib/categories";
import { nearestCity, type CityPointLite } from "@/lib/geo";
import type { Locale } from "@/lib/i18n";

/**
 * "Vet open now" (owner, 2026-09-30): the emergency path on a phone. Asks
 * for the location, opens the vets of the nearest city that are open right
 * now (?open=1), nearest first (?near=). No location (denied, slow, far
 * from every city) - the same list of the default city, unsorted. Lands
 * on the results (#results), not on the filters above them.
 */
export function VetNowButton({
  locale,
  cities,
  label,
  hint,
  locating,
  variant,
}: {
  locale: Locale;
  cities: CityPointLite[];
  label: string;
  hint: string;
  locating: string;
  variant: "hero" | "floating";
}) {
  const router = useRouter();
  const [pending, setPending] = useState(false);

  function go() {
    const open = (slug: string, near?: string) =>
      router.push(
        `${listingPath(locale, "VET_CLINIC", slug)}?open=1${near ? `&near=${near}` : ""}#results`,
      );
    // No location: the visitor picks a city of their language (the hub page
    // keeps "open now"); a language with one city goes straight to it.
    const pickCity = () => router.push(`${categoryHubPath(locale, "VET_CLINIC")}?open=1`);
    if (!("geolocation" in navigator) || cities.length === 0) return pickCity();
    setPending(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const city = nearestCity(cities, latitude, longitude);
        setPending(false);
        if (!city) return pickCity();
        open(city.slug, `${latitude.toFixed(4)},${longitude.toFixed(4)}`);
      },
      () => {
        setPending(false);
        pickCity();
      },
      { timeout: 6000, maximumAge: 10 * 60 * 1000 },
    );
  }

  const icon = (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className="h-6 w-6 shrink-0"
      aria-hidden="true"
    >
      <path d="M10 4v12M4 10h12" />
    </svg>
  );

  if (variant === "floating") {
    return (
      <>
        {/* Room under the list so the fixed button does not cover its end. */}
        <div aria-hidden="true" className="h-20 md:hidden" />
        <button
          type="button"
          onClick={go}
          disabled={pending}
          className="fixed inset-x-4 bottom-4 z-40 flex h-14 items-center justify-center gap-2 rounded-[var(--radius-pill)] bg-red-600 px-6 text-base font-bold text-white shadow-[var(--shadow-panel)] active:scale-[0.99] md:hidden"
        >
          {icon}
          {pending ? locating : label}
        </button>
      </>
    );
  }
  return (
    <button
      type="button"
      onClick={go}
      disabled={pending}
      className="flex w-full items-center gap-3 rounded-[var(--radius-card)] bg-red-600 px-5 py-4 text-left text-white shadow-[var(--shadow-card)] active:scale-[0.99] md:hidden"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-lg font-extrabold leading-tight">
          {pending ? locating : label}
        </span>
        <span className="block text-sm text-white/85">{hint}</span>
      </span>
    </button>
  );
}
