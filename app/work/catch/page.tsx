import type { Metadata } from "next"
import { PageShell } from "@/app/components/molecules/page-shell"
import { SectionHeading } from "@/app/components/atoms/section-heading"
import { ImagePlaceholder } from "@/app/components/molecules/image-placeholder"
import { CaseStudyHeader } from "@/app/work/case-study-header"

export const metadata: Metadata = {
  title: "Carolina Adapts Toys for Children - Katie Chai",
  description: "Website design and redesign for CATCH, a student-run nonprofit adapting toys for children.",
}

export default function CatchPage() {
  return (
    <PageShell>
      <CaseStudyHeader
        title="Carolina Adapts Toys for Children"
        subtitle="Website design and redesign for a student-run nonprofit."
        meta="Client project · Website · UX + UI"
        heroSrc="/images/uiux-catch.png"
        heroAlt="CATCH website redesign"
      />

      <div className="flex flex-col gap-14">

        {/* Overview */}
        <section>
          <SectionHeading>Overview</SectionHeading>
          <div className="flex flex-col gap-4 text-sm text-text-muted leading-relaxed">
            <p>
              Carolina Adapts Toys for Children (CATCH) is a student-run nonprofit at UNC-Chapel Hill that adapts and builds toys for children who fall through the cracks of the mainstream toy market. I worked on the design and redesign of their website, including the marketing site as well as the underlying toy catalog and inventory experience.
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
            Write-up in progress. The problem framing and current-state audit will go here.
          </p>
          <ImagePlaceholder label="Before: current CATCH site / pain points" />
        </section>

        {/* Redesign */}
        <section>
          <SectionHeading>Redesign</SectionHeading>
          <p className="text-sm text-text-muted leading-relaxed mb-6">
            Write-up in progress. The redesigned pages and key flows will go here.
          </p>
          <div className="flex flex-col gap-3">
            <ImagePlaceholder label="Redesigned homepage" />
            <ImagePlaceholder label="Toy catalog / inventory experience" />
          </div>
        </section>

      </div>
    </PageShell>
  )
}
