import { PAGE_CITY_META } from "@/lib/pageCity";

/** Marks the page's city for the header and footer (lib/pageCity.ts). */
export function PageCity({ slug }: { slug: string }) {
  return <meta name={PAGE_CITY_META} content={slug} />;
}
