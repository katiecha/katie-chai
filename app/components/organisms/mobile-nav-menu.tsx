"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { ICON_SIZE } from "@/app/components/molecules/icon-link"

export function MobileNavMenu() {
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

  return (
    <div ref={ref} className="relative md:hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex items-center justify-center p-2.5 -m-2.5 text-text-muted hover:text-black transition-colors rounded-sm"
      >
        {open ? <X size={ICON_SIZE.md} /> : <Menu size={ICON_SIZE.md} />}
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 z-tooltip bg-white border border-border rounded-md shadow-md py-1 min-w-40">
          <Link href="/work" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-surface transition-colors">
            Work
          </Link>
          <Link href="/play" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-surface transition-colors">
            Play
          </Link>
          <Link href="/readme" onClick={() => setOpen(false)} className="block px-4 py-3 text-sm hover:bg-surface transition-colors">
            README.md
          </Link>
        </div>
      )}
    </div>
  )
}
