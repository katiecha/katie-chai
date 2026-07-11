"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { IG_POSTS, IG_HIGHLIGHTS, MERCH } from "@/app/play/data"
import { ProfileHeader } from "@/app/components/organisms/instagram/profile-header"
import { Story } from "@/app/components/organisms/instagram/story"
import { Post } from "@/app/components/organisms/instagram/post"
import { StoryViewer } from "@/app/components/organisms/instagram/story-viewer"

const STORY_DURATION = 5000

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
          postsCount={5}
          followersCount={947}
          followingCount={1002}
          category="Community Service"
          bioTitle="Carolina Adapts Toys for Children 🤖"
          description="PR Chair 2022–2023 — I created branding materials and managed Instagram, Facebook, LinkedIn, and email communications."
          followHref="https://www.instagram.com/catch_unc"
          messageEmail="katie.h.chai@gmail.com"
        />

        <div className="px-6 pb-8 overflow-x-auto scrollbar-hide">
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
        </div>

        <div className="grid grid-cols-3 gap-px bg-white">
          {IG_POSTS.map((post) => (
            <Post key={post.image} image={post.image} label={post.label} />
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-sm font-medium text-text-muted mb-3">Merch & Other</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {MERCH.map((item, i) => (
            <div
              key={item.image}
              className="border border-border rounded-fillet hover:border-border-hover transition-all duration-150 bg-white flex flex-col overflow-hidden"
            >
              <div className="relative bg-surface overflow-hidden rounded-t-fillet" style={{ aspectRatio: "1" }}>
                <div className="absolute inset-3">
                  <Image src={item.image} alt={item.label || `Merch ${i + 1}`} fill className="object-contain" />
                </div>
              </div>
              {item.label && (
                <div className="px-4 py-3 border-t border-border">
                  <p className="text-sm font-semibold text-center leading-tight">{item.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

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
