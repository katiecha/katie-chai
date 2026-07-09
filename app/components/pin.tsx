import { BookMarked } from "lucide-react"
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


export function Pin({ project }: { project: Project }) {
  const [primaryTag] = project.tags ?? []

  return (
    <div className="border border-border rounded-lg p-4 flex flex-col gap-3 hover:border-border-hover transition-all duration-150 h-full">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <BookMarked size={14} className="text-text-subtle shrink-0" />
          <h3 className="text-sm font-semibold text-blue-600 truncate">{project.name}</h3>
        </div>

        {project.links.length > 0 && (
          <div className="flex items-center gap-2 shrink-0">
            {project.links.map((link) => (
              <IconLink key={link.href} href={link.href} label={link.label} type={link.type} size={13} />
            ))}
          </div>
        )}
      </div>

      {/* Description */}
      {project.description && (
        <p className="text-xs text-text-muted leading-relaxed flex-1">{project.description}</p>
      )}

      {/* Footer: language dot */}
      {primaryTag && (
        <div className="flex items-center gap-1.5 text-xs text-text-muted mt-auto">
          <span
            className="w-3 h-3 rounded-full shrink-0"
            style={{ backgroundColor: TAG_COLORS[primaryTag] ?? "#9ca3af" }}
          />
          {primaryTag}
        </div>
      )}
    </div>
  )
}
