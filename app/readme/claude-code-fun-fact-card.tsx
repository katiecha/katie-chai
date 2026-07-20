import Image from "next/image"
import { FunFactCard } from "@/app/readme/fun-fact-card"

const CLAUDE_CODE_URL = "https://claude.com/product/claude-code"

export function ClaudeCodeFunFactCard() {
  return (
    <FunFactCard
      href={CLAUDE_CODE_URL}
      emoji="🤖"
      title="Claude Code Usage"
      ariaLabel="Claude Code"
    >
      <div className="relative w-full aspect-[1112/520] rounded-fillet overflow-hidden">
        <Image
          src="/images/claude-code/usage.png"
          alt="Claude Code usage activity"
          fill
          sizes="(min-width: 896px) 824px, 100vw"
          className="object-contain"
        />
      </div>
    </FunFactCard>
  )
}
