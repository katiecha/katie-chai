import type { Metadata } from "next"
import { Card } from "@/app/components/molecules/card"
import { Section } from "@/app/components/molecules/section"
import { PageHeader } from "@/app/play/page-header"
import { PageShell } from "@/app/components/molecules/page-shell"
import { InstagramSection } from "@/app/components/organisms/instagram/instagram-section"
import { ENGINEERING_PROJECTS } from "@/app/play/data"

const TITLE = "Play - Katie Chai"
const DESCRIPTION = "Katie Chai's hobbies - engineering projects and graphic design."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://katie-chai.com/play",
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


export default function PlayPage() {
  return (
    <PageShell>
      <PageHeader title="🎉 Welcome to my playground" subtitle="Here you can find some of my hobbies." />

      <Section title="Engineering" emoji="👩‍🔧" size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ENGINEERING_PROJECTS.map((project) => (
            <Card key={project.name} project={project} variant="photo" />
          ))}
        </div>
      </Section>

      <Section title="Graphic Design" emoji="👩‍🎨" size="lg">
        <InstagramSection />
      </Section>
    </PageShell>
  )
}
