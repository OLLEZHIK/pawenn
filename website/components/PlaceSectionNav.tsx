"use client";

import { useEffect, useRef, useState } from "react";

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
  const listRef = useRef<HTMLUListElement>(null);

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

  // Where the row still overflows (a narrow phone, a long label), keep the
  // section being read in view.
  useEffect(() => {
    const list = listRef.current;
    const link = active ? list?.querySelector<HTMLElement>(`[href="#${active}"]`) : null;
    if (list && link && list.scrollWidth > list.clientWidth) {
      list.scrollTo({ left: link.offsetLeft - (list.clientWidth - link.offsetWidth) / 2, behavior: "smooth" });
    }
  }, [active]);

  return (
    <nav aria-label={label} className="sticky top-[var(--header-h)] z-30 border-b border-line bg-background/95 backdrop-blur">
      <ul ref={listRef} className="mx-auto flex max-w-7xl justify-between gap-0.5 overflow-x-auto px-2 py-2 [scrollbar-width:none] sm:justify-start sm:gap-1 sm:px-4">
        {items.map((item) => (
          <li key={item.id} className={`min-w-0 shrink-0 ${item.mobileOnly ? "lg:hidden" : ""}`}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              className={`inline-flex min-h-10 items-center rounded-[var(--radius-pill)] px-1.5 text-[13px] font-semibold whitespace-nowrap transition min-[400px]:px-2.5 min-[400px]:text-sm sm:px-3.5 ${
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
