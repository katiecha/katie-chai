export const TAG_COLORS: Record<string, string> = {
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

type LanguageDotProps = {
  tag: string
  size?: "sm" | "md"
}

export function LanguageDot({ tag, size = "md" }: LanguageDotProps) {
  const color = TAG_COLORS[tag] ?? "#9ca3af"
  const dotClass = size === "sm" ? "w-2.5 h-2.5" : "w-3 h-3"
  return (
    <span className="flex items-center gap-1.5 text-xs text-text-muted shrink-0">
      <span className={`${dotClass} rounded-full shrink-0`} style={{ backgroundColor: color }} />
      {tag}
    </span>
  )
}
