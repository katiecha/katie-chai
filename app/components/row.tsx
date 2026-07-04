import { Tooltip } from "@/app/components/tooltip"
import { IconLink } from "@/app/components/icon-link"
import { Tag } from "@/app/components/tag"
import type { Project } from "@/app/work/data"

const TAG_COLORS: Record<string, string> = {
  TypeScript:       "#3178c6",
  JavaScript:       "#f1e05a",
  "Three.js":       "#049ef4",
  Python:           "#3572A5",
  Java:             "#b07219",
  C:                "#555555",
  "C#":             "#178600",
  R:                "#198CE7",
  SAS:              "#b34936",
  Swift:            "#F05138",
  Unity:            "#222c37",
  HTML:             "#e34c26",
  CSS:              "#563d7c",
  MIPS:             "#6c6c6c",
  Logisim:          "#8a4e4e",
  "Claude Code":    "#d97706",
  AI:               "#8b5cf6",
}

function LanguageDot({ tag }: { tag: string }) {
  const color = TAG_COLORS[tag] ?? "#9ca3af"
  return (
    <span className="flex items-center gap-1.5 text-xs text-text-muted shrink-0">
      <span
        className="w-2.5 h-2.5 rounded-full shrink-0"
        style={{ backgroundColor: color }}
      />
      {tag}
    </span>
  )
}

export function Row({ project }: { project: Project }) {
  const [primaryTag, ...otherTags] = project.tags ?? []

  const primaryLink = project.links[0]?.href

  const nameEl = primaryLink ? (
    <a
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-sm hover:underline underline-offset-2"
    >
      {project.name}
    </a>
  ) : (
    <span className="font-semibold text-sm">{project.name}</span>
  )

  return (
    <div className="py-5 border-b border-border last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Title row */}
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            {nameEl}
            {project.status === "in-progress" && (
              <Tooltip label="in progress">
                <span className="text-sm leading-none select-none">⚠️</span>
              </Tooltip>
            )}
          </div>

          {/* Description */}
          {project.description && (
            <p className="text-sm text-text-muted leading-relaxed mb-3">{project.description}</p>
          )}

          {/* Language dot + other language tags + frameworks */}
          {((project.tags && project.tags.length > 0) || project.frameworks?.length) && (
            <div className="flex items-center gap-3 flex-wrap">
              {primaryTag && <LanguageDot tag={primaryTag} />}
              {otherTags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
              {project.frameworks && project.frameworks.length > 0 && (
                <span className="text-xs text-text-subtle">
                  {project.frameworks.join(" · ")}
                </span>
              )}
            </div>
          )}
        </div>

        {/* Links — skip the first one since it's used for the name link */}
        {project.links.length > 1 && (
          <div className="flex items-center gap-2.5 shrink-0 mt-0.5">
            {project.links.slice(1).map((link) => (
              <IconLink key={link.href} href={link.href} label={link.label} type={link.type} />
            ))}
          </div>
        )}
        {project.links.length === 0 && null}
      </div>
    </div>
  )
}
