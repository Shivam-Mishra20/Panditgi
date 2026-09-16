import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Sparkles, Users } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import {
  PujaHeroIllustration,
  MandalaMotif,
} from "@/components/shared/decorative";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const trustBadges = [
  { icon: ShieldCheck, label: "प्रामाणिक वैदिक विधि" },
  { icon: Sparkles, label: "परंपरा के अनुसार पूजन" },
  { icon: Users, label: "परिवारों का विश्वास" },
];

/** A small toran (door-bunting) of triangular leaves, strung above the portrait frame. */
function ToranMotif({ className }: { className?: string }) {
  const leaves = 7;
  return (
    <svg viewBox="0 0 280 46" className={className} aria-hidden="true">
      <path
        d="M4 6 C 70 26, 210 26, 276 6"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.35"
        strokeWidth="2"
      />
      {Array.from({ length: leaves }).map((_, i) => {
        const t = i / (leaves - 1);
        const x = 4 + t * 272;
        // approximate the curve's y so leaves hang from the string
        const y = 6 + Math.sin(t * Math.PI) * 20;
        return (
          <path
            key={i}
            d={`M${x - 9} ${y} L${x} ${y + 20} L${x + 9} ${y} Z`}
            fill={
              i % 2 === 0 ? "var(--saffron, #E08D3C)" : "var(--gold, #C79A3E)"
            }
            fillOpacity="0.9"
          />
        );
      })}
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pattern-diya">
      <MandalaMotif className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 text-heading/[0.06]" />
      <MandalaMotif className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 text-saffron/[0.07]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        {/* Left: copy */}
        <div>
          <span className="font-devanagari inline-block rounded-full border border-gold/40 bg-surface/70 px-4 py-1.5 text-sm text-heading">
            पंडित रामनारायण मिश्र
          </span>

          <h1 className="font-devanagari mt-5 text-balance text-4xl font-semibold leading-tight text-heading sm:text-5xl md:text-6xl">
            {siteConfig.tagline}
          </h1>

          <p className="font-devanagari mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            पंडित रामनारायण मिश्र आपके परिवार के लिए पूजा, वैदिक अनुष्ठान,
            संस्कार, विवाह, हवन, कथा-पाठ एवं ज्योतिष परामर्श परंपरा के अनुसार
            श्रद्धापूर्वक सम्पन्न कराते हैं।
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ variant: "primary", size: "lg" }),
                "font-devanagari",
              )}
            >
              पूजा बुक करें
            </Link>
            <WhatsAppButton
              className={cn(
                buttonVariants({ variant: "whatsapp", size: "lg" }),
              )}
            />
          </div>

          <dl className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {trustBadges.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 rounded-xl border border-gold/25 bg-surface/70 px-3.5 py-3"
              >
                <Icon
                  className="h-5 w-5 shrink-0 text-saffron-dark"
                  aria-hidden="true"
                />
                <dt className="font-devanagari text-sm text-ink-soft">
                  {label}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: portrait, framed like a temple niche with a toran overhead */}
        <div className="relative mx-auto w-full max-w-sm pt-6 lg:max-w-md">
          {/* Ambient glow behind the frame */}
          <div
            className="absolute inset-0 top-6 -z-10 scale-110 rounded-[3rem] bg-gradient-to-br from-saffron/20 via-gold/10 to-transparent blur-2xl"
            aria-hidden="true"
          />

          {/* Toran bunting strung above the arch */}
          <ToranMotif className="absolute -top-2 left-1/2 h-11 w-[85%] -translate-x-1/2 text-gold" />

          {/* Arched frame, evoking a temple niche rather than a generic card */}
          <div className="relative rounded-t-[9999px] rounded-b-[2rem] border border-gold/30 bg-surface p-3 pt-6 shadow-[0_20px_60px_rgba(94,26,31,0.16)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[9999px] rounded-b-[1.6rem] border border-gold/20 bg-gradient-to-b from-cream-dark to-surface">
              <Image
                src="/images/hero/panditji.png"
                alt="पंडित रामनारायण मिश्र पूजा करते हुए"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 450px"
                className="object-cover"
              />
            </div>

            {/* Floating trust ribbon */}
            <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2.5 whitespace-nowrap rounded-2xl border border-gold/30 bg-surface px-4 py-3 shadow-[0_10px_30px_rgba(94,26,31,0.18)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-saffron/10">
                <ShieldCheck
                  className="h-[18px] w-[18px] text-saffron-dark"
                  aria-hidden="true"
                />
              </span>
              <span className="font-devanagari text-sm font-medium text-heading">
                प्रामाणिक वैदिक पूजा
              </span>
            </div>
          </div>

          <p className="mt-9 text-center text-xs text-ink-soft/70 lg:hidden">
            पंडित रामनारायण मिश्र
          </p>
        </div>
      </div>
    </section>
  );
}
