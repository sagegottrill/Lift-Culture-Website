import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Tag, Truck, Shield } from "lucide-react"
import Link from "next/link"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}

interface CartSummaryProps {
  items: CartItem[]
}

export function CartSummary({ items }: CartSummaryProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 75 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="space-y-6">
      {/* Order Summary */}
      <Card className="glass border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <ShoppingBag className="h-5 w-5 mr-2 text-purple-600" />
            Order Summary
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span className="font-semibold">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="font-semibold">{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span className="font-semibold">${tax.toFixed(2)}</span>
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Promo Code */}
      <Card className="glass border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2">
            <Tag className="h-4 w-4 text-purple-600" />
            <span className="font-semibold text-sm">Promo Code</span>
          </div>
          <div className="flex space-x-2 mt-3">
            <Input placeholder="Enter code" className="glass" />
            <Button variant="outline" className="bg-transparent">
              Apply
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Checkout Button */}
      <Button
        asChild
        size="lg"
        className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg luxury-hover"
      >
        <Link href="/checkout">Proceed to Checkout</Link>
      </Button>

      {/* Features */}
      <div className="space-y-3 text-sm">
        <div className="flex items-center space-x-2 text-gray-600">
          <Truck className="h-4 w-4 text-green-600" />
          <span>Free shipping on orders over $75</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          <Shield className="h-4 w-4 text-blue-600" />
          <span>30-day return policy</span>
        </div>
      </div>
    </div>
  )
}
