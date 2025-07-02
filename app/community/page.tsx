import { CommunityFeed } from "./components/community-feed"
import { ActiveChallenges } from "./components/active-challenges"
import { PrayerCircle } from "./components/prayer-circle"
import { SuccessStories } from "./components/success-stories"

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Community</h1>
          <p className="text-gray-600">Connect, inspire, and grow together in faith and fitness</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <ActiveChallenges />
            <CommunityFeed />
          </div>
          <div className="space-y-8">
            <PrayerCircle />
            <SuccessStories />
          </div>
        </div>
      </div>
    </div>
  )
}
