"use client"

import { useState, useRef, useEffect } from "react"

type DropdownFilterProps = {
  label: string
  options: string[]
  value: string | null
  onChange: (value: string | null) => void
}

function FilledCaret() {
  return (
    <svg width="10" height="10" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M4.427 7.427l3.396 3.396a.25.25 0 0 0 .354 0l3.396-3.396A.25.25 0 0 0 11.396 7H4.604a.25.25 0 0 0-.177.427Z" />
    </svg>
  )
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
        className={`flex items-center gap-1.5 px-4 min-h-10 text-sm border rounded-md transition-colors whitespace-nowrap cursor-pointer ${
          isActive
            ? "border-black bg-black text-white"
            : "border-border hover:border-border-hover bg-surface-muted text-black"
        }`}
      >
        {isActive ? value : label}
        {isActive ? (
          <span
            role="button"
            aria-label="Clear filter"
            onClick={(e) => { e.stopPropagation(); onChange(null) }}
            className="opacity-70 hover:opacity-100 leading-none"
          >
            ×
          </span>
        ) : (
          <FilledCaret />
        )}
      </button>

      {open && (
        <div className="absolute top-full mt-1 left-0 z-tooltip bg-white border border-border rounded-md shadow-md py-1 min-w-40 max-h-64 overflow-y-auto">
          <button
            onClick={() => { onChange(null); setOpen(false) }}
            className={`w-full text-left px-3 py-1.5 text-sm hover:bg-surface transition-colors cursor-pointer ${!value ? "font-medium" : "text-text-muted"}`}
          >
            All
          </button>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { onChange(value === option ? null : option); setOpen(false) }}
              className={`w-full text-left px-3 py-1.5 text-sm hover:bg-surface transition-colors cursor-pointer ${value === option ? "font-medium" : "text-text-muted"}`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
