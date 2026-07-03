import type { ReactNode } from "react"

type SectionSize = "lg" | "md" | "sm"

type SectionProps = {
  title: string
  emoji?: string
  size?: SectionSize
  children: ReactNode
}

const HEADING_CONFIG: Record<SectionSize, { tag: "h2" | "h3" | "h4"; className: string; wrapperClass: string }> = {
  lg: {
    tag: "h2",
    className: "text-base font-semibold text-black mb-4 flex items-center gap-1.5",
    wrapperClass: "mt-12",
  },
  md: {
    tag: "h3",
    className: "text-sm font-semibold text-black mb-3 flex items-center gap-1.5",
    wrapperClass: "mt-8",
  },
  sm: {
    tag: "h4",
    className: "text-sm font-medium text-gray-500 mb-3 flex items-center gap-1.5",
    wrapperClass: "mt-5",
  },
}

export function Section({ title, emoji, size = "md", children }: SectionProps) {
  const { tag: Tag, className, wrapperClass } = HEADING_CONFIG[size]

  return (
    <section className={wrapperClass}>
      <Tag className={className}>
        {emoji && <span>{emoji}</span>}
        {title}
      </Tag>
      {children}
    </section>
  )
}
