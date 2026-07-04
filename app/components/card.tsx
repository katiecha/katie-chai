import Image from "next/image"
import { GitHubIcon, XIcon, LinkIcon } from "@/app/components/icons"
import { Tag } from "@/app/components/tag"
import type { Project, LinkType } from "@/app/work/data"

function CardLinkIcon({ type }: { type: LinkType }) {
  if (type === "github") return <GitHubIcon size={14} />
  if (type === "x") return <XIcon size={14} />
  return <LinkIcon size={14} />
}

export function Card({ project }: { project: Project }) {
  return (
    <div className="group border border-gray-200 rounded-xl overflow-hidden hover:border-gray-400 hover:shadow-sm transition-all duration-150">
      {project.image && (
        <div className="relative w-full bg-gray-100" style={{ aspectRatio: "16/9" }}>
          <Image src={project.image} alt={project.name} fill className="object-cover" />
        </div>
      )}

      <div className="p-4 flex flex-col gap-2 h-full">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm">{project.name}</span>
            {project.status === "in-progress" && (
              <span className="relative cursor-default">
                <span className="text-sm leading-none select-none peer">⚠️</span>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 opacity-0 group-hover:opacity-100 text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap pointer-events-none transition-opacity">
                  in progress
                </span>
              </span>
            )}
          </div>
          {project.links.length > 0 && (
            <div className="flex items-center gap-2.5 shrink-0">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-400 hover:text-black transition-colors"
                >
                  <CardLinkIcon type={link.type} />
                </a>
              ))}
            </div>
          )}
        </div>

        {project.description && (
          <p className="text-sm text-gray-500 leading-relaxed">{project.description}</p>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
            {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
        )}
      </div>
    </div>
  )
}
