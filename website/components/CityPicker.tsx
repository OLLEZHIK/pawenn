"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { listingPath } from "@/lib/categories";
import type { BusinessCategory } from "@prisma/client";
import type { Locale } from "@/lib/i18n";
import { MapPinIcon } from "./icons";

function normalize(text: string): string {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
}

/**
 * City field of the "choose a city" page (owner, 2026-10-04): the list gets
 * long as cities are added, so a visitor can type the city instead. A full
 * name from the suggestions, or a unique beginning of one, opens that
 * city's list.
 */
export function CityPicker({
  locale,
  category,
  cities,
  placeholder,
  label,
}: {
  locale: Locale;
  category: BusinessCategory;
  cities: { slug: string; name: string }[];
  placeholder: string;
  label: string;
}) {
  const router = useRouter();
  const listId = useId();
  const [value, setValue] = useState("");

  function match(text: string, partial: boolean) {
    const q = normalize(text);
    if (!q) return null;
    const exact = cities.find((c) => normalize(c.name) === q);
    if (exact) return exact;
    if (!partial) return null;
    const starts = cities.filter((c) => normalize(c.name).startsWith(q));
    return starts.length === 1 ? starts[0] : null;
  }

  function go(city: { slug: string }) {
    router.push(listingPath(locale, category, city.slug));
  }

  return (
    <label className="flex min-h-12 items-center gap-2 rounded-[var(--radius-pill)] bg-surface px-4 shadow-[var(--shadow-card)] focus-within:ring-2 focus-within:ring-brand-blue/40">
      <MapPinIcon className="h-4 w-4 shrink-0 text-foreground/60" />
      <span className="sr-only">{label}</span>
      <input
        type="text"
        list={listId}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => {
          setValue(e.target.value);
          const hit = match(e.target.value, false);
          if (hit) go(hit);
        }}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          const hit = match(value, true);
          if (hit) go(hit);
        }}
        className="w-44 bg-transparent py-2 text-foreground outline-none placeholder:text-foreground/50"
      />
      <datalist id={listId}>
        {cities.map((c) => (
          <option key={c.slug} value={c.name} />
        ))}
      </datalist>
    </label>
  );
}
