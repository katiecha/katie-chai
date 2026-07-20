import Image from "next/image"

const WISPR_FLOW_REFERRAL_URL = "https://wisprflow.ai/r?KATIE2105"

export function WisprFlowFunFactCard() {
  return (
    <a
      href={WISPR_FLOW_REFERRAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Try Wispr Flow (referral link)"
      className="block border border-border rounded-fillet p-3 hover:border-border-hover transition-colors"
    >
      <p className="text-xs font-semibold mb-2 flex items-center gap-1.5">
        <span>🎙️</span> Wispr Flow Usage
      </p>
      <div className="relative w-full aspect-[2764/1872] rounded-fillet overflow-hidden">
        <Image
          src="/images/wispr-flow/your-flow-activity.png"
          alt="Wispr Flow: Your Flow activity"
          fill
          sizes="(min-width: 896px) 824px, 100vw"
          className="object-contain"
        />
      </div>
    </a>
  )
}
