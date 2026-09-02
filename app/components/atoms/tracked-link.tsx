"use client"

import type { AnchorHTMLAttributes, MouseEvent } from "react"
import { track } from "@vercel/analytics"

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName?: string
  eventData?: Record<string, string>
}

export function TrackedLink({ eventName, eventData, onClick, ...anchorProps }: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (eventName) track(eventName, eventData)
    onClick?.(event)
  }

  return <a {...anchorProps} onClick={handleClick} />
}
