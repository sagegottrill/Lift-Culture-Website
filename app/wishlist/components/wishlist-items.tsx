"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingBag, Star, Trash2 } from "lucide-react"

interface WishlistItem {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  inStock: boolean
}

interface WishlistItemsProps {
  items: WishlistItem[]
}

export function WishlistItems({ items }: WishlistItemsProps) {
  const [wishlistItems, setWishlistItems] = useState(items)

  const removeItem = (id: number) => {
    setWishlistItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {wishlistItems.map((item) => (
        <Card key={item.id} className="glass border-0 shadow-lg luxury-hover group">
          <CardContent className="p-0">
            <div className="relative overflow-hidden">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Stock status */}
              {!item.inStock && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                  <Badge variant="destructive">Out of Stock</Badge>
                </div>
              )}

              {/* Remove button */}
              <Button
                size="icon"
                variant="ghost"
                className="absolute top-2 right-2 bg-white/80 text-red-500 hover:bg-white hover:text-red-600"
                onClick={() => removeItem(item.id)}
              >
                <Trash2 className="h-4 w-4" />
              </Button>

              {/* Discount badge */}
              {item.originalPrice && (
                <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-full">
                  -{Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}%
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {item.name}
              </h3>

              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(item.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">{item.rating}</span>
                </div>
                <span className="text-sm text-gray-500 ml-2">({item.reviews})</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg text-gray-900">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:opacity-50"
                  disabled={!item.inStock}
                >
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </Button>

                {!item.inStock && (
                  <Button variant="outline" className="w-full bg-transparent text-sm">
                    Notify When Available
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
