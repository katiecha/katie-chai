"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { IG_POSTS, IG_STORIES, MERCH } from "@/app/play/data"

const STORY_DURATION = 5000

export function InstagramSection() {
  const [activeStory, setActiveStory] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)

  // Auto-advance timer
  useEffect(() => {
    if (activeStory === null) return
    setProgress(0)
    const start = Date.now()
    let cancelled = false

    const id = setInterval(() => {
      if (cancelled) return
      const pct = ((Date.now() - start) / STORY_DURATION) * 100
      if (pct >= 100) {
        cancelled = true
        clearInterval(id)
        setActiveStory(prev =>
          prev === null || prev + 1 >= IG_STORIES.length ? null : prev + 1
        )
      } else {
        setProgress(pct)
      }
    }, 50)

    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [activeStory])

  // Keyboard navigation
  useEffect(() => {
    if (activeStory === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveStory(null)
      if (e.key === "ArrowRight")
        setActiveStory(prev =>
          prev === null || prev + 1 >= IG_STORIES.length ? null : prev + 1
        )
      if (e.key === "ArrowLeft")
        setActiveStory(prev => (prev === null ? null : Math.max(0, prev - 1)))
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [activeStory])

  // Prevent body scroll when story is open
  useEffect(() => {
    document.body.style.overflow = activeStory !== null ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [activeStory])

  return (
    <>
      {/* Mini Instagram — uses card shell styling for consistency */}
      <div className="border border-border rounded-fillet overflow-hidden bg-white">

        {/* Profile header — mirrors real IG layout */}
        <div className="px-6 py-5 flex items-start gap-6 border-b border-border">

          {/* Avatar */}
          <div className="p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shrink-0">
            <div className="p-[3px] rounded-full bg-white">
              <div className="relative w-20 h-20 rounded-full overflow-hidden">
                <Image src="/images/play/catch-logo.png" alt="CATCH" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-2 min-w-0 pt-1">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-base font-semibold">carolinaadaptstoys</span>
              <a
                href="https://www.catch-inc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors"
              >
                Visit ↗
              </a>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-5 text-sm">
              <span><span className="font-semibold">5</span> <span className="text-text-muted">posts</span></span>
              <span><span className="font-semibold">947</span> <span className="text-text-muted">followers</span></span>
              <span><span className="font-semibold">1,002</span> <span className="text-text-muted">following</span></span>
            </div>

            {/* Bio */}
            <div className="text-sm leading-relaxed text-text-muted max-w-sm">
              <span className="font-semibold text-text-primary block">CATCH</span>
              <span className="text-text-subtle text-xs block mb-0.5">PR Chair 2022–2023</span>
              I created branding materials and managed Instagram, Facebook, LinkedIn, and email communications.
            </div>
          </div>
        </div>

        {/* Stories row — larger circles matching real IG style */}
        <div className="px-4 py-4 border-b border-border overflow-x-auto scrollbar-hide">
          <div className="flex gap-4">
            {IG_STORIES.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveStory(i)}
                className="shrink-0 group"
              >
                <div className="p-[2.5px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 group-hover:opacity-80 transition-opacity">
                  <div className="p-[2.5px] rounded-full bg-white">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image src={src} alt={`Story ${i + 1}`} fill className="object-cover" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-3 gap-px bg-border">
          {IG_POSTS.map((post) => (
            <div key={post.image} className="group relative aspect-square bg-white">
              <Image src={post.image} alt={post.label || ""} fill className="object-cover" />
              {post.label && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center p-2">
                  <span className="text-white text-xs text-center opacity-0 group-hover:opacity-100 transition-opacity leading-tight font-medium">
                    {post.label}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Merch & Other — uses core card shell styling */}
      <div className="mt-5">
        <h4 className="text-sm font-medium text-text-muted mb-3">Merch & Other</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {MERCH.map((item, i) => (
            <div
              key={item.image}
              className="border border-border rounded-fillet hover:border-border-hover transition-all duration-150 bg-white flex flex-col overflow-hidden"
            >
              {/* Image area — matches card.tsx bg-surface + rounded-t-fillet */}
              <div className="relative bg-surface overflow-hidden rounded-t-fillet" style={{ aspectRatio: "1" }}>
                <div className="absolute inset-3">
                  <Image src={item.image} alt={item.label || `Merch ${i + 1}`} fill className="object-contain" />
                </div>
              </div>
              {/* Label area — matches card.tsx p-4 content area */}
              {item.label && (
                <div className="px-4 py-3 border-t border-border">
                  <p className="text-sm font-semibold text-center leading-tight">{item.label}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Story viewer modal — Instagram-style centered portrait card */}
      {activeStory !== null && (
        <div className="fixed inset-x-0 bottom-0 top-14 z-modal bg-[#1a1a1a] flex items-center justify-between">

          {/* Left click zone — previous story */}
          <button
            className="flex-1 h-full"
            onClick={() => setActiveStory(prev => (prev === null ? null : Math.max(0, prev - 1)))}
            aria-label="Previous story"
          />

          {/* Story card */}
          <div
            className="relative h-[90vh] rounded-2xl overflow-hidden bg-black shrink-0"
            style={{ aspectRatio: "9/16" }}
          >
            {/* Story image */}
            <Image
              src={IG_STORIES[activeStory]}
              alt={`Story ${activeStory + 1}`}
              fill
              className="object-cover"
              priority
            />

            {/* Progress bars */}
            <div className="absolute top-3 left-3 right-3 z-10 flex gap-1">
              {IG_STORIES.map((_, i) => (
                <div key={i} className="flex-1 h-0.5 rounded-full bg-white/30 overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{
                      width:
                        i < activeStory ? "100%"
                        : i === activeStory ? `${progress}%`
                        : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Profile info — top-left inside card */}
            <div className="absolute top-7 left-3 z-10 flex items-center gap-2">
              <div className="p-[1.5px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                <div className="p-[1.5px] rounded-full bg-black">
                  <div className="relative w-8 h-8 rounded-full overflow-hidden">
                    <Image src="/images/play/catch-logo.png" alt="CATCH" fill className="object-contain" />
                  </div>
                </div>
              </div>
              <span className="text-white text-xs font-semibold drop-shadow">carolinaadaptstoys</span>
            </div>

            {/* Tap zones inside card — back left 1/3, forward right 2/3 */}
            <button
              className="absolute left-0 top-0 bottom-0 w-1/3 z-20"
              onClick={() => setActiveStory(prev => (prev === null ? null : Math.max(0, prev - 1)))}
              aria-label="Previous story"
            />
            <button
              className="absolute right-0 top-0 bottom-0 w-2/3 z-20"
              onClick={() => setActiveStory(prev =>
                prev === null || prev + 1 >= IG_STORIES.length ? null : prev + 1
              )}
              aria-label="Next story"
            />
          </div>

          {/* Right click zone — next story */}
          <button
            className="flex-1 h-full"
            onClick={() => setActiveStory(prev =>
              prev === null || prev + 1 >= IG_STORIES.length ? null : prev + 1
            )}
            aria-label="Next story"
          />

          {/* Close button — top-right of screen, outside the card */}
          <button
            onClick={() => setActiveStory(null)}
            className="absolute top-5 right-5 z-10 text-white/80 hover:text-white transition-colors p-2"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      )}
    </>
  )
}
