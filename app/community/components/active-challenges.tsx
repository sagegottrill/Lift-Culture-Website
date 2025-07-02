import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Trophy, Users, Calendar, Target } from "lucide-react"

const challenges = [
  {
    title: "30-Day Faith & Fitness Challenge",
    participants: 1250,
    daysLeft: 12,
    description: "Complete daily workouts while studying scripture about strength and perseverance.",
    reward: "$50 Li Culture Gift Card",
    joined: true,
  },
  {
    title: "Gratitude & Gains",
    participants: 890,
    daysLeft: 5,
    description: "Share daily gratitude posts while maintaining your workout streak.",
    reward: "Exclusive Community Badge",
    joined: false,
  },
  {
    title: "Prayer Walk Warriors",
    participants: 654,
    daysLeft: 18,
    description: "Combine prayer and walking for spiritual and physical wellness.",
    reward: "Free Personal Training Session",
    joined: false,
  },
]

export function ActiveChallenges() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
          Active Challenges
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{challenge.title}</h3>
                  <p className="text-gray-600 mb-3">{challenge.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {challenge.participants.toLocaleString()} participants
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {challenge.daysLeft} days left
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2 mt-4 sm:mt-0">
                  {challenge.joined ? (
                    <Badge className="bg-green-100 text-green-800">Joined</Badge>
                  ) : (
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                      Join Challenge
                    </Button>
                  )}
                </div>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3">
                <div className="flex items-center">
                  <Target className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm font-medium text-yellow-800">Reward: {challenge.reward}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
