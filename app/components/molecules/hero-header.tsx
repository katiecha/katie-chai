import Image from "next/image"
import { ICON_SIZE } from "@/app/components/atoms/icon-link"
import { XIcon } from "@/app/components/atoms/x-icon"
import { GitHubIcon } from "@/app/components/atoms/github-icon"
import { LinkedInIcon } from "@/app/components/atoms/linkedin-icon"
import { SOCIAL_LINKS } from "@/app/work/data"

export function HeroHeader() {
  return (
    <section className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-3">👋 Hi, I&apos;m Katie</h1>
        <p className="text-sm text-text-muted leading-relaxed max-w-lg">
          I&apos;m interested in building systems that combine<br />intelligence, infrastructure, and thoughtful design.
        </p>
        <div className="flex items-center gap-4 mt-7">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-muted hover:text-black transition-colors">
            <GitHubIcon size={ICON_SIZE.lg} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-black transition-colors">
            <LinkedInIcon size={ICON_SIZE.lg} />
          </a>
          <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-text-muted hover:text-black transition-colors">
            <XIcon size={ICON_SIZE.lg} />
          </a>
        </div>
      </div>

      <div className="shrink-0">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-surface-hover overflow-hidden">
          <Image
            src="/images/headshot.jpg"
            alt="Katie Chai"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}
