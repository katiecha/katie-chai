import Link from "next/link"
import { IconLink } from "@/app/components/molecules/icon-link"
import { MobileNavMenu } from "@/app/components/organisms/mobile-nav-menu"
import { ANALYTICS_EVENTS } from "@/app/lib/analytics"
import { SOCIAL_LINKS } from "@/app/work/data"

export function Nav() {
  return (
    <header
      className="border-b border-border"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        backgroundColor: "#ffffff",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <MobileNavMenu />
          <Link href="/work" className="font-semibold tracking-widest text-sm uppercase">
            Katie Chai
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/work" className="text-sm hover:text-text-muted transition-colors py-2 -my-2">
            Work
          </Link>
          <Link href="/play" className="text-sm hover:text-text-muted transition-colors py-2 -my-2">
            Play
          </Link>
          <Link href="/readme" className="text-sm hover:text-text-muted transition-colors py-2 -my-2">
            README.md
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <IconLink href={SOCIAL_LINKS.github} label="GitHub" className="p-2.5 -m-2.5 text-text-muted hover:text-black transition-colors rounded-sm" eventName={ANALYTICS_EVENTS.socialClick} eventData={{ platform: "GitHub", location: "nav" }} />
          <IconLink href={SOCIAL_LINKS.linkedin} label="LinkedIn" className="p-2.5 -m-2.5 text-text-muted hover:text-black transition-colors rounded-sm" eventName={ANALYTICS_EVENTS.socialClick} eventData={{ platform: "LinkedIn", location: "nav" }} />
          <IconLink href={SOCIAL_LINKS.x} label="X" className="p-2.5 -m-2.5 text-text-muted hover:text-black transition-colors rounded-sm" eventName={ANALYTICS_EVENTS.socialClick} eventData={{ platform: "X", location: "nav" }} />
          <IconLink href={SOCIAL_LINKS.resume} label="Resume" type="resume" className="p-2.5 -m-2.5 text-text-muted hover:text-black transition-colors rounded-sm" eventName={ANALYTICS_EVENTS.resumeClick} eventData={{ location: "nav" }} />
          <IconLink href={`mailto:${SOCIAL_LINKS.email}`} label="Email" type="mail" className="p-2.5 -m-2.5 text-text-muted hover:text-black transition-colors rounded-sm" eventName={ANALYTICS_EVENTS.contactClick} eventData={{ location: "nav" }} />
        </div>
      </div>
    </header>
  )
}
