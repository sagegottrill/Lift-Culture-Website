import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <Card className="glass border-0 shadow-lg">
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <div className="font-semibold">Email</div>
              <div className="text-sm text-gray-600">support@liculture.com</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Phone className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <div className="font-semibold">Phone</div>
              <div className="text-sm text-gray-600">1-800-LI-CULTURE</div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <MapPin className="h-5 w-5 text-purple-600" />
            </div>
            <div>
              <div className="font-semibold">Address</div>
              <div className="text-sm text-gray-600">
                123 Wellness Way
                <br />
                Austin, TX 78701
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
              <Clock className="h-5 w-5 text-orange-600" />
            </div>
            <div>
              <div className="font-semibold">Hours</div>
              <div className="text-sm text-gray-600">
                Mon-Fri: 9AM-6PM CST
                <br />
                Sat-Sun: 10AM-4PM CST
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="glass border-0 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center space-x-3 mb-4">
            <MessageCircle className="h-6 w-6 text-blue-600" />
            <h3 className="font-semibold">Live Chat</h3>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Get instant help from our support team. Available during business hours.
          </p>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            Start Chat
          </button>
        </CardContent>
      </Card>
    </div>
  )
}
