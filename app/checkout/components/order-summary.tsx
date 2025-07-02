import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingBag, Tag } from "lucide-react"

const orderItems = [
  {
    id: 1,
    name: "Elevation Performance Leggings",
    price: 89,
    quantity: 2,
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Faith & Fitness Sports Bra",
    price: 65,
    quantity: 1,
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function OrderSummary() {
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 0 // Free shipping
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <Card className="glass border-0 shadow-lg sticky top-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <ShoppingBag className="h-5 w-5 mr-2 text-purple-600" />
          Order Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Order Items */}
        <div className="space-y-4">
          {orderItems.map((item) => (
            <div key={item.id} className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.quantity}
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
                <p className="text-sm text-gray-600">${item.price}</p>
              </div>
              <div className="font-semibold">${item.price * item.quantity}</div>
            </div>
          ))}
        </div>

        {/* Promo Code */}
        <div className="border-t pt-4">
          <div className="flex items-center space-x-2 text-green-600 text-sm">
            <Tag className="h-4 w-4" />
            <span>WELCOME10 applied (-$24.30)</span>
          </div>
        </div>

        {/* Totals */}
        <div className="space-y-2 border-t pt-4">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between">
            <span>Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-green-600">Discount</span>
            <span className="text-green-600">-$24.30</span>
          </div>
          <div className="border-t pt-2">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>${(total - 24.3).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
