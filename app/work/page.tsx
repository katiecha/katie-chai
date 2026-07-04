import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { GitHubIcon, LinkedInIcon, XIcon } from "@/app/components/icons"
import { Row } from "@/app/components/row"
import { Section } from "@/app/components/section"
import { FilterableCSProjects } from "@/app/work/filterable-projects"
import { CURRENT_PROJECTS, CATEGORIES, UIUX_PROJECTS, SOCIAL_LINKS } from "@/app/work/data"

export const metadata: Metadata = {
  title: "Work — Katie Chai",
  description: "Katie Chai's portfolio of software engineering, systems, and design projects.",
}

export default function WorkPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero */}
      <section className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-3">👋 Hi, I&apos;m Katie</h1>
          <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
            I&apos;m interested in building systems that combine intelligence, infrastructure, and thoughtful design.
          </p>

          <div className="flex items-center gap-4 mt-5">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-500 hover:text-black transition-colors">
              <GitHubIcon size={20} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-500 hover:text-black transition-colors">
              <LinkedInIcon size={20} />
            </a>
            <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" aria-label="X" className="text-gray-500 hover:text-black transition-colors">
              <XIcon size={20} />
            </a>
          </div>
        </div>

        <div className="shrink-0">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gray-100 overflow-hidden">
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
      <Section title="Current Projects" emoji="👩‍💻" size="lg">
        <div>
          {CURRENT_PROJECTS.map((project) => (
            <Row key={project.name} project={project} />
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
              <div className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-400 hover:shadow-sm transition-all duration-150 cursor-pointer">
                <div className="relative h-40 bg-gray-50">
                  {project.image ? (
                    <Image src={project.image} alt={project.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">preview</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-semibold text-sm">{project.name}</span>
                    {project.status === "in-progress" && (
                      <span title="in progress" className="text-sm leading-none select-none">⚠️</span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{project.description}</p>
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
