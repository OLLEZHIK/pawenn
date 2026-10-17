import Link from "next/link";
import { getDictionary, type Locale } from "@/lib/i18n";

/** Places per page on a list (owner, 2026-10-17: like ZocDoc - a page of
 *  cards and page numbers below; a whole list of 100 places was a 1.6 MB
 *  page). */
export const PAGE_SIZE = 12;

/** "?page=3" -> 3; anything else (missing, 0, "abc", "1e3") -> 1. */
export function parsePage(raw: string | undefined | null): number {
  if (!raw || !/^\d{1,4}$/.test(raw)) return 1;
  const n = Number(raw);
  return n >= 1 ? n : 1;
}

/** The query a list keeps from page to page; page 1 has no ?page. */
export interface PageQuery {
  near?: string;
  sort?: string;
  rating?: string;
  open?: string;
}

/** A filtered or sorted list: not an indexed page of its own (its canonical stays the plain list). */
export function isFiltered(sp: PageQuery | undefined): boolean {
  return !!sp && !!(sp.near || sp.sort || sp.rating || sp.open);
}

function pageHref(basePath: string, query: PageQuery, n: number): string {
  const params = new URLSearchParams();
  for (const [k, v] of Object.entries(query)) if (v) params.set(k, v);
  if (n > 1) params.set("page", String(n));
  const qs = params.toString();
  // #results: the new page opens at the list, not above the filters.
  return `${basePath}${qs ? `?${qs}` : ""}#results`;
}

/** Page numbers with the first, the last and the neighbours of the current
 *  page; "gap" stands for the skipped ones. */
function windowOf(page: number, pageCount: number): (number | "gap")[] {
  const keep = new Set([1, pageCount, page - 1, page, page + 1].filter((n) => n >= 1 && n <= pageCount));
  const out: (number | "gap")[] = [];
  let prev = 0;
  for (const n of [...keep].sort((a, b) => a - b)) {
    if (n - prev > 1) out.push("gap");
    out.push(n);
    prev = n;
  }
  return out;
}

const BUTTON =
  "inline-flex h-11 min-w-10 items-center justify-center rounded-full border px-2 text-[15px] font-semibold transition";

export function Pagination({
  locale,
  page,
  pageCount,
  total,
  basePath,
  query,
}: {
  locale: Locale;
  page: number;
  pageCount: number;
  total: number;
  basePath: string;
  query: PageQuery;
}) {
  if (pageCount <= 1) return null;
  const t = getDictionary(locale).listing.pagination;
  const from = (page - 1) * PAGE_SIZE + 1;
  const to = Math.min(page * PAGE_SIZE, total);
  return (
    <nav aria-label={t.label} className="mt-8 flex flex-col items-center gap-3">
      <p className="text-sm text-foreground/60">{t.showing(from, to, total)}</p>
      <ul className="flex flex-wrap items-center justify-center gap-1.5">
        <li>
          {page > 1 ? (
            <Link
              href={pageHref(basePath, query, page - 1)}
              prefetch={false}
              rel="prev"
              aria-label={t.prev}
              className={`${BUTTON} border-line bg-surface text-ink hover:border-brand-blue`}
            >
              ‹
            </Link>
          ) : (
            <span aria-hidden="true" className={`${BUTTON} border-line bg-surface text-foreground/30`}>
              ‹
            </span>
          )}
        </li>
        {windowOf(page, pageCount).map((n, i) =>
          n === "gap" ? (
            <li key={`gap-${i}`} aria-hidden="true" className="px-1 text-foreground/50">
              …
            </li>
          ) : (
            <li key={n}>
              {n === page ? (
                <span aria-current="page" aria-label={t.page(n)} className={`${BUTTON} border-ink bg-ink text-white`}>
                  {n}
                </span>
              ) : (
                <Link
                  href={pageHref(basePath, query, n)}
                  prefetch={false}
                  aria-label={t.page(n)}
                  className={`${BUTTON} border-line bg-surface text-ink hover:border-brand-blue`}
                >
                  {n}
                </Link>
              )}
            </li>
          )
        )}
        <li>
          {page < pageCount ? (
            <Link
              href={pageHref(basePath, query, page + 1)}
              prefetch={false}
              rel="next"
              aria-label={t.next}
              className={`${BUTTON} border-line bg-surface text-ink hover:border-brand-blue`}
            >
              ›
            </Link>
          ) : (
            <span aria-hidden="true" className={`${BUTTON} border-line bg-surface text-foreground/30`}>
              ›
            </span>
          )}
        </li>
      </ul>
    </nav>
  );
}
