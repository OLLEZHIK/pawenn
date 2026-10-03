"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import { LANG_COOKIE, LOCALES } from "@/lib/locales";
import { localeOfPath } from "@/lib/localeSwitch";
import { ChevronDownIcon } from "./icons";
import { usePageAlternates } from "./useHead";

// The page's language follows its URL (search engines send people to
// the right version via hreflang). The switch offers exactly the page's
// hreflang alternates: only the page knows which languages it exists in
// (a Polish city: English and Polski; a Slovak one: English and
// Slovenčina). The footer's old guess linked English Warszawa pages to
// /sk/.../warszawa/, a 404 (SEO check, 2026-09-28).
const NAMES: Record<Locale, string> = { en: "English", sk: "Slovenčina", pl: "Polski" };

// Remembered for the root "/" only (docs/design-plan.md 2.2): a
// functional cookie set by the visitor's own choice.
function remember(l: Locale) {
  document.cookie = `${LANG_COOKIE}=${l}; Max-Age=31536000; Path=/; SameSite=Lax`;
}

// Header: one pill with the current language and a chevron; the list opens
// below it (owner 2026-10-03: a dropdown instead of the EN | SK | PL row).
function LanguageMenu({ current, shown, alternates, compact }: { current: Locale; shown: Locale[]; alternates: Partial<Record<Locale, string>>; compact: boolean }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`Language: ${NAMES[current]}`}
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 rounded-[var(--radius-pill)] bg-surface-sunken font-semibold text-foreground transition hover:bg-surface-sunken/70 ${compact ? "px-2.5 py-1.5 text-xs" : "px-3.5 py-2 text-sm"}`}
      >
        {current.toUpperCase()}
        <ChevronDownIcon className={`h-3.5 w-3.5 text-foreground/60 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <ul role="menu" aria-label="Language" className="absolute right-0 z-40 mt-2 min-w-40 overflow-hidden rounded-[var(--radius-control)] bg-white py-1.5 shadow-[var(--shadow-panel)]">
          {shown.map((l) => (
            <li key={l} role="none">
              {l === current ? (
                <span role="menuitem" aria-current="true" className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm font-semibold text-foreground">
                  {NAMES[l]}
                  <span className="text-xs text-foreground/60">{l.toUpperCase()}</span>
                </span>
              ) : (
                <Link
                  role="menuitem"
                  href={alternates[l]!}
                  hrefLang={l}
                  onClick={() => {
                    remember(l);
                    setOpen(false);
                  }}
                  className="flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-brand-blue-muted hover:text-brand-blue"
                >
                  {NAMES[l]}
                  <span className="text-xs text-foreground/60">{l.toUpperCase()}</span>
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function LanguageSwitch({ variant = "footer", compact = false }: { variant?: "footer" | "header"; compact?: boolean }) {
  const pathname = usePathname() ?? "/";
  const current = localeOfPath(pathname);
  const alternates = usePageAlternates();

  const shown = LOCALES.filter((l) => l === current || alternates[l]);
  if (shown.length < 2) return null;

  if (variant === "header") {
    return <LanguageMenu current={current} shown={shown} alternates={alternates} compact={compact} />;
  }

  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {shown.map((l) =>
        l === current ? (
          <span key={l} className="font-semibold text-white/80">
            {NAMES[l]}
          </span>
        ) : (
          <Link key={l} href={alternates[l]!} hrefLang={l} onClick={() => remember(l)} className="hover:text-brand-orange">
            {NAMES[l]}
          </Link>
        )
      )}
    </p>
  );
}
