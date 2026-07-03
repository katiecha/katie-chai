import type { ReactNode } from "react"

type SectionProps = {
  title: string
  emoji?: string
  size?: "md" | "sm"
  children: ReactNode
}

export function Section({ title, emoji, size = "md", children }: SectionProps) {
  const isSubSection = size === "sm"
  const Tag = isSubSection ? "h3" : "h2"
  const headingClass = isSubSection
    ? "text-sm font-medium text-gray-500 mb-3 flex items-center gap-1.5"
    : "text-sm font-semibold text-black mb-4 flex items-center gap-1.5"

  return (
    <section className={isSubSection ? "mt-6" : "mt-10"}>
      <Tag className={headingClass}>
        {emoji && <span>{emoji}</span>}
        {title}
      </Tag>
      {children}
    </section>
  )
}
