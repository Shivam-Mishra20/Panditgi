import { MessageSquareText, CalendarClock, HandHeart } from "lucide-react";

const steps = [
  {
    icon: MessageSquareText,
    title: "संपर्क करें",
    description:
      "फॉर्म भरें, कॉल करें या WhatsApp पर अपनी आवश्यकता बताएं।",
  },
  {
    icon: CalendarClock,
    title: "मुहूर्त एवं विवरण तय करें",
    description:
      "पंडित जी से पूजा, तिथि, समय एवं स्थान से जुड़ी जानकारी पर चर्चा करें।",
  },
  {
    icon: HandHeart,
    title: "श्रद्धापूर्वक पूजा सम्पन्न",
    description:
      "निर्धारित समय पर परंपरा के अनुसार पूजा/अनुष्ठान सम्पन्न कराया जाता है।",
  },
];

export function HowItWorks() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "PanditGi पर पूजा कैसे बुक करें",
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };

  return (
    <section className="bg-cream-dark/60 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-devanagari text-3xl font-semibold text-heading">
            बुकिंग कैसे करें
          </h2>
        </div>
        <div className="relative mt-12 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-gold/30 sm:block"
            aria-hidden="true"
          />
          {steps.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="relative text-center">
              <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-saffron bg-surface">
                <Icon className="h-5 w-5 text-saffron-dark" aria-hidden="true" />
              </div>
              <h3 className="font-devanagari mt-4 text-base font-semibold text-heading">
                {i + 1}. {title}
              </h3>
              <p className="font-devanagari mx-auto mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
}
