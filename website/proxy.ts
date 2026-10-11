import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LANG_COOKIE, LEGACY_EN_SEGMENTS, LOCALES, pickLocale } from "./lib/locales";

// Language routing, model v2 (owner 2026-09-23/25; docs/design-plan.md 2.2).
// Imports only lib/locales.ts, which has no dependencies - proxy runs
// separately from render code.
//   /en/..., /sk/...  -> served as is (app/[lang])
//   /                 -> 307 to the visitor's language: cookie, browser,
//                        country, English. The only URL that looks at them.
//   /grooming/... etc. -> 301 to /en/... (English URLs before v2)
//   anything else     -> 404
export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (LOCALES.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))) {
    return cachedListing(request) ?? NextResponse.next();
  }

  if (pathname === "/") {
    const locale = pickLocale({
      cookie: request.cookies.get(LANG_COOKIE)?.value,
      acceptLanguage: request.headers.get("accept-language"),
      // Cloudflare sits in front of Vercel: its header has the visitor's
      // country; Vercel's would see Cloudflare's edge.
      country: request.headers.get("cf-ipcountry") ?? request.headers.get("x-vercel-ip-country"),
    });
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}/`;
    const response = NextResponse.redirect(url, 307);
    response.headers.set("Vary", "Cookie, Accept-Language, CF-IPCountry");
    response.headers.set("Cache-Control", "private, no-store");
    return response;
  }

  const first = pathname.split("/")[1];
  if (LEGACY_EN_SEGMENTS.includes(first)) {
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname}`;
    url.search = search;
    return NextResponse.redirect(url, 301);
  }

  // Unknown unprefixed URL: let app/global-not-found answer 404.
  return NextResponse.next();
}

// Listing pages - /<lang>/<category>/<city>/<district>/ and the city,
// price, attribute and "best" pages on the same routes - are served from
// the cache when the request has no filter (owner, 2026-10-09: the free
// Vercel plan ran out of CPU because every visit and every crawler hit
// rendered them again). Without a filter the request is rewritten to the
// cached twin in app/[lang]/cached/, built once and kept until the next
// deploy; with a filter it goes to the original, rendered per request.
const FILTERS = ["near", "sort", "rating", "open", "all"];
// First segments under /<lang>/ that are not a category (their own routes).
const NOT_LISTING = new Set([
  "business", "betrieb", "miejsce", "podnik",
  "guides", "poradna", "poradnik", "ratgeber",
  "how-it-works", "add-or-fix-listing", "privacy-policy", "terms-of-use",
]);

function cachedListing(request: NextRequest): NextResponse | null {
  const { pathname, searchParams } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  // The twins are internal: /<lang>/cached/... from outside is not a page.
  if (segments[1] === "cached" || segments[1] === "cached-all") return new NextResponse(null, { status: 404 });
  // <lang> + category (+ city (+ district)): 2 to 4 segments.
  if (segments.length < 2 || segments.length > 4 || NOT_LISTING.has(segments[1])) return null;
  const used = FILTERS.filter((f) => searchParams.has(f));
  // "Show all" (?all=1) alone, on a city or district list, has its own
  // cached twin: every list links to it, so crawlers follow it too.
  const showAll = used.length === 1 && used[0] === "all" && searchParams.get("all") === "1" && segments.length >= 3;
  if (used.length > 0 && !showAll) return null;
  const url = request.nextUrl.clone();
  url.pathname = `/${segments[0]}/${showAll ? "cached-all" : "cached"}/${segments.slice(1).join("/")}/`;
  url.searchParams.delete("all");
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next internals and any file with an extension
  // (robots.txt, sitemap.xml, llms.txt, favicon.ico, static assets).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
