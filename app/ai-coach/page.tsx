import { CoachDashboard } from "./components/coach-dashboard"
import { QuickStart } from "./components/quick-start"
import { WorkoutPlans } from "./components/workout-plans"
import { ProgressTracking } from "./components/progress-tracking"

export default function AICoachPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Coach</h1>
          <p className="text-gray-600">Your personalized fitness and wellness companion</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <QuickStart />
            <WorkoutPlans />
          </div>
          <div className="space-y-8">
            <CoachDashboard />
            <ProgressTracking />
          </div>
        </div>
      </div>
    </div>
  )
}
