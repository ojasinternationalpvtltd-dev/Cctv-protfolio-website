import type { MetadataRoute } from "next";
import { blogPosts, services } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://ojasintl.com";
  const routes = ["", "/about", "/services", "/blog", "/contact"].map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date()
  }));

  return [
    ...routes,
    ...services.map((service) => ({ url: `${base}/services/${service.slug}`, lastModified: new Date() })),
    ...blogPosts.map((post) => ({ url: `${base}/blog/${post.slug}`, lastModified: new Date(post.date) }))
  ];
}
