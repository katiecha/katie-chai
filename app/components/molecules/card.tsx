"use client"

import Image from "next/image"
import { track } from "@vercel/analytics"
import { BookMarked } from "lucide-react"
import { ICON_SIZE } from "@/app/components/molecules/icon-link"
import { LanguageDot } from "@/app/components/atoms/language-dot"
import { ProjectBadges } from "@/app/components/molecules/project-badges"
import { ProjectLinks } from "@/app/components/molecules/project-links"
import { ANALYTICS_EVENTS } from "@/app/lib/analytics"
import { previewHref } from "@/app/lib/links"
import { CARD_SHELL_HOVER } from "@/app/lib/styles"
import type { Project } from "@/app/work/data"

type CardProps = {
  project: Project
  variant: "text" | "photo"
  imageFit?: "cover" | "contain"
  imageAspectRatio?: string
  imageSizes?: string
}

const shell = `relative ${CARD_SHELL_HOVER} transition-all duration-150 cursor-pointer`

export function Card({ project, variant, imageFit = "cover", imageAspectRatio = "16/9", imageSizes = "(min-width: 768px) 50vw, 100vw" }: CardProps) {
  const href = previewHref(project.links)

  if (variant === "text") {
    const [primaryTag] = project.tags ?? []
    return (
      <div className={`${shell} p-4 flex flex-col gap-3 h-full`}>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={project.name}
            className="absolute inset-0 rounded-fillet"
            onClick={() => track(ANALYTICS_EVENTS.projectPreviewClick, { project: project.name })}
          />
        )}

        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <BookMarked size={ICON_SIZE.sm} className="text-text-subtle shrink-0" />
            <h3 className="text-sm font-semibold text-link truncate">{project.name}</h3>
            <ProjectBadges project={project} />
          </div>
          <ProjectLinks project={project} className="relative z-10 flex items-center gap-2 shrink-0" />
        </div>

        {project.description && (
          <p className="text-xs text-text-muted leading-relaxed flex-1">{project.description}</p>
        )}

        {primaryTag && (
          <div className="mt-auto">
            <LanguageDot tag={primaryTag} />
          </div>
        )}
      </div>
    )
  }

  // photo variant
  return (
    <div className={`${shell} overflow-hidden`}>
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={project.name}
          className="absolute inset-0"
          onClick={() => track(ANALYTICS_EVENTS.projectPreviewClick, { project: project.name })}
        />
      )}

      {project.videoEmbed ? (
        <div className="relative w-full bg-black" style={{ aspectRatio: "16/9" }}>
          <iframe
            src={project.videoEmbed}
            title={project.name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
      ) : project.image ? (
        <div className="relative w-full bg-surface" style={{ aspectRatio: imageAspectRatio }}>
          <Image
            src={project.image}
            alt={project.name}
            fill
            sizes={imageSizes}
            className={`${imageFit === "contain" ? "object-contain" : "object-cover"} ${project.imagePosition ?? "object-center"}`}
          />
        </div>
      ) : null}

      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <span className="text-sm font-semibold">{project.name}</span>
          <ProjectLinks project={project} className="relative z-10 flex items-center gap-2 shrink-0" />
        </div>

        {project.description && (
          <p className="text-xs text-text-muted leading-relaxed">{project.description}</p>
        )}
      </div>
    </div>
  )
}
