import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "प्राइवेसी पॉलिसी",
  description: `${siteConfig.name} की प्राइवेसी पॉलिसी — हम आपकी जानकारी कैसे एकत्रित एवं उपयोग करते हैं।`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "प्राइवेसी पॉलिसी" }]} />
      <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-devanagari text-4xl font-semibold text-heading">
          प्राइवेसी पॉलिसी
        </h1>
        <p className="mt-3 text-sm text-ink-soft">
          अंतिम अद्यतन: {new Date().toLocaleDateString("hi-IN")}
        </p>

        <div className="mt-8 space-y-6 font-devanagari leading-relaxed text-ink-soft">
          <section>
            <h2 className="text-xl font-semibold text-heading">परिचय</h2>
            <p className="mt-2">
              {siteConfig.name} ({siteConfig.legalName}) आपकी निजता का सम्मान
              करता है। यह पॉलिसी बताती है कि हम वेबसाइट के माध्यम से प्राप्त
              जानकारी को कैसे एकत्रित, उपयोग एवं सुरक्षित रखते हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-heading">
              हम कौन सी जानकारी एकत्रित करते हैं
            </h2>
            <p className="mt-2">
              जब आप बुकिंग फॉर्म भरते हैं, तो हम आपका नाम, फ़ोन नंबर, सेवा का
              प्रकार, तिथि, समय, स्थान एवं आपके द्वारा साझा किया गया संदेश
              एकत्रित करते हैं। यह जानकारी केवल आपकी पूजा/सेवा बुकिंग हेतु
              उपयोग की जाती है।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-heading">
              जानकारी का उपयोग
            </h2>
            <p className="mt-2">
              प्राप्त जानकारी का उपयोग केवल आपसे संपर्क करने, आपकी पूजा/सेवा
              बुकिंग की व्यवस्था करने एवं आपको बेहतर सेवा प्रदान करने हेतु
              किया जाता है। हम आपकी जानकारी किसी तीसरे पक्ष को बेचते नहीं हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-heading">
              WhatsApp एवं कॉल
            </h2>
            <p className="mt-2">
              बुकिंग फॉर्म सबमिट करने पर आपकी जानकारी WhatsApp संदेश के
              माध्यम से भेजी जाती है। कृपया ध्यान दें कि WhatsApp एवं फ़ोन कॉल
              संबंधित सेवा प्रदाताओं की अपनी प्राइवेसी नीतियों के अंतर्गत आते
              हैं।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-heading">कुकीज़</h2>
            <p className="mt-2">
              हमारी वेबसाइट बेहतर अनुभव प्रदान करने हेतु आवश्यक कुकीज़ का
              उपयोग कर सकती है। इनसे कोई व्यक्तिगत रूप से पहचान योग्य जानकारी
              एकत्रित नहीं की जाती।
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-heading">संपर्क</h2>
            <p className="mt-2">
              इस पॉलिसी से जुड़े किसी भी प्रश्न हेतु कृपया{" "}
              <span className="font-medium text-heading">{siteConfig.email}</span>{" "}
              पर संपर्क करें।
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
