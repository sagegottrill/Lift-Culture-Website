"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CreditCard, Smartphone, Wallet } from "lucide-react"

export function PaymentMethods() {
  const [paymentMethod, setPaymentMethod] = useState("card")

  return (
    <Card className="glass border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="h-5 w-5 mr-2 text-purple-600" />
          Payment Method
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Payment Method Selection */}
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <input
              id="card"
              type="radio"
              name="payment"
              value="card"
              checked={paymentMethod === "card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500"
            />
            <Label htmlFor="card" className="flex items-center space-x-2 cursor-pointer">
              <CreditCard className="h-4 w-4" />
              <span>Credit/Debit Card</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <input
              id="apple-pay"
              type="radio"
              name="payment"
              value="apple-pay"
              checked={paymentMethod === "apple-pay"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500"
            />
            <Label htmlFor="apple-pay" className="flex items-center space-x-2 cursor-pointer">
              <Smartphone className="h-4 w-4" />
              <span>Apple Pay</span>
            </Label>
          </div>
          <div className="flex items-center space-x-3">
            <input
              id="paypal"
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === "paypal"}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500"
            />
            <Label htmlFor="paypal" className="flex items-center space-x-2 cursor-pointer">
              <Wallet className="h-4 w-4" />
              <span>PayPal</span>
            </Label>
          </div>
        </div>

        {/* Card Details */}
        {paymentMethod === "card" && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="glass" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" className="glass" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input id="cvv" placeholder="123" className="glass" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input id="cardName" placeholder="John Doe" className="glass" />
            </div>
          </div>
        )}

        {/* Express Payment Buttons */}
        {paymentMethod === "apple-pay" && (
          <Button className="w-full h-12 bg-black text-white hover:bg-gray-800">Pay with Apple Pay</Button>
        )}

        {paymentMethod === "paypal" && (
          <Button className="w-full h-12 bg-blue-600 text-white hover:bg-blue-700">Continue with PayPal</Button>
        )}

        {/* Place Order Button */}
        <Button
          size="lg"
          className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg luxury-hover"
        >
          Complete Order
        </Button>
      </CardContent>
    </Card>
  )
}
