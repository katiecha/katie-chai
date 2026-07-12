import Link from "next/link"
import { IconLink } from "@/app/components/atoms/icon-link"
import { SOCIAL_LINKS } from "@/app/work/data"

export function Nav() {
  return (
    <header className="sticky top-0 border-b border-border" style={{ zIndex: 100, backgroundColor: '#ffffff' }}>
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/work" className="font-semibold tracking-widest text-sm uppercase">
          Katie Chai
        </Link>

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
          <IconLink href={SOCIAL_LINKS.github} label="GitHub" className="text-text-muted hover:text-black transition-colors" />
          <IconLink href={SOCIAL_LINKS.linkedin} label="LinkedIn" className="text-text-muted hover:text-black transition-colors" />
          <IconLink href={SOCIAL_LINKS.x} label="X" className="text-text-muted hover:text-black transition-colors" />
        </div>
      </div>
    </header>
  )
}
