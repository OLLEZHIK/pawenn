"use client";

import { useRouter } from "next/navigation";
import { useId, useRef, useState } from "react";
import type { BusinessCategory } from "@prisma/client";
import { listingPath } from "@/lib/categories";
import { nearestCity } from "@/lib/geo";
import type { Locale } from "@/lib/i18n";
import { ArrowRightIcon, MapPinIcon } from "./icons";

function normalize(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

export interface PickerCity {
  slug: string;
  name: string;
  lat: number;
  lng: number;
}

/**
 * "Choose a city" controls (owner, 2026-10-04): the "Nearest to me" button and
 * the city field. The list of cities grows, so a visitor types the city instead.
 *
 * - Nearest to me: opens the nearest city's list sorted by distance. No
 *   location (denied, unavailable, too far from every city) - a message and the
 *   cursor in the field, never a silent no-op.
 * - Field, `freeText` (all languages, owner 2026-10-06): no list of cities up front; as the visitor types,
 *   the cities that START with those letters appear ("war" -> Warszawa).
 * `open` keeps the "open now" filter ("Vet open now" lands here).
 */
export function CityPicker({
  locale,
  category,
  cities,
  open,
  freeText,
  text,
}: {
  locale: Locale;
  category: BusinessCategory;
  cities: PickerCity[];
  open: boolean;
  freeText: boolean;
  text: {
    nearMe: string;
    locating: string;
    placeholder: string;
    label: string;
    geoDenied: string;
    /** "{city}" is replaced by an example city. */
    geoFar: string;
    /** "{typed}" is replaced by what was typed; used with `freeText`. */
    notCovered: string;
  };
}) {
  const router = useRouter();
  const listId = useId();
  const input = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [locating, setLocating] = useState(false);
  const [active, setActive] = useState(-1);
  const [focused, setFocused] = useState(false);

  const q = normalize(value);
  const matches = q ? cities.filter((c) => normalize(c.name).startsWith(q)) : [];

  function url(city: PickerCity, near?: string) {
    const params = [open ? "open=1" : "", near ? `near=${near}` : ""].filter(Boolean).join("&");
    return `${listingPath(locale, category, city.slug)}${params ? `?${params}` : ""}${open ? "#results" : ""}`;
  }
  const go = (city: PickerCity) => router.push(url(city));

  function typeByHand(msg: string) {
    setLocating(false);
    setMessage(msg);
    input.current?.focus();
  }

  function locate() {
    setMessage(null);
    if (!("geolocation" in navigator)) return typeByHand(text.geoDenied);
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        const city = nearestCity(cities, latitude, longitude);
        if (!city) return typeByHand(text.geoFar.replace("{city}", cities[0]?.name ?? ""));
        setLocating(false);
        router.push(url(city, `${latitude.toFixed(4)},${longitude.toFixed(4)}`));
      },
      () => typeByHand(text.geoDenied),
      { timeout: 8000, maximumAge: 10 * 60 * 1000 }
    );
  }

  function submit(pick?: PickerCity) {
    const hit =
      pick ??
      cities.find((c) => normalize(c.name) === q) ??
      (matches.length === 1 ? matches[0] : undefined) ??
      (active >= 0 ? matches[active] : undefined);
    if (hit) return go(hit);
    if (freeText && value.trim()) setMessage(text.notCovered.replace("{typed}", value.trim()));
  }

  const showList = freeText && focused && matches.length > 0;
  const noMatch = freeText && q.length >= 2 && matches.length === 0;

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={locate}
          disabled={locating}
          className="accent-solid inline-flex items-center gap-2 rounded-[var(--radius-pill)] px-5 py-3 font-semibold disabled:opacity-70"
        >
          <MapPinIcon className={`h-5 w-5 ${locating ? "animate-pulse" : ""}`} />
          {locating ? text.locating : text.nearMe}
        </button>

        <div className={`relative ${freeText ? "w-full max-w-sm" : ""}`}>
          <label
            className={`flex min-h-12 items-center gap-2 rounded-[var(--radius-pill)] bg-surface px-4 shadow-[var(--shadow-card)] focus-within:ring-2 focus-within:ring-brand-blue/40 ${freeText ? "w-full" : ""}`}
          >
            <MapPinIcon className="h-4 w-4 shrink-0 text-foreground/60" />
            <span className="sr-only">{text.label}</span>
            <input
              ref={input}
              type="text"
              role={freeText ? "combobox" : undefined}
              aria-expanded={freeText ? showList : undefined}
              aria-controls={freeText ? `${listId}-list` : undefined}
              list={freeText ? undefined : listId}
              value={value}
              placeholder={text.placeholder}
              autoComplete="off"
              enterKeyHint="go"
              onFocus={() => setFocused(true)}
              onBlur={() => setTimeout(() => setFocused(false), 120)}
              onChange={(e) => {
                setValue(e.target.value);
                setMessage(null);
                setActive(-1);
                if (freeText) return;
                const exact = cities.find((c) => normalize(c.name) === normalize(e.target.value));
                if (exact) go(exact);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" && matches.length) {
                  e.preventDefault();
                  setActive((a) => (a + 1) % matches.length);
                } else if (e.key === "ArrowUp" && matches.length) {
                  e.preventDefault();
                  setActive((a) => (a <= 0 ? matches.length - 1 : a - 1));
                } else if (e.key === "Enter") {
                  e.preventDefault();
                  submit();
                }
              }}
              className={`${freeText ? "min-w-0 flex-1" : "w-44"} appearance-none border-0 bg-transparent p-0 text-foreground outline-none placeholder:text-foreground/50 search-city`}
            />
            {freeText && (
              <button
                type="button"
                onClick={() => submit()}
                aria-label={text.label}
                className="-mr-2 grid h-8 w-8 place-items-center rounded-full text-foreground/60 hover:bg-surface-sunken hover:text-foreground"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
            )}
          </label>

          {showList && (
            <ul
              id={`${listId}-list`}
              role="listbox"
              className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-[var(--radius-control)] bg-surface py-1 shadow-[var(--shadow-card)] ring-1 ring-line"
            >
              {matches.map((c, i) => (
                <li key={c.slug} role="option" aria-selected={i === active}>
                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => submit(c)}
                    className={`block w-full px-4 py-2.5 text-left font-medium text-foreground hover:bg-surface-sunken ${i === active ? "bg-surface-sunken" : ""}`}
                  >
                    {c.name}
                  </button>
                </li>
              ))}
            </ul>
          )}

          {!freeText && (
            <datalist id={listId}>
              {cities.map((c) => (
                <option key={c.slug} value={c.name} />
              ))}
            </datalist>
          )}
        </div>
      </div>

      {(message || noMatch) && (
        <p role="status" className="mt-3 max-w-md text-sm text-foreground/70">
          {message ?? text.notCovered.replace("{typed}", value.trim())}
        </p>
      )}
    </div>
  );
}
