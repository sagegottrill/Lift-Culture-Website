import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, MessageCircle, Star, Gift } from "lucide-react"

export function NextSteps() {
  return (
    <Card className="glass border-0 shadow-lg">
      <CardHeader>
        <CardTitle>What's Next?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                <Smartphone className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold">Track Your Order</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Get real-time updates on your order status via email and SMS.
                </p>
                <Button size="sm" variant="outline" className="bg-transparent">
                  Enable Notifications
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                <MessageCircle className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <h4 className="font-semibold">Join Our Community</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Connect with other Li Culture members and share your journey.
                </p>
                <Button size="sm" variant="outline" className="bg-transparent">
                  Join Community
                </Button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mt-1">
                <Star className="h-4 w-4 text-yellow-600" />
              </div>
              <div>
                <h4 className="font-semibold">Share Your Experience</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Help others by reviewing your purchase once you receive it.
                </p>
                <Button size="sm" variant="outline" className="bg-transparent">
                  Set Reminder
                </Button>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                <Gift className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold">Refer Friends</h4>
                <p className="text-sm text-gray-600 mb-2">
                  Share Li Culture with friends and earn rewards for both of you.
                </p>
                <Button size="sm" variant="outline" className="bg-transparent">
                  Get Referral Link
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
