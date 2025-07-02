import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Trophy, MessageCircle } from "lucide-react"
import Link from "next/link"

const highlights = [
  {
    title: "30-Day Challenge",
    participants: 1250,
    description: "Join our faith-based fitness challenge",
    icon: Trophy,
    color: "bg-yellow-100 text-yellow-800",
  },
  {
    title: "Weekly Prayer Circle",
    participants: 890,
    description: "Community prayer and motivation",
    icon: Users,
    color: "bg-purple-100 text-purple-800",
  },
  {
    title: "Success Stories",
    participants: 2340,
    description: "Share your transformation journey",
    icon: MessageCircle,
    color: "bg-green-100 text-green-800",
  },
]

export function CommunityHighlights() {
  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Join Our Community</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with like-minded individuals on a journey of faith, fitness, and personal growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-16 h-16 rounded-full ${highlight.color} flex items-center justify-center mx-auto`}>
                  <highlight.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{highlight.description}</p>
                <div className="flex items-center justify-center text-sm text-gray-500">
                  <Users className="h-4 w-4 mr-1" />
                  {highlight.participants.toLocaleString()} participants
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/community">Join Community</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
