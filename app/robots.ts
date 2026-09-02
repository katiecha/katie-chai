import type { MetadataRoute } from "next"

const BASE_URL = "https://katie-chai.com"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/work/unlock", "/api/"],
    },
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
