import { DailyDevotional } from "./components/daily-devotional"
import { ScriptureLibrary } from "./components/scripture-library"
import { SpiritualProgress } from "./components/spiritual-progress"
import { FaithCommunity } from "./components/faith-community"

export default function FaithPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Faith & Wellness</h1>
          <p className="text-gray-600">Strengthen your spirit while building your body</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DailyDevotional />
            <ScriptureLibrary />
          </div>
          <div className="space-y-8">
            <SpiritualProgress />
            <FaithCommunity />
          </div>
        </div>
      </div>
    </div>
  )
}
