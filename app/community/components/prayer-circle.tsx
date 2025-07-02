import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Clock } from "lucide-react"

const prayerRequests = [
  {
    user: {
      name: "Rachel Kim",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "RK",
    },
    request: "Please pray for strength as I recover from my injury and get back to training.",
    timeAgo: "2 hours ago",
    prayers: 15,
  },
  {
    user: {
      name: "David Thompson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "DT",
    },
    request: "Grateful for this community! Pray for wisdom as I start my fitness journey.",
    timeAgo: "5 hours ago",
    prayers: 23,
  },
  {
    user: {
      name: "Lisa Martinez",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "LM",
    },
    request: "Thanksgiving for reaching my weight loss goal! Praising God for His faithfulness.",
    timeAgo: "1 day ago",
    prayers: 42,
  },
]

export function PrayerCircle() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Heart className="h-5 w-5 mr-2 text-pink-600" />
          Prayer Circle
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 mb-6">
          {prayerRequests.map((request, index) => (
            <div key={index} className="bg-pink-50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={request.user.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs">{request.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm">{request.user.name}</span>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {request.timeAgo}
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">{request.request}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-pink-600">
                      <Heart className="h-3 w-3 mr-1" />
                      {request.prayers} prayers
                    </div>
                    <Button size="sm" variant="ghost" className="text-pink-600 hover:text-pink-700">
                      Pray
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Button className="w-full bg-transparent" variant="outline">
          Share Prayer Request
        </Button>
      </CardContent>
    </Card>
  )
}
