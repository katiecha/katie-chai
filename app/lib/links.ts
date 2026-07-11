import type { ProjectLink } from "@/app/work/data"

export function previewHref(links: ProjectLink[]): string | undefined {
  return (
    links.find(l => l.type !== "github" && !l.href.includes("github.com"))?.href ??
    links[0]?.href
  )
}
