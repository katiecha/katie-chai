import Link from "next/link"
import { GitHubIcon, LinkedInIcon, XIcon, ResumeIcon } from "@/app/components/icons"

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
          <a
            href="https://github.com/katiecha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href="https://linkedin.com/in/katiecha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <LinkedInIcon size={18} />
          </a>
          <a
            href="https://x.com/katie_chai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <XIcon size={18} />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="text-gray-600 hover:text-black transition-colors"
          >
            <ResumeIcon size={18} />
          </a>
        </div>
      </div>
    </header>
  )
}
