import CategoryHubPage, { generateMetadata } from "../../[category]/page";

// Cached twin of /[lang]/[category]/ (owner, 2026-10-09: the free Vercel
// plan ran out of CPU because every visit and every crawler hit rendered
// these pages again). proxy.ts rewrites a request here when it carries no
// filter (?near, ?sort, ?rating, ?open, ?all): the page is built on the
// first visit and then served from the cache until the next deploy. A
// request with a filter still goes to the original, rendered per request.
// Direct visits to /cached/ answer 404 (proxy.ts).
export function generateStaticParams() {
  return [];
}

export { generateMetadata };

export default function CachedCategoryHub({ params }: { params: Promise<{ lang: string; category: string }> }) {
  return <CategoryHubPage params={params} searchParams={Promise.resolve({})} />;
}
