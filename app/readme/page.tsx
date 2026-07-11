import type { Metadata } from "next"
import { SOCIAL_LINKS } from "@/app/work/data"

export const metadata: Metadata = {
  title: "README.md - Katie Chai",
  description: "A bit more about Katie Chai.",
}

export default function ReadmePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <div className="border border-border rounded-lg overflow-hidden">

        {/* File header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border">
          <span className="text-sm text-text-muted font-mono">
            katiecha / <span className="font-semibold text-black">README.md</span>
          </span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-subtle" aria-hidden="true">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
        </div>

        {/* Body */}
        <div className="px-10 py-8 flex flex-col gap-6">

          {/* Title */}
          <h1 className="text-2xl font-bold text-center">👋 hi, i&apos;m katie!</h1>
          <hr className="border-border" />

          {/* Subtitle */}
          <p className="text-base font-semibold text-center">swe @ greenboard</p>

          {/* Sections */}
          <div className="flex flex-col gap-8">

            <section>
              <h2 className="text-sm font-semibold mb-3 flex items-center gap-1.5">✅ Where do I work?</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                I am currently a Software Engineer for{" "}
                <a href="https://www.greenboard.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline underline-offset-2">Greenboard</a>
                {" "}(
                <a href="https://www.ycombinator.com/companies/greenboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline underline-offset-2">YC W24</a>
                ).
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3 flex items-center gap-1.5">💻 What did I study?</h2>
              <p className="text-sm text-text-muted leading-relaxed">
                I studied Computer Science (and Computational Biology / Bioinformatics) at Duke and UNC through the{" "}
                <a href="https://robertsonscholars.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline underline-offset-2">Robertson Scholars Leadership Program</a>.
                I graduated in December 2025!
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3 flex items-center gap-1.5">🏢 Where did I intern?</h2>
              <ul className="space-y-5 text-sm text-text-muted">
                <li>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span>♊️</span>
                    <span className="font-medium text-black">Google</span>
                    <span className="text-xs text-text-subtle">- Summer 2025</span>
                  </div>
                  <p className="leading-relaxed pl-6">
                    I interned for Google as a TPM, focusing on containerizing Gemini and applications of agentic AI frameworks within Google Public Sector!
                  </p>
                </li>
                <li>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span>🩺</span>
                    <span className="font-medium text-black">Hone Health</span>
                    <span className="text-xs text-text-subtle">- Spring 2025</span>
                  </div>
                  <p className="leading-relaxed pl-6">
                    SWE intern building a FastAPI backend for wearable data integration and a sentiment analysis dashboard using Hugging Face Transformers.
                  </p>
                </li>
                <li>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span>🩻</span>
                    <span className="font-medium text-black">Medtronic</span>
                    <span className="text-xs text-text-subtle">- Summer 2024</span>
                  </div>
                  <p className="leading-relaxed pl-6">
                    I interned for Medtronic as a Software Engineer! I worked on the firmware and automated test frameworks for their new patch pump.
                  </p>
                </li>
              </ul>
              <p className="text-sm text-text-muted mt-6 mb-3">In the more distant past, I&apos;ve...</p>
              <ul className="space-y-1.5 text-sm text-text-muted">
                <li className="flex items-baseline gap-2"><span className="shrink-0">🥇</span><span>Interned with Special Olympics as a Software Engineering Intern</span></li>
                <li className="flex items-baseline gap-2"><span className="shrink-0">📚</span><span>TA-ed COMP 227 (Effective Peer Teaching in CS) and COMP 380 (Technology, Ethics, &amp; Culture) with Professor Tessa Joseph Nicholas</span></li>
                <li className="flex items-baseline gap-2"><span className="shrink-0">🔎</span><span>Researched Epidemiology with Professor Jessie K. Edwards and 🧮 Physical Mathematics with Pedro J Sáenz</span></li>
                <li className="flex items-baseline gap-2"><span className="shrink-0">🏕</span><span>Worked with Michael&apos;s Angels as a Summer Program Co-Director</span></li>
                <li className="flex items-baseline gap-2"><span className="shrink-0">🛠️</span><span>Interned with Honeywell as a Mechanical Engineering Intern</span></li>
              </ul>
            </section>

            <section>
              <h2 className="text-sm font-semibold mb-3 flex items-center gap-1.5">🎉 What do you do for fun?</h2>
              <ul className="space-y-1.5 text-sm text-text-muted">
                <li className="flex items-baseline gap-2">
                  <span className="shrink-0">•</span>
                  <span>
                    I enjoy food studies. My favorite class in college was{" "}
                    <a href="https://abby-reimer.com/2015/03/18/eats-101-exemplary-or-unattainable/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline underline-offset-2">EATS 101</a>!
                    I also enjoy baking.
                  </span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="shrink-0">•</span>
                  <span>Fun fact: My 🏐 sand and indoor volleyball teams won the UNC intramural championship!</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="shrink-0">•</span>
                  <span>
                    Also, feel free to check out my{" "}
                    <a href="https://docs.google.com/document/d/1dFJq7Y5QSiKG9yClFOjeBNlUsXZ42uupHCC59a9BNa4/edit?tab=t.0" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline underline-offset-2">resume</a>!
                  </span>
                </li>
              </ul>
            </section>

          </div>

          <hr className="border-border" />

          {/* Contact */}
          <p className="text-sm text-text-muted text-center">
            📚 reach me at katie.h.chai [at] gmail.com or on{" "}
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline underline-offset-2">
              LinkedIn
            </a>
          </p>

        </div>
      </div>
    </main>
  )
}
