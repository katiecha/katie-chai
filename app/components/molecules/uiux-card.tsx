import Image from "next/image"
import Link from "next/link"
import { InProgressBadge, VisibilityBadge } from "@/app/components/atoms/status-badge"
import { previewHref } from "@/app/lib/links"
import type { Project } from "@/app/work/data"

export function UIUXCard({ project }: { project: Project }) {
  const shell = (
    <div className="border border-border rounded-fillet hover:border-border-hover transition-all duration-150 cursor-pointer">
      <div className="relative h-40 bg-surface overflow-hidden rounded-t-fillet">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes="(min-width: 768px) 440px, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-disabled text-xs">preview</div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-sm">{project.name}</span>
          <VisibilityBadge status={project.status} />
          {project.status === "in-progress" && <InProgressBadge />}
        </div>
        <p className="text-sm text-text-muted mt-1 line-clamp-2 min-h-[2.5rem]">{project.description}</p>
      </div>
    </div>
  )

  const href = previewHref(project.links)
  if (!href) return shell
  if (href.startsWith("/")) return <Link href={href}>{shell}</Link>
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label={project.name}>{shell}</a>
}
