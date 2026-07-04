"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"

type DropdownFilterProps = {
  label: string
  options: string[]
  value: string | null
  onChange: (value: string | null) => void
}

export function DropdownFilter({ label, options, value, onChange }: DropdownFilterProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isActive = value !== null

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className={`flex items-center gap-1.5 px-3 py-1.5 text-sm border rounded-fillet transition-colors whitespace-nowrap ${
          isActive
            ? "border-black bg-black text-white"
            : "border-border hover:border-border-hover bg-white text-black"
        }`}
      >
        {isActive ? `${label}: ${value}` : label}
        <ChevronDown
          size={13}
          className={`transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full mt-1 left-0 z-tooltip bg-white border border-border rounded-fillet py-1 min-w-40 max-h-64 overflow-y-auto">
          <button
            onClick={() => { onChange(null); setOpen(false) }}
            className={`w-full text-left px-3 py-1.5 text-sm hover:bg-surface transition-colors ${!value ? "font-medium" : "text-text-muted"}`}
          >
            All
          </button>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { onChange(value === option ? null : option); setOpen(false) }}
              className={`w-full text-left px-3 py-1.5 text-sm hover:bg-surface transition-colors ${value === option ? "font-medium" : "text-text-muted"}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
