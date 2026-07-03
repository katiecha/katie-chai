import type { ReactNode } from "react"

type SectionProps = {
  title: string
  emoji?: string
  children: ReactNode
}

export function Section({ title, emoji, children }: SectionProps) {
  return (
    <section className="mt-10">
      <h2 className="text-sm font-semibold text-black mb-4 flex items-center gap-1.5">
        {emoji && <span>{emoji}</span>}
        {title}
      </h2>
      {children}
    </section>
  )
}
