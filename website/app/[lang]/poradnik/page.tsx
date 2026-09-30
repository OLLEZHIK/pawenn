import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuidesHub, guidesHubMetadata } from "@/components/Guides";
import { GUIDE_SEGMENT, listGuides } from "@/lib/guides";
import { isLocale } from "@/lib/i18n";

// /{lang}/poradnik/ - the guides section of this language (docs/playbooks/guides.md).
const SEGMENT = "poradnik";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang) || GUIDE_SEGMENT[lang] !== SEGMENT) return {};
  return guidesHubMetadata(lang);
}

export default async function GuidesHubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  // No guides in this language yet - no page.
  if (!isLocale(lang) || GUIDE_SEGMENT[lang] !== SEGMENT || listGuides(lang).length === 0) notFound();
  return <GuidesHub locale={lang} />;
}
