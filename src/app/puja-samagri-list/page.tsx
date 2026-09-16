import type { Metadata } from "next";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FAQSection } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/cta";
import { samagriList, getSamagriDownloadUrl } from "@/lib/samagri";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "पूजा सामग्री लिस्ट PDF डाउनलोड करें — Puja Samagri List",
  description:
    "गणेश पूजा, लक्ष्मी पूजा, सत्यनारायण पूजा, रुद्राभिषेक, गृह प्रवेश, नवग्रह पूजा एवं विवाह पूजा सहित हर पूजा की सामग्री (सामान) की पूरी सूची — मुफ़्त PDF डाउनलोड करें।",
  alternates: { canonical: "/puja-samagri-list" },
  keywords: [
    "puja samagri list",
    "puja saman list",
    "pooja samagri list pdf",
    "ganesh puja samagri list",
    "satyanarayan puja samagri list",
    "griha pravesh puja samagri",
    "havan samagri list",
    "puja list pdf download",
  ],
  openGraph: {
    title: `पूजा सामग्री लिस्ट (PDF) | ${siteConfig.name}`,
    description:
      "हर पूजा की संपूर्ण सामग्री सूची — मुफ़्त में PDF डाउनलोड करें एवं प्रिंट करें।",
  },
};

const samagriFaqs = [
  {
    question: "क्या यह सामग्री सूची निःशुल्क है?",
    answer:
      "जी हाँ, सभी पूजा सामग्री सूचियां (PDF) पूर्णतः निःशुल्क हैं। आप इन्हें डाउनलोड करके प्रिंट कर सकते हैं।",
  },
  {
    question: "क्या सूची में दी गई सभी वस्तुएं हर पूजा में अनिवार्य हैं?",
    answer:
      "यह सूची परंपरा के अनुसार सामान्य मार्गदर्शन हेतु है। स्थान, उपलब्धता एवं पारिवारिक परंपरा के अनुसार सामग्री में थोड़ा बदलाव हो सकता है। सटीक जानकारी हेतु बुकिंग के समय पंडित जी से पुष्टि अवश्य करें।",
  },
  {
    question: "क्या मैं सामग्री स्वयं व्यवस्थित करूं या पंडित जी करेंगे?",
    answer:
      "दोनों विकल्प संभव हैं। आप चाहें तो इस सूची के अनुसार स्वयं सामग्री एकत्रित कर सकते हैं, अथवा व्यवस्था में सहयोग हेतु बुकिंग के समय पंडित जी से चर्चा कर सकते हैं।",
  },
  {
    question: "सूची PDF डाउनलोड नहीं हो रही, क्या करें?",
    answer:
      "कृपया पुनः प्रयास करें अथवा किसी अन्य ब्राउज़र से खोलें। समस्या बनी रहने पर हमें संपर्क पृष्ठ के माध्यम से सूचित करें।",
  },
];

export default function PujaSamagriListPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "पूजा सामग्री लिस्ट",
    description:
      "हर पूजा की सामग्री (सामान) की संपूर्ण सूची, डाउनलोड करने योग्य PDF के रूप में।",
    url: `${siteConfig.url}/puja-samagri-list`,
    hasPart: samagriList.map((entry) => ({
      "@type": "DigitalDocument",
      name: entry.title,
      url: `${siteConfig.url}${getSamagriDownloadUrl(entry.slug)}`,
      encodingFormat: "application/pdf",
    })),
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "पूजा सामग्री लिस्ट" }]} />

      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-devanagari text-4xl font-semibold text-heading">
          पूजा सामग्री लिस्ट — संपूर्ण सामान सूची (PDF)
        </h1>
        <p className="font-devanagari mt-4 text-lg leading-relaxed text-ink-soft">
          गणेश पूजा, लक्ष्मी पूजा, सत्यनारायण पूजा, रुद्राभिषेक, गृह प्रवेश,
          नवग्रह पूजा, वास्तु पूजा एवं वैदिक विवाह सहित हर पूजा की सामग्री
          (सामान) की परंपरा के अनुसार सूची यहां से मुफ़्त में डाउनलोड करें।
          प्रत्येक सूची को प्रिंट करके पूजा की तैयारी के समय एक चेकलिस्ट की
          तरह उपयोग किया जा सकता है।
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {samagriList.map((entry) => (
            <div
              key={entry.slug}
              className="flex flex-col justify-between rounded-2xl border border-gold/20 bg-surface p-6 shadow-[0_2px_16px_rgba(94,26,31,0.05)]"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-saffron/10">
                  <FileText className="h-5 w-5 text-saffron-dark" aria-hidden="true" />
                </span>
                <h2 className="font-devanagari text-base font-semibold leading-snug text-heading">
                  {entry.title}
                </h2>
              </div>
              <a
                href={getSamagriDownloadUrl(entry.slug)}
                download
                className="font-devanagari mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-gold/40 px-4 py-2.5 text-sm font-medium text-heading transition-colors hover:bg-saffron hover:text-white hover:border-saffron"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                PDF डाउनलोड करें
              </a>
            </div>
          ))}
        </div>

        <p className="font-devanagari mt-8 text-center text-sm text-ink-soft">
          अपनी पूजा से जुड़ी विस्तृत जानकारी हेतु{" "}
          <Link href="/puja" className="font-medium text-saffron-dark hover:underline">
            हमारी पूजा सेवाएं
          </Link>{" "}
          देखें अथवा{" "}
          <Link href="/contact" className="font-medium text-saffron-dark hover:underline">
            सीधे संपर्क करें
          </Link>
          ।
        </p>
      </section>

      <FAQSection faqs={samagriFaqs} title="सामग्री सूची से जुड़े प्रश्न" />
      <FinalCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
