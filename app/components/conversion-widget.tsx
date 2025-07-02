"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Gift, Zap, Target } from "lucide-react"

export function ConversionWidget() {
  const [isVisible, setIsVisible] = useState(false)
  const [progress, setProgress] = useState(65)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-24 md:bottom-8 left-4 right-4 md:left-auto md:right-8 md:w-80 z-40">
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
        <CardContent className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <Gift className="h-5 w-5 mr-2" />
              <span className="font-semibold">Unlock Rewards!</span>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="text-white hover:bg-white/20 h-6 w-6"
              onClick={() => setIsVisible(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Progress to 10% off</span>
                <span>{progress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <div className="flex items-center text-sm">
              <Target className="h-4 w-4 mr-2" />
              <span>Complete 1 more AI session</span>
            </div>

            <Button size="sm" className="w-full bg-white text-purple-600 hover:bg-gray-100">
              <Zap className="h-4 w-4 mr-2" />
              Start Session
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
