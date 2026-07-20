"use client"

import { useEffect } from "react"

export function ConsoleGreeting() {
  useEffect(() => {
    console.log(
      `%c<!-- 🥚 you found the source. email me "console easter egg" and I'll be very impressed! -->`,
      "color: #0969da; font-weight: 600; font-size: 13px; font-family: monospace;"
    )
  }, [])

  return null
}
