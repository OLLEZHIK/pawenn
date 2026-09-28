"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { LANG_COOKIE, LOCALES } from "@/lib/locales";
import { localeOfPath } from "@/lib/localeSwitch";

// The page's language follows its URL (search engines send people to
// the right version via hreflang), so there is no switch in the header -
// just this quiet footer link to the same page in the other language.
const NAMES: Record<Locale, string> = { en: "English", sk: "Slovenčina", pl: "Polski" };

// The other languages are exactly the page's hreflang alternates: only the
// page knows which languages it exists in. The footer's guess (the default
// city's languages) linked English Warszawa pages to /sk/.../warszawa/,
// which is a 404 (SEO check, 2026-09-28).
function alternatesInHead(): Partial<Record<Locale, string>> {
  const found: Partial<Record<Locale, string>> = {};
  document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]').forEach((link) => {
    const lang = link.getAttribute("hreflang") as Locale;
    if (!(LOCALES as readonly string[]).includes(lang)) return;
    try {
      found[lang] = new URL(link.href).pathname;
    } catch {}
  });
  return found;
}

export function LanguageSwitch() {
  const pathname = usePathname() ?? "/";
  const current = localeOfPath(pathname);
  const [alternates, setAlternates] = useState<Partial<Record<Locale, string>>>({});

  useEffect(() => {
    const read = () => setAlternates(alternatesInHead());
    read();
    // Metadata of a client-side navigation can land after this effect.
    const observer = new MutationObserver(read);
    observer.observe(document.head, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [pathname]);

  const others = LOCALES.filter((l) => l !== current && alternates[l]);
  if (others.length === 0) return null;

  return (
    <p className="flex flex-wrap items-center gap-x-3 gap-y-1">
      {LOCALES.filter((l) => l === current || alternates[l]).map((l) =>
        l === current ? (
          <span key={l} className="font-semibold text-white/80">
            {NAMES[l]}
          </span>
        ) : (
          <Link
            key={l}
            href={alternates[l]!}
            hrefLang={l}
            // Remembered for the root "/" only (docs/design-plan.md 2.2):
            // a functional cookie set by the visitor's own choice.
            onClick={() => {
              document.cookie = `${LANG_COOKIE}=${l}; Max-Age=31536000; Path=/; SameSite=Lax`;
            }}
            className="hover:text-brand-orange"
          >
            {NAMES[l]}
          </Link>
        )
      )}
    </p>
  );
}
