import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { SectionHeading } from "@/app/components/atoms/section-heading"

export const metadata: Metadata = {
  title: "Carolina Adapts Toys for Children - Katie Chai",
  description: "Website design and redesign for CATCH, a student-run nonprofit adapting toys for children.",
}

function ImagePlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      className="w-full rounded-fillet border border-dashed border-border bg-surface-hover flex items-center justify-center px-6 text-center"
      style={{ aspectRatio: aspect }}
    >
      <span className="text-xs text-text-subtle leading-relaxed">{label}</span>
    </div>
  )
}

export default function CatchPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/work" className="text-sm text-text-subtle hover:text-black transition-colors inline-flex items-center gap-1 mb-8">
        ← Back to Work
      </Link>

      <h1 className="text-3xl font-semibold mb-2">Carolina Adapts Toys for Children</h1>
      <p className="text-sm text-text-muted mb-1">Website design and redesign for a student-run nonprofit.</p>
      <p className="text-xs text-text-subtle mb-10">Client project · Website · UX + UI</p>

      <div className="relative w-full rounded-fillet overflow-hidden bg-surface-hover mb-16" style={{ aspectRatio: "16/9" }}>
        <Image src="/images/uiux-catch.png" alt="CATCH website redesign" fill sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
      </div>

      <div className="flex flex-col gap-14">

        {/* Overview */}
        <section>
          <SectionHeading>Overview</SectionHeading>
          <div className="flex flex-col gap-4 text-sm text-text-muted leading-relaxed">
            <p>
              Carolina Adapts Toys for Children (CATCH) is a student-run nonprofit at UNC-Chapel Hill that adapts and builds toys for children who fall through the cracks of the mainstream toy market. I worked on the design and redesign of their website — the marketing site as well as the underlying toy catalog and inventory experience.
            </p>
            <p>
              The full case study is still being written up. The sections below are placeholders for the research, redesign, and final screens to come.
            </p>
          </div>
        </section>

        {/* The Problem */}
        <section>
          <SectionHeading>The Problem</SectionHeading>
          <p className="text-sm text-text-muted leading-relaxed mb-6">
            Write-up in progress — the problem framing and current-state audit will go here.
          </p>
          <ImagePlaceholder label="Before — current CATCH site / pain points" />
        </section>

        {/* Redesign */}
        <section>
          <SectionHeading>Redesign</SectionHeading>
          <p className="text-sm text-text-muted leading-relaxed mb-6">
            Write-up in progress — the redesigned pages and key flows will go here.
          </p>
          <div className="flex flex-col gap-3">
            <ImagePlaceholder label="Redesigned homepage" />
            <ImagePlaceholder label="Toy catalog / inventory experience" />
          </div>
        </section>

      </div>
    </main>
  )
}
