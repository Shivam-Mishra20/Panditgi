import type { Metadata } from "next";
import Link from "next/link";
import { Download } from "lucide-react";
import { Hero } from "@/components/sections/hero";
import { ServiceGrid } from "@/components/sections/service-card";
import { WhyChoose } from "@/components/sections/why-choose";
import { HowItWorks } from "@/components/sections/how-it-works";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/cta";
import { homeFaqs } from "@/lib/faqs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.name} — Pandit Ramnarayan Mishra | पूजा, संस्कार, विवाह, ज्योतिष`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

const popularServices = [
  {
    title: "हिंदू संस्कार",
    description: "नामकरण, मुंडन, अन्नप्राशन एवं अन्य पारंपरिक संस्कार।",
    href: "/sanskar",
  },
  {
    title: "विवाह सेवाएं",
    description: "वैदिक विवाह विधि, मंडप पूजा, फेरे एवं सप्तपदी।",
    href: "/vivah",
  },
  {
    title: "गृह प्रवेश",
    description: "नए घर में प्रवेश के अवसर पर गृह शांति पूजा।",
    href: "/puja/griha-shanti-puja",
  },
  {
    title: "कथा एवं पाठ",
    description: "सत्यनारायण कथा, भागवत कथा, सुंदरकांड एवं अन्य पाठ।",
    href: "/katha",
  },
  {
    title: "हवन / यज्ञ",
    description: "महामृत्युंजय जाप, नवग्रह हवन एवं अन्य वैदिक यज्ञ।",
    href: "/puja/mahamrityunjaya-havan",
  },
  {
    title: "ज्योतिष परामर्श",
    description: "कुंडली परामर्श, कुंडली मिलान एवं मुहूर्त परामर्श।",
    href: "/jyotish",
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-devanagari text-3xl font-semibold text-heading">
            लोकप्रिय पूजा सेवाएं
          </h2>
          <p className="font-devanagari mx-auto mt-3 max-w-2xl text-ink-soft">
            परंपरा के अनुसार सम्पन्न कराई जाने वाली प्रमुख सेवाएं, आपके परिवार
            की आवश्यकता अनुसार।
          </p>
        </div>
        <div className="mt-10">
          <ServiceGrid services={popularServices} />
        </div>
      </section>

      <WhyChoose />

      <section className="mx-auto max-w-5xl px-4 pb-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 rounded-3xl border border-gold/25 bg-surface px-6 py-10 text-center shadow-[0_2px_20px_rgba(94,26,31,0.06)] sm:px-12">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-saffron/10">
            <Download className="h-6 w-6 text-saffron-dark" aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-devanagari text-2xl font-semibold text-heading sm:text-3xl">
              हर पूजा की सामग्री सूची — मुफ़्त PDF डाउनलोड करें
            </h2>
            <p className="font-devanagari mx-auto mt-3 max-w-xl text-ink-soft">
              गणेश पूजा, सत्यनारायण पूजा, गृह प्रवेश, रुद्राभिषेक एवं अन्य हर
              पूजा की संपूर्ण सामग्री सूची — प्रिंट कर के अपनी तैयारी आसान
              बनाएं।
            </p>
          </div>
          <Link
            href="/puja-samagri-list"
            className="font-devanagari inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-medium text-oncolor transition-transform duration-200 hover:scale-[1.03] hover:bg-maroon-light active:scale-[0.98]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            सभी सामग्री सूचियां देखें
          </Link>
        </div>
      </section>

      <HowItWorks />
      <FAQSection faqs={homeFaqs} />
      <FinalCTA />
    </>
  );
}
