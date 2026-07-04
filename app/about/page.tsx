import type { Metadata } from "next"
import { Section } from "@/app/components/section"
import { PageHeader } from "@/app/components/page-header"

export const metadata: Metadata = {
  title: "About — Katie Chai",
  description: "A bit more about Katie Chai.",
}

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader title="👋 Hi again!" subtitle="Here's some more information about me!" />

      <Section title="Where do I work?" emoji="✅" size="lg">
        <p className="text-sm text-gray-500 leading-relaxed">
          I am currently a Software Engineer for{" "}
          <a href="https://www.greenboard.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
            Greenboard
          </a>{" "}
          (
          <a href="https://www.ycombinator.com/companies/greenboard" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
            YC W24
          </a>
          ).
        </p>
      </Section>

      <Section title="What did I study?" emoji="💻" size="lg">
        <p className="text-sm text-gray-500 leading-relaxed">
          I studied Computer Science (and Computational Biology / Bioinformatics) at Duke and UNC through the{" "}
          <a href="https://robertsonscholars.org" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
            Robertson Scholars Leadership Program
          </a>
          . I graduated in December 2025!
        </p>
      </Section>

      <Section title="Where did I intern?" emoji="🏢" size="lg">
        <ul className="space-y-5">
          <li>
            <div className="flex items-baseline gap-2 mb-1">
              <span>♊️</span>
              <span className="text-sm font-medium text-black">Google</span>
              <span className="text-xs text-gray-400">— Summer 2025</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed pl-6">
              TPM focusing on containerizing Gemini and agentic AI frameworks for Federal, DoD, and SLED customers within Google Public Sector.
            </p>
          </li>
          <li>
            <div className="flex items-baseline gap-2 mb-1">
              <span>🩺</span>
              <span className="text-sm font-medium text-black">Hone Health</span>
              <span className="text-xs text-gray-400">— Spring 2025</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed pl-6">
              SWE intern building a FastAPI backend for wearable data integration and a sentiment analysis dashboard using Hugging Face Transformers.
            </p>
          </li>
          <li>
            <div className="flex items-baseline gap-2 mb-1">
              <span>🩻</span>
              <span className="text-sm font-medium text-black">Medtronic</span>
              <span className="text-xs text-gray-400">— Summer 2024</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed pl-6">
              SWE intern developing an automated test framework in Python and optimizing motor drive algorithms in C/C++ for their patch pump.
            </p>
          </li>
        </ul>
        <p className="text-sm text-gray-500 mt-6 mb-3">In the more distant past…</p>
        <ul className="space-y-1 text-sm text-gray-500">
          <li>🥇 Special Olympics — Software Engineering Intern (+ UI/UX projects)</li>
          <li>🔎 Researched Epidemiology with Professor Jessie K. Edwards</li>
          <li>🧮 Researched Physical Mathematics with Pedro J. Sáenz</li>
          <li>🏕 Michael&apos;s Angels — Summer Program Co-Director</li>
          <li>🛠️ Honeywell — Mechanical Engineering Intern</li>
        </ul>
      </Section>

      <Section title="What do you do for fun?" emoji="🎉" size="lg">
        <p className="text-sm text-gray-500 leading-relaxed">
          I enjoy food studies — my favorite class in college was EATS 101! I also enjoy baking. Fun fact: my 🏐 sand and indoor volleyball teams won the UNC intramural championship!
        </p>
      </Section>

    </main>
  )
}
