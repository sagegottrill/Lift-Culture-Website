import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Calendar } from "lucide-react"

export function ProgressTracking() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
          Progress Overview
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-green-800">This Week</span>
            <span className="text-sm text-green-600">+15%</span>
          </div>
          <div className="text-2xl font-bold text-green-900">4 workouts</div>
          <div className="text-sm text-green-700">2 more than last week</div>
        </div>

        <div className="bg-purple-50 rounded-lg p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-purple-800">This Month</span>
            <span className="text-sm text-purple-600">Goal: 16/20</span>
          </div>
          <div className="text-2xl font-bold text-purple-900">16 workouts</div>
          <div className="text-sm text-purple-700">80% of monthly goal</div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Weight Loss</span>
            <span className="text-sm text-green-600">-3.2 lbs</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Muscle Gain</span>
            <span className="text-sm text-blue-600">+1.1 lbs</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Body Fat</span>
            <span className="text-sm text-red-600">-2.1%</span>
          </div>
        </div>

        <Button className="w-full bg-transparent" variant="outline">
          <Calendar className="h-4 w-4 mr-2" />
          View Detailed Analytics
        </Button>
      </CardContent>
    </Card>
  )
}
