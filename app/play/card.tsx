import Image from "next/image"
import { Tooltip } from "@/app/components/tooltip"
import { IconLink } from "@/app/components/icon-link"
import { Tag } from "@/app/components/tag"
import type { Project } from "@/app/work/data"

export function Card({ project }: { project: Project }) {
  return (
    // No overflow-hidden here — that would clip the tooltip.
    // overflow-hidden is applied only to the image container below.
    <div className="border border-border rounded-fillet hover:border-border-hover transition-all duration-150">
      {project.videoEmbed ? (
        <div className="relative w-full bg-black overflow-hidden rounded-t-fillet" style={{ aspectRatio: "16/9" }}>
          <iframe
            src={project.videoEmbed}
            title={project.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : project.image ? (
        <div
          className="relative w-full bg-surface overflow-hidden rounded-t-fillet"
          style={{ aspectRatio: "16/9" }}
        >
          <Image src={project.image} alt={project.name} fill className={`object-cover ${project.imagePosition ?? "object-center"}`} />
        </div>
      ) : null}

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-sm">{project.name}</span>
            {project.status === "in-progress" && (
              <Tooltip label="in progress">
                <span className="text-sm leading-none select-none">⚠️</span>
              </Tooltip>
            )}
          </div>
          {project.links.length > 0 && (
            <div className="flex items-center gap-2.5 shrink-0">
              {project.links.map((link) => (
                <IconLink key={link.href} href={link.href} label={link.label} type={link.type} />
              ))}
            </div>
          )}
        </div>

        {project.description && (
          <p className="text-sm text-text-muted leading-relaxed">{project.description}</p>
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
