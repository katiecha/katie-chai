"use client"

import { useState, type ReactNode } from "react"
import { Eye, Pencil } from "lucide-react"
import { ICON_SIZE } from "@/app/components/molecules/icon-link"
import { CARD_SHELL } from "@/app/lib/styles"

type ReadmeToggleProps = {
  rendered: ReactNode
  raw: string
}

export function ReadmeToggle({ rendered, raw }: ReadmeToggleProps) {
  const [isRaw, setIsRaw] = useState(false)

  return (
    <div className={`${CARD_SHELL} overflow-hidden`}>

      {/* File header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border">
        <span className="text-sm text-text-muted font-mono">
          katiecha / <span className="font-semibold text-black">README.md</span>
        </span>
        <button
          type="button"
          onClick={() => setIsRaw((prev) => !prev)}
          aria-label={isRaw ? "View rendered README.md" : "View raw README.md"}
          className="p-1 -m-1 text-text-subtle hover:text-black transition-colors rounded-md"
        >
          {isRaw ? <Eye size={ICON_SIZE.md} /> : <Pencil size={ICON_SIZE.md} />}
        </button>
      </div>

      {/* Body */}
      {isRaw ? (
        <pre className="px-5 py-6 md:px-10 md:py-8 text-xs sm:text-sm text-text-primary font-mono leading-relaxed whitespace-pre-wrap break-words">
          {raw}
        </pre>
      ) : (
        rendered
      )}
    </div>
  )
}
