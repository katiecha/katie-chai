import { FunFactCard } from "@/app/readme/fun-fact-card"
import { SOCIAL_LINKS } from "@/app/work/data"

const GITHUB_USERNAME = "katiecha"

export function GitHubFunFactCard() {
  return (
    <FunFactCard
      href={SOCIAL_LINKS.github}
      emoji="🔥"
      title="GitHub Contributions"
      ariaLabel="Visit Katie's GitHub profile"
    >
      <div className="relative w-full aspect-[663/104] rounded-fillet overflow-hidden bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element -- external contribution-graph SVG, not a local static asset */}
        <img
          src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
          alt="GitHub contribution graph"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    </FunFactCard>
  )
}
