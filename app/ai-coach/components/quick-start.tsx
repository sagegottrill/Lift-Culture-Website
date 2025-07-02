import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Clock, Target, Zap } from "lucide-react"

const quickWorkouts = [
  {
    title: "10-Min Morning Boost",
    duration: "10 min",
    difficulty: "Beginner",
    type: "Cardio",
    icon: Zap,
  },
  {
    title: "Strength & Faith",
    duration: "20 min",
    difficulty: "Intermediate",
    type: "Strength",
    icon: Target,
  },
  {
    title: "Mindful Movement",
    duration: "15 min",
    difficulty: "All Levels",
    type: "Yoga",
    icon: Clock,
  },
]

export function QuickStart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Play className="h-5 w-5 mr-2 text-purple-600" />
          Quick Start Workouts
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickWorkouts.map((workout, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <workout.icon className="h-6 w-6 text-purple-600" />
                <span className="text-sm font-medium text-purple-600">{workout.type}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{workout.title}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                <span>{workout.duration}</span>
                <span>{workout.difficulty}</span>
              </div>
              <Button size="sm" className="w-full bg-purple-600 hover:bg-purple-700">
                Start Now
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
