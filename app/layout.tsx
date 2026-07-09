import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Nav } from "@/app/components/nav"

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
        <footer className="max-w-4xl mx-auto px-6 py-10 mt-16 border-t border-border">
          <p className="text-xs text-text-subtle text-center">Made with ❤️ by Katie Chai</p>
        </footer>
      </body>
    </html>
  )
}
