import { HeartHandshake, BookOpenText, Clock, Sparkle } from "lucide-react";

const points = [
  {
    icon: BookOpenText,
    title: "वैदिक विधि एवं परंपरा",
    description:
      "प्रत्येक अनुष्ठान शास्त्रोक्त विधि एवं परंपरा के अनुसार श्रद्धापूर्वक सम्पन्न कराया जाता है।",
  },
  {
    icon: HeartHandshake,
    title: "परिवार के अनुसार सेवा",
    description:
      "आपकी पारिवारिक परंपरा, भाषा एवं सुविधा को ध्यान में रखते हुए पूजा की व्यवस्था की जाती है।",
  },
  {
    icon: Clock,
    title: "समय की पाबंदी",
    description:
      "निर्धारित मुहूर्त एवं समय पर पूजा प्रारंभ करने का पूरा प्रयास किया जाता है।",
  },
  {
    icon: Sparkle,
    title: "श्रद्धा एवं शुद्धता",
    description:
      "पूजा सामग्री एवं अनुष्ठान की शुद्धता को सर्वोच्च प्राथमिकता दी जाती है।",
  },
];

export function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="font-devanagari text-3xl font-semibold text-heading">
          PanditGi को क्यों चुनें
        </h2>
        <p className="font-devanagari mx-auto mt-3 max-w-2xl text-ink-soft">
          परंपरा, श्रद्धा एवं सेवा भाव के साथ आपके परिवार के हर अनुष्ठान का
          हिस्सा बनने का प्रयास।
        </p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ icon: Icon, title, description }) => (
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
  );
}
