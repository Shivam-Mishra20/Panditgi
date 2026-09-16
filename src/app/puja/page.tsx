import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { ServiceGrid } from "@/components/sections/service-card";
import { FinalCTA } from "@/components/sections/cta";
import { pujaServices } from "@/lib/services";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "पूजा सेवाएं — Hindu Puja Services",
  description:
    "गणेश पूजा, लक्ष्मी पूजा, शिव पूजा, दुर्गा पूजा, सत्यनारायण पूजा, रुद्राभिषेक, नवग्रह पूजा, गृह प्रवेश एवं अन्य वैदिक पूजा सेवाएं परंपरा के अनुसार।",
  alternates: { canonical: "/puja" },
  openGraph: {
    title: `पूजा सेवाएं | ${siteConfig.name}`,
    description:
      "वैदिक विधि के अनुसार विभिन्न पूजा सेवाएं — गणेश पूजा, लक्ष्मी पूजा, शिव पूजा, दुर्गा पूजा एवं अन्य।",
  },
};

export default function PujaPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "पूजा" }]} />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-devanagari text-4xl font-semibold text-heading">
          पूजा सेवाएं
        </h1>
        <p className="font-devanagari mt-3 max-w-2xl text-ink-soft">
          परंपरा के अनुसार वैदिक मंत्रोच्चार सहित सम्पन्न कराई जाने वाली प्रमुख
          पूजा सेवाएं। अधिक जानकारी हेतु किसी भी सेवा पर जाएं।
        </p>
        <div className="mt-10">
          <ServiceGrid
            services={pujaServices.map((s) => ({
              title: s.title,
              description: s.shortDescription,
              href: `/puja/${s.slug}`,
            }))}
          />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
