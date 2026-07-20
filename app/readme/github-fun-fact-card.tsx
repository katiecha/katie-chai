const GITHUB_USERNAME = "katiecha"
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`

export function GitHubFunFactCard() {
  return (
    <a
      href={GITHUB_PROFILE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Katie's GitHub profile"
      className="block border border-border rounded-fillet p-3 hover:border-border-hover transition-colors"
    >
      <p className="text-xs font-semibold mb-2 flex items-center gap-1.5">
        <span>🔥</span> GitHub Contributions
      </p>
      <div className="relative w-full aspect-[663/104] rounded-fillet overflow-hidden bg-surface">
        {/* eslint-disable-next-line @next/next/no-img-element -- external contribution-graph SVG, not a local static asset */}
        <img
          src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
          alt="GitHub contribution graph"
          className="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    </a>
  )
}
