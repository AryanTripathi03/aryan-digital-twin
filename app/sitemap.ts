import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aryan-digital-twin.openai.site",
      lastModified: new Date("2026-07-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
