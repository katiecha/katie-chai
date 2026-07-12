import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Nav } from "@/app/components/organisms/nav"
import { Footer } from "@/app/components/organisms/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Katie Chai",
  description: "Software engineer interested in intelligence, infrastructure, and good design.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-white text-black antialiased">
        <Nav />
        <div className="relative z-0 isolate">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
