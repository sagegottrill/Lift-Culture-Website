import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MessageCircle, Calendar } from "lucide-react"

const events = [
  {
    title: "Weekly Prayer Circle",
    time: "Tonight 7:00 PM",
    participants: 23,
    description: "Join us for communal prayer and support",
  },
  {
    title: "Scripture Study Group",
    time: "Tomorrow 6:30 PM",
    participants: 15,
    description: "Deep dive into Philippians chapter 4",
  },
  {
    title: "Faith & Fitness Retreat",
    time: "This Weekend",
    participants: 45,
    description: "Virtual retreat combining worship and wellness",
  },
]

const recentPosts = [
  {
    user: "Sarah M.",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SM",
    message: "Praising God for strength during today's workout!",
    time: "1h ago",
  },
  {
    user: "David K.",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "DK",
    message: "Anyone want to be accountability partners for scripture memorization?",
    time: "3h ago",
  },
]

export function FaithCommunity() {
  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Users className="h-5 w-5 mr-2 text-blue-600" />
          Faith Community
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h4 className="font-semibold mb-3 flex items-center">
            <Calendar className="h-4 w-4 mr-2" />
            Upcoming Events
          </h4>
          <div className="space-y-3">
            {events.map((event, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-3">
                <div className="flex justify-between items-start mb-1">
                  <h5 className="font-medium text-blue-900">{event.title}</h5>
                  <span className="text-xs text-blue-600">{event.time}</span>
                </div>
                <p className="text-sm text-blue-700 mb-2">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-blue-600">{event.participants} joined</span>
                  <Button size="sm" variant="ghost" className="text-blue-600 hover:text-blue-700">
                    Join
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-3 flex items-center">
            <MessageCircle className="h-4 w-4 mr-2" />
            Recent Posts
          </h4>
          <div className="space-y-3">
            {recentPosts.map((post, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={post.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-xs">{post.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-sm">{post.user}</span>
                    <span className="text-xs text-gray-500">{post.time}</span>
                  </div>
                  <p className="text-sm text-gray-700">{post.message}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full bg-transparent" variant="outline">
          Join Faith Community
        </Button>
      </CardContent>
    </Card>
  )
}
