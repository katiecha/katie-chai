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
        {children}
        <footer className="max-w-4xl mx-auto px-6 py-10 mt-16 border-t border-gray-100">
          <p className="text-xs text-gray-400 text-center">Made with ❤️ by Katie Chai</p>
        </footer>
      </body>
    </html>
  )
}
