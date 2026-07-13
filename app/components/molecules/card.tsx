import Image from "next/image"
import { BookMarked } from "lucide-react"
import { IconLink, ICON_SIZE } from "@/app/components/atoms/icon-link"
import { LanguageDot } from "@/app/components/atoms/language-dot"
import { previewHref } from "@/app/lib/links"
import type { Project } from "@/app/work/data"

type CardProps = {
  project: Project
  variant: "text" | "photo"
  imageFit?: "cover" | "contain"
  imageAspectRatio?: string
  imageSizes?: string
}

const shell = "relative border border-border rounded-fillet hover:border-border-hover transition-all duration-150 cursor-pointer"

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
          />
        )}

        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0">
            <BookMarked size={ICON_SIZE.sm} className="text-text-subtle shrink-0" />
            <h3 className="text-sm font-semibold text-link truncate">{project.name}</h3>
          </div>
          {project.links.length > 0 && (
            <div className="relative z-10 flex items-center gap-2 shrink-0">
              {project.links.map((link) => (
                <IconLink key={link.href} href={link.href} label={link.label} type={link.type} size={ICON_SIZE.sm} />
              ))}
            </div>
          )}
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
          {project.links.length > 0 && (
            <div className="relative z-10 flex items-center gap-2 shrink-0">
              {project.links.map((link) => (
                <IconLink key={link.href} href={link.href} label={link.label} type={link.type} size={ICON_SIZE.sm} />
              ))}
            </div>
          )}
        </div>

        {project.description && (
          <p className="text-xs text-text-muted leading-relaxed">{project.description}</p>
        )}
      </div>
    </div>
  )
}
