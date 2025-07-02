import { OrderDetails } from "./components/order-details"
import { OrderSummary } from "./components/order-summary"
import { NextSteps } from "./components/next-steps"
import { RelatedProducts } from "./components/related-products"
import Link from "next/link"
import { CheckCircle, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function OrderConfirmationPage({ params }: { params: { orderId: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
            <CheckCircle className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-xl text-gray-600 mb-6">
            Thank you for your purchase. Your order #{params.orderId} has been received and is being processed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Button variant="outline" className="bg-transparent">
              <Download className="h-4 w-4 mr-2" />
              Download Receipt
            </Button>
            <Button variant="outline" className="bg-transparent">
              <Share2 className="h-4 w-4 mr-2" />
              Share Order
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2 space-y-8">
            <OrderDetails orderId={params.orderId} />
            <NextSteps />
          </div>
          <div>
            <OrderSummary orderId={params.orderId} />
          </div>
        </div>

        <RelatedProducts />

        {/* Continue Shopping */}
        <div className="text-center mt-16">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg luxury-hover"
          >
            <Link href="/shop">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
