"use client"

import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft, Sparkles } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-pink-200/40 rounded-full blur-lg float" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200/20 rounded-full blur-md animate-ping" />
      </div>

      <div className="relative text-center max-w-2xl mx-auto">
        {/* 404 Animation */}
        <div className="mb-8">
          <div className="text-8xl lg:text-9xl font-bold gradient-text animate-bounce">404</div>
          <div className="flex justify-center mt-4">
            <Sparkles className="h-8 w-8 text-purple-600 animate-pulse" />
          </div>
        </div>

        {/* Content */}
        <div className="glass rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Oops! Page Not Found</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            The page you're looking for seems to have wandered off on its own wellness journey. Let's get you back on
            track!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg luxury-hover"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 glass luxury-hover bg-transparent"
            >
              <Link href="/search">
                <Search className="mr-2 h-5 w-5" />
                Search Products
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 mb-4">Or try these popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: "/shop", label: "Shop" },
                { href: "/ai-coach", label: "AI Coach" },
                { href: "/community", label: "Community" },
                { href: "/faith", label: "Faith" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-purple-600 hover:text-purple-700 font-medium text-sm hover:underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <Button
          onClick={() => window.history.back()}
          variant="ghost"
          className="mt-6 text-gray-600 hover:text-purple-600"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>
      </div>
    </div>
  )
}
