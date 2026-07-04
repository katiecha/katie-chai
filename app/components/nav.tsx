import Link from "next/link"
import { IconLink } from "@/app/components/icon-link"
import { SOCIAL_LINKS } from "@/app/work/data"

export function Nav() {
  return (
    <header className="sticky top-0 z-nav bg-white border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/work" className="font-semibold tracking-widest text-sm uppercase">
          Katie Chai
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/work" className="text-sm hover:text-text-muted transition-colors">
            Work
          </Link>
          <Link href="/play" className="text-sm hover:text-text-muted transition-colors">
            Play
          </Link>
          <Link href="/about" className="text-sm hover:text-text-muted transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <IconLink href={SOCIAL_LINKS.github} label="GitHub" className="text-gray-600 hover:text-black transition-colors" />
          <IconLink href={SOCIAL_LINKS.linkedin} label="LinkedIn" className="text-gray-600 hover:text-black transition-colors" />
          <IconLink href={SOCIAL_LINKS.x} label="X" className="text-gray-600 hover:text-black transition-colors" />
        </div>
      </div>
    </header>
  )
}
