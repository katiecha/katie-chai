import type { Metadata } from "next"
import Image from "next/image"
import { Card } from "@/app/components/card"
import { Section } from "@/app/components/section"
import { ENGINEERING_PROJECTS, IG_POSTS, IG_STORIES, MERCH, type MediaItem } from "@/app/play/data"

export const metadata: Metadata = {
  title: "Play — Katie Chai",
  description: "Katie Chai's hobbies — engineering projects and graphic design.",
}

function MediaGrid({ items }: { items: MediaItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
      {items.map((item) => (
        <div key={item.image} className="group relative aspect-square rounded-md overflow-hidden bg-gray-100">
          <Image src={item.image} alt={item.label || ""} fill className="object-cover" />
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
  )
}

export default function PlayPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold mb-2">🎉 Welcome to my playground</h1>
      <p className="text-sm text-gray-500 mb-10">Here you can find some of my hobbies.</p>


      <Section title="Engineering" emoji="👩‍🔧" size="lg">
        <div>
          {ENGINEERING_PROJECTS.map((project) => (
            <Card key={project.name} project={project} />
          ))}
        </div>
      </Section>

      <Section title="Graphic Design" emoji="👩‍🎨" size="lg">
        <div className="space-y-2">
          <div className="py-3 border-b border-gray-100">
            <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 mb-3" style={{ aspectRatio: "16/9" }}>
              <Image src="/images/play/catch-collection.jpg" alt="CATCH graphic design" fill className="object-cover" />
            </div>
            <p className="font-medium text-sm">CATCH</p>
            <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">
              I served as the 2022–2023 PR Chair for{" "}
              <a href="https://www.catch-inc.com/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">
                CATCH, Inc.
              </a>{" "}
              I created branding materials including Instagram posts, posters, paintings, and product shots, and managed the website, Instagram, Facebook, LinkedIn, and email communications.
            </p>
          </div>

          <Section title="Instagram Posts" size="sm">
            <MediaGrid items={IG_POSTS} />
          </Section>

          <Section title="Instagram Stories" size="sm">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {IG_STORIES.map((src, i) => (
                <div
                  key={src}
                  className="relative flex-shrink-0 w-24 rounded-md overflow-hidden bg-gray-100"
                  style={{ aspectRatio: "9/16" }}
                >
                  <Image src={src} alt={`Story ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </Section>

          <Section title="Merch & Other" size="sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {MERCH.map((item, i) => (
                <div key={item.image} className="group relative aspect-square rounded-md overflow-hidden bg-gray-100">
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
          </Section>
        </div>
      </Section>
    </main>
  )
}
