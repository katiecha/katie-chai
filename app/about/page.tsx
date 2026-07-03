import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About — Katie Chai",
  description: "A bit more about Katie Chai.",
}

type Item = {
  emoji: string
  heading: string
  content: React.ReactNode
}

export default function AboutPage() {
  const items: Item[] = [
    {
      emoji: "✅",
      heading: "Where do I work?",
      content: (
        <p className="text-sm text-gray-600 leading-relaxed">
          I am currently a Software Engineer for{" "}
          <a
            href="https://greenboard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-black transition-colors"
          >
            Greenboard
          </a>{" "}
          (CW24). Check us out{" "}
          <a
            href="https://greenboard.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-black transition-colors"
          >
            here
          </a>
          .
        </p>
      ),
    },
    {
      emoji: "💻",
      heading: "What did I study?",
      content: (
        <p className="text-sm text-gray-600 leading-relaxed">
          I studied Computer Science (and Computational Biology / Bioinformatics) at Duke and UNC through the{" "}
          <a
            href="https://robertsonscholars.org"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-black transition-colors"
          >
            Robertson Scholars Leadership Program
          </a>
          . I graduated in December 2025!
        </p>
      ),
    },
    {
      emoji: "🏢",
      heading: "Where did I intern?",
      content: (
        <ul className="space-y-2 text-sm text-gray-600">
          <li>
            <span className="mr-1">♊️</span>
            <strong>(Summer 2025)</strong> Interned at Google as a TPM, focusing on containerizing Gemini and
            applications of agentic AI frameworks within Google Public Sector.
          </li>
          <li>
            <span className="mr-1">🩻</span>
            <strong>(Summer 2024)</strong> Interned at Medtronic as a Software Engineer, working on firmware and
            automated test frameworks for their new patch pump.
          </li>
          <li className="pt-1 text-gray-400 text-xs uppercase tracking-widest font-medium">In the more distant past…</li>
          <li>🥇 Special Olympics — Software Engineering Intern (+ UI/UX projects)</li>
          <li>📚 TA'd COMP 380: Technology, Ethics, &amp; Culture for Professor Tessa Joseph Nicholas</li>
          <li>🔎 Researched Epidemiology with Professor Jessie K. Edwards</li>
          <li>🧮 Researched Physical Mathematics with Pedro J. Sáenz</li>
          <li>🏕 Michael's Angels — Summer Program Co-Director</li>
          <li>🛠️ Honeywell — Mechanical Engineering Intern</li>
        </ul>
      ),
    },
    {
      emoji: "🎉",
      heading: "What do you do for fun?",
      content: (
        <p className="text-sm text-gray-600 leading-relaxed">
          I enjoy food studies — my favorite class in college was{" "}
          <span className="font-medium">EATS 101</span>! I also enjoy baking.{" "}
          Fun fact: my 🏐 sand and indoor volleyball teams won the UNC intramural championship!
        </p>
      ),
    },
  ]

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-2">👋 Hi again!</h1>
      <p className="text-gray-500 mb-10">Here&apos;s some more information about me!</p>

      <div className="space-y-10">
        {items.map((item) => (
          <section key={item.heading}>
            <h2 className="text-base font-semibold mb-2">
              {item.emoji} {item.heading}
            </h2>
            {item.content}
          </section>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-500">
          Feel free to check out my{" "}
          <a
            href="/resume.pdf"
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
