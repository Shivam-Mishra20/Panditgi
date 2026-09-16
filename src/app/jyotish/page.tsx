import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/cta";
import { buttonVariants } from "@/components/ui/button";
import { jyotishServices, jyotishFaqs } from "@/lib/jyotish";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "ज्योतिष परामर्श — Kundli, Kundli Milan, Muhurat",
  description:
    "कुंडली परामर्श, कुंडली मिलान, मुहूर्त परामर्श एवं वैदिक ज्योतिष सेवाएं परंपरा के अनुसार।",
  alternates: { canonical: "/jyotish" },
  openGraph: {
    title: `ज्योतिष परामर्श | ${siteConfig.name}`,
    description: "कुंडली परामर्श, कुंडली मिलान एवं मुहूर्त परामर्श सेवाएं।",
  },
};

export default function JyotishPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ज्योतिष परामर्श सेवाएं",
    provider: { "@type": "Person", name: siteConfig.legalName },
    areaServed: `${siteConfig.city}, ${siteConfig.state}`,
    description: "कुंडली परामर्श, कुंडली मिलान एवं मुहूर्त परामर्श सेवाएं।",
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "ज्योतिष" }]} />
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-devanagari text-4xl font-semibold text-heading">
          ज्योतिष परामर्श
        </h1>
        <p className="font-devanagari mt-4 text-lg leading-relaxed text-ink-soft">
          परंपरागत वैदिक ज्योतिष सिद्धांतों के आधार पर कुंडली परामर्श, कुंडली
          मिलान एवं मुहूर्त संबंधी मार्गदर्शन।
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "font-devanagari")}
          >
            ज्योतिष परामर्श हेतु संपर्क करें
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {jyotishServices.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gold/20 bg-surface p-6 shadow-[0_2px_16px_rgba(94,26,31,0.05)]"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-saffron-dark" aria-hidden="true" />
                <div>
                  <h2 className="font-devanagari text-lg font-semibold text-heading">
                    {item.title}
                  </h2>
                  <p className="font-devanagari mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="font-devanagari mt-6 text-sm text-ink-soft/80">
          नोट: ज्योतिष परामर्श परंपरा एवं श्रद्धा पर आधारित मार्गदर्शन है,
          इसके किसी निश्चित परिणाम की गारंटी नहीं दी जाती।
        </p>
      </section>

      <FAQSection faqs={jyotishFaqs} title="ज्योतिष परामर्श से जुड़े प्रश्न" />
      <FinalCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
