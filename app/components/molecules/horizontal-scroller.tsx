"use client"

import { useState, useEffect, useRef, type ReactNode } from "react"
import { ChevronRight } from "lucide-react"

type HorizontalScrollerProps = {
  children: ReactNode
  className?: string
}

export function HorizontalScroller({ children, className }: HorizontalScrollerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [canScrollRight, setCanScrollRight] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const check = () => setCanScrollRight(el.scrollWidth - el.scrollLeft - el.clientWidth > 4)
    check()
    el.addEventListener("scroll", check)
    const observer = new ResizeObserver(check)
    observer.observe(el)
    return () => {
      el.removeEventListener("scroll", check)
      observer.disconnect()
    }
  }, [])

  return (
    <div className="relative">
      <div ref={ref} className={`overflow-x-auto scrollbar-hide ${className ?? ""}`}>
        {children}
      </div>
      {canScrollRight && (
        <button
          aria-label="Scroll right"
          onClick={() => ref.current?.scrollBy({ left: 200, behavior: "smooth" })}
          className="absolute right-3 top-0 bottom-0 flex items-center cursor-pointer"
        >
          <span className="w-10 h-10 rounded-full bg-text-primary/70 flex items-center justify-center shadow-sm">
            <ChevronRight size={18} className="text-white" />
          </span>
        </button>
      )}
    </div>
  )
}
