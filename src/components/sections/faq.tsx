import { AccordionItem } from "@/components/ui/accordion";
import type { FaqItem } from "@/lib/types";

export function FAQSection({
  faqs,
  title = "अक्सर पूछे जाने वाले प्रश्न",
}: {
  faqs: FaqItem[];
  title?: string;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="font-devanagari text-center text-3xl font-semibold text-heading">
        {title}
      </h2>
      <div className="mt-8 rounded-2xl border border-gold/20 bg-surface px-6 shadow-[0_2px_16px_rgba(94,26,31,0.05)]">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
