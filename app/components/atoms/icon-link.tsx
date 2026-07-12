import { Link } from "lucide-react"
import { XIcon, FigmaIcon, GitHubIcon, LinkedInIcon, YouTubeIcon } from "@/app/components/atoms/icons"
import type { LinkType } from "@/app/work/data"

const SIZE = 18

function Icon({ type, href, size = SIZE }: { type?: LinkType; href: string; size?: number }) {
  const resolved = type ?? inferType(href)
  switch (resolved) {
    case "github":   return <GitHubIcon size={size} />
    case "x":        return <XIcon size={size} />
    case "youtube":  return <YouTubeIcon size={size} />
    case "figma":    return <FigmaIcon size={size} />
    case "linkedin": return <LinkedInIcon size={size} />
    default:         return <Link size={size} />
  }
}

function inferType(href: string): LinkType {
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
}

export function IconLink({ href, label, type, size, className }: IconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={className ?? "text-text-subtle hover:text-black transition-colors"}
    >
      <Icon type={type} href={href} size={size} />
    </a>
  )
}
