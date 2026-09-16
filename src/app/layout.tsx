import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileBottomBar } from "@/components/layout/mobile-bottom-bar";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — परंपरा, संस्कार और श्रद्धा के साथ`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pandit Ji",
    "Hindu Pandit",
    "Vedic Pandit",
    "Puja Services",
    "Griha Pravesh Puja",
    "Marriage Pandit",
    "Satyanarayan Katha",
    "Havan",
    "Sanskar",
    "Kundli",
    "Jyotish",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "hi_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — परंपरा, संस्कार और श्रद्धा के साथ`,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — परंपरा, संस्कार और श्रद्धा के साथ`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    founder: {
      "@type": "Person",
      name: siteConfig.legalName,
      jobTitle: "Hindu Pandit / Vedic Priest",
    },
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressRegion: siteConfig.state,
      addressCountry: "IN",
    },
    description: siteConfig.description,
    areaServed: `${siteConfig.city}, ${siteConfig.state}`,
  };

  return (
    <html lang="hi" suppressHydrationWarning>
      <head>
        {/*
          Fonts are loaded via <link> (instead of next/font/google) so this
          project builds in network-restricted environments. On a normal
          machine/Vercel deployment you can switch to next/font/google for
          self-hosted, zero-layout-shift fonts — see README "Fonts" section.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- root layout applies to all routes in the App Router, so this is safe */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Noto+Serif+Devanagari:wght@400;500;600;700&display=swap"
        />
        <meta
          name="theme-color"
          content="#5e1a1f"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#191210"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-maroon focus:px-4 focus:py-2 focus:text-oncolor"
          >
            मुख्य सामग्री पर जाएं
          </a>
          <Header />
          <main id="main-content" className="lg:pb-0">
            {children}
          </main>
          <Footer />
          <MobileBottomBar />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
