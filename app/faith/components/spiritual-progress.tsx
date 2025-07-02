import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Heart, Award } from "lucide-react"

export function SpiritualProgress() {
  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Heart className="h-5 w-5 mr-2 text-pink-600" />
          Spiritual Progress
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Daily Devotionals</span>
            <Badge className="bg-green-100 text-green-800">7 day streak</Badge>
          </div>
          <Progress value={100} className="h-2" />
          <p className="text-sm text-gray-600 mt-1">Perfect week!</p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Scripture Memorization</span>
            <span className="text-sm text-gray-600">3/5 verses</span>
          </div>
          <Progress value={60} className="h-2" />
          <p className="text-sm text-gray-600 mt-1">2 more to complete this month's goal</p>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Prayer Time</span>
            <span className="text-sm text-gray-600">45/60 min this week</span>
          </div>
          <Progress value={75} className="h-2" />
          <p className="text-sm text-gray-600 mt-1">15 more minutes to reach weekly goal</p>
        </div>

        <div className="bg-yellow-50 rounded-lg p-4">
          <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
            <Award className="h-4 w-4 mr-2" />
            Recent Achievements
          </h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Scripture Scholar</span>
              <Badge variant="outline">New!</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Prayer Warrior</span>
              <Badge variant="outline">Earned</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
