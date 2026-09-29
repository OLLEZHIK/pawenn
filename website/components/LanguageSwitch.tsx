"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { LANG_COOKIE, LOCALES } from "@/lib/locales";
import { localeOfPath } from "@/lib/localeSwitch";
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

export function LanguageSwitch({ variant = "footer" }: { variant?: "footer" | "header" }) {
  const pathname = usePathname() ?? "/";
  const current = localeOfPath(pathname);
  const alternates = usePageAlternates();

  const shown = LOCALES.filter((l) => l === current || alternates[l]);
  if (shown.length < 2) return null;

  if (variant === "header") {
    // Two-letter codes in one pill: EN | PL.
    return (
      <nav aria-label="Language" className="flex items-center rounded-[var(--radius-pill)] bg-surface-sunken p-1 text-sm font-semibold">
        {shown.map((l) =>
          l === current ? (
            <span key={l} aria-current="true" title={NAMES[l]} className="rounded-[var(--radius-pill)] bg-surface px-2.5 py-1 text-foreground shadow-[var(--shadow-card)]">
              {l.toUpperCase()}
            </span>
          ) : (
            <Link
              key={l}
              href={alternates[l]!}
              hrefLang={l}
              title={NAMES[l]}
              onClick={() => remember(l)}
              className="rounded-[var(--radius-pill)] px-2.5 py-1 text-foreground/60 transition hover:text-foreground"
            >
              {l.toUpperCase()}
            </Link>
          )
        )}
      </nav>
    );
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
