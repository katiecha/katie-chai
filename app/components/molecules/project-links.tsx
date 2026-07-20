import { IconLink } from "@/app/components/molecules/icon-link"
import { ANALYTICS_EVENTS } from "@/app/lib/analytics"
import type { Project } from "@/app/work/data"

type ProjectLinksProps = {
  project: Project
  size?: number
  className?: string
}

export function ProjectLinks({ project, size, className }: ProjectLinksProps) {
  if (project.links.length === 0) return null
  return (
    <div className={className ?? "flex items-center gap-2 shrink-0"}>
      {project.links.map((link) => (
        <IconLink
          key={link.href}
          href={link.href}
          label={link.label}
          type={link.type}
          size={size}
          eventName={ANALYTICS_EVENTS.projectLinkClick}
          eventData={{ project: project.name, type: link.type ?? "site" }}
        />
      ))}
    </div>
  )
}
