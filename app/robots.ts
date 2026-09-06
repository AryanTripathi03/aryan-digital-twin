import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap:
      "https://aryan-digital-twin.aryantripathi-9910.workers.dev/sitemap.xml",
  };
}
