import type { ReactNode } from "react"

type TooltipProps = {
  label: string
  children: ReactNode
}

export function Tooltip({ label, children }: TooltipProps) {
  return (
    <span className="relative group/tooltip cursor-default">
      {children}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-tooltip opacity-0 group-hover/tooltip:opacity-100 transition-opacity text-xs bg-black text-white px-2 py-1 rounded-fillet whitespace-nowrap pointer-events-none">
        {label}
      </span>
    </span>
  )
}
