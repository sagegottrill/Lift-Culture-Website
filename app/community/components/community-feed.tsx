import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react"

const posts = [
  {
    id: 1,
    user: {
      name: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "SJ",
    },
    timestamp: "2 hours ago",
    content:
      'Just completed my morning workout! Feeling blessed and energized. Today\'s scripture: "She is clothed with strength and dignity" - Proverbs 31:25 💪✨',
    image: "/placeholder.svg?height=300&width=400",
    likes: 24,
    comments: 8,
    shares: 3,
  },
  {
    id: 2,
    user: {
      name: "Michael Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MC",
    },
    timestamp: "4 hours ago",
    content:
      "Week 3 of the Faith & Fitness Challenge complete! Lost 5 pounds and gained so much spiritual strength. Thank you Li Culture community for the support! 🙏",
    likes: 45,
    comments: 12,
    shares: 7,
  },
  {
    id: 3,
    user: {
      name: "Emma Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "ER",
    },
    timestamp: "6 hours ago",
    content:
      "New personal record on deadlifts today! 🏋️‍♀️ Remember, we can do all things through Christ who strengthens us. Keep pushing, warriors!",
    image: "/placeholder.svg?height=300&width=400",
    likes: 67,
    comments: 15,
    shares: 11,
  },
]

export function CommunityFeed() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Community Feed</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="border-b pb-6 last:border-b-0 last:pb-0">
              <div className="flex items-start space-x-3">
                <Avatar>
                  <AvatarImage src={post.user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{post.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <h4 className="font-semibold text-gray-900">{post.user.name}</h4>
                      <p className="text-sm text-gray-500">{post.timestamp}</p>
                    </div>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-gray-700 mb-3">{post.content}</p>
                  {post.image && (
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt="Post image"
                      className="w-full rounded-lg mb-3 max-h-64 object-cover"
                    />
                  )}
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-red-500">
                      <Heart className="h-4 w-4" />
                      <span>{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500">
                      <MessageCircle className="h-4 w-4" />
                      <span>{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-green-500">
                      <Share2 className="h-4 w-4" />
                      <span>{post.shares}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
