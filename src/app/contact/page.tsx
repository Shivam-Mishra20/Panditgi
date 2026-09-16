import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { BookingForm } from "@/components/sections/booking-form";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { siteConfig, getCallLink, getEmailLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "संपर्क करें — पूजा बुक करें",
  description:
    "पूजा, संस्कार, विवाह, कथा या ज्योतिष परामर्श बुक करने हेतु पंडित रामनारायण मिश्रा से संपर्क करें — कॉल, WhatsApp या फॉर्म के माध्यम से।",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "संपर्क" }]} />

      <section className="mx-auto grid max-w-6xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:px-8">
        <div>
          <h1 className="font-devanagari text-4xl font-semibold text-heading">
            संपर्क करें
          </h1>
          <p className="font-devanagari mt-4 leading-relaxed text-ink-soft">
            अपनी पूजा, संस्कार, विवाह, कथा या ज्योतिष परामर्श से जुड़ी आवश्यकता
            बताएं — पंडित जी शीघ्र ही आपसे संपर्क करेंगे।
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={getCallLink()}
              className="flex items-center gap-3 rounded-xl border border-gold/25 bg-surface px-4 py-3.5 text-heading hover:border-saffron/50"
            >
              <Phone className="h-5 w-5 text-saffron-dark" aria-hidden="true" />
              <span className="font-devanagari font-medium">
                {siteConfig.phone}
              </span>
            </a>
            <a
              href={getEmailLink()}
              className="flex items-center gap-3 rounded-xl border border-gold/25 bg-surface px-4 py-3.5 text-heading hover:border-saffron/50"
            >
              <Mail className="h-5 w-5 text-saffron-dark" aria-hidden="true" />
              <span className="break-all font-medium">{siteConfig.email}</span>
            </a>
            <div className="flex items-center gap-3 rounded-xl border border-gold/25 bg-surface px-4 py-3.5 text-heading">
              <MapPin
                className="h-5 w-5 text-saffron-dark"
                aria-hidden="true"
              />
              <span className="font-devanagari font-medium">
                {siteConfig.city}, {siteConfig.state}
              </span>
            </div>
            <WhatsAppButton className="w-full justify-center" />
          </div>
        </div>

        <div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}
