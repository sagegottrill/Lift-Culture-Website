import { CartItems } from "./components/cart-items"
import { CartSummary } from "./components/cart-summary"
import { RecommendedProducts } from "./components/recommended-products"
import { EmptyCart } from "./components/empty-cart"
import Link from "next/link"
import { ArrowLeft, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock cart data - in real app this would come from state management
const cartItems = [
  {
    id: 1,
    name: "Elevation Performance Leggings",
    price: 89,
    originalPrice: 120,
    image: "/placeholder.svg?height=200&width=200",
    color: "Midnight Black",
    size: "M",
    quantity: 2,
  },
  {
    id: 2,
    name: "Faith & Fitness Sports Bra",
    price: 65,
    image: "/placeholder.svg?height=200&width=200",
    color: "Blush Pink",
    size: "S",
    quantity: 1,
  },
]

export default function CartPage() {
  const isEmpty = cartItems.length === 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-gray-600 hover:text-purple-600">
              <Link href="/shop">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Link>
            </Button>
            <div className="h-6 w-px bg-gray-300" />
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-6 w-6 text-purple-600" />
              <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            </div>
          </div>
          {!isEmpty && (
            <div className="text-sm text-gray-600">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
            </div>
          )}
        </div>

        {isEmpty ? (
          <EmptyCart />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <CartItems items={cartItems} />
            </div>
            <div>
              <CartSummary items={cartItems} />
            </div>
          </div>
        )}

        {!isEmpty && <RecommendedProducts />}
      </div>
    </div>
  )
}
