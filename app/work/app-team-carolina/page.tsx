import type { Metadata } from "next"
import { PageShell } from "@/app/components/molecules/page-shell"
import type { ReactNode } from "react"
import Image from "next/image"
import { SectionHeading } from "@/app/components/atoms/section-heading"
import { DefinitionGrid } from "@/app/components/molecules/definition-grid"
import { CaseStudyHeader } from "@/app/work/case-study-header"

export const metadata: Metadata = {
  title: "App Team Carolina - Katie Chai",
  description: "UI/UX projects from the App Team Carolina Design Academy.",
}

function ProjectHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-sm font-semibold mb-2">{children}</h3>
  )
}

function ProjectDescription({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm text-text-muted leading-relaxed mb-4">{children}</p>
  )
}

function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="text-sm text-text-muted space-y-1 mb-4 pl-4">
      {items.map((item) => (
        <li key={item} className="list-disc">{item}</li>
      ))}
    </ul>
  )
}

const DESIGN_PRINCIPLES = [
  { name: "Alignment", definition: "Arranging UI elements in relation to borders or edges to connect elements spatially." },
  { name: "Balance", definition: "Visual weight on each side of a design that feels cohesive and intentional." },
  { name: "Contrast", definition: "Using visual elements that appear clearly different so users can deduce that the contrasting item is different." },
  { name: "Emphasis", definition: "The part of the design that catches the viewer's attention by contrasting with other elements." },
  { name: "Hierarchy", definition: "Arrangement of elements to create visual organization and influence how the eye scans information." },
  { name: "Movement", definition: "Using design elements to guide the user's eye along a predetermined path." },
  { name: "Pattern", definition: "Reusable/recurring components used to solve common problems in UI design." },
  { name: "Proportion", definition: "The relationship between objects with reference to their size and visual weight." },
  { name: "Proximity", definition: "Similar UI elements are closely placed or grouped together." },
  { name: "Repetition", definition: "Repeating a single element many times in a design." },
  { name: "Rhythm", definition: "Using intervals or spaces between elements to give the user an impression of rhythm or movement." },
  { name: "Unity", definition: "Fuses all other principles, allowing each element to coexist to form an aesthetically pleasing design." },
  { name: "Variety", definition: "The use of several UI elements and principles to hold attention and guide the viewer's eye." },
  { name: "White Space", definition: "Empty space between and around elements of a design; also called negative space." },
]

