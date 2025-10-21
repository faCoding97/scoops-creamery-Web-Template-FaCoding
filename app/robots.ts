import type { MetadataRoute } from "next";
import data from "@/data/site.json";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${data.site.baseUrl}/sitemap.xml`,
  };
}
