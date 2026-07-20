import Image from "next/image"

const CLAUDE_CODE_URL = "https://claude.com/product/claude-code"

export function ClaudeCodeFunFactCard() {
  return (
    <a
      href={CLAUDE_CODE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Claude Code"
      className="block border border-border rounded-fillet p-3 hover:border-border-hover transition-colors"
    >
      <p className="text-xs font-semibold mb-2 flex items-center gap-1.5">
        <span>🤖</span> Claude Code Usage
      </p>
      <div className="relative w-full aspect-[1112/520] rounded-fillet overflow-hidden">
        <Image
          src="/images/claude-code/usage.png"
          alt="Claude Code usage activity"
          fill
          sizes="(min-width: 896px) 824px, 100vw"
          className="object-contain"
        />
      </div>
    </a>
  )
}
