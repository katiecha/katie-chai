import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { XIcon, GitHubIcon, LinkedInIcon } from "@/app/components/atoms/icons"
import { Tooltip } from "@/app/components/atoms/tooltip"
import { Card } from "@/app/components/molecules/card"
import { Section } from "@/app/components/molecules/section"
import { FilterableCSProjects } from "@/app/components/organisms/filterable-projects"
import { CURRENT_PROJECTS, CATEGORIES, UIUX_PROJECTS, SOCIAL_LINKS } from "@/app/work/data"

export const metadata: Metadata = {
  title: "Work - Katie Chai",
  description: "Katie Chai's portfolio of software engineering, systems, and design projects.",
}

export default function WorkPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-3">👋 Hi, I&apos;m Katie</h1>
          <p className="text-sm text-text-muted leading-relaxed max-w-lg">
            I&apos;m interested in building systems that combine<br />intelligence, infrastructure, and thoughtful design.
          </p>

          <div className="flex items-center gap-4 mt-7">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-muted hover:text-black transition-colors">
              <GitHubIcon size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-black transition-colors">
              <LinkedInIcon size={20} />
            </a>
            <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-text-muted hover:text-black transition-colors">
              <XIcon size={20} />
            </a>
          </div>
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

      {/* Current Projects */}
      <Section title="Current Projects" emoji="👩‍🔬" size="lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CURRENT_PROJECTS.map((project) => (
            <Card key={project.name} project={project} variant="text" />
          ))}
        </div>
      </Section>

      {/* CS Projects */}
      <Section title="CS Projects" emoji="👩‍💻" size="lg">
        <FilterableCSProjects categories={CATEGORIES} />
      </Section>

      {/* UI/UX Projects */}
      <Section title="UI/UX Projects" emoji="🕵️" size="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {UIUX_PROJECTS.map((project) => {
            const card = (
              <div className="border border-border rounded-fillet hover:border-border-hover transition-all duration-150 cursor-pointer">
                <div className="relative h-40 bg-surface overflow-hidden rounded-t-fillet">
                  {project.image ? (
                    <Image src={project.image} alt={project.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-text-disabled text-xs">preview</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{project.name}</span>
                    {project.status === "in-progress" && (
                      <Tooltip label="in progress">
                        <span className="text-sm leading-none select-none">⚠️</span>
                      </Tooltip>
                    )}
                  </div>
                  <p className="text-sm text-text-muted mt-1">{project.description}</p>
                </div>
              </div>
            )
            const href = project.links[0]?.href
            const isInternal = href?.startsWith("/")
            return href ? (
              isInternal ? (
                <Link key={project.name} href={href}>
                  {card}
                </Link>
              ) : (
                <a key={project.name} href={href} target="_blank" rel="noopener noreferrer">
                  {card}
                </a>
              )
            ) : (
              <div key={project.name}>{card}</div>
            )
          })}
        </div>
      </Section>
    </main>
  )
}
