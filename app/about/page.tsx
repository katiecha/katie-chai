import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — Katie Chai",
  description: "A bit more about Katie Chai.",
}

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-2">👋 Hi again!</h1>
      <p className="text-sm text-gray-500 mb-10">Here&apos;s some more information about me!</p>

      <div className="space-y-10">
        <section>
          <h2 className="text-sm font-semibold mb-2">✅ Where do I work?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
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
        </section>

        <section>
          <h2 className="text-sm font-semibold mb-2">💻 What did I study?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            I studied Computer Science (and Computational Biology / Bioinformatics) at Duke and UNC through the{" "}
            <a href="https://robertsonscholars.org" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
              Robertson Scholars Leadership Program
            </a>
            . I graduated in December 2025!
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold mb-2">🏢 Where did I intern?</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <span className="mr-1">♊️</span>
              <strong>(Summer 2025)</strong> Interned at Google as a TPM, focusing on containerizing Gemini and applications of agentic AI frameworks for Federal, DoD, and SLED customers within Google Public Sector.
            </li>
            <li>
              <span className="mr-1">🩺</span>
              <strong>(Spring 2025)</strong> Interned at Hone Health as a Software Engineering Intern, building a FastAPI backend for wearable data integration and a sentiment analysis dashboard using Hugging Face Transformers.
            </li>
            <li>
              <span className="mr-1">🩻</span>
              <strong>(Summer 2024)</strong> Interned at Medtronic as a Software Engineer, developing an automated test framework in Python and optimizing motor drive algorithms in C/C++ for their new patch pump.
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 mb-2">In the more distant past…</p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>🥇 Special Olympics — Software Engineering Intern (+ UI/UX projects)</li>
            <li>🔎 Researched Epidemiology with Professor Jessie K. Edwards</li>
            <li>🧮 Researched Physical Mathematics with Pedro J. Sáenz</li>
            <li>🏕 Michael&apos;s Angels — Summer Program Co-Director</li>
            <li>🛠️ Honeywell — Mechanical Engineering Intern</li>
          </ul>
        </section>

        <section>
          <h2 className="text-sm font-semibold mb-2">🎉 What do you do for fun?</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            I enjoy food studies — my favorite class in college was{" "}
            <a href="https://abby-reimer.com/2015/03/18/eats-101-exemplary-or-unattainable/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
              EATS 101
            </a>
            ! I also enjoy baking. Fun fact: my 🏐 sand and indoor volleyball teams won the UNC intramural championship!
          </p>
        </section>
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          Feel free to check out my{" "}
          <a
            href="https://www.katiech.ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-black transition-colors"
          >
            resume
          </a>
          !
        </p>
      </div>
    </main>
  )
}
