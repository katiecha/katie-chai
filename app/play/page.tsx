import type { Metadata } from "next"
import Image from "next/image"
import { Section } from "@/app/components/section"

export const metadata: Metadata = {
  title: "Play — Katie Chai",
  description: "Katie Chai's hobbies — engineering projects and graphic design.",
}

const ENGINEERING_PROJECTS: { name: string; description: string; image: string }[] = [
  {
    name: "Soft Robotic Jellyfish",
    description:
      'A robot that is able to "swim" in water for noninvasive exploration of underwater ecosystems, based on Florida Atlantic University\'s soft robotic jellyfish.',
    image: "/images/play/jellyfish.jpg",
  },
  {
    name: "Face Shields",
    description:
      "A face shield service project that utilized laser cutting and 3D printing initially but eventually moved to injection molding.",
    image: "/images/play/face-shields.jpg",
  },
  {
    name: "Digitized CPR Dummy",
    description:
      "A digitized CPR dummy that I designed from scratch using Fusion 360, Autodesk Eagle, 3D printing, molding/casting, and more.",
    image: "/images/play/cpr-dummy.jpg",
  },
  {
    name: "Accessible Toys",
    description:
      "Children's toys with adapted internal circuitry to increase accessibility for children with special needs.",
    image: "/images/play/accessible-toys.jpg",
  },
  {
    name: "Light Painting Machine",
    description:
      "A light painting machine I manufactured with classmates that used long exposure photography to capture images.",
    image: "/images/play/light-painting.jpg",
  },
  {
    name: "Input Circuit Board",
    description: "An input circuit board I designed on Autodesk Eagle and surface mount soldered.",
    image: "/images/play/input-board.jpg",
  },
  {
    name: "Output Circuit Board",
    description: "An output circuit board I designed on Autodesk Eagle and surface mount soldered.",
    image: "/images/play/output-board.jpg",
  },
  {
    name: "Networking Experiment",
    description: "A networking experiment I developed on Autodesk Eagle and soldered / breadboarded.",
    image: "/images/play/networking.jpg",
  },
  {
    name: "DIY Oscilloscope",
    description: "A DIY oscilloscope I soldered together and used to test various circuitry projects.",
    image: "/images/play/oscilloscope.jpg",
  },
  {
    name: "Living Hinge",
    description: "A laser cut living hinge as well as some other laser cutting projects.",
    image: "/images/play/living-hinge.jpg",
  },
  {
    name: "Coffee Table",
    description: "A CNC (computer controlled machining) coffee table for my dad.",
    image: "/images/play/coffee-table.jpg",
  },
  {
    name: "Soap & Mold",
    description: "CNC soap mold and bar of soap created for my mom.",
    image: "/images/play/soap-mold.png",
  },
]

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ENGINEERING_PROJECTS.map((project) => (
            <div key={project.name} className="group">
              <div className="relative h-52 rounded-lg overflow-hidden bg-gray-100 mb-2">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="font-medium text-sm">{project.name}</p>
              <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Graphic Design */}
      <Section title="Graphic Design" emoji="👩‍🎨">
        <div className="space-y-8">
          {/* CATCH intro */}
          <div>
            <div className="relative h-56 rounded-lg overflow-hidden bg-gray-100 mb-3">
              <Image
                src="/images/play/catch-collection.jpg"
                alt="CATCH graphic design"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-medium text-sm">CATCH</p>
            <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
              I served as the 2022–2023 PR Chair for CATCH, Inc. I created branding materials including Instagram
              posts, posters, paintings, and product shots, and managed the website, Instagram, Facebook, LinkedIn,
              and email communications.
            </p>
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
