import { WishlistItems } from "./components/wishlist-items"
import { EmptyWishlist } from "./components/empty-wishlist"
import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

// Mock wishlist data
const wishlistItems = [
  {
    id: 1,
    name: "Mindful Movement Hoodie",
    price: 120,
    originalPrice: 150,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.7,
    reviews: 89,
    inStock: true,
  },
  {
    id: 2,
    name: "Serenity Yoga Mat",
    price: 85,
    image: "/placeholder.svg?height=300&width=300",
    rating: 4.9,
    reviews: 156,
    inStock: false,
  },
]

export default function WishlistPage() {
  const isEmpty = wishlistItems.length === 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pb-16 md:pb-0">
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
              <Heart className="h-6 w-6 text-pink-600" />
              <h1 className="text-3xl font-bold text-gray-900">My Wishlist</h1>
            </div>
          </div>
          {!isEmpty && (
            <div className="text-sm text-gray-600">
              {wishlistItems.length} {wishlistItems.length === 1 ? "item" : "items"}
            </div>
          )}
        </div>

        {isEmpty ? <EmptyWishlist /> : <WishlistItems items={wishlistItems} />}
      </div>
    </div>
  )
}
