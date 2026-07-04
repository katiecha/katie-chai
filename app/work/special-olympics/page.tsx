import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Special Olympics - Katie Chai",
  description: "UX research and website redesign for Special Olympics.",
}

export default function SpecialOlympicsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <Link href="/work" className="text-sm text-text-subtle hover:text-black transition-colors inline-flex items-center gap-1 mb-8">
        ← Back to Work
      </Link>

      <h1 className="text-3xl font-semibold mb-2">Special Olympics</h1>
      <p className="text-sm text-text-muted mb-10">UX research and website redesign + rebuild.</p>

      <div className="relative w-full rounded-fillet overflow-hidden bg-surface-hover mb-10" style={{ aspectRatio: "16/9" }}>
        <Image src="/images/uiux-special-olympics.png" alt="Special Olympics project" fill className="object-cover" />
      </div>
    </main>
  )
}
