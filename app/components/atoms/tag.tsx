import type { ReactNode } from "react"

type TagProps = {
  children: ReactNode
  active?: boolean
  onClick?: () => void
}

export function Tag({ children, active = false, onClick }: TagProps) {
  const base = "text-xs px-2 py-0.5 rounded-full border transition-colors"
  const style = active
    ? "bg-black text-white border-black"
    : "text-text-subtle bg-surface border-border"

  if (onClick) {
    return (
      <button
        onClick={onClick}
        className={`${base} ${style} cursor-pointer hover:border-border-hover`}
      >
        {children}
      </button>
    )
  }

  return <span className={`${base} ${style}`}>{children}</span>
}
