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
    <div className="py-3 border-b border-gray-100 last:border-0">
      {project.image && (
        <div
          className="relative w-full rounded-lg overflow-hidden bg-gray-100 mb-3"
          style={{ aspectRatio: "16/9" }}
        >
          <Image src={project.image} alt={project.name} fill className="object-cover" />
        </div>
      )}
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-sm">{project.name}</span>
            {project.status === "in-progress" && <Tag>in progress</Tag>}
            {project.tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}
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
                <CardLinkIcon type={link.type} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
