import CategoryCityPage, { generateMetadata } from "../../../[category]/[city]/page";

// Cached twin of /[lang]/[category]/[city]/?all=1 - the "Show all" link
// on every list, which crawlers follow too (owner, 2026-10-09: CPU on the
// free plan). proxy.ts rewrites ?all=1 with no other filter here.
export function generateStaticParams() {
  return [];
}

export { generateMetadata };

export default function CachedCategoryCityAll({ params }: { params: Promise<{ lang: string; category: string; city: string }> }) {
  return <CategoryCityPage params={params} searchParams={Promise.resolve({ all: "1" })} />;
}
