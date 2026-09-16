import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "नियम एवं शर्तें",
  description: `${siteConfig.name} की सेवाओं के उपयोग हेतु नियम एवं शर्तें।`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "नियम एवं शर्तें" }]} />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-devanagari text-4xl font-semibold text-heading">
          नियम एवं शर्तें
        </h1>
        <p className="mt-3 text-sm text-ink-soft">
          अंतिम अद्यतन: {new Date().toLocaleDateString("hi-IN")}
        </p>

        <div className="mt-8 space-y-6 font-devanagari leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-xl font-semibold text-heading">सामान्य</h2>
            <p className="mt-2">
              इस वेबसाइट का उपयोग करके आप {siteConfig.name} की इन नियम एवं
              शर्तों से सहमत होते हैं। कृपया वेबसाइट का उपयोग करने से पहले
              इन्हें ध्यानपूर्वक पढ़ें।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-heading">सेवाएं</h2>
            <p className="mt-2">
              {siteConfig.name} पूजा, वैदिक अनुष्ठान, संस्कार, विवाह, हवन,
              कथा-पाठ एवं ज्योतिष परामर्श जैसी सेवाएं परंपरा के अनुसार प्रदान
              करता है। सेवा की उपलब्धता, समय एवं विवरण बुकिंग के समय पंडित जी
              से पुष्टि करें।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-heading">बुकिंग एवं रद्दीकरण</h2>
            <p className="mt-2">
              बुकिंग की पुष्टि, परिवर्तन अथवा रद्दीकरण से जुड़ी जानकारी हेतु
              कृपया सीधे फ़ोन या WhatsApp के माध्यम से पंडित जी से संपर्क
              करें।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-heading">
              जिम्मेदारी की सीमा
            </h2>
            <p className="mt-2">
              वेबसाइट पर दी गई जानकारी परंपरा एवं सामान्य मार्गदर्शन हेतु है।
              किसी भी धार्मिक, ज्योतिषीय अथवा अन्य परिणाम की गारंटी नहीं दी
              जाती। सभी अनुष्ठान श्रद्धा एवं परंपरा के अनुसार सम्पन्न किए जाते
              हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-heading">
              बौद्धिक संपदा
            </h2>
            <p className="mt-2">
              इस वेबसाइट की समस्त सामग्री {siteConfig.name} की संपत्ति है।
              बिना अनुमति के सामग्री की नकल अथवा पुनः प्रकाशन न करें।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-heading">संपर्क</h2>
            <p className="mt-2">
              इन नियमों से जुड़े किसी भी प्रश्न हेतु कृपया{" "}
              <span className="font-medium text-heading">{siteConfig.email}</span>{" "}
              पर संपर्क करें।
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
