"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { getWhatsAppLink } from "@/lib/site-config";

const SERVICE_OPTIONS = [
  "पूजा (Puja)",
  "संस्कार (Sanskar)",
  "विवाह (Vivah)",
  "कथा / पाठ (Katha)",
  "हवन / यज्ञ",
  "ज्योतिष परामर्श (Jyotish)",
  "अन्य",
];

const bookingSchema = z.object({
  name: z.string().min(2, "कृपया अपना पूरा नाम दर्ज करें"),
  phone: z
    .string()
    .min(10, "कृपया मान्य फ़ोन नंबर दर्ज करें")
    .max(15, "कृपया मान्य फ़ोन नंबर दर्ज करें"),
  service: z.string().min(1, "कृपया एक सेवा चुनें"),
  date: z.string().min(1, "कृपया तिथि चुनें"),
  time: z.string().optional(),
  location: z.string().min(2, "कृपया स्थान दर्ज करें"),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

export function BookingForm({ defaultService }: { defaultService?: string }) {
  const [submitted, setSubmitted] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { service: defaultService || "" },
  });

  function onSubmit(data: BookingFormValues) {
    const message = [
      "नमस्ते Pandit Ji, मैं पूजा बुक करना चाहता/चाहती हूँ।",
      `नाम: ${data.name}`,
      `फ़ोन: ${data.phone}`,
      `सेवा: ${data.service}`,
      `तिथि: ${data.date}${data.time ? ` (${data.time})` : ""}`,
      `स्थान: ${data.location}`,
      data.message ? `संदेश: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(getWhatsAppLink(message), "_blank", "noopener,noreferrer");
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-gold/25 bg-surface p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-saffron-dark" aria-hidden="true" />
        <h3 className="font-devanagari text-xl font-semibold text-heading">
          धन्यवाद!
        </h3>
        <p className="font-devanagari text-ink-soft">
          आपका अनुरोध WhatsApp पर भेज दिया गया है। पंडित जी शीघ्र ही आपसे
          संपर्क करेंगे।
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)} className="mt-2">
          <span className="font-devanagari">नया अनुरोध भरें</span>
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-5 rounded-2xl border border-gold/25 bg-surface p-6 shadow-[0_2px_16px_rgba(94,26,31,0.06)] sm:grid-cols-2 sm:p-8"
      noValidate
    >
      <div>
        <Label htmlFor="name" className="font-devanagari">
          नाम
        </Label>
        <Input id="name" placeholder="आपका पूरा नाम" {...register("name")} />
        {errors.name && (
          <p className="mt-1 text-xs text-error">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="font-devanagari">
          फ़ोन नंबर
        </Label>
        <Input id="phone" type="tel" placeholder="98765 43210" {...register("phone")} />
        {errors.phone && (
          <p className="mt-1 text-xs text-error">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="service" className="font-devanagari">
          सेवा चुनें
        </Label>
        <Select id="service" defaultValue={defaultService || ""} {...register("service")}>
          <option value="" disabled>
            सेवा चुनें
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </Select>
        {errors.service && (
          <p className="mt-1 text-xs text-error">{errors.service.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="location" className="font-devanagari">
          स्थान
        </Label>
        <Input id="location" placeholder="शहर / पता" {...register("location")} />
        {errors.location && (
          <p className="mt-1 text-xs text-error">{errors.location.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="date" className="font-devanagari">
          तिथि
        </Label>
        <Input id="date" type="date" {...register("date")} />
        {errors.date && (
          <p className="mt-1 text-xs text-error">{errors.date.message}</p>
        )}
      </div>

      <div>
        <Label htmlFor="time" className="font-devanagari">
          समय (वैकल्पिक)
        </Label>
        <Input id="time" type="time" {...register("time")} />
      </div>

      <div className="sm:col-span-2">
        <Label htmlFor="message" className="font-devanagari">
          संदेश (वैकल्पिक)
        </Label>
        <Textarea
          id="message"
          placeholder="अपनी पूजा से जुड़ी अन्य जानकारी लिखें..."
          {...register("message")}
        />
      </div>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full font-devanagari" disabled={isSubmitting}>
          {isSubmitting ? "भेजा जा रहा है..." : "पूजा बुक करें"}
        </Button>
        <p className="font-devanagari mt-2 text-center text-xs text-ink-soft">
          सबमिट करने पर आपका अनुरोध WhatsApp के माध्यम से भेजा जाएगा।
        </p>
      </div>
    </form>
  );
}
