import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Nav } from "@/app/components/organisms/nav"
import { Footer } from "@/app/components/organisms/footer"
import { ConsoleGreeting } from "@/app/components/atoms/console-greeting"
import { EggRain } from "@/app/components/atoms/egg-rain"

const inter = Inter({ subsets: ["latin"], display: "swap" })

const SITE_TITLE = "Katie Chai"
const SITE_DESCRIPTION = "Software engineer interested in intelligence, infrastructure, and good design."

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "https://katie-chai.com",
    type: "website",
    images: ["https://katie-chai.com/images/headshot.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["https://katie-chai.com/images/headshot.jpg"],
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} data-scroll-behavior="smooth">
      <body className="bg-white text-black antialiased">
        <Nav />
        <div className="relative z-0 isolate">{children}</div>
        <Footer />
        <ConsoleGreeting />
        <EggRain />
        <Analytics />
      </body>
    </html>
  )
}
