import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/cta";
import { buttonVariants } from "@/components/ui/button";
import { kathaServices, kathaFaqs } from "@/lib/katha";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "कथा एवं पाठ सेवाएं — Satyanarayan Katha, Bhagwat Katha",
  description:
    "सत्यनारायण कथा, भागवत कथा, राम कथा, सुंदरकांड, हनुमान चालीसा, रामचरितमानस एवं गीता पाठ — परंपरा के अनुसार आयोजन।",
  alternates: { canonical: "/katha" },
  openGraph: {
    title: `कथा एवं पाठ | ${siteConfig.name}`,
    description:
      "सत्यनारायण कथा, भागवत कथा एवं अन्य धार्मिक कथा-पाठ आयोजन सेवाएं।",
  },
};

export default function KathaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "कथा एवं पाठ सेवाएं",
    provider: { "@type": "Person", name: siteConfig.legalName },
    areaServed: `${siteConfig.city}, ${siteConfig.state}`,
    description:
      "सत्यनारायण कथा, भागवत कथा, राम कथा एवं अन्य धार्मिक पाठ आयोजन।",
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "कथा" }]} />
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-devanagari text-4xl font-semibold text-heading">
          कथा एवं पाठ
        </h1>
        <p className="font-devanagari mt-4 text-lg leading-relaxed text-ink-soft">
          परंपरा के अनुसार श्रद्धा एवं भक्ति भाव के साथ आयोजित की जाने वाली
          धार्मिक कथाएं एवं पाठ।
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "font-devanagari")}
          >
            कथा आयोजन हेतु संपर्क करें
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {kathaServices.map((item) => (
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
      </section>

      <FAQSection faqs={kathaFaqs} title="कथा आयोजन से जुड़े प्रश्न" />
      <FinalCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
