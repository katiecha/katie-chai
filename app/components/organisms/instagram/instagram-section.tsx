"use client"

import { useState, useEffect } from "react"
import { Grid3x3, UserSquare } from "lucide-react"
import { ICON_SIZE } from "@/app/components/atoms/icon-link"
import { HorizontalScroller } from "@/app/components/molecules/horizontal-scroller"
import { Section } from "@/app/components/molecules/section"
import { IG_POSTS, IG_HIGHLIGHTS, MERCH, POSTERS } from "@/app/play/data"
import { Card } from "@/app/components/molecules/card"
import { ProfileHeader } from "@/app/components/molecules/instagram/profile-header"
import { Story } from "@/app/components/molecules/instagram/story"
import { Post } from "@/app/components/molecules/instagram/post"
import { StoryViewer } from "@/app/components/molecules/instagram/story-viewer"

const STORY_DURATION = 5000

// Real pixel dimensions per merch image, so the masonry layout sizes each
// card to its actual proportions instead of forcing a uniform aspect ratio.
const MERCH_ASPECT: Record<string, string> = {
  "/images/play/merch-1.jpg": "1080/1799",
  "/images/play/merch-2.jpg": "1080/953",
  "/images/play/merch-3.jpg": "805/1280",
  "/images/play/merch-4.jpg": "850/1056",
}

const POSTER_MERCH_ITEMS = [
  ...POSTERS.map((item) => ({ ...item, aspect: "2/3" })),
  ...MERCH.map((item) => ({ ...item, aspect: MERCH_ASPECT[item.image] ?? "1" })),
]

export function InstagramSection() {
  const [activeHighlight, setActiveHighlight] = useState<number | null>(null)
  const [activeFrame, setActiveFrame] = useState(0)
  const [progress, setProgress] = useState(0)

  const goToNext = () => {
    if (activeHighlight === null) return
    const frames = IG_HIGHLIGHTS[activeHighlight].frames
    if (activeFrame + 1 < frames.length) {
      setActiveFrame(activeFrame + 1)
    } else if (activeHighlight + 1 < IG_HIGHLIGHTS.length) {
      setActiveHighlight(activeHighlight + 1)
      setActiveFrame(0)
    } else {
      setActiveHighlight(null)
    }
  }

  const goToPrev = () => {
    if (activeHighlight === null) return
    if (activeFrame > 0) {
      setActiveFrame(activeFrame - 1)
    } else if (activeHighlight > 0) {
      setActiveHighlight(activeHighlight - 1)
      setActiveFrame(IG_HIGHLIGHTS[activeHighlight - 1].frames.length - 1)
    }
  }

  // Auto-advance timer
  useEffect(() => {
    if (activeHighlight === null) return
    setProgress(0)
    const start = Date.now()
    let cancelled = false

    const id = setInterval(() => {
      if (cancelled) return
      const pct = ((Date.now() - start) / STORY_DURATION) * 100
      if (pct >= 100) {
        cancelled = true
        clearInterval(id)
        goToNext()
      } else {
        setProgress(pct)
      }
    }, 50)

    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [activeHighlight, activeFrame])

  // Keyboard navigation
  useEffect(() => {
    if (activeHighlight === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveHighlight(null)
      if (e.key === "ArrowRight") goToNext()
      if (e.key === "ArrowLeft") goToPrev()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [activeHighlight, activeFrame])

  // Prevent body scroll when story is open
  useEffect(() => {
    document.body.style.overflow = activeHighlight !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [activeHighlight])

  return (
    <>
      <div className="bg-white">
        <ProfileHeader
          username="carolinaadaptstoys"
          avatarSrc="/images/play/catch-logo.png"
          displayName="CATCH"
          postsCount={IG_POSTS.length}
          followersCount={947}
          followingCount={1002}
          category="Community Service"
          bioTitle="Carolina Adapts Toys for Children 🤖"
          description="I created branding materials + managed social media / email communications."
          followHref="https://www.instagram.com/catch_unc"
          messageEmail="katie.h.chai@gmail.com"
        />

        <HorizontalScroller className="px-6 pb-8">
          <div className="flex gap-7">
            {IG_HIGHLIGHTS.map((highlight, i) => (
              <Story
                key={highlight.label}
                cover={highlight.cover}
                label={highlight.label}
                size="lg"
                onClick={() => {
                  setActiveFrame(0)
                  setActiveHighlight(i)
                }}
              />
            ))}
          </div>
        </HorizontalScroller>

        <div className="flex items-center justify-center gap-24 border-t border-border">
          <div className="px-4 py-3 border-t border-text-primary -mt-px">
            <Grid3x3 size={ICON_SIZE.md} className="text-text-primary" />
          </div>
          <div className="px-4 py-3 text-text-subtle">
            <UserSquare size={ICON_SIZE.md} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px bg-white">
          {IG_POSTS.map((post) => (
            <Post key={post.image} image={post.image} label={post.label} />
          ))}
        </div>
      </div>

      <Section title="Posters, Merch & Other" size="sm">
        <div className="columns-2 sm:columns-3 md:columns-4 gap-3">
          {POSTER_MERCH_ITEMS.map((item) => (
            <div key={item.image} className="mb-3 break-inside-avoid">
              <Card
                variant="photo"
                imageFit="contain"
                imageAspectRatio={item.aspect}
                imageSizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                project={{ name: item.label ?? "", description: "", image: item.image, links: [], tags: [] }}
              />
            </div>
          ))}
        </div>
      </Section>

      {activeHighlight !== null && (
        <StoryViewer
          highlight={IG_HIGHLIGHTS[activeHighlight]}
          activeFrame={activeFrame}
          progress={progress}
          username="carolinaadaptstoys"
          avatarSrc="/images/play/catch-logo.png"
          onClose={() => setActiveHighlight(null)}
          onPrev={goToPrev}
          onNext={goToNext}
        />
      )}
    </>
  )
}
