import type { Metadata } from "next";
import CategoryCityPage, { generateMetadata as baseMetadata } from "../../../../[category]/[city]/page";

// Cached twin of /[lang]/[category]/[city]/?page=N (N >= 2): the page of a
// list, which every list links to and crawlers follow (owner, 2026-10-09:
// CPU on the free plan). proxy.ts rewrites ?page=N with no filter here.
export function generateStaticParams() {
  return [];
}

type Params = { lang: string; page: string; category: string; city: string };

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { page, ...rest } = await params;
  return baseMetadata({ params: Promise.resolve(rest), searchParams: Promise.resolve({ page }) });
}

export default async function CachedCategoryCityPage({ params }: { params: Promise<Params> }) {
  const { page, ...rest } = await params;
  return <CategoryCityPage params={Promise.resolve(rest)} searchParams={Promise.resolve({ page })} />;
}
