import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Star, ShoppingBag } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Elevation Performance Leggings",
    price: 89,
    originalPrice: 120,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.8,
    reviews: 156,
    colors: ["black", "purple", "pink"],
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Faith & Fitness Sports Bra",
    price: 65,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.9,
    reviews: 203,
    colors: ["white", "lavender", "rose"],
    badge: "New",
  },
  {
    id: 3,
    name: "Mindful Movement Hoodie",
    price: 120,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.7,
    reviews: 89,
    colors: ["sage", "charcoal", "cream"],
  },
  {
    id: 4,
    name: "Serenity Shorts",
    price: 55,
    originalPrice: 75,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.6,
    reviews: 124,
    colors: ["navy", "blush", "mint"],
    badge: "Sale",
  },
  {
    id: 5,
    name: "Grace Activewear Set",
    price: 145,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.9,
    reviews: 67,
    colors: ["rose", "sage", "cream"],
  },
  {
    id: 6,
    name: "Strength Tank Top",
    price: 45,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.5,
    reviews: 234,
    colors: ["black", "white", "purple"],
  },
]

export function ProductGrid() {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">{products.length} products</p>
        <select className="border border-gray-300 rounded-lg px-3 py-2">
          <option>Sort by: Featured</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Newest</option>
          <option>Best Rating</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow">
            <CardContent className="p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <Link href={`/shop/product/${product.id}`}>
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
                {product.badge && (
                  <div
                    className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded ${
                      product.badge === "Sale"
                        ? "bg-red-100 text-red-800"
                        : product.badge === "New"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {product.badge}
                  </div>
                )}
                <Button
                  size="icon"
                  variant="ghost"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-4 w-4" />
                </Button>
                <div className="absolute bottom-2 left-2 flex space-x-1">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-3 h-3 rounded-full border-2 border-white"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
              <div className="p-4">
                <Link href={`/shop/product/${product.id}`}>
                  <h3 className="font-semibold text-gray-900 mb-2 hover:text-purple-600">{product.name}</h3>
                </Link>
                <div className="flex items-center mb-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-lg">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <ShoppingBag className="h-4 w-4 mr-1" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
