import type { Metadata } from "next"
import { PageShell } from "@/app/components/molecules/page-shell"
import { Section } from "@/app/components/molecules/section"
import { ReadmeCard } from "@/app/readme/readme-card"
import { GitHubFunFactCard } from "@/app/readme/github-fun-fact-card"
import { WisprFlowFunFactCard } from "@/app/readme/wispr-flow-fun-fact-card"
import { ClaudeCodeFunFactCard } from "@/app/readme/claude-code-fun-fact-card"

const TITLE = "README.md - Katie Chai"
const DESCRIPTION = "A bit more about Katie Chai."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://katie-chai.com/readme",
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

export default function ReadmePage() {
  return (
    <PageShell>
      <ReadmeCard />

      <Section title="Fun Stats" emoji="✨" size="lg">
        <div className="flex flex-col gap-3">
          <GitHubFunFactCard />
          <WisprFlowFunFactCard />
          <ClaudeCodeFunFactCard />
        </div>
      </Section>
    </PageShell>
  )
}
