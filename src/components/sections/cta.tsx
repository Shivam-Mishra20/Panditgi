import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { MandalaMotif } from "@/components/shared/decorative";
import { cn } from "@/lib/utils";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-maroon py-16 text-oncolor">
      <MandalaMotif className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 text-oncolor/10" />
      <MandalaMotif className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 text-gold-light/10" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-devanagari text-balance text-3xl font-semibold sm:text-4xl">
          अपनी पूजा परंपरा के अनुसार, श्रद्धा के साथ बुक करें
        </h2>
        <p className="font-devanagari mt-4 text-oncolor/75">
          अपनी आवश्यकता, तिथि एवं स्थान बताएं — पंडित रामनारायण मिश्रा शीघ्र ही
          आपसे संपर्क करेंगे।
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
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
            className={cn(buttonVariants({ variant: "whatsapp", size: "lg" }))}
          />
        </div>
      </div>
    </section>
  );
}
