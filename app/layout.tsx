import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "./components/navigation"
import { MobileNav } from "./components/mobile-nav"
import { ConversionWidget } from "./components/conversion-widget"
import { Footer } from "./components/footer"

export const metadata: Metadata = {
  title: "Li Culture - Fitness, Fashion & Faith",
  description: "Premium activewear meets AI-powered wellness coaching and faith-based community",
  keywords: "activewear, fitness, AI coaching, faith, wellness, community",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-premium">
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <MobileNav />
        <ConversionWidget />
      </body>
    </html>
  )
}