export default function AppTeamCarolinaPage() {
  return (
    <PageShell>
      <CaseStudyHeader
        title="App Team Carolina"
        subtitle="Various projects from the UI/UX Design Academy."
        heroSrc="/images/uiux-app-team.png"
        heroAlt="App Team Carolina project"
      />

      <div className="flex flex-col gap-14">

        {/* Overview */}
        <section>
          <SectionHeading>Overview</SectionHeading>
          <p className="text-sm text-text-muted leading-relaxed">
            App Team Carolina is UNC-Chapel Hill&apos;s student organization for iOS app development. Their UI/UX Design Academy is a semester-long program that teaches design fundamentals through weekly projects, covering everything from color theory and typography to prototyping and usability. The projects below were completed as part of the academy.
          </p>
        </section>

        {/* Projects */}
        <section>
          <SectionHeading>Projects</SectionHeading>
          <div className="flex flex-col gap-12">

            {/* The Brunchery */}
            <div>
              <ProjectHeading>The Brunchery: A Brunch Restaurant App</ProjectHeading>
              <ProjectDescription>
                A local brunch restaurant app. The Brunchery had established brand colors to work with, while typography was up to me. It&apos;s egg-themed!
              </ProjectDescription>
              <div className="relative w-full aspect-video rounded-fillet overflow-hidden bg-surface-hover mb-4">
                <Image src="/images/app-team-carolina/brunchery.jpg" alt="The Brunchery app mockup" fill sizes="(min-width: 896px) 896px, 100vw" className="object-contain" />
              </div>
              <p className="text-xs font-medium text-text-subtle uppercase tracking-wide mb-2">Feature requirements</p>
              <FeatureList items={[
                "Logo / branding",
                "Home screen with food categories: Small Bites, Breakfast, Brunch, Cocktails, and Coffee & Tea",
                "View of food items within a category",
                "Detailed food item view with the ability to customize and add to cart",
              ]} />
            </div>

            {/* Alpine's Bagels */}
            <div>
              <ProjectHeading>Alpine&apos;s Bagels: A Bagel Shop App</ProjectHeading>
              <ProjectDescription>
                An app for Alpine&apos;s Bagels, a popular spot at UNC-Chapel Hill. This week&apos;s focus was on design fundamentals. Each principle was applied throughout the interface.
              </ProjectDescription>
              <div className="relative w-full aspect-video rounded-fillet overflow-hidden bg-surface-hover mb-4">
                <Image src="/images/app-team-carolina/alpines-bagels.jpg" alt="Alpine's Bagels app mockup" fill sizes="(min-width: 896px) 896px, 100vw" className="object-contain" />
              </div>
              <DefinitionGrid items={DESIGN_PRINCIPLES} />
            </div>

            {/* Send The Flowers */}
            <div>
              <ProjectHeading>Send The Flowers: A Dating App</ProjectHeading>
              <ProjectDescription>
                A dating app that draws from more traditional dating experiences, like buying your partner flowers. The flower art was created by artist{" "}
                <a
                  href="https://www.instagram.com/alev.neto"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Alev Neto on Instagram"
                  className="underline underline-offset-2 hover:text-black transition-colors"
                >
                  @alev.neto
                </a>{" "}
                on Instagram. This week&apos;s focus was color theory and typography. I also designed a logo for the app.
              </ProjectDescription>
              <p className="text-xs font-medium text-text-subtle uppercase tracking-wide mb-2">Features</p>
              <FeatureList items={["Messaging", "Flower sending", "User profile section"]} />
              <div className="relative w-full aspect-video rounded-fillet overflow-hidden bg-surface-hover mt-4">
                <Image src="/images/app-team-carolina/send-the-flowers.jpg" alt="Send The Flowers app mockup" fill sizes="(min-width: 896px) 896px, 100vw" className="object-contain" />
              </div>
            </div>

            {/* Period Tracking App */}
            <div>
              <ProjectHeading>A Period Tracking App</ProjectHeading>
              <ProjectDescription>
                A sleek and secure app for tracking menstrual cycles. The goal was a simple design that prioritizes user data privacy.
              </ProjectDescription>
              <div className="relative w-full aspect-video rounded-fillet overflow-hidden bg-surface-hover mb-4">
                <Image src="/images/app-team-carolina/period-tracking.jpg" alt="Period tracking app mockup" fill sizes="(min-width: 896px) 896px, 100vw" className="object-contain" />
              </div>
              <p className="text-xs font-medium text-text-subtle uppercase tracking-wide mb-2">Features</p>
              <FeatureList items={[
                "Start and stop buttons",
                "Menu",
                "Period tracker with day counter",
                "Daily journal",
                "Profile section",
              ]} />
            </div>

            {/* Parking App Redesign */}
            <div>
              <ProjectHeading>A Parking App Redesign</ProjectHeading>
              <ProjectDescription>
                A redesign of a parking app completed with Maddox Tapp from the University of Michigan, using a provided design from App Team Carolina. The goal was to increase familiarity and maintain consistency across pages.
              </ProjectDescription>
              <p className="text-xs font-medium text-text-subtle uppercase tracking-wide mb-2">Additions</p>
              <FeatureList items={[
                "User profile",
                "Current location display",
                "Additional search and filter options",
                "Increased map functionality",
                "Favorite button",
              ]} />
              <div className="relative w-full aspect-video rounded-fillet overflow-hidden bg-surface-hover mt-4">
                <Image src="/images/app-team-carolina/parking-app.jpg" alt="Parking app redesign mockup" fill sizes="(min-width: 896px) 896px, 100vw" className="object-contain" />
              </div>
            </div>

            {/* TikTok Recreation */}
            <div>
              <ProjectHeading>A TikTok Recreation</ProjectHeading>
              <ProjectDescription>
                A redesign of TikTok completed during a UI/UX design workshop led by Morgan Roberts at UNC-Chapel Hill. Starting from a provided starter file, I designed the TikTok screen, built a prototype, and created a mockup.
              </ProjectDescription>
              <div className="relative w-full aspect-video rounded-fillet overflow-hidden bg-surface-hover mt-4">
                <Image src="/images/app-team-carolina/tiktok.jpg" alt="TikTok recreation mockup" fill sizes="(min-width: 896px) 896px, 100vw" className="object-contain" />
              </div>
            </div>

          </div>
        </section>

      </div>
    </PageShell>
  )
}
