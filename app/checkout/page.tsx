import { CheckoutForm } from "./components/checkout-form"
import { OrderSummary } from "./components/order-summary"
import { PaymentMethods } from "./components/payment-methods"
import Link from "next/link"
import { ArrowLeft, Shield, Lock } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost" className="text-gray-600 hover:text-purple-600">
              <Link href="/cart">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Cart
              </Link>
            </Button>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-3xl font-bold text-gray-900">Secure Checkout</h1>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Lock className="h-4 w-4 text-green-600" />
            <span>SSL Secured</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <CheckoutForm />
            <PaymentMethods />
          </div>
          <div>
            <OrderSummary />
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-8 glass rounded-2xl p-6 border border-green-200">
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-green-600" />
            <div>
              <h3 className="font-semibold text-green-800">Your information is secure</h3>
              <p className="text-sm text-green-700">
                We use industry-standard encryption to protect your personal and payment information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
