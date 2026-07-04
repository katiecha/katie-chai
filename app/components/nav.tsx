import Link from "next/link"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/app/components/icons"
import { SOCIAL_LINKS } from "@/app/work/data"

export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/work" className="font-semibold tracking-widest text-sm uppercase">
          Katie Chai
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/work" className="text-sm hover:text-gray-500 transition-colors">
            Work
          </Link>
          <Link href="/play" className="text-sm hover:text-gray-500 transition-colors">
            Play
          </Link>
          <Link href="/about" className="text-sm hover:text-gray-500 transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-black transition-colors">
            <GitHubIcon size={18} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-black transition-colors">
            <LinkedInIcon size={18} />
          </a>
          <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-600 hover:text-black transition-colors">
            <XIcon size={18} />
          </a>
        </div>
      </div>
    </header>
  )
}
