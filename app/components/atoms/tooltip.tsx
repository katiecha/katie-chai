"use client"

import { useState } from "react"
import type { ReactNode } from "react"

type TooltipProps = {
  label: ReactNode
  children: ReactNode
}

export function Tooltip({ label, children }: TooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <span
      className="relative group/tooltip cursor-default"
      onClick={() => setOpen((o) => !o)}
    >
      {children}
      <span className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 z-tooltip transition-opacity pointer-events-none md:group-hover/tooltip:opacity-100 ${open ? "opacity-100" : "opacity-0"}`}>
        <span className="block text-xs text-text-primary bg-white border border-border shadow-sm px-2 py-0.5 rounded-md whitespace-nowrap">
          {label}
        </span>
        <span className="block w-2 h-2 bg-white border-b border-r border-border rotate-45 mx-auto -mt-1" />
      </span>
    </span>
  )
}
