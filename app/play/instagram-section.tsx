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
      {/* Mini Instagram */}
      <div className="border border-border rounded-fillet overflow-hidden bg-white">

        {/* Profile header */}
        <div className="px-4 py-3 flex items-center gap-3 border-b border-gray-100">
          <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 shrink-0">
            <div className="p-[2px] rounded-full bg-white">
              <div className="relative w-10 h-10 rounded-full overflow-hidden">
                <Image src="/images/play/catch-collection.jpg" alt="CATCH" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold leading-tight">carolinaadaptstoys</p>
            <p className="text-xs text-text-subtle mt-0.5">PR Chair 2022–2023</p>
          </div>
          <a
            href="https://www.catch-inc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto text-xs font-semibold text-blue-500 hover:text-blue-700 transition-colors shrink-0"
          >
            Visit ↗
          </a>
        </div>

        {/* Bio */}
        <div className="px-4 py-2 border-b border-gray-100">
          <p className="text-xs text-text-muted leading-relaxed">
            I served as the 2022–2023 PR Chair for CATCH, Inc. I created branding materials including
            Instagram posts, posters, paintings, and product shots, and managed the website, Instagram,
            Facebook, LinkedIn, and email communications.
          </p>
        </div>

        {/* Stories row */}
        <div className="px-3 py-3 border-b border-gray-100 overflow-x-auto scrollbar-hide">
          <div className="flex gap-3">
            {IG_STORIES.map((src, i) => (
              <button
                key={src}
                onClick={() => setActiveStory(i)}
                className="flex flex-col items-center gap-1 shrink-0 group"
              >
                <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 group-hover:opacity-80 transition-opacity">
                  <div className="p-[2px] rounded-full bg-white">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden">
                      <Image src={src} alt={`Story ${i + 1}`} fill className="object-cover" />
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-text-muted w-14 text-center truncate">
                  {i + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-3 gap-px bg-gray-100">
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

      {/* Merch & Other */}
      <div className="mt-5">
        <h4 className="text-sm font-medium text-text-muted mb-3">Merch & Other</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {MERCH.map((item, i) => (
            <div key={item.image} className="group relative aspect-square rounded-fillet overflow-hidden bg-surface-hover">
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

      {/* Story viewer modal */}
      {activeStory !== null && (
        <div
          className="fixed inset-0 z-modal bg-black/95 flex items-center justify-center"
          onClick={() => setActiveStory(null)}
        >
          <div
            className="relative w-full h-full max-w-sm flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Progress bars */}
            <div className="absolute top-0 left-0 right-0 z-20 flex gap-1 p-3 pt-safe">
              {IG_STORIES.map((_, i) => (
                <div key={i} className="flex-1 h-0.5 rounded-full bg-white/30 overflow-hidden">
                  <div
                    className="h-full bg-white rounded-full"
                    style={{
                      width:
                        i < activeStory
                          ? "100%"
                          : i === activeStory
                          ? `${progress}%`
                          : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Close */}
            <button
              onClick={() => setActiveStory(null)}
              className="absolute top-8 right-3 z-20 text-white/80 hover:text-white text-lg p-2 leading-none"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Story image */}
            <div className="relative w-full h-full">
              <Image
                src={IG_STORIES[activeStory]}
                alt={`Story ${activeStory + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Story counter */}
            <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center">
              <span className="text-white/60 text-xs">
                {activeStory + 1} / {IG_STORIES.length}
              </span>
            </div>

            {/* Tap to go back (left 1/3) */}
            <button
              className="absolute left-0 top-12 bottom-0 w-1/3 z-10"
              onClick={e => {
                e.stopPropagation()
                setActiveStory(prev => (prev === null ? null : Math.max(0, prev - 1)))
              }}
              aria-label="Previous story"
            />
            {/* Tap to advance (right 2/3) */}
            <button
              className="absolute right-0 top-12 bottom-0 w-2/3 z-10"
              onClick={e => {
                e.stopPropagation()
                setActiveStory(prev =>
                  prev === null || prev + 1 >= IG_STORIES.length ? null : prev + 1
                )
              }}
              aria-label="Next story"
            />
          </div>
        </div>
      )}
    </>
  )
}
