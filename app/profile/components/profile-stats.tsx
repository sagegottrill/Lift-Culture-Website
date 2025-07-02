import { Card, CardContent } from "@/components/ui/card"
import { Target, Flame, Award, Heart, TrendingUp, Calendar } from "lucide-react"

const stats = [
  {
    icon: Target,
    label: "Workouts Completed",
    value: "127",
    change: "+12 this week",
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    icon: Flame,
    label: "Current Streak",
    value: "15",
    change: "days",
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    icon: Award,
    label: "Achievements",
    value: "23",
    change: "badges earned",
    color: "text-yellow-600",
    bg: "bg-yellow-100",
  },
  {
    icon: Heart,
    label: "Faith Sessions",
    value: "89",
    change: "+5 this week",
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
  {
    icon: TrendingUp,
    label: "Progress Score",
    value: "92%",
    change: "+8% this month",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Calendar,
    label: "Active Days",
    value: "45",
    change: "this month",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
]

export function ProfileStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="glass border-0 shadow-lg luxury-hover">
          <CardContent className="p-4 text-center">
            <div className={`w-12 h-12 ${stat.bg} rounded-full flex items-center justify-center mx-auto mb-3`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-xs text-gray-600 mb-1">{stat.label}</div>
            <div className="text-xs text-gray-500">{stat.change}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
