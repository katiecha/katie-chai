import { GitHubIcon, XIcon, LinkIcon } from "@/app/components/icons"
import { Tag } from "@/app/components/tag"
import type { Project, LinkType } from "@/app/work/data"

function RowLinkIcon({ type }: { type: LinkType }) {
  if (type === "github") return <GitHubIcon size={14} />
  if (type === "x") return <XIcon size={14} />
  return <LinkIcon size={14} />
}

export function Row({ project }: { project: Project }) {
  return (
    <div className="py-4 border-b border-gray-100 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="font-semibold text-sm">{project.name}</span>
            {project.status === "in-progress" && (
              <span className="relative group/tip cursor-default">
                <span className="text-sm leading-none select-none">⚠️</span>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 opacity-0 group-hover/tip:opacity-100 text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap pointer-events-none transition-opacity">
                  in progress
                </span>
              </span>
            )}
          </div>
          {project.description && (
            <p className="text-sm text-gray-500 leading-relaxed mb-2">{project.description}</p>
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
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-black transition-colors"
              >
                <RowLinkIcon type={link.type} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
