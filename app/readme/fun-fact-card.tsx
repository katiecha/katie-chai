import type { ReactNode } from "react"
import { TrackedLink } from "@/app/components/atoms/tracked-link"
import { ANALYTICS_EVENTS } from "@/app/lib/analytics"
import { CARD_SHELL_HOVER } from "@/app/lib/styles"

type FunFactCardProps = {
  href: string
  emoji: string
  title: string
  ariaLabel: string
  children: ReactNode
}

export function FunFactCard({ href, emoji, title, ariaLabel, children }: FunFactCardProps) {
  return (
    <TrackedLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`block ${CARD_SHELL_HOVER} p-3 transition-colors`}
      eventName={ANALYTICS_EVENTS.funFactClick}
      eventData={{ card: title }}
    >
      <p className="text-xs font-semibold mb-2 flex items-center gap-1.5">
        <span>{emoji}</span> {title}
      </p>
      {children}
    </TrackedLink>
  )
}
