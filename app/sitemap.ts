import type { MetadataRoute } from "next"

const BASE_URL = "https://katie-chai.com"

const PATHS = [
  "/",
  "/work",
  "/play",
  "/readme",
  "/work/catch",
  "/work/jenis",
  "/work/special-olympics",
  "/work/app-team-carolina",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }))
}
