import { Tooltip } from "@/app/components/tooltip"
import { IconLink } from "@/app/components/icon-link"
import type { Project } from "@/app/work/data"

const TAG_COLORS: Record<string, string> = {
  TypeScript:    "#3178c6",
  JavaScript:    "#f1e05a",
  "Three.js":    "#049ef4",
  Python:        "#3572A5",
  Java:          "#b07219",
  C:             "#555555",
  "C#":          "#178600",
  R:             "#198CE7",
  SAS:           "#b34936",
  Swift:         "#F05138",
  Unity:         "#222c37",
  HTML:          "#e34c26",
  CSS:           "#563d7c",
  MIPS:          "#6c6c6c",
  Logisim:       "#8a4e4e",
}

function LanguageDot({ tag }: { tag: string }) {
  const color = TAG_COLORS[tag] ?? "#9ca3af"
  return (
    <span className="flex items-center gap-1.5 text-xs text-text-muted shrink-0">
      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: color }} />
      {tag}
    </span>
  )
}

export function Row({ project }: { project: Project }) {
  const [primaryTag] = project.tags ?? []

  return (
    <div className="py-5 border-b border-border last:border-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Title + status */}
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span className="font-semibold text-sm">{project.name}</span>
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

          {/* Primary language dot only — matches GitHub list view */}
          {primaryTag && (
            <div className="flex items-center">
              <LanguageDot tag={primaryTag} />
            </div>
          )}
        </div>

        {/* All links as icons */}
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
