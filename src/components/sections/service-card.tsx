import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({ title, description, href }: ServiceCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <Card className="h-full transition-shadow duration-300 group-hover:shadow-[0_8px_28px_rgba(94,26,31,0.12)]">
        <CardContent className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-devanagari text-lg font-semibold text-heading">
              {title}
            </h3>
            <ArrowUpRight
              className="h-5 w-5 shrink-0 text-saffron-dark opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              aria-hidden="true"
            />
          </div>
          <p className="font-devanagari mt-2.5 flex-1 text-sm leading-relaxed text-ink-soft">
            {description}
          </p>
          <span className="font-devanagari mt-4 inline-block text-sm font-medium text-saffron-dark">
            विस्तार से जानें
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

export function ServiceGrid({ services }: { services: ServiceCardProps[] }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.href} {...service} />
      ))}
    </div>
  );
}
