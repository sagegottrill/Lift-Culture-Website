import { Button } from "@/components/ui/button"
import { Heart, Sparkles, ShoppingBag } from "lucide-react"
import Link from "next/link"

export function EmptyWishlist() {
  return (
    <div className="text-center py-16">
      <div className="glass rounded-3xl p-12 max-w-md mx-auto">
        <div className="w-24 h-24 bg-gradient-to-br from-pink-100 to-rose-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Heart className="h-12 w-12 text-pink-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Your wishlist is empty</h2>
        <p className="text-gray-600 mb-8">
          Save items you love to your wishlist and never lose track of what inspires you.
        </p>
        <div className="space-y-4">
          <Button
            asChild
            size="lg"
            className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold shadow-lg luxury-hover"
          >
            <Link href="/shop">
              <Sparkles className="mr-2 h-5 w-5" />
              Discover Products
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
            <Link href="/cart">
              <ShoppingBag className="mr-2 h-4 w-4" />
              View Cart
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
