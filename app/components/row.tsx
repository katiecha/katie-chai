import { Tooltip } from "@/app/components/tooltip"
import { IconLink } from "@/app/components/icon-link"
import { Tag } from "@/app/components/tag"
import type { Project } from "@/app/work/data"

export function Row({ project }: { project: Project }) {
  return (
    <div className="py-4 border-b border-border last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-semibold text-sm">{project.name}</span>
            {project.status === "in-progress" && (
              <Tooltip label="in progress">
                <span className="text-sm leading-none select-none">⚠️</span>
              </Tooltip>
            )}
          </div>
          {project.description && (
            <p className="text-sm text-text-muted leading-relaxed mb-2">{project.description}</p>
          )}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
            </div>
          )}
        </div>

        {project.links.length > 0 && (
          <div className="flex items-center gap-2.5 shrink-0 mt-0.5">
            {project.links.map((link) => (
              <IconLink key={link.href} href={link.href} label={link.label} type={link.type} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
