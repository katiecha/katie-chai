import { Tooltip } from "@/app/components/atoms/tooltip"
import { IconLink } from "@/app/components/atoms/icon-link"
import { LanguageDot } from "@/app/components/atoms/language-dot"
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
                className="font-semibold text-sm text-link hover:underline underline-offset-2"
              >
                {project.name}
              </a>
            ) : (
              <span className="font-semibold text-sm text-link">{project.name}</span>
            )}
            {project.status === "in-progress" && (
              <Tooltip label="in progress">
                <span className="text-sm leading-none select-none">⚠️</span>
              </Tooltip>
            )}
          </div>

          {project.description && (
            <p className="text-sm text-text-muted leading-relaxed mb-3">{project.description}</p>
          )}

          {primaryTag && <LanguageDot tag={primaryTag} size="sm" />}
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
