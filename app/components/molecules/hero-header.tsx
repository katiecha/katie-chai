import Image from "next/image"

export function HeroHeader() {
  return (
    <section className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
      <div className="flex-1">
        <h1 className="text-3xl font-semibold mb-3">👋 Hi, I&apos;m Katie</h1>
        <p className="text-sm text-text-muted leading-relaxed max-w-lg">
          I&apos;m interested in building systems that combine<br />intelligence, infrastructure, and thoughtful design.
        </p>
      </div>

      <div className="shrink-0">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-surface-hover overflow-hidden">
          <Image
            src="/images/headshot.jpg"
            alt="Katie Chai"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  )
}
