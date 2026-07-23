"use client"

import { useEffect, useRef, useState } from "react"
import { track } from "@vercel/analytics"
import { ANALYTICS_EVENTS } from "@/app/lib/analytics"

const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
]

const EGG_COUNT = 35
const CHICK_INDEX = 17
const RAIN_DURATION_MS = 3600
const GOLDEN_DURATION_MS = 4500

const EGGS = Array.from({ length: EGG_COUNT }, (_, i) => ({
  id: `egg-${i}`,
  emoji: i === CHICK_INDEX ? "🐣" : "🥚",
  left: `${(i * 37) % 100}%`,
  delay: `${(i % 7) * 0.15}s`,
  duration: `${2 + (i % 5) * 0.25}s`,
}))

export function EggRain() {
  const [level, setLevel] = useState(0)
  const progress = useRef(0)
  const triggers = useRef(0)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key
      progress.current = key === KONAMI_SEQUENCE[progress.current]
        ? progress.current + 1
        : key === KONAMI_SEQUENCE[0]
          ? 1
          : 0
      if (progress.current === KONAMI_SEQUENCE.length) {
        progress.current = 0
        triggers.current += 1
        track(ANALYTICS_EVENTS.easterEggKonami, { round: triggers.current })
        setLevel(triggers.current === 1 ? 1 : 2)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  useEffect(() => {
    if (level === 0) return
    const timeout = setTimeout(
      () => setLevel(0),
      level === 1 ? RAIN_DURATION_MS : GOLDEN_DURATION_MS
    )
    return () => clearTimeout(timeout)
  }, [level])

  if (level === 0) return null

  return (
    <div aria-hidden="true" className="fixed inset-0 z-modal pointer-events-none overflow-hidden">
      {level === 1 ? (
        EGGS.map((egg) => (
          <span
            key={egg.id}
            className="absolute top-0 text-2xl animate-egg-fall"
            style={{ left: egg.left, animationDelay: egg.delay, animationDuration: egg.duration }}
          >
            {egg.emoji}
          </span>
        ))
      ) : (
        <>
          <span
            className="absolute top-0 left-1/2 -translate-x-1/2 text-6xl animate-egg-fall drop-shadow-[0_0_12px_gold] sepia saturate-200 hue-rotate-[-20deg]"
            style={{ animationDuration: "3.5s" }}
          >
            🥚
          </span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 text-sm font-medium text-text-primary bg-background border border-border rounded-md shadow-md whitespace-nowrap">
            🥇 a golden egg?! email me &quot;golden egg&quot; and I&apos;ll be VERY impressed!
          </span>
        </>
      )}
    </div>
  )
}
