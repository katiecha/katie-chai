import Image from "next/image"
import { BackLink } from "@/app/work/back-link"

type CaseStudyHeaderProps = {
  title: string
  subtitle: string
  meta?: string
  heroSrc: string
  heroAlt: string
}

export function CaseStudyHeader({ title, subtitle, meta, heroSrc, heroAlt }: CaseStudyHeaderProps) {
  return (
    <>
      <BackLink className="mb-8" />

      <h1 className="text-3xl font-semibold mb-2">{title}</h1>
      <p className={`text-sm text-text-muted ${meta ? "mb-1" : "mb-10"}`}>{subtitle}</p>
      {meta && <p className="text-xs text-text-subtle mb-10">{meta}</p>}

      <div className="relative w-full rounded-fillet overflow-hidden bg-surface-hover mb-16" style={{ aspectRatio: "16/9" }}>
        <Image src={heroSrc} alt={heroAlt} fill sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
      </div>
    </>
  )
}
