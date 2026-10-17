"use client";

import { useEffect, useRef, useState } from "react";

/** A long text cut to `maxHeight` px with "Show more" (owner, 2026-10-17).
 *  The full text is in the page for crawlers and without JavaScript: it is
 *  cut only after the page loads, and only when it is longer than that. */
export function ShowMore({
  children,
  more,
  less,
  maxHeight = 144,
  className,
}: {
  children: React.ReactNode;
  more: string;
  less: string;
  maxHeight?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [overflows, setOverflows] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => setOverflows(el.scrollHeight > maxHeight + 24);
    check();
    const observer = new ResizeObserver(check);
    observer.observe(el);
    return () => observer.disconnect();
  }, [maxHeight]);

  const cut = overflows && !open;
  return (
    <div className={className}>
      <div
        ref={ref}
        style={cut ? { maxHeight, overflow: "hidden", maskImage: "linear-gradient(to bottom, black 65%, transparent)" } : undefined}
      >
        {children}
      </div>
      {overflows && (
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="mt-1 inline-flex min-h-8 items-center text-sm font-semibold text-brand-blue hover:underline"
        >
          {open ? less : more}
        </button>
      )}
    </div>
  );
}
