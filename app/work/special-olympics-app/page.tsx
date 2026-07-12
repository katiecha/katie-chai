import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Special Olympics App - Katie Chai",
  description: "Mobile app IA redesign and user flow for Special Olympics PA.",
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold tracking-widest uppercase text-text-subtle mb-4">{children}</h2>
  )
}

export default function SpecialOlympicsAppPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/work" className="text-sm text-text-subtle hover:text-black transition-colors inline-flex items-center gap-1 mb-8">
        ← Back to Work
      </Link>

      <h1 className="text-3xl font-semibold mb-2">Special Olympics App</h1>
      <p className="text-sm text-text-muted mb-10">Mobile app IA redesign and user flow — supplementary to the website project.</p>

      <div className="relative w-full rounded-fillet overflow-hidden bg-surface border border-border mb-16">
        <Image src="/images/so-app-ia.png" alt="Special Olympics app information architecture" width={1600} height={400} className="w-full h-auto" />
      </div>

      <div className="flex flex-col gap-14">

        <section>
          <SectionHeading>Overview</SectionHeading>
          <p className="text-sm text-text-muted leading-relaxed">
            Alongside the Special Olympics PA website redesign, I also worked on a supplementary mobile app project. The focus was on restructuring the original information architecture and designing a cleaner user flow for volunteers using the app.
          </p>
        </section>

        <section>
          <SectionHeading>Information Architecture</SectionHeading>
          <p className="text-sm text-text-muted leading-relaxed">
            The original IA had the same core issues as the website — unclear hierarchy, duplicated sections, and no obvious path for a new volunteer. The redesigned IA simplified the top-level structure and made the volunteer onboarding flow its own distinct path.
          </p>
        </section>

        <section>
          <SectionHeading>User Flow</SectionHeading>
          <p className="text-sm text-text-muted leading-relaxed">
            The new flow chart maps the end-to-end experience from opening the app through completing a volunteer registration. Key decision points (logged in vs. new user, form completion) are clearly separated to reduce confusion and drop-off.
          </p>
        </section>

      </div>
    </main>
  )
}
