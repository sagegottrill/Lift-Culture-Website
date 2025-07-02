import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Flame, Award, Calendar, Target, Heart, Zap } from "lucide-react"

// Ring Progress Component
function RingProgress({
  progress,
  size = 120,
  strokeWidth = 8,
  color = "#8B5CF6",
}: {
  progress: number
  size?: number
  strokeWidth?: number
  color?: string
}) {
  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="ring-progress">
        <circle cx={size / 2} cy={size / 2} r={radius} stroke="#E5E7EB" strokeWidth={strokeWidth} fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-gray-900">{progress}%</div>
        </div>
      </div>
    </div>
  )
}

export function CoachDashboard() {
  return (
    <div className="space-y-6 font-premium">
      {/* Main Progress Ring */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-lg">
        <CardHeader className="text-center pb-2">
          <CardTitle className="flex items-center justify-center">
            <Target className="h-5 w-5 mr-2 text-purple-600" />
            Today's Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="flex justify-center mb-4">
            <RingProgress progress={75} size={140} strokeWidth={12} color="#8B5CF6" />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-lg font-bold text-purple-600">2/3</div>
              <div className="text-xs text-gray-600">Workouts</div>
            </div>
            <div>
              <div className="text-lg font-bold text-pink-600">450</div>
              <div className="text-xs text-gray-600">Calories</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600">6/8</div>
              <div className="text-xs text-gray-600">Water</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mini Progress Rings */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-4 text-center">
            <RingProgress progress={85} size={80} strokeWidth={6} color="#10B981" />
            <div className="mt-2">
              <div className="font-semibold text-sm">Fitness</div>
              <div className="text-xs text-gray-600">85% complete</div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-4 text-center">
            <RingProgress progress={92} size={80} strokeWidth={6} color="#F59E0B" />
            <div className="mt-2">
              <div className="font-semibold text-sm">Spiritual</div>
              <div className="text-xs text-gray-600">92% complete</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Streak Card */}
      <Card className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0 shadow-lg">
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Flame className="h-8 w-8 mr-3" />
              <div>
                <div className="font-bold text-lg">5 Day Streak!</div>
                <div className="text-sm opacity-90">Keep it going</div>
              </div>
            </div>
            <div className="text-3xl font-bold">🔥</div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button className="w-full justify-start bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            <Zap className="h-4 w-4 mr-2" />
            Start Quick Workout
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Heart className="h-4 w-4 mr-2" />
            Log Spiritual Practice
          </Button>
          <Button variant="outline" className="w-full justify-start bg-transparent">
            <Calendar className="h-4 w-4 mr-2" />
            View Weekly Plan
          </Button>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center text-lg">
            <Award className="h-5 w-5 mr-2 text-yellow-600" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { icon: Flame, title: "5 Day Streak", color: "text-orange-600", bg: "bg-orange-100", isNew: true },
              { icon: Target, title: "Goal Crusher", color: "text-purple-600", bg: "bg-purple-100", isNew: false },
              { icon: Heart, title: "Faith Warrior", color: "text-pink-600", bg: "bg-pink-100", isNew: false },
            ].map((achievement, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 ${achievement.bg} rounded-full flex items-center justify-center mr-3`}>
                    <achievement.icon className={`h-5 w-5 ${achievement.color}`} />
                  </div>
                  <span className="font-medium">{achievement.title}</span>
                </div>
                {achievement.isNew && (
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white border-0">New!</Badge>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
