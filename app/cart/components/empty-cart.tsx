import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart, Sparkles } from "lucide-react"
import Link from "next/link"

export function EmptyCart() {
  return (
    <div className="text-center py-16">
      <div className="glass rounded-3xl p-12 max-w-md mx-auto">
        <div className="w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <ShoppingBag className="h-12 w-12 text-purple-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-8">
          Discover our premium activewear collection and start building your perfect workout wardrobe.
        </p>
        <div className="space-y-4">
          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg luxury-hover"
          >
            <Link href="/shop">
              <Sparkles className="mr-2 h-5 w-5" />
              Start Shopping
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
            <Link href="/wishlist">
              <Heart className="mr-2 h-4 w-4" />
              View Wishlist
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
