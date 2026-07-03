import type { Metadata } from "next"
import { Section } from "@/app/components/section"

export const metadata: Metadata = {
  title: "Play — Katie Chai",
  description: "Katie Chai's hobbies — engineering projects and graphic design.",
}

const ENGINEERING_PROJECTS = [
  {
    name: "Soft Robotic Jellyfish",
    description:
      'A robot that is able to "swim" in water for noninvasive exploration of underwater ecosystems, based on Florida Atlantic University\'s soft robotic jellyfish.',
  },
  {
    name: "Face Shields",
    description:
      "A face shield service project that utilized laser cutting and 3D printing initially but eventually moved to injection molding.",
  },
  {
    name: "Digitized CPR Dummy",
    description:
      "A digitized CPR dummy that I designed from scratch using Fusion 360, Autodesk Eagle, 3D printing, molding/casting, and more.",
  },
  {
    name: "Accessible Toys",
    description:
      "Children's toys with adapted internal circuitry to increase accessibility for children with special needs.",
  },
  {
    name: "Light Painting Machine",
    description:
      "A light painting machine I manufactured with classmates that used long exposure photography to capture images.",
  },
  {
    name: "Input Circuit Board",
    description: "An input circuit board I designed on Autodesk Eagle and surface mount soldered.",
  },
  {
    name: "Output Circuit Board & Networking Experiment",
    description: "A networking experiment I developed on Autodesk Eagle and soldered / breadboarded.",
  },
  {
    name: "DIY Oscilloscope",
    description: "A DIY oscilloscope I soldered together and used to test various circuitry projects.",
  },
  {
    name: "Living Hinge",
    description: "A laser cut living hinge as well as some other laser cutting projects.",
  },
  {
    name: "Coffee Table",
    description: "A CNC (computer controlled machining) coffee table for my dad.",
  },
  {
    name: "Soap & Mold",
    description: "CNC soap mold and bar of soap created for my mom.",
  },
]

const DESIGN_POSTS = [
  "Late Night with Toys (Spring 2023)",
  "Donuts with CATCH Promotion",
  "BMES Collab Event",
  "GBM Schedule 2023",
  "LDOC Recap",
  "Merch Post",
  "Chipotle Fundraiser",
  "Bake Sale",
  "Daily Tarheel",
  "Meet the EXEC",
  "GBM Schedule 2022",
  "Late Night with Toys (Fall 2022)",
  "Interest Meeting",
  "Semester Schedule",
  "First Day of School",
]

export default function PlayPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-2">🎉 Welcome to my playground</h1>
      <p className="text-gray-500 mb-10">Here you can find some of my hobbies.</p>

      {/* Engineering */}
      <Section title="Engineering" emoji="👩‍🔧">
        <div>
          {ENGINEERING_PROJECTS.map((project) => (
            <div key={project.name} className="py-3 border-b border-gray-100 last:border-0">
              <p className="font-medium text-sm">{project.name}</p>
              <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Graphic Design */}
      <Section title="Graphic Design" emoji="👩‍🎨">
        <div>
          <div className="py-3 border-b border-gray-100">
            <p className="font-medium text-sm">CATCH</p>
            <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
              I served as the 2022–2023 PR Chair for CATCH, Inc. I created branding materials including Instagram
              posts, posters, paintings, and product shots, and managed the website, Instagram, Facebook, LinkedIn,
              and email communications.
            </p>
          </div>

          <div className="py-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Instagram Posts</p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-1">
              {DESIGN_POSTS.map((post) => (
                <li key={post} className="text-sm text-gray-500">
                  {post}
                </li>
              ))}
            </ul>
          </div>

          <div className="py-3 border-t border-gray-100">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">Merch & Other</p>
            <ul className="space-y-1">
              <li className="text-sm text-gray-500">Student Union Cube Painting</li>
              <li className="text-sm text-gray-500">Toy Tally Poster</li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  )
}
