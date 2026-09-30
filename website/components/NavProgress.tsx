"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

// A thin bar at the top that starts the moment a link is tapped (owner,
// 2026-09-30: some pages take a moment, and without feedback people did
// not know whether the tap worked). It finishes when the new URL is in
// place. Only same-site links to another page or query start it.

const START = "pawenn-nav-start";

/** Start the bar for a navigation that is not a link tap (router.push). */
export function startNavProgress() {
  window.dispatchEvent(new Event(START));
}

export function NavProgress() {
  const pathname = usePathname();
  const search = useSearchParams().toString();
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const safety = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    function start() {
      setState("loading");
      if (safety.current) clearTimeout(safety.current);
      // Never leave the bar hanging if a navigation is cancelled.
      safety.current = setTimeout(() => setState("idle"), 15000);
    }
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search) return;
      start();
    }
    document.addEventListener("click", onClick, true);
    window.addEventListener(START, start);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener(START, start);
    };
  }, []);

  // The URL changed: finish the bar, then hide it.
  useEffect(() => {
    if (safety.current) clearTimeout(safety.current);
    const t1 = setTimeout(() => setState((s) => (s === "loading" ? "done" : s)), 0);
    const t2 = setTimeout(() => setState((s) => (s === "done" ? "idle" : s)), 400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname, search]);

  if (state === "idle") return null;
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px]">
      <div
        className={`h-full bg-brand-orange shadow-[0_0_8px_var(--brand-orange)] ${
          state === "loading" ? "nav-progress-run" : "w-full opacity-0 transition-opacity duration-300"
        }`}
      />
    </div>
  );
}
