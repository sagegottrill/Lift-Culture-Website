"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, Phone, MapPin } from "lucide-react"

export function CheckoutForm() {
  const [sameAsShipping, setSameAsShipping] = useState(true)

  return (
    <div className="space-y-6">
      {/* Contact Information */}
      <Card className="glass border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <User className="h-5 w-5 mr-2 text-purple-600" />
            Contact Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="First name" className="glass" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Last name" className="glass" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input id="email" type="email" placeholder="your@email.com" className="pl-10 glass" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input id="phone" type="tel" placeholder="(555) 123-4567" className="pl-10 glass" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Address */}
      <Card className="glass border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-purple-600" />
            Shipping Address
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="address">Street Address</Label>
            <Input id="address" placeholder="123 Main Street" className="glass" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="apartment">Apartment, suite, etc. (optional)</Label>
            <Input id="apartment" placeholder="Apt 4B" className="glass" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input id="city" placeholder="City" className="glass" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="state">State</Label>
              <select id="state" className="w-full h-10 px-3 rounded-md border border-gray-200 glass">
                <option value="">Select state</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="zipCode">ZIP Code</Label>
            <Input id="zipCode" placeholder="12345" className="glass" />
          </div>
        </CardContent>
      </Card>

      {/* Billing Address */}
      <Card className="glass border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Billing Address</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2 mb-4">
            <input
              id="sameAsShipping"
              type="checkbox"
              checked={sameAsShipping}
              onChange={(e) => setSameAsShipping(e.target.checked)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <Label htmlFor="sameAsShipping">Same as shipping address</Label>
          </div>
          {!sameAsShipping && (
            <div className="space-y-4">
              <Input placeholder="Billing address" className="glass" />
              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="City" className="glass" />
                <Input placeholder="ZIP Code" className="glass" />
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
