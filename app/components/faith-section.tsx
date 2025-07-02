import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, BookOpen, Sun } from "lucide-react"
import Link from "next/link"

export function FaithSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Nourish Your Spirit</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Integrate faith into your wellness journey with daily devotionals, scripture-based motivation, and spiritual
            growth resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="text-center bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sun className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Daily Devotionals</h3>
              <p className="text-gray-600">Start each day with inspiring scripture and faith-based motivation</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Scripture Integration</h3>
              <p className="text-gray-600">Receive personalized verses that align with your fitness goals</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Spiritual Growth</h3>
              <p className="text-gray-600">Track your spiritual journey alongside your physical transformation</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 mb-6 italic">
              "She is clothed with strength and dignity; she can laugh at the days to come."
            </blockquote>
            <cite className="text-lg text-purple-600 font-medium">Proverbs 31:25</cite>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent"
              >
                <Link href="/faith">Explore Faith Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
