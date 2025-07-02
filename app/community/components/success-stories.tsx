import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, TrendingUp } from "lucide-react"

const stories = [
  {
    user: {
      name: "Jennifer Adams",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "JA",
    },
    achievement: "Lost 30 pounds",
    story:
      "Through Li Culture's AI coach and community support, I've transformed my relationship with fitness and faith.",
    beforeAfter: "/placeholder.svg?height=120&width=200",
    timeframe: "6 months",
  },
  {
    user: {
      name: "Marcus Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      initials: "MJ",
    },
    achievement: "Gained 15 lbs muscle",
    story: "The Strength & Scripture program helped me build physical and spiritual strength simultaneously.",
    beforeAfter: "/placeholder.svg?height=120&width=200",
    timeframe: "4 months",
  },
]

export function SuccessStories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Star className="h-5 w-5 mr-2 text-yellow-600" />
          Success Stories
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {stories.map((story, index) => (
            <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg p-4">
              <div className="flex items-start space-x-3 mb-3">
                <Avatar>
                  <AvatarImage src={story.user.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{story.user.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900">{story.user.name}</h4>
                  <div className="flex items-center text-sm text-green-600 mb-2">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {story.achievement} in {story.timeframe}
                  </div>
                </div>
              </div>
              <img
                src={story.beforeAfter || "/placeholder.svg"}
                alt="Before and after"
                className="w-full rounded-lg mb-3 h-24 object-cover"
              />
              <p className="text-sm text-gray-700 italic">"{story.story}"</p>
            </div>
          ))}
        </div>
        <Button className="w-full mt-4 bg-transparent" variant="outline">
          Share Your Story
        </Button>
      </CardContent>
    </Card>
  )
}
