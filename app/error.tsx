"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { RefreshCw, Home, AlertTriangle, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-red-200/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-200/40 rounded-full blur-lg float" />
      </div>

      <div className="relative text-center max-w-2xl mx-auto">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <AlertTriangle className="h-12 w-12 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="glass rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/20">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Something went wrong!</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            We encountered an unexpected error. Don't worry, our team has been notified and we're working to fix it.
          </p>

          {/* Error Details (Development only) */}
          {process.env.NODE_ENV === "development" && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 text-left">
              <h3 className="font-semibold text-red-800 mb-2">Error Details:</h3>
              <code className="text-sm text-red-700 break-all">{error.message}</code>
              {error.digest && <p className="text-xs text-red-600 mt-2">Error ID: {error.digest}</p>}
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={reset}
              size="lg"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold shadow-lg luxury-hover"
            >
              <RefreshCw className="mr-2 h-5 w-5" />
              Try Again
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-red-200 text-red-700 hover:bg-red-50 glass luxury-hover bg-transparent"
            >
              <Link href="/">
                <Home className="mr-2 h-5 w-5" />
                Go Home
              </Link>
            </Button>
          </div>

          {/* Support */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 mb-4">If this problem persists, please contact our support team:</p>
            <Button asChild variant="outline" size="sm" className="bg-transparent">
              <Link href="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contact Support
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
