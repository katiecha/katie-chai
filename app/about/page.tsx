import type { Metadata } from "next"
import { Section } from "@/app/components/section"
import { PageHeader } from "@/app/components/page-header"

export const metadata: Metadata = {
  title: "About - Katie Chai",
  description: "A bit more about Katie Chai.",
}

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <PageHeader title="👋 Hi again!" subtitle="Here's some more information about me!" />

      <Section title="Where do I work?" emoji="✅" size="lg">
        <p className="text-sm text-text-muted leading-relaxed">
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
        <p className="text-sm text-text-muted leading-relaxed">
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
              <span className="text-xs text-text-subtle">- Summer 2025</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed pl-6">
              I interned for Google as a TPM, focusing on containerizing Gemini and applications of agentic AI frameworks within Google Public Sector!
            </p>
          </li>
          <li>
            <div className="flex items-baseline gap-2 mb-1">
              <span>🩺</span>
              <span className="text-sm font-medium text-black">Hone Health</span>
              <span className="text-xs text-text-subtle">- Spring 2025</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed pl-6">
              SWE intern building a FastAPI backend for wearable data integration and a sentiment analysis dashboard using Hugging Face Transformers.
            </p>
          </li>
          <li>
            <div className="flex items-baseline gap-2 mb-1">
              <span>🩻</span>
              <span className="text-sm font-medium text-black">Medtronic</span>
              <span className="text-xs text-text-subtle">- Summer 2024</span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed pl-6">
              I interned for Medtronic as a Software Engineer! I worked on the firmware and automated test frameworks for their new patch pump.
            </p>
          </li>
        </ul>
        <p className="text-sm text-text-muted mt-6 mb-3">In the more distant past, I&apos;ve...</p>
        <ul className="space-y-1 text-sm text-text-muted">
          <li>Interned with 🥇 Special Olympics as a Software Engineering Intern</li>
          <li>TA-ed 📚 COMP 380: Technology, Ethics, &amp; Culture for Professor Tessa Joseph Nicholas</li>
          <li>Researched 🔎 Epidemiology with Professor Jessie K. Edwards and 🧮 Physical Mathematics with Pedro J Sáenz</li>
          <li>Worked with 🏕 Michael&apos;s Angels as a Summer Program Co-Director</li>
          <li>Interned with 🛠️ Honeywell as a Mechanical Engineering Intern</li>
        </ul>
      </Section>

      <Section title="What do you do for fun?" emoji="🎉" size="lg">
        <p className="text-sm text-text-muted leading-relaxed">
          I enjoy food studies. My favorite class in college was{" "}
          <a href="https://abby-reimer.com/2015/03/18/eats-101-exemplary-or-unattainable/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
            EATS 101
          </a>! I also enjoy baking.
        </p>
        <p className="text-sm text-text-muted leading-relaxed mt-2">
          Fun fact: My 🏐 sand and indoor volleyball teams won the UNC intramural championship!
        </p>
        <p className="text-sm text-text-muted leading-relaxed mt-2">
          Also, feel free to check out my{" "}
          <a href="https://docs.google.com/document/d/1dFJq7Y5QSiKG9yClFOjeBNlUsXZ42uupHCC59a9BNa4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
            resume
          </a>!
        </p>
      </Section>

    </main>
  )
}
