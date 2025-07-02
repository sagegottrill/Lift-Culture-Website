"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Minus, Plus, Trash2, Heart } from "lucide-react"

interface CartItem {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  color: string
  size: string
  quantity: number
}

interface CartItemsProps {
  items: CartItem[]
}

export function CartItems({ items }: CartItemsProps) {
  const [cartItems, setCartItems] = useState(items)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  return (
    <div className="space-y-4">
      {cartItems.map((item) => (
        <Card key={item.id} className="glass border-0 shadow-lg luxury-hover">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              {/* Product Image */}
              <div className="relative w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-full object-cover" />
              </div>

              {/* Product Details */}
              <div className="flex-1">
                <h3 className="font-bold text-lg text-gray-900 mb-1">{item.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                  <span>Color: {item.color}</span>
                  <span>Size: {item.size}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="font-bold text-lg text-gray-900">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${item.originalPrice}</span>
                  )}
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center space-x-3">
                <div className="flex items-center border border-gray-200 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-3 py-1 font-semibold">{item.quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col space-y-2">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-gray-400 hover:text-red-500"
                  onClick={() => removeItem(item.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
