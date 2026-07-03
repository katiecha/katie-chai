import { GitHubIcon, LinkIcon } from "@/app/components/icons"
import type { Project, LinkType } from "@/app/work/data"

function ProjectLinkIcon({ type }: { type: LinkType }) {
  if (type === "github") return <GitHubIcon size={14} />
  return <LinkIcon size={14} />
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="py-3 border-b border-gray-100 last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-sm">{project.name}</span>
            {project.status === "in-progress" && (
              <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-200">
                in progress
              </span>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{project.description}</p>
        </div>

        {project.links.length > 0 && (
          <div className="flex items-center gap-3 shrink-0 mt-0.5">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-400 hover:text-black transition-colors"
              >
                <ProjectLinkIcon type={link.type} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
