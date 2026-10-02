"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { LOCALES } from "@/lib/locales";
import { PAGE_CITY_META } from "@/lib/pageCity";

// Values the current page puts into <head>, read again after every
// client-side navigation: its metadata can land after the effect runs.
function useFromHead<T>(read: () => T, initial: T): T {
  const pathname = usePathname();
  const [value, setValue] = useState<T>(initial);
  useEffect(() => {
    const update = () => setValue(read());
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.head, { childList: true, subtree: true, attributes: true });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  return value;
}

/** The page's city slug (lib/pageCity.ts), or null. */
export function usePageCity(): string | null {
  return useFromHead(
    () => document.querySelector<HTMLMetaElement>(`meta[name="${PAGE_CITY_META}"]`)?.content || null,
    null
  );
}

/** The languages this page exists in: its hreflang alternates. */
export function usePageAlternates(): Partial<Record<Locale, string>> {
  return useFromHead(() => {
    const found: Partial<Record<Locale, string>> = {};
    document.querySelectorAll<HTMLLinkElement>('link[rel="alternate"][hreflang]').forEach((link) => {
      const lang = link.getAttribute("hreflang") as Locale;
      if (!(LOCALES as readonly string[]).includes(lang)) return;
      try {
        found[lang] = new URL(link.href).pathname;
      } catch {}
    });
    return found;
  }, {});
}
