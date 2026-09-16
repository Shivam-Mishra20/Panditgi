import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { FAQSection } from "@/components/sections/faq";
import { RelatedServices } from "@/components/sections/related-services";
import { FinalCTA } from "@/components/sections/cta";
import { buttonVariants } from "@/components/ui/button";
import { sanskarServices, getSanskarBySlug } from "@/lib/sanskar";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return sanskarServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getSanskarBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.title} — विधि एवं महत्व`,
    description: service.shortDescription,
    alternates: { canonical: `/sanskar/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${siteConfig.name}`,
      description: service.shortDescription,
    },
  };
}

export default async function SanskarDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getSanskarBySlug(slug);
  if (!service) notFound();

  const related = sanskarServices.filter((s) =>
    service.relatedSlugs?.includes(s.slug)
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.title,
    provider: { "@type": "Person", name: siteConfig.legalName },
    areaServed: `${siteConfig.city}, ${siteConfig.state}`,
    description: service.shortDescription,
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "संस्कार", href: "/sanskar" }, { label: service.title }]} />

      <article className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-devanagari text-4xl font-semibold text-heading">
          {service.title}
        </h1>
        <p className="font-devanagari mt-4 text-lg leading-relaxed text-ink-soft">
          {service.intro}
        </p>

        <div className="mt-8">
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "primary", size: "lg" }), "font-devanagari")}
          >
            यह संस्कार बुक करें
          </Link>
        </div>

        <section className="mt-12">
          <h2 className="font-devanagari text-2xl font-semibold text-heading">
            संस्कार विधि
          </h2>
          <ul className="mt-4 space-y-3">
            {service.details.map((d) => (
              <li key={d} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-saffron-dark" aria-hidden="true" />
                <span className="font-devanagari leading-relaxed text-ink-soft">{d}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-devanagari text-2xl font-semibold text-heading">
            तैयारी
          </h2>
          <ul className="mt-4 space-y-3">
            {service.preparation.map((p) => (
              <li key={p} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-saffron-dark" aria-hidden="true" />
                <span className="font-devanagari leading-relaxed text-ink-soft">{p}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-devanagari text-2xl font-semibold text-heading">
            परंपरागत महत्व
          </h2>
          <ul className="mt-4 space-y-3">
            {service.benefits.map((b) => (
              <li key={b} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-saffron-dark" aria-hidden="true" />
                <span className="font-devanagari leading-relaxed text-ink-soft">{b}</span>
              </li>
            ))}
          </ul>
        </section>
      </article>

      <FAQSection faqs={service.faqs} title="इस संस्कार से जुड़े प्रश्न" />
      <RelatedServices items={related} basePath="/sanskar" />
      <FinalCTA />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
