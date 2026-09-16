import { ServiceGrid } from "@/components/sections/service-card";
import type { ServiceItem } from "@/lib/types";

export function RelatedServices({
  items,
  basePath,
}: {
  items: ServiceItem[];
  basePath: string;
}) {
  if (items.length === 0) return null;

  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="font-devanagari text-2xl font-semibold text-heading">
        संबंधित सेवाएं
      </h2>
      <div className="mt-6">
        <ServiceGrid
          services={items.map((item) => ({
            title: item.title,
            description: item.shortDescription,
            href: `${basePath}/${item.slug}`,
          }))}
        />
      </div>
    </section>
  );
}
