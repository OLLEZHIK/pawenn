"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

// A new page starts at the top. Next.js does this itself, but on the
// owner's phone it did not: from far down a city page, "See all" opened a
// shorter list and the browser kept the old position - the footer
// (2026-10-07; grooming, a long list, looked fine). So on every change of
// path we scroll to the top ourselves, before the page is painted.
// Not on back/forward (the browser restores the old position), not for a
// #anchor, and not when only the query changes (filters keep the position
// on purpose: scroll={false}).
let poppedAt = 0;
if (typeof window !== "undefined") {
  window.addEventListener("popstate", () => {
    poppedAt = Date.now();
  });
}

export function ScrollReset() {
  const pathname = usePathname();
  const first = useRef(true);
  useLayoutEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    if (Date.now() - poppedAt < 1500 || window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}
