import type { ProjectLink } from "@/app/work/data"

export function previewHref(links: ProjectLink[]): string | undefined {
  return (
    links.find(l => l.type !== "github" && !l.href.includes("github.com"))?.href ??
    links[0]?.href
  )
}

export function orderedLinks(links: ProjectLink[]): ProjectLink[] {
  const isGithub = (l: ProjectLink) => l.type === "github" || l.href.includes("github.com")
  return [...links.filter(l => !isGithub(l)), ...links.filter(isGithub)]
}
