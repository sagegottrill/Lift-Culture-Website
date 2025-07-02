"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingBag, Heart, Truck, Shield, RotateCcw, Zap } from "lucide-react"

const sizes = ["XS", "S", "M", "L", "XL", "XXL"]
const colors = [
  { name: "Midnight Black", value: "#000000" },
  { name: "Royal Purple", value: "#8B5CF6" },
  { name: "Blush Pink", value: "#EC4899" },
  { name: "Sage Green", value: "#9CAF88" },
]

export function ProductInfo() {
  const [selectedSize, setSelectedSize] = useState("M")
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="space-y-8 font-premium">
      {/* Product Header */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <Badge className="bg-purple-100 text-purple-800">Premium Collection</Badge>
          <Badge className="bg-green-100 text-green-800">In Stock</Badge>
        </div>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Elevation Performance Leggings</h1>

        {/* Rating */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 font-medium">4.8</span>
          </div>
          <span className="text-gray-500">(156 reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center space-x-4 mb-6">
          <span className="text-3xl font-bold text-gray-900">$89</span>
          <span className="text-xl text-gray-500 line-through">$120</span>
          <Badge className="bg-red-100 text-red-800">Save 25%</Badge>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed">
          Engineered for peak performance and all-day comfort. These premium leggings feature moisture-wicking
          technology, four-way stretch, and a faith-inspired design that empowers your every move.
        </p>
      </div>

      {/* Color Selection */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">
          Color: <span className="font-normal">{selectedColor.name}</span>
        </h3>
        <div className="flex space-x-3">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`w-12 h-12 rounded-full border-4 transition-all ${
                selectedColor.name === color.name
                  ? "border-purple-500 ring-2 ring-purple-200"
                  : "border-gray-200 hover:border-gray-300"
              }`}
              style={{ backgroundColor: color.value }}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">
          Size: <span className="font-normal">{selectedSize}</span>
        </h3>
        <div className="grid grid-cols-6 gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`py-3 px-4 border-2 rounded-lg font-medium transition-all ${
                selectedSize === size
                  ? "border-purple-500 bg-purple-50 text-purple-700"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
        <Button variant="link" className="p-0 h-auto text-purple-600 mt-2">
          Size Guide
        </Button>
      </div>

      {/* Quantity */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center border-2 border-gray-200 rounded-lg">
            <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-50">
              -
            </button>
            <span className="px-4 py-2 font-medium">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-50">
              +
            </button>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <Button
          size="lg"
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg luxury-hover"
        >
          <ShoppingBag className="mr-2 h-5 w-5" />
          Add to Cart - ${89 * quantity}
        </Button>

        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" size="lg" className="luxury-hover bg-transparent">
            <Heart className="mr-2 h-4 w-4" />
            Save
          </Button>
          <Button variant="outline" size="lg" className="luxury-hover bg-transparent">
            Buy Now
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t">
        {[
          { icon: Truck, title: "Free Shipping", desc: "On orders over $75" },
          { icon: RotateCcw, title: "Easy Returns", desc: "30-day return policy" },
          { icon: Shield, title: "Warranty", desc: "1-year quality guarantee" },
        ].map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <feature.icon className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <div className="font-medium text-gray-900">{feature.title}</div>
              <div className="text-sm text-gray-600">{feature.desc}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Workout Milestone Unlock */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
        <div className="flex items-center space-x-3">
          <Zap className="h-6 w-6 text-yellow-600" />
          <div>
            <div className="font-semibold text-yellow-800">Unlock 10% Off!</div>
            <div className="text-sm text-yellow-700">Complete 3 AI coaching sessions to get an exclusive discount</div>
          </div>
        </div>
      </div>
    </div>
  )
}
