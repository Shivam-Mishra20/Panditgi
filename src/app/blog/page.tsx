import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, Clock, ArrowUpRight } from "lucide-react";
import { Breadcrumbs } from "@/components/layout/breadcrumbs";
import { Card, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "ब्लॉग — पूजा, संस्कार एवं परंपरा से जुड़ी जानकारी",
  description:
    "पूजा विधि, संस्कार, विवाह मुहूर्त एवं परंपरा से जुड़े लेख — PanditGi ब्लॉग पर पढ़ें।",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "ब्लॉग" }]} />
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-devanagari text-4xl font-semibold text-heading">
          ब्लॉग
        </h1>
        <p className="font-devanagari mt-3 max-w-2xl text-ink-soft">
          पूजा विधि, संस्कार, विवाह मुहूर्त एवं परंपरा से जुड़ी उपयोगी
          जानकारी।
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <Card className="h-full transition-shadow duration-300 group-hover:shadow-[0_8px_28px_rgba(94,26,31,0.12)]">
                <CardContent>
                  <div className="flex items-center gap-4 text-xs text-ink-soft">
                    <span className="flex items-center gap-1">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-devanagari mt-3 text-lg font-semibold text-heading">
                    {post.title}
                  </h2>
                  <p className="font-devanagari mt-2 text-sm leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                  <span className="font-devanagari mt-4 inline-flex items-center gap-1 text-sm font-medium text-saffron-dark">
                    पूरा पढ़ें <ArrowUpRight className="h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
