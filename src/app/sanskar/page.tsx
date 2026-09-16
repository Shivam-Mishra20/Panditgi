import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ServiceGrid } from "@/components/sections/service-card";
import { FinalCTA } from "@/components/sections/cta";
import { sanskarServices } from "@/lib/sanskar";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "हिंदू संस्कार — Sanskar Services",
  description:
    "नामकरण, मुंडन, अन्नप्राशन, जनेऊ/उपनयन, विद्यारंभ एवं अन्य पारंपरिक हिंदू संस्कार परंपरा के अनुसार।",
  alternates: { canonical: "/sanskar" },
  openGraph: {
    title: `हिंदू संस्कार | ${siteConfig.name}`,
    description:
      "नामकरण, मुंडन, अन्नप्राशन एवं अन्य पारंपरिक हिंदू संस्कार सेवाएं।",
  },
};

export default function SanskarPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "संस्कार" }]} />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-devanagari text-4xl font-semibold text-heading">
          हिंदू संस्कार
        </h1>
        <p className="font-devanagari mt-3 max-w-2xl text-ink-soft">
          जीवन के विभिन्न पड़ावों पर परंपरा के अनुसार सम्पन्न कराए जाने वाले
          सोलह संस्कारों में से प्रमुख संस्कार।
        </p>
        <div className="mt-10">
          <ServiceGrid
            services={sanskarServices.map((s) => ({
              title: s.title,
              description: s.shortDescription,
              href: `/sanskar/${s.slug}`,
            }))}
          />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
