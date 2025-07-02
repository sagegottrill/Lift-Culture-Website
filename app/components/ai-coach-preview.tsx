import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Target, Calendar, TrendingUp } from "lucide-react"

export function AICoachPreview() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Your Personal AI Coach</h2>
            <p className="text-xl text-gray-600 mb-8">
              Get personalized workout plans, nutrition guidance, and motivational support powered by advanced AI
              technology. Start your first workout in under 60 seconds.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Target className="h-5 w-5 text-purple-600 mr-2" />
                    Goal Setting
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Set personalized fitness goals and track your progress with AI insights
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center">
                    <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                    Smart Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    AI-generated meal plans and workout schedules that adapt to your lifestyle
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Link href="/ai-coach">
                  <Play className="mr-2 h-5 w-5" />
                  Start First Workout
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/ai-coach/demo">Try Demo</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-gray-900">Today's Workout</h3>
                    <div className="flex items-center text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      <span className="text-sm font-medium">On track</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Push-ups</span>
                      <span className="text-sm font-medium">15/15 ✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Squats</span>
                      <span className="text-sm font-medium">20/20 ✓</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Plank</span>
                      <span className="text-sm font-medium">30s/60s</span>
                    </div>
                  </div>
                  <div className="mt-4 bg-purple-50 rounded-lg p-3">
                    <p className="text-sm text-purple-800">
                      💪 Great form! Try holding your plank for 10 more seconds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
