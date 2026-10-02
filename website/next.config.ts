import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Not a static export: the app now reads live data from Postgres via
  // Prisma and has POST route handlers (reviews, click tracking) that need
  // a real server runtime, which Vercel already provides for a plain
  // Next.js app - `output: 'export'` was only ever compatible with the
  // earlier CSV-only static homepage.
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  // Every internal link, the sitemap and canonical URLs use a trailing
  // slash (`/grooming/bratislava/`). Without this Next.js 308-redirects
  // those to the slash-less form, so crawlers hit a redirect on every
  // sitemap URL.
  trailingSlash: true,
  experimental: {
    // The root layout lives under app/[lang], so unmatched URLs need
    // app/global-not-found.tsx.
    globalNotFound: true,
  },
  // Security check 2026-10-01 (tasks/cmac-security-fixes.md): no
  // "X-Powered-By: Next.js", and the basic headers on every path. The CSP
  // has no script-src on purpose - Next's inline scripts and Vercel
  // Analytics would break without a separate check.
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'; base-uri 'self'; object-src 'none'" },
        ],
      },
      {
        // A logo SVG opened by its direct link runs no script.
        source: "/logos/:path*.svg",
        headers: [{ key: "Content-Security-Policy", value: "default-src 'none'; style-src 'unsafe-inline'; sandbox" }],
      },
    ];
  },
};

export default nextConfig;
