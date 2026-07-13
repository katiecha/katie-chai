import type { ReactNode } from "react"

type TooltipProps = {
  label: ReactNode
  children: ReactNode
  wide?: boolean
}

export function Tooltip({ label, children, wide = false }: TooltipProps) {
  return (
    <span className="relative group/tooltip cursor-default">
      {children}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-tooltip opacity-0 group-hover/tooltip:opacity-100 transition-opacity pointer-events-none">
        <span className={`block text-xs text-text-primary bg-white border border-border shadow-sm px-2 py-0.5 rounded-md ${wide ? "w-48 whitespace-normal text-center leading-snug py-1" : "whitespace-nowrap"}`}>
          {label}
        </span>
        <span className="block w-2 h-2 bg-white border-b border-r border-border rotate-45 mx-auto -mt-1" />
      </span>
    </span>
  )
}
