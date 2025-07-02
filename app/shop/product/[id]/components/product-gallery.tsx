"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Heart, Share2, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

const images = [
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
  "/placeholder.svg?height=600&width=600",
]

export function ProductGallery() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden group">
        <img
          src={images[currentImage] || "/placeholder.svg"}
          alt="Product"
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isZoomed ? "scale-150" : "group-hover:scale-105"
          }`}
        />

        {/* Overlay Actions */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button size="icon" variant="ghost" className="bg-white/80 backdrop-blur-sm">
            <Heart className="h-4 w-4" />
          </Button>
          <Button size="icon" variant="ghost" className="bg-white/80 backdrop-blur-sm">
            <Share2 className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="bg-white/80 backdrop-blur-sm"
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <ZoomIn className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation Arrows */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => setCurrentImage(currentImage > 0 ? currentImage - 1 : images.length - 1)}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => setCurrentImage(currentImage < images.length - 1 ? currentImage + 1 : 0)}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Discount Badge */}
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">-25%</div>
      </div>

      {/* Thumbnail Gallery */}
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
              currentImage === index
                ? "border-purple-500 ring-2 ring-purple-200"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <img
              src={image || "/placeholder.svg"}
              alt={`Product view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
