import type { Metadata } from "next"
import { HeroHeader } from "@/app/work/hero-header"
import { UIUXCard } from "@/app/work/uiux-card"
import { Card } from "@/app/components/molecules/card"
import { Section } from "@/app/components/molecules/section"
import { PageShell } from "@/app/components/molecules/page-shell"
import { FilterableCSProjects } from "@/app/components/organisms/filterable-projects"
import { CURRENT_PROJECTS, CATEGORIES, UIUX_PROJECTS } from "@/app/work/data"

const TITLE = "Work - Katie Chai"
const DESCRIPTION = "Katie Chai's portfolio of software engineering, systems, and design projects."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://katie-chai.com/work",
    type: "website",
    images: ["https://katie-chai.com/images/headshot.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["https://katie-chai.com/images/headshot.jpg"],
  },
}

export default function WorkPage() {
  return (
    <PageShell>
      <HeroHeader />

      <Section title="Current Projects" emoji="👩‍🔬" size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CURRENT_PROJECTS.map((project) => (
            <Card key={project.name} project={project} variant="text" />
          ))}
        </div>
      </Section>

      <Section title="CS Projects" emoji="👩‍💻" size="lg">
        <FilterableCSProjects categories={CATEGORIES} />
      </Section>

      <Section title="UI/UX Projects" emoji="🕵️" size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {UIUX_PROJECTS.map((project) => (
            <UIUXCard key={project.name} project={project} />
          ))}
        </div>
      </Section>
    </PageShell>
  )
}
