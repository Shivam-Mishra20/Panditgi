import type { Metadata } from "next";
import Link from "next/link";
import { BookOpenText, HeartHandshake, Landmark } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FinalCTA } from "@/components/sections/cta";
import { buttonVariants } from "@/components/ui/button";
import { PujaHeroIllustration } from "@/components/shared/decorative";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "हमारे बारे में — Pandit Ramnarayan Mishra",
  description:
    "पंडित रामनारायण मिश्र के बारे में जानें — परंपरा, वैदिक विधि एवं श्रद्धा के साथ पूजा, संस्कार, विवाह एवं ज्योतिष सेवाएं।",
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: BookOpenText,
    title: "वैदिक ज्ञान",
    description:
      "प्रत्येक अनुष्ठान वेद-शास्त्र सम्मत विधि एवं परंपरा के अनुसार सम्पन्न कराया जाता है।",
  },
  {
    icon: HeartHandshake,
    title: "सेवा भाव",
    description:
      "हर परिवार की आवश्यकता एवं परंपरा को समझते हुए श्रद्धापूर्वक सेवा प्रदान करने का प्रयास।",
  },
  {
    icon: Landmark,
    title: "परंपरा का सम्मान",
    description:
      "पीढ़ियों से चली आ रही पूजा-पद्धति एवं रीति-रिवाज़ों का सम्मान करते हुए अनुष्ठान सम्पन्न कराए जाते हैं।",
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.legalName,
    jobTitle: "Hindu Pandit / Vedic Priest",
    worksFor: { "@type": "Organization", name: siteConfig.name },
    areaServed: `${siteConfig.city}, ${siteConfig.state}`,
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "हमारे बारे में" }]} />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h1 className="font-devanagari text-4xl font-semibold text-heading">
            पंडित रामनारायण मिश्र
          </h1>
          <p className="font-devanagari mt-5 text-lg leading-relaxed text-ink-soft">
            पंडित रामनारायण मिश्र एक अनुभवी हिंदू पंडित हैं, जो पूजा, वैदिक
            अनुष्ठान, संस्कार, विवाह, हवन, कथा-पाठ एवं ज्योतिष परामर्श
            परंपरा के अनुसार श्रद्धापूर्वक सम्पन्न कराते हैं।
          </p>
          <p className="font-devanagari mt-4 leading-relaxed text-ink-soft">
            उनका उद्देश्य प्रत्येक परिवार की पारंपरिक मान्यताओं का सम्मान करते
            हुए शास्त्रोक्त विधि से पूजा एवं संस्कार सम्पन्न कराना है, ताकि हर
            अनुष्ठान श्रद्धा एवं शुद्धता के साथ पूर्ण हो सके।
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "font-devanagari")}
            >
              संपर्क करें
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-xs lg:max-w-sm">
          <PujaHeroIllustration className="h-auto w-full" />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <h2 className="font-devanagari text-center text-3xl font-semibold text-heading">
          हमारे मूल्य
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-2xl border border-gold/20 bg-surface p-6 text-center shadow-[0_2px_16px_rgba(94,26,31,0.05)]"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-saffron/10">
                <Icon className="h-6 w-6 text-saffron-dark" aria-hidden="true" />
              </div>
              <h3 className="font-devanagari mt-4 text-base font-semibold text-heading">
                {title}
              </h3>
              <p className="font-devanagari mt-2 text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
