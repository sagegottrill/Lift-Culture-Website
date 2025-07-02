import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Share2 } from "lucide-react"

export function DailyDevotional() {
  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-purple-600" />
          Today's Devotional
        </CardTitle>
        <div className="flex items-center text-sm text-gray-500">
          <Calendar className="h-4 w-4 mr-1" />
          {new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-purple-900 mb-4">Strength in His Promises</h3>
          <blockquote className="text-lg text-purple-800 italic mb-4">
            "She is clothed with strength and dignity; she can laugh at the days to come."
          </blockquote>
          <cite className="text-purple-600 font-medium">Proverbs 31:25</cite>
        </div>

        <div className="prose prose-gray max-w-none">
          <p>
            Today, remember that your strength comes not from your own abilities, but from the One who created you. As
            you move your body and challenge yourself physically, know that you are honoring the temple God has given
            you.
          </p>
          <p>
            Every rep, every step, every moment of discipline is an act of worship. You are not just building muscle or
            losing weight—you are developing the character of Christ within you. Strength and dignity are yours because
            He has clothed you with them.
          </p>
          <p>
            <strong>Prayer:</strong> Lord, help me to see my fitness journey as part of my spiritual growth. Give me
            strength for today's challenges and help me to laugh with confidence at tomorrow's, knowing You are with me.
            Amen.
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Button className="bg-purple-600 hover:bg-purple-700">Mark as Read</Button>
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
