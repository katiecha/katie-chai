import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Unlock - Katie Chai",
  robots: { index: false },
}

export default function UnlockLayout({ children }: { children: ReactNode }) {
  return children
}
