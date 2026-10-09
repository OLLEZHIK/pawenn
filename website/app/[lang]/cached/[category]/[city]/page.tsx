import CategoryCityPage, { generateMetadata } from "../../../[category]/[city]/page";

// Cached twin of /[lang]/[category]/[city]/ - see ../page.tsx.
export function generateStaticParams() {
  return [];
}

export { generateMetadata };

export default function CachedCategoryCity({ params }: { params: Promise<{ lang: string; category: string; city: string }> }) {
  return <CategoryCityPage params={params} searchParams={Promise.resolve({})} />;
}
