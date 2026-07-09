import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "App Team Carolina - Katie Chai",
  description: "UI/UX projects from the App Team Carolina Design Academy.",
}

export default function AppTeamCarolinaPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/work" className="text-sm text-text-subtle hover:text-black transition-colors inline-flex items-center gap-1 mb-8">
        ← Back to Work
      </Link>

      <h1 className="text-3xl font-semibold mb-2">App Team Carolina</h1>
      <p className="text-sm text-text-muted mb-10">Various projects from the UI/UX Design Academy.</p>

      <div className="relative w-full rounded-fillet overflow-hidden bg-surface-hover mb-10" style={{ aspectRatio: "16/9" }}>
        <Image src="/images/uiux-app-team.png" alt="App Team Carolina project" fill className="object-cover" />
      </div>
    </main>
  )
}
