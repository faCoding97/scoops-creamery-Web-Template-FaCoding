import type { MetadataRoute } from "next";
import data from "@/data/site.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = data.site.baseUrl;
  const core = ["/", "/menu", "/about", "/contact"].map((p) => ({
    url: `${base}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "/" ? 1 : 0.7,
  }));
  const flavors = data.flavors.map((f) => ({
    url: `${base}/menu/${f.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));
  return [...core, ...flavors];
}
