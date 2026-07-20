import { LanguageDot } from "@/app/components/atoms/language-dot"
import { ProjectBadges } from "@/app/components/molecules/project-badges"
import { ProjectLinks } from "@/app/components/molecules/project-links"
import { previewHref } from "@/app/lib/links"
import type { Project } from "@/app/work/data"

export function Row({ project }: { project: Project }) {
  const [primaryTag] = project.tags ?? []
  const href = previewHref(project.links)

  return (
    <div className="py-5 border-b border-border last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            {href ? (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.name}
                className="font-semibold text-sm text-link hover:underline underline-offset-2"
              >
                {project.name}
              </a>
            ) : (
              <span className="font-semibold text-sm text-link">{project.name}</span>
            )}
            <ProjectBadges project={project} />
          </div>

          {project.description && (
            <p className="text-sm text-text-muted leading-relaxed mb-3">{project.description}</p>
          )}

          {primaryTag && <LanguageDot tag={primaryTag} size="sm" />}
        </div>

        <ProjectLinks project={project} className="flex items-center gap-2.5 shrink-0 mt-0.5" />
      </div>
    </div>
  )
}
