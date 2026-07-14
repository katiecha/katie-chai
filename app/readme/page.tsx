import type { Metadata } from "next"
import { PageShell } from "@/app/components/molecules/page-shell"
import { ReadmeCard } from "@/app/readme/readme-card"

export const metadata: Metadata = {
  title: "README.md - Katie Chai",
  description: "A bit more about Katie Chai.",
}

export default function ReadmePage() {
  return (
    <PageShell>
      <ReadmeCard />
    </PageShell>
  )
}
