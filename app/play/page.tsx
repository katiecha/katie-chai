import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/app/components/section"
import { LinkIcon } from "@/app/components/icons"

export const metadata: Metadata = {
  title: "Play — Katie Chai",
  description: "Katie Chai's hobbies — engineering projects and graphic design.",
}

type EngineeringProject = {
  name: string
  description: string
  image: string
  links: { label: string; href: string; icon: "youtube" | "docs" | "site" }[]
}

const ENGINEERING_PROJECTS: EngineeringProject[] = [
  {
    name: "Soft Robotic Jellyfish",
    description:
      'A robot that is able to "swim" in water for noninvasive exploration of underwater ecosystems, based on Florida Atlantic University\'s soft robotic jellyfish.',
    image: "/images/play/jellyfish.jpg",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=B3q6MmOUwK0", icon: "youtube" },
      { label: "Instructables", href: "https://www.instructables.com/Soft-Robotic-Jellyfish/", icon: "site" },
    ],
  },
  {
    name: "Face Shields",
    description:
      "A face shield service project that utilized laser cutting and 3D printing initially but eventually moved to injection molding.",
    image: "/images/play/face-shields.jpg",
    links: [
      { label: "YouTube", href: "https://www.youtube.com/watch?v=vZcQNL63mP8", icon: "youtube" },
    ],
  },
  {
    name: "Digitized CPR Dummy",
    description:
      "A digitized CPR dummy that I designed from scratch using Fusion 360, Autodesk Eagle, 3D printing, molding/casting, and more!",
    image: "/images/play/cpr-dummy.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/projects/final-project/", icon: "docs" },
    ],
  },
  {
    name: "Accessible Toys",
    description:
      "Children's toys with adapted internal circuitry to increase accessibility for children with special needs.",
    image: "/images/play/accessible-toys.jpg",
    links: [
      { label: "CATCH Toy Catalog", href: "https://www.catch-inc.com/toy-catalog", icon: "site" },
    ],
  },
  {
    name: "Light Painting Machine",
    description:
      "A light painting machine I manufactured with classmates that used long exposure photography to capture these images.",
    image: "/images/play/light-painting.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week15/", icon: "docs" },
    ],
  },
  {
    name: "Input Circuit Board",
    description: "An input circuit board I designed on Autodesk Eagle and surface mount soldered.",
    image: "/images/play/input-board.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week11/", icon: "docs" },
    ],
  },
  {
    name: "Output Circuit Board",
    description: "An output circuit board I designed on Autodesk Eagle and surface mount soldered.",
    image: "/images/play/output-board.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week17/", icon: "docs" },
    ],
  },
  {
    name: "Networking Experiment",
    description: "A networking experiment I developed on Autodesk Eagle and soldered / breadboarded.",
    image: "/images/play/networking.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week12/", icon: "docs" },
    ],
  },
  {
    name: "DIY Oscilloscope",
    description: "A DIY oscilloscope I soldered together and used to test various circuitry projects.",
    image: "/images/play/oscilloscope.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week14/", icon: "docs" },
    ],
  },
  {
    name: "Living Hinge",
    description: "A laser cut living hinge as well as some other laser cutting projects.",
    image: "/images/play/living-hinge.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week04/", icon: "docs" },
    ],
  },
  {
    name: "Coffee Table",
    description: "A CNC (computer controlled machining) coffee table for my dad.",
    image: "/images/play/coffee-table.jpg",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week08/", icon: "docs" },
    ],
  },
  {
    name: "Soap & Mold",
    description: "CNC soap mold & bar of soap created for my mom.",
    image: "/images/play/soap-mold.png",
    links: [
      { label: "Docs", href: "https://fabacademy.org/2019/labs/charlotte/students/katie-chai/assignments/week10/", icon: "docs" },
    ],
  },
]

function PlayLinkIcon() {
  return <LinkIcon size={14} />
}

const IG_POSTS = [
  { label: "Late Night with Toys (Spring 2023)", image: "/images/play/ig-post-1.png" },
  { label: "Donuts with CATCH Promotion", image: "/images/play/ig-post-2.jpg" },
  { label: "BMES Collab Event", image: "/images/play/ig-post-3.jpg" },
  { label: "GBM Schedule 2023", image: "/images/play/ig-post-4.jpg" },
  { label: "LDOC Recap", image: "/images/play/ig-post-5.jpg" },
]

const IG_STORIES = [
  "/images/play/ig-story-1.jpg",
  "/images/play/ig-story-2.jpg",
  "/images/play/ig-story-3.png",
  "/images/play/ig-story-4.png",
  "/images/play/ig-story-5.png",
  "/images/play/ig-story-6.png",
  "/images/play/ig-story-7.png",
  "/images/play/ig-story-8.png",
]

const MERCH = [
  { label: "Student Union Cube Painting", image: "/images/play/merch-1.jpg" },
  { label: "Toy Tally Poster", image: "/images/play/merch-2.jpg" },
  { label: "", image: "/images/play/merch-3.jpg" },
  { label: "", image: "/images/play/merch-4.jpg" },
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
            <div key={project.name} className="py-4 border-b border-gray-100 last:border-0">
              <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 mb-3" style={{ aspectRatio: "16/9" }}>
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-medium text-sm">{project.name}</p>
                  <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{project.description}</p>
                </div>
                {project.links.length > 0 && (
                  <div className="flex items-center gap-3 shrink-0 mt-0.5">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="text-gray-400 hover:text-black transition-colors"
                      >
                        <PlayLinkIcon />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Graphic Design */}
      <Section title="Graphic Design" emoji="👩‍🎨">
        <div className="space-y-8">
          {/* CATCH intro */}
          <div className="py-3 border-b border-gray-100">
            <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 mb-3" style={{ aspectRatio: "16/9" }}>
              <Image src="/images/play/catch-collection.jpg" alt="CATCH graphic design" fill className="object-cover" />
            </div>
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="font-medium text-sm">CATCH</p>
                <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
                  I served as the 2022–2023 PR Chair for{" "}
                  <a href="https://www.catch-inc.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
                    CATCH, Inc.
                  </a>{" "}
                  I created branding materials including Instagram posts, posters, paintings, and product shots, and managed the website, Instagram, Facebook, LinkedIn, and email communications.
                </p>
              </div>
            </div>
          </div>

          {/* Instagram Posts */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Instagram Posts</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {IG_POSTS.map((post) => (
                <div key={post.label} className="group relative aspect-square rounded-md overflow-hidden bg-gray-100">
                  <Image src={post.image} alt={post.label} fill className="object-cover" />
                  {post.label && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-2">
                      <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity leading-tight">
                        {post.label}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Instagram Stories */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Instagram Stories</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {IG_STORIES.map((src, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 w-24 rounded-md overflow-hidden bg-gray-100"
                  style={{ aspectRatio: "9/16" }}
                >
                  <Image src={src} alt={`Story ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Merch & Other */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">Merch & Other</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {MERCH.map((item, i) => (
                <div key={i} className="group relative aspect-square rounded-md overflow-hidden bg-gray-100">
                  <Image src={item.image} alt={item.label || `Merch ${i + 1}`} fill className="object-cover" />
                  {item.label && (
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end p-2">
                      <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity leading-tight">
                        {item.label}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </main>
  )
}
