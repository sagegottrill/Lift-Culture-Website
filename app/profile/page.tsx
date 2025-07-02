import { ProfileHeader } from "./components/profile-header"
import { ProfileStats } from "./components/profile-stats"
import { ProfileTabs } from "./components/profile-tabs"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileHeader />
        <ProfileStats />
        <ProfileTabs />
      </div>
    </div>
  )
}
