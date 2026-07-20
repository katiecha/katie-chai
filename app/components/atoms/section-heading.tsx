import type { ReactNode } from "react"

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-xs font-semibold tracking-widest uppercase text-text-subtle mb-4">{children}</h2>
  )
}
