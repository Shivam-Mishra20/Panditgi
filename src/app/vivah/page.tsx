import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/cta";
import { SamagriDownload } from "@/components/shared/samagri-download";
import { buttonVariants } from "@/components/ui/button";
import { vivahRituals, vivahFaqs } from "@/lib/vivah";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "विवाह पंडित सेवाएं — Vedic Vivah / Marriage Pandit",
  description:
    "वैदिक विवाह विधि, गणेश पूजा, मंडप पूजा, विवाह हवन, फेरे, सप्तपदी एवं कन्यादान — परंपरा के अनुसार विवाह संस्कार सेवाएं।",
  alternates: { canonical: "/vivah" },
  openGraph: {
    title: `विवाह सेवाएं | ${siteConfig.name}`,
    description:
      "वैदिक विवाह विधि सहित संपूर्ण विवाह संस्कार सेवाएं परंपरा के अनुसार सम्पन्न कराई जाती हैं।",
  },
};

export default function VivahPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "वैदिक विवाह सेवाएं",
    provider: { "@type": "Person", name: siteConfig.legalName },
    areaServed: `${siteConfig.city}, ${siteConfig.state}`,
    description:
      "वैदिक विवाह विधि सहित मंडप पूजा, विवाह हवन, फेरे, सप्तपदी एवं कन्यादान सेवाएं।",
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "विवाह" }]} />
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-devanagari text-4xl font-semibold text-heading">
          विवाह / वैदिक विवाह सेवाएं
        </h1>
        <p className="font-devanagari mt-4 text-lg leading-relaxed text-ink-soft">
          परंपरा के अनुसार वैदिक मंत्रोच्चार सहित विवाह संस्कार — गणेश पूजा से
          लेकर सप्तपदी एवं कन्यादान तक, प्रत्येक अनुष्ठान श्रद्धापूर्वक सम्पन्न
          कराया जाता है।
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "font-devanagari")}
          >
            विवाह पूजा हेतु संपर्क करें
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-4 sm:px-6 lg:px-8">
        <h2 className="font-devanagari text-2xl font-semibold text-heading">
          विवाह अनुष्ठान की मुख्य विधियां
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {vivahRituals.map((ritual) => (
            <div
              key={ritual.title}
              className="rounded-2xl border border-gold/20 bg-surface p-6 shadow-[0_2px_16px_rgba(94,26,31,0.05)]"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-saffron-dark" aria-hidden="true" />
                <div>
                  <h3 className="font-devanagari text-lg font-semibold text-heading">
                    {ritual.title}
                  </h3>
                  <p className="font-devanagari mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {ritual.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="font-devanagari mt-6 text-sm text-ink-soft/80">
          मुहूर्त एवं तिथि निर्धारण परंपरा के अनुसार पंचांग को ध्यान में रखते
          हुए किया जाता है। विस्तृत जानकारी हेतु पंडित जी से संपर्क करें।
        </p>
        <div className="mt-8">
          <SamagriDownload slug="vivah-puja" />
        </div>
      </section>

      <FAQSection faqs={vivahFaqs} title="विवाह पूजा से जुड़े प्रश्न" />
      <FinalCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
