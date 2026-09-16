import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { pujaServices } from "@/lib/services";
import { sanskarServices } from "@/lib/sanskar";
import { blogPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/puja",
    "/sanskar",
    "/vivah",
    "/katha",
    "/jyotish",
    "/about",
    "/contact",
    "/blog",
    "/puja-samagri-list",
    "/privacy-policy",
    "/terms",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const pujaRoutes = pujaServices.map((s) => ({
    url: `${siteConfig.url}/puja/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const sanskarRoutes = sanskarServices.map((s) => ({
    url: `${siteConfig.url}/sanskar/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogRoutes = blogPosts.map((p) => ({
    url: `${siteConfig.url}/blog/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...pujaRoutes, ...sanskarRoutes, ...blogRoutes];
}
