import type { Metadata } from "next";
import CategoryCityDistrictPage, { generateMetadata as baseMetadata } from "../../../../[category]/[city]/[district]/page";

// Cached twin of /[lang]/[category]/[city]/[district]/ (districts, prices,
// attribute and "best" pages) - see ../../page.tsx.
export function generateStaticParams() {
  return [];
}

// Not re-exported as is: Next would pass the request's searchParams to the
// base generateMetadata, and a cached page must not read them (500).
export function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; category: string; city: string; district: string }>;
}): Promise<Metadata> {
  return baseMetadata({ params });
}

export default function CachedCategoryCityDistrict({
  params,
}: {
  params: Promise<{ lang: string; category: string; city: string; district: string }>;
}) {
  return <CategoryCityDistrictPage params={params} searchParams={Promise.resolve({})} />;
}
