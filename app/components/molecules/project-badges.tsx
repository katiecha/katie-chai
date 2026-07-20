import { InProgressBadge, VisibilityBadge } from "@/app/components/molecules/status-badge"
import type { Project } from "@/app/work/data"

export function ProjectBadges({ project }: { project: Project }) {
  return (
    <>
      <VisibilityBadge status={project.status} />
      {project.inProgress && <InProgressBadge />}
    </>
  )
}
