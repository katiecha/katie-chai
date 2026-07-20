import type { ReactNode } from "react"

type HorizontalScrollerProps = {
  children: ReactNode
  className?: string
}

export function HorizontalScroller({ children, className }: HorizontalScrollerProps) {
  return (
    <div className={`overflow-x-auto scrollbar-hide ${className ?? ""}`}>
      {children}
    </div>
  )
}
