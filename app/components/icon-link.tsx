import {
  GitHubIcon,
  XIcon,
  YouTubeIcon,
  FigmaIcon,
  LinkedInIcon,
  LinkIcon,
} from "@/app/components/icons"
import type { LinkType } from "@/app/work/data"

const SIZE = 14

function Icon({ type, href }: { type?: LinkType; href: string }) {
  const resolved = type ?? inferType(href)
  switch (resolved) {
    case "github":   return <GitHubIcon size={SIZE} />
    case "x":        return <XIcon size={SIZE} />
    case "youtube":  return <YouTubeIcon size={SIZE} />
    case "figma":    return <FigmaIcon size={SIZE} />
    case "linkedin": return <LinkedInIcon size={SIZE} />
    default:         return <LinkIcon size={SIZE} />
  }
}

function inferType(href: string): LinkType {
  if (href.includes("github.com"))                          return "github"
  if (href.includes("youtube.com") || href.includes("youtu.be")) return "youtube"
  if (href.includes("x.com") || href.includes("twitter.com"))    return "x"
  if (href.includes("figma.com"))                           return "figma"
  if (href.includes("linkedin.com"))                        return "linkedin"
  return "site"
}

type IconLinkProps = {
  href: string
  label: string
  type?: LinkType
  className?: string
}

export function IconLink({ href, label, type, className }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className ?? "text-text-subtle hover:text-black transition-colors"}
    >
      <Icon type={type} href={href} />
    </a>
  )
}
