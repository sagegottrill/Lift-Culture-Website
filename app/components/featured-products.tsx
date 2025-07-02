import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star, ShoppingBag, Eye, Zap, Sparkles, ArrowRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Elevation Performance Leggings",
    price: 89,
    originalPrice: 120,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.8,
    reviews: 156,
    colors: ["#000000", "#8B5CF6", "#EC4899"],
    badge: "Best Seller",
    isNew: false,
    discount: 25,
  },
  {
    id: 2,
    name: "Faith & Fitness Sports Bra",
    price: 65,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.9,
    reviews: 203,
    colors: ["#FFFFFF", "#E6E6FA", "#FFB6C1"],
    badge: "New Drop",
    isNew: true,
  },
  {
    id: 3,
    name: "Mindful Movement Hoodie",
    price: 120,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.7,
    reviews: 89,
    colors: ["#9CAF88", "#36454F", "#F5F1EB"],
    badge: "Premium",
  },
  {
    id: 4,
    name: "Serenity Shorts",
    price: 55,
    originalPrice: 75,
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.6,
    reviews: 124,
    colors: ["#000080", "#FFB6C1", "#98FB98"],
    badge: "Limited",
    discount: 27,
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-pink-100/40 rounded-full blur-2xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 glass rounded-full mb-6 shadow-lg">
            <Zap className="h-4 w-4 text-purple-600 mr-2 animate-pulse" />
            <span className="text-sm font-semibold text-purple-800">Premium Collection</span>
            <Sparkles className="h-4 w-4 text-yellow-500 ml-2" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Elevated Activewear</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Each piece is thoughtfully designed for performance, crafted with purpose, and infused with intention for
            your wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group cursor-pointer luxury-hover border-0 shadow-lg glass overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                  />

                  {/* Enhanced overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Enhanced badge with glow */}
                  <div
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full shadow-lg ${
                      product.badge === "Best Seller"
                        ? "bg-gradient-to-r from-yellow-400 to-orange-400 text-white"
                        : product.badge === "New Drop"
                          ? "bg-gradient-to-r from-green-400 to-emerald-400 text-white"
                          : product.badge === "Premium"
                            ? "bg-gradient-to-r from-purple-400 to-pink-400 text-white"
                            : "bg-gradient-to-r from-red-400 to-rose-400 text-white"
                    }`}
                  >
                    {product.badge}
                  </div>

                  {/* Enhanced discount badge */}
                  {product.discount && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 text-xs font-bold rounded-full shadow-lg animate-pulse">
                      -{product.discount}%
                    </div>
                  )}

                  {/* Enhanced quick actions */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex space-x-3">
                      <Button size="icon" className="glass text-gray-900 hover:bg-white shadow-lg luxury-hover">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="icon" className="glass text-gray-900 hover:bg-white shadow-lg luxury-hover">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Enhanced color swatches */}
                  <div className="absolute bottom-4 left-4 flex space-x-2">
                    {product.colors.map((color, colorIndex) => (
                      <div
                        key={colorIndex}
                        className="w-4 h-4 rounded-full border-2 border-white shadow-lg hover:scale-125 transition-transform cursor-pointer"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* New: Wishlist indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="ghost" className="glass text-white hover:text-red-500">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors text-lg">
                    {product.name}
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                      <span className="text-sm text-gray-600 ml-2 font-semibold">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-xl text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      )}
                    </div>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg bounce-subtle font-semibold"
                    >
                      <ShoppingBag className="h-4 w-4 mr-1" />
                      Add
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="luxury-hover border-2 border-purple-200 text-purple-700 hover:bg-purple-50 glass px-8 py-4 text-lg font-semibold bg-transparent"
          >
            <Link href="/shop">
              Explore Full Collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
