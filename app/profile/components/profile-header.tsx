import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Settings, Camera, Crown, Flame } from "lucide-react"
import Link from "next/link"

export function ProfileHeader() {
  return (
    <Card className="glass border-0 shadow-lg mb-8">
      <CardContent className="p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              SM
            </div>
            <Button
              size="icon"
              className="absolute bottom-0 right-0 bg-white text-gray-600 hover:text-purple-600 shadow-lg"
            >
              <Camera className="h-4 w-4" />
            </Button>
            {/* Premium badge */}
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full p-2">
              <Crown className="h-4 w-4 text-white" />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mb-4">
              <h1 className="text-3xl font-bold text-gray-900">Sarah Mitchell</h1>
              <div className="flex items-center justify-center md:justify-start space-x-2 mt-2 md:mt-0">
                <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">Premium Member</Badge>
                <Badge variant="outline" className="border-yellow-400 text-yellow-600">
                  <Flame className="h-3 w-3 mr-1" />
                  15 Day Streak
                </Badge>
              </div>
            </div>
            <p className="text-gray-600 mb-4 max-w-2xl">
              Fitness enthusiast and faith warrior on a journey to strengthen body, mind, and spirit. Passionate about
              inspiring others through wellness and faith-based living.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Joined:</span> March 2024
              </div>
              <div className="text-sm text-gray-600">
                <span className="font-semibold">Location:</span> Austin, TX
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-3">
            <Button asChild variant="outline" className="bg-transparent">
              <Link href="/settings">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
