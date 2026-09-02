"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { track } from "@vercel/analytics"
import { TrackedLink } from "@/app/components/atoms/tracked-link"
import { ANALYTICS_EVENTS } from "@/app/lib/analytics"

type ProjectPreviewLinkProps = {
  href: string
  projectName: string
  children: ReactNode
}

export function ProjectPreviewLink({ href, projectName, children }: ProjectPreviewLinkProps) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} onClick={() => track(ANALYTICS_EVENTS.projectPreviewClick, { project: projectName })}>
        {children}
      </Link>
    )
  }

  return (
    <TrackedLink
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={projectName}
      eventName={ANALYTICS_EVENTS.projectPreviewClick}
      eventData={{ project: projectName }}
    >
      {children}
    </TrackedLink>
  )
}
