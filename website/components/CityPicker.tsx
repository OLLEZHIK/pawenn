"use client";

import { useRouter } from "next/navigation";
import { useId, useState } from "react";
import { listingPath } from "@/lib/categories";
import type { BusinessCategory } from "@prisma/client";
import type { Locale } from "@/lib/i18n";
import { ArrowRightIcon, MapPinIcon } from "./icons";

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
  suffix = "",
  freeText,
}: {
  locale: Locale;
  category: BusinessCategory;
  cities: { slug: string; name: string }[];
  placeholder: string;
  label: string;
  /** Added to the city list link, e.g. "?open=1#results". */
  suffix?: string;
  /** Free typing (owner, 2026-10-04: English): no suggestion list, the city is
   *  looked up on Enter or the arrow; an unknown one gets this message
   *  ("{typed}" is replaced by what was typed). */
  freeText?: { notCovered: string };
}) {
  const router = useRouter();
  const listId = useId();
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);

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
    router.push(`${listingPath(locale, category, city.slug)}${suffix}`);
  }

  function submit() {
    const hit = match(value, true);
    if (hit) return go(hit);
    if (freeText && value.trim()) setError(freeText.notCovered.replace("{typed}", value.trim()));
  }

  const field = (
    <label
      className={`flex min-h-12 items-center gap-2 rounded-[var(--radius-pill)] bg-surface px-4 shadow-[var(--shadow-card)] focus-within:ring-2 focus-within:ring-brand-blue/40 ${freeText ? "w-full max-w-sm" : ""}`}
    >
      <MapPinIcon className="h-4 w-4 shrink-0 text-foreground/60" />
      <span className="sr-only">{label}</span>
      <input
        type="text"
        list={freeText ? undefined : listId}
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        enterKeyHint="go"
        onChange={(e) => {
          setValue(e.target.value);
          setError(null);
          if (freeText) return;
          const hit = match(e.target.value, false);
          if (hit) go(hit);
        }}
        onKeyDown={(e) => {
          if (e.key !== "Enter") return;
          e.preventDefault();
          submit();
        }}
        className={`${freeText ? "min-w-0 flex-1" : "w-44"} bg-transparent py-2 text-foreground outline-none focus:outline-none focus-visible:outline-none placeholder:text-foreground/50`}
      />
      {freeText && (
        <button type="button" onClick={submit} aria-label={label} className="-mr-2 grid h-8 w-8 place-items-center rounded-full text-foreground/60 hover:bg-surface-sunken hover:text-foreground">
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      )}
      {!freeText && (
        <datalist id={listId}>
          {cities.map((c) => (
            <option key={c.slug} value={c.name} />
          ))}
        </datalist>
      )}
    </label>
  );

  if (!freeText) return field;
  return (
    <div>
      {field}
      {error && (
        <p role="status" className="mt-2 max-w-sm text-sm text-foreground/70">
          {error}
        </p>
      )}
    </div>
  );
}
