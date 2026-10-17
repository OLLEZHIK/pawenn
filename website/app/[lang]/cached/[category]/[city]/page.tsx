import type { Metadata } from "next";
import CategoryCityPage, { generateMetadata as baseMetadata } from "../../../[category]/[city]/page";

// Cached twin of /[lang]/[category]/[city]/ - see ../page.tsx.
export function generateStaticParams() {
  return [];
}

// Not re-exported as is: Next would pass the request's searchParams to the
// base generateMetadata, and a cached page must not read them (500).
export function generateMetadata({ params }: { params: Promise<{ lang: string; category: string; city: string }> }): Promise<Metadata> {
  return baseMetadata({ params });
}

export default function CachedCategoryCity({ params }: { params: Promise<{ lang: string; category: string; city: string }> }) {
  return <CategoryCityPage params={params} searchParams={Promise.resolve({})} />;
}
