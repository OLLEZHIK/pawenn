import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideArticle, guideMetadata } from "@/components/Guides";
import { GUIDE_SEGMENT, getGuide } from "@/lib/guides";
import { isLocale } from "@/lib/i18n";

// /{lang}/guides/{slug}/ - one guide (docs/playbooks/guides.md).
const SEGMENT = "guides";

// Built on the first visit, then served from Vercel's cache until the next
// deploy (owner, 2026-10-09: the free plan ran out of CPU rendering these
// pages on every visit and crawler hit). Nothing here reads the query.
export function generateStaticParams() {
  return [];
}

interface PageParams {
  lang: string;
  slug: string;
}

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLocale(lang) || GUIDE_SEGMENT[lang] !== SEGMENT) return {};
  const guide = getGuide(lang, slug);
  return guide ? guideMetadata(guide) : {};
}

export default async function GuidePage({ params }: { params: Promise<PageParams> }) {
  const { lang, slug } = await params;
  if (!isLocale(lang) || GUIDE_SEGMENT[lang] !== SEGMENT) notFound();
  const guide = getGuide(lang, slug);
  if (!guide) notFound();
  return <GuideArticle guide={guide} />;
}
