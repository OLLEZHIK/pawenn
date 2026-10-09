import CategoryCityDistrictPage, { generateMetadata } from "../../../../[category]/[city]/[district]/page";

// Cached twin of /[lang]/[category]/[city]/[district]/ (districts, prices,
// attribute and "best" pages) - see ../../page.tsx.
export function generateStaticParams() {
  return [];
}

export { generateMetadata };

export default function CachedCategoryCityDistrict({
  params,
}: {
  params: Promise<{ lang: string; category: string; city: string; district: string }>;
}) {
  return <CategoryCityDistrictPage params={params} searchParams={Promise.resolve({})} />;
}
