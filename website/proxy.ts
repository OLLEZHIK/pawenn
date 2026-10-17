import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { categoryFromSlug, isCitySegment } from "./lib/categories";
import { LANG_COOKIE, LEGACY_EN_SEGMENTS, LOCALES, isLocale, pickLocale } from "./lib/locales";

// Language routing, model v2 (owner 2026-09-23/25; docs/design-plan.md 2.2).
// Imports only lib/locales.ts and lib/categories.ts, which have no runtime
// dependencies - proxy runs separately from render code.
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
const FILTERS = ["near", "sort", "rating", "open"];
// Only category and city pages have cached twins. A whitelist, not a list of
// the other folders: a new language brings new folder names (fr
// "etablissement", it "struttura"), and a forgotten one used to be
// rewritten to a twin that does not exist - every place page 404.
function isListingSegment(locale: string, segment: string): boolean {
  return isLocale(locale) && (categoryFromSlug(segment, locale) !== null || isCitySegment(segment, locale));
}

function cachedListing(request: NextRequest): NextResponse | null {
  const { pathname, searchParams } = request.nextUrl;
  const segments = pathname.split("/").filter(Boolean);
  // The twins are internal: /<lang>/cached/... from outside is not a page.
  if (segments[1] === "cached" || segments[1] === "cached-page") return new NextResponse(null, { status: 404 });
  // <lang> + category (+ city (+ district)): 2 to 4 segments.
  if (segments.length < 2 || segments.length > 4 || !isListingSegment(segments[0], segments[1])) return null;
  if (FILTERS.some((f) => searchParams.has(f))) return null;
  // ?page=N alone, on a category list (category + city, + district or
  // attribute): its own cached twin, since every list links to its pages.
  // Page 1 (and the old ?all=1) is the list itself. A city page has no
  // pages without a filter, so its ?page is ignored.
  const raw = searchParams.get("page");
  const page = raw !== null && /^\d{1,4}$/.test(raw) ? Number(raw) : 1;
  const paged = page >= 2 && segments.length >= 3 && isLocale(segments[0]) && categoryFromSlug(segments[1], segments[0]) !== null;
  const url = request.nextUrl.clone();
  url.pathname = paged ? `/${segments[0]}/cached-page/${page}/${segments.slice(1).join("/")}/` : `/${segments[0]}/cached/${segments.slice(1).join("/")}/`;
  url.searchParams.delete("all");
  url.searchParams.delete("page");
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip API routes, Next internals and any file with an extension
  // (robots.txt, sitemap.xml, llms.txt, favicon.ico, static assets).
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
