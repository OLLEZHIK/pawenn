import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LOCALES, getDictionary, isLocale } from "@/lib/i18n";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { gaMeasurementId } from "@/lib/analytics";

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
  const gaId = gaMeasurementId();
  const t = getDictionary(lang);

  return (
    // globals.css scrolls smoothly; this lets Next.js switch it off during a page
    // change, or the jump to the top is cut short and a phone lands on the footer
    // (owner, 2026-10-07; Next 16 needs the attribute, upgrading/version-16.md).
    <html lang={lang} data-scroll-behavior="smooth" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body>
        <Header locale={lang} />
        {children}
        <Footer locale={lang} />
        <Analytics />
        {gaId && (
          <GoogleAnalytics
            id={gaId}
            text={t.consent.text}
            allow={t.consent.allow}
            decline={t.consent.decline}
            policyLabel={t.footer.privacy}
          />
        )}
      </body>
    </html>
  );
}
