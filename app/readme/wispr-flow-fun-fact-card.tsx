import Image from "next/image"
import { FunFactCard } from "@/app/readme/fun-fact-card"

const WISPR_FLOW_REFERRAL_URL = "https://wisprflow.ai/r?KATIE2105"

export function WisprFlowFunFactCard() {
  return (
    <FunFactCard
      href={WISPR_FLOW_REFERRAL_URL}
      emoji="🎙️"
      title="Wispr Flow Usage"
      ariaLabel="Try Wispr Flow (referral link)"
    >
      <div className="relative w-full aspect-[2764/1872] rounded-fillet overflow-hidden">
        <Image
          src="/images/wispr-flow/your-flow-activity.png"
          alt="Wispr Flow: Your Flow activity"
          fill
          sizes="(min-width: 896px) 824px, 100vw"
          className="object-contain"
        />
      </div>
    </FunFactCard>
  )
}
