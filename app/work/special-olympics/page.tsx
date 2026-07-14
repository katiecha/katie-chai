import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Special Olympics - Katie Chai",
  description: "UX research and website redesign for Special Olympics.",
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold tracking-widest uppercase text-text-subtle mb-4">{children}</h2>
  )
}

function Quote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="border-l-2 border-border pl-4 text-sm text-text-muted leading-relaxed italic">
      {children}
    </blockquote>
  )
}

function ImagePlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      className="w-full rounded-fillet border border-dashed border-border bg-surface-hover flex items-center justify-center px-6 text-center"
      style={{ aspectRatio: aspect }}
    >
      <span className="text-xs text-text-subtle leading-relaxed">{label}</span>
    </div>
  )
}

export default function SpecialOlympicsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/work" className="text-sm text-text-subtle hover:text-black transition-colors inline-flex items-center gap-1 mb-8">
        ← Back to Work
      </Link>

      <h1 className="text-3xl font-semibold mb-2">Special Olympics</h1>
      <p className="text-sm text-text-muted mb-10">UX research, website redesign + rebuild, and supplementary mobile app IA.</p>

      <div className="relative w-full rounded-fillet overflow-hidden bg-surface-hover mb-16" style={{ aspectRatio: "16/9" }}>
        <Image src="/images/uiux-special-olympics.png" alt="Special Olympics project" fill sizes="(min-width: 896px) 896px, 100vw" className="object-cover" />
      </div>

      <div className="flex flex-col gap-14">

        {/* Overview */}
        <section>
          <SectionHeading>Overview</SectionHeading>
          <div className="flex flex-col gap-4 text-sm text-text-muted leading-relaxed">
            <p>
              The movement known worldwide as Special Olympics began simply as the idea of one extraordinary woman with a vision. Eunice Kennedy Shriver believed that people with intellectual disabilities were far more capable in sports and physical activities than many experts thought. And so, the world&apos;s largest amateur sports organization began in 1962 as a day camp in the backyard of Eunice and Sargent Shriver, with the first International Games taking place in 1968. Today, the movement thrives in more than 172 countries throughout the world.
            </p>
            <p>
              The mission of Special Olympics PA is to provide year-round sports training and competition in a variety of Olympic-type sports for children and adults with intellectual disabilities, giving them continuing opportunities to develop physical fitness, demonstrate courage, experience joy, and participate in a sharing of gifts, skills, and friendship with their families, other Special Olympics athletes, and the community.
            </p>
            <p>
              All training and competition opportunities are provided free of charge to the athletes and their families, enabling everyone to experience the benefits of Special Olympics that extend well beyond the playing field.
            </p>
          </div>
        </section>

        {/* Research */}
        <section>
          <SectionHeading>Research</SectionHeading>
          <div className="flex flex-col gap-10">

            <div>
              <h3 className="text-sm font-semibold mb-4">Listening Sessions</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-6">
                I met with the Special Olympics Sports and Volunteer Teams to get a better picture of the issues. They shared the following concerns about volunteers attempting to navigate the website.
              </p>
              <div className="flex flex-col gap-4">
                <Quote>&ldquo;As a new user, I don&apos;t even know where to start. There&apos;s nothing directing you within the Navbar.&rdquo;</Quote>
                <Quote>&ldquo;There&apos;s a lot of duplications between the individual pages and Volunteer Resources. Since it&apos;s not organized, it gets confusing.&rdquo;</Quote>
                <Quote>&ldquo;A lot of my volunteers don&apos;t know where to click. They get a bit confused. It&apos;s overwhelming...They get lost, frustrated, and tired.&rdquo;</Quote>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Competitor Analysis</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                I looked at similar organizations — including Best Buddies and the Paralympics — for inspiration on how to structure volunteer-facing content clearly and accessibly.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-4">Data Insights</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                I used Google Analytics to understand where users were dropping off and which pages were underperforming. This data informed both the restructured information architecture and a renewed focus on surfacing the donation page more prominently.
              </p>
            </div>

          </div>
        </section>

        {/* Design */}
        <section>
          <SectionHeading>Design</SectionHeading>
          <div className="flex flex-col gap-10">

            <div>
              <h3 className="text-sm font-semibold mb-2">User Persona</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                The primary user was a <span className="font-medium text-black">new volunteer</span> — someone visiting the site for the first time with no prior knowledge of Special Olympics PA. Their goal was simple: find out how to get involved and sign up. The existing site gave them no clear starting point.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">User Journey</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                A new volunteer landing on the site would immediately encounter an overwhelming navbar with duplicate entries and no clear hierarchy. Clicking into volunteer-related pages surfaced redundant content spread across multiple sections, making it difficult to determine where to actually sign up. Many users gave up before completing the process.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">User Flow</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                The redesigned flow consolidated duplicate pages, simplified the navbar structure, and created a clear path from landing to volunteer sign-up. The donation page was also elevated in the hierarchy based on analytics data.
              </p>
              <div className="flex flex-col gap-3">
                <ImagePlaceholder label="Website information architecture — restructured navigation (final crop coming soon)" />
                <ImagePlaceholder label="Website IA — before / after comparison (final crop coming soon)" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Usability Survey</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                After rebuilding 8 webpages in JavaScript and HTML/CSS, I ran a usability survey with Special Olympics volunteers. Volunteers found the redesigned navigation significantly easier to use and task completion improved. The prominence of the donation page also contributed to <span className="font-medium text-black">over $97,993 in fundraising</span>.
              </p>
            </div>

          </div>
        </section>

        {/* Supplementary: Mobile App IA */}
        <section>
          <SectionHeading>Mobile App (Supplementary)</SectionHeading>
          <div className="flex flex-col gap-10">

            <div>
              <p className="text-sm text-text-muted leading-relaxed">
                Alongside the website redesign, I also worked on a supplementary mobile app project. The focus was on restructuring the original information architecture and designing a cleaner user flow for volunteers using the app.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">Information Architecture</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                The original IA had the same core issues as the website — unclear hierarchy, duplicated sections, and no obvious path for a new volunteer. The redesigned IA simplified the top-level structure and made volunteer onboarding its own distinct path.
              </p>
              <div className="flex flex-col gap-3">
                <Image src="/images/so-app-ia-1.png" alt="Original app information architecture" width={1667} height={1499} style={{ width: "100%", height: "auto" }} className="rounded-fillet border border-border" />
                <Image src="/images/so-app-ia-2.png" alt="New app flow chart" width={1751} height={1499} style={{ width: "100%", height: "auto" }} className="rounded-fillet border border-border" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold mb-2">User Flow</h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                The new flow chart maps the end-to-end experience from opening the app through completing a volunteer registration. Key decision points (logged in vs. new user, form completion) are clearly separated to reduce confusion and drop-off.
              </p>
              <Image src="/images/so-app-ia-3.png" alt="New app user flow" width={2391} height={1499} style={{ width: "100%", height: "auto" }} className="rounded-fillet border border-border" />
            </div>

          </div>
        </section>

      </div>
    </main>
  )
}
