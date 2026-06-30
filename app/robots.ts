import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },

    sitemap: "https://mohamed-rabea-portfolio.vercel.app/sitemap.xml",

    host: "https://mohamed-rabea-portfolio.vercel.app",
  };
}
