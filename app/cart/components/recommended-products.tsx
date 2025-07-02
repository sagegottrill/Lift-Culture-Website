import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Plus } from "lucide-react"

const recommendedProducts = [
  {
    id: 5,
    name: "Mindful Movement Tank",
    price: 45,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Serenity Yoga Mat",
    price: 85,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.9,
  },
  {
    id: 7,
    name: "Faith Water Bottle",
    price: 25,
    image: "/placeholder.svg?height=200&width=200",
    rating: 4.6,
  },
]

export function RecommendedProducts() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">You might also like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {recommendedProducts.map((product) => (
          <Card key={product.id} className="glass border-0 shadow-lg luxury-hover group cursor-pointer">
            <CardContent className="p-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-xs text-gray-600 ml-1">{product.rating}</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-lg">${product.price}</span>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Plus className="h-4 w-4 mr-1" />
                  Add
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
