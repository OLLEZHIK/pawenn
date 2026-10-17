"use client";

import { useEffect, useState } from "react";

export interface SectionLink {
  id: string;
  label: string;
  /** Not shown at lg and up (the contact card is the sidebar there). */
  mobileOnly?: boolean;
}

/** The sections of a place page, pinned under the header (owner,
 *  2026-10-17, like ZocDoc): only the sections the page has. The one being
 *  read is marked. */
export function PlaceSectionNav({ items, label }: { items: SectionLink[]; label: string }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const targets = items.map((i) => document.getElementById(i.id)).filter((e): e is HTMLElement => e !== null);
    if (targets.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // The band under the header and the nav (about 130 px) up to the middle of the screen.
      { rootMargin: "-130px 0px -55% 0px" }
    );
    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label={label} className="sticky top-[var(--header-h)] z-30 border-b border-line bg-background/95 backdrop-blur">
      <ul className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-4 py-2 [scrollbar-width:none]">
        {items.map((item) => (
          <li key={item.id} className={`shrink-0 ${item.mobileOnly ? "lg:hidden" : ""}`}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={`inline-flex min-h-10 items-center rounded-[var(--radius-pill)] px-3.5 text-sm font-semibold transition ${
                active === item.id ? "bg-ink text-white" : "text-foreground/70 hover:bg-surface-sunken hover:text-foreground"
              }`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
