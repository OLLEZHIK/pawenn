import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NavProgress } from "@/components/NavProgress";
import { Suspense } from "react";
import { LOCALES, isLocale } from "@/lib/i18n";

const bodyFont = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

const headingFont = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

// Root layout per locale: every language under its prefix (/en/, /sk/),
// language model v2 - proxy.ts.
export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return (
    // data-scroll-behavior: Next 16 keeps the CSS smooth scrolling during
    // page changes unless told otherwise - a new page then "slid" up from
    // the old scroll position (owner, 2026-09-30). With it, page changes
    // jump to the top at once; in-page anchors stay smooth.
    <html lang={lang} className={`${headingFont.variable} ${bodyFont.variable}`} data-scroll-behavior="smooth">
      <body>
        {/* useSearchParams needs a Suspense boundary on static pages. */}
        <Suspense fallback={null}>
          <NavProgress />
        </Suspense>
        <Header locale={lang} />
        {children}
        <Footer locale={lang} />
        <Analytics />
      </body>
    </html>
  );
}
