"use client"

import { track } from "@vercel/analytics"
import { Link, Mail, FileText } from "lucide-react"
import { XIcon } from "@/app/components/atoms/x-icon"
import { FigmaIcon } from "@/app/components/atoms/figma-icon"
import { GitHubIcon } from "@/app/components/atoms/github-icon"
import { LinkedInIcon } from "@/app/components/atoms/linkedin-icon"
import { YouTubeIcon } from "@/app/components/atoms/youtube-icon"
import type { LinkType } from "@/app/work/data"

export const ICON_SIZE = {
  sm: 14,  // compact contexts: cards, tags
  md: 18,  // default: rows, nav, standalone links
  lg: 20,  // hero, large UI
} as const

function Icon({ type, href, size = ICON_SIZE.sm }: { type?: LinkType; href: string; size?: number }) {
  const resolved = type ?? inferType(href)
  switch (resolved) {
    case "github":   return <GitHubIcon size={size} />
    case "x":        return <XIcon size={size * 0.85} />
    case "youtube":  return <YouTubeIcon size={size} />
    case "figma":    return <FigmaIcon size={size} />
    case "linkedin": return <LinkedInIcon size={size} />
    case "mail":     return <Mail size={size} strokeWidth={2.5} />
    case "resume":   return <FileText size={size} strokeWidth={2.5} />
    default:         return <Link size={size} strokeWidth={2.5} />
  }
}

function inferType(href: string): LinkType {
  if (href.startsWith("mailto:"))                                return "mail"
  if (href.includes("github.com"))                               return "github"
  if (href.includes("youtube.com") || href.includes("youtu.be")) return "youtube"
  if (href.includes("x.com") || href.includes("twitter.com"))   return "x"
  if (href.includes("figma.com"))                                return "figma"
  if (href.includes("linkedin.com"))                             return "linkedin"
  return "site"
}

type IconLinkProps = {
  href: string
  label: string
  type?: LinkType
  size?: number
  className?: string
  eventName?: string
  eventData?: Record<string, string>
}

export function IconLink({ href, label, type, size = ICON_SIZE.sm, className, eventName, eventData }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className ?? "p-1 -m-1 text-text-subtle hover:text-black transition-colors rounded-sm"}
      onClick={eventName ? () => track(eventName, eventData) : undefined}
    >
      <Icon type={type} href={href} size={size} />
    </a>
  )
}
