import type { Metadata } from "next"
import { PageShell } from "@/app/components/molecules/page-shell"
import { Section } from "@/app/components/molecules/section"
import { ReadmeCard } from "@/app/readme/readme-card"
import { GitHubFunFactCard } from "@/app/readme/github-fun-fact-card"
import { WisprFlowFunFactCard } from "@/app/readme/wispr-flow-fun-fact-card"
import { ClaudeCodeFunFactCard } from "@/app/readme/claude-code-fun-fact-card"

export const metadata: Metadata = {
  title: "README.md - Katie Chai",
  description: "A bit more about Katie Chai.",
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
