import { ShopFilters } from "./components/shop-filters"
import { ProductGrid } from "./components/product-grid"
import { ShopHeader } from "./components/shop-header"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <ShopHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <ShopFilters />
          </div>
          <div className="lg:col-span-3">
            <ProductGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
