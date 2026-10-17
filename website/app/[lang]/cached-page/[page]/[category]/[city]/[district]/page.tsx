import type { Metadata } from "next";
import CategoryCityDistrictPage, { generateMetadata as baseMetadata } from "../../../../../[category]/[city]/[district]/page";

// Cached twin of /[lang]/[category]/[city]/[district]/?page=N (N >= 2) - see ../page.tsx.
export function generateStaticParams() {
  return [];
}

type Params = { lang: string; page: string; category: string; city: string; district: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { page, ...rest } = await params;
  return baseMetadata({ params: Promise.resolve(rest), searchParams: Promise.resolve({ page }) });
}

export default async function CachedCategoryCityDistrictPage({ params }: { params: Promise<Params> }) {
  const { page, ...rest } = await params;
  return <CategoryCityDistrictPage params={Promise.resolve(rest)} searchParams={Promise.resolve({ page })} />;
}
