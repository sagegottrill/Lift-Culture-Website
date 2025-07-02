import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Package, Truck, MapPin, Calendar, CheckCircle } from "lucide-react"

interface OrderDetailsProps {
  orderId: string
}

export function OrderDetails({ orderId }: OrderDetailsProps) {
  // Mock order data - in real app this would come from API
  const orderData = {
    id: orderId,
    status: "Processing",
    estimatedDelivery: "March 25-27, 2024",
    shippingMethod: "Standard Shipping",
    trackingNumber: "1Z999AA1234567890",
    shippingAddress: {
      name: "Sarah Mitchell",
      address: "123 Wellness Way",
      city: "Austin",
      state: "TX",
      zipCode: "78701",
    },
    items: [
      {
        id: 1,
        name: "Elevation Performance Leggings",
        color: "Midnight Black",
        size: "M",
        quantity: 2,
        price: 89,
        image: "/placeholder.svg?height=100&width=100",
      },
      {
        id: 2,
        name: "Faith & Fitness Sports Bra",
        color: "Blush Pink",
        size: "S",
        quantity: 1,
        price: 65,
        image: "/placeholder.svg?height=100&width=100",
      },
    ],
  }

  return (
    <div className="space-y-6">
      {/* Order Status */}
      <Card className="glass border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Package className="h-5 w-5 mr-2 text-purple-600" />
            Order Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-semibold text-lg">Order #{orderData.id}</div>
              <div className="text-sm text-gray-600">Placed on {new Date().toLocaleDateString()}</div>
            </div>
            <Badge className="bg-yellow-100 text-yellow-800">{orderData.status}</Badge>
          </div>

          {/* Progress Timeline */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-medium">Order Confirmed</div>
                <div className="text-sm text-gray-600">Your order has been received</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <Package className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-medium">Processing</div>
                <div className="text-sm text-gray-600">We're preparing your items</div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                <Truck className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-medium text-gray-500">Shipped</div>
                <div className="text-sm text-gray-400">On its way to you</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Shipping Information */}
      <Card className="glass border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Truck className="h-5 w-5 mr-2 text-blue-600" />
            Shipping Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Calendar className="h-5 w-5 text-gray-400" />
            <div>
              <div className="font-medium">Estimated Delivery</div>
              <div className="text-sm text-gray-600">{orderData.estimatedDelivery}</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <MapPin className="h-5 w-5 text-gray-400" />
            <div>
              <div className="font-medium">Shipping Address</div>
              <div className="text-sm text-gray-600">
                {orderData.shippingAddress.name}
                <br />
                {orderData.shippingAddress.address}
                <br />
                {orderData.shippingAddress.city}, {orderData.shippingAddress.state} {orderData.shippingAddress.zipCode}
              </div>
            </div>
          </div>
          {orderData.trackingNumber && (
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="font-medium text-blue-800">Tracking Number</div>
              <div className="text-blue-600 font-mono">{orderData.trackingNumber}</div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Order Items */}
      <Card className="glass border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Order Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orderData.items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{item.name}</h4>
                  <div className="text-sm text-gray-600">
                    Color: {item.color} • Size: {item.size} • Qty: {item.quantity}
                  </div>
                </div>
                <div className="font-semibold">${item.price * item.quantity}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
