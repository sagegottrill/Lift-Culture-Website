import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star } from "lucide-react"

const workoutPlans = [
  {
    title: "Beginner's Faith Fitness",
    duration: "4 weeks",
    difficulty: "Beginner",
    sessions: 12,
    rating: 4.9,
    description: "Start your fitness journey with faith-based motivation and gentle movements.",
    features: ["Daily devotionals", "Basic exercises", "Flexibility focus"],
  },
  {
    title: "Strength & Scripture",
    duration: "6 weeks",
    difficulty: "Intermediate",
    sessions: 18,
    rating: 4.8,
    description: "Build physical and spiritual strength with targeted workouts and Bible study.",
    features: ["Strength training", "Scripture meditation", "Progress tracking"],
  },
  {
    title: "Warrior Mindset",
    duration: "8 weeks",
    difficulty: "Advanced",
    sessions: 24,
    rating: 4.7,
    description: "Intense training program designed to build mental and physical resilience.",
    features: ["High-intensity workouts", "Mental toughness", "Leadership principles"],
  },
]

export function WorkoutPlans() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Workout Plans</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {workoutPlans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{plan.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {plan.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {plan.sessions} sessions
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-400" />
                      {plan.rating}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 sm:mt-0">
                  <Badge
                    variant={
                      plan.difficulty === "Beginner"
                        ? "secondary"
                        : plan.difficulty === "Intermediate"
                          ? "default"
                          : "destructive"
                    }
                  >
                    {plan.difficulty}
                  </Badge>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Start Plan
                  </Button>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="flex flex-wrap gap-2">
                {plan.features.map((feature, featureIndex) => (
                  <Badge key={featureIndex} variant="outline">
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
