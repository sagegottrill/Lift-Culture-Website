import { ProductGallery } from "./components/product-gallery"
import { ProductInfo } from "./components/product-info"
import { ProductReviews } from "./components/product-reviews"
import { RelatedProducts } from "./components/related-products"
import { ProductTabs } from "./components/product-tabs"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <ProductGallery />
          <ProductInfo />
        </div>

        <ProductTabs />
        <ProductReviews />
        <RelatedProducts />
      </div>
    </div>
  )
}
