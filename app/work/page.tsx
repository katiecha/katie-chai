import type { Metadata } from "next"
import Image from "next/image"
import { GitHubIcon, LinkedInIcon, XIcon, LinkIcon } from "@/app/components/icons"
import { ProjectCard } from "@/app/components/project-card"
import { Section } from "@/app/components/section"
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
          <p className="text-gray-600 text-base leading-relaxed max-w-lg">
            I&apos;m interested in building systems that combine intelligence, infrastructure, and thoughtful design.
          </p>

          <div className="flex items-center gap-4 mt-5">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <GitHubIcon size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <LinkedInIcon size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <XIcon size={20} />
            </a>
            <a
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className="text-gray-500 hover:text-black transition-colors"
            >
              <LinkIcon size={20} />
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
      <Section title="Current Projects" emoji="👩‍💻">
        <div>
          {CURRENT_PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Section>

      {/* CS Projects */}
      <div className="mt-14">
        <h2 className="text-lg font-semibold mb-6">👩‍💻 CS Projects</h2>

        {CATEGORIES.map((category) => (
          <Section key={category.title} title={category.title} emoji={category.emoji}>
            <div>
              {category.projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
              ))}
            </div>
          </Section>
        ))}
      </div>

      {/* UI/UX Projects */}
      <div className="mt-14">
        <h2 className="text-lg font-semibold mb-6">🕵️ UI/UX Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {UIUX_PROJECTS.map((project) => {
            const card = (
              <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-colors cursor-pointer">
                <div className="relative h-40 bg-gray-50">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-300 text-xs">preview</div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-sm">{project.name}</span>
                    {project.status === "in-progress" && (
                      <span className="text-xs text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full border border-gray-200">
                        in progress
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-500 mt-0.5">{project.description}</p>
                </div>
              </div>
            )
            const href = project.links[0]?.href
            return href ? (
              <a key={project.name} href={href} target="_blank" rel="noopener noreferrer">
                {card}
              </a>
            ) : (
              <div key={project.name}>{card}</div>
            )
          })}
        </div>
      </div>
    </main>
  )
}
