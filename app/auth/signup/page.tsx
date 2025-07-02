import { SignupForm } from "./components/signup-form"
import { SocialLogin } from "../login/components/social-login"
import Link from "next/link"
import { ArrowLeft, Sparkles, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-200/40 rounded-full blur-lg float" />
      </div>

      <div className="relative w-full max-w-md">
        {/* Back button */}
        <Button asChild variant="ghost" className="absolute -top-16 left-0 text-gray-600 hover:text-purple-600">
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        {/* Signup Card */}
        <div className="glass rounded-3xl shadow-2xl p-8 border border-white/20">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 glass rounded-full mb-4">
              <Sparkles className="h-4 w-4 text-purple-600 mr-2" />
              <span className="text-sm font-semibold text-purple-800">Join Li Culture</span>
              <div className="ml-2 flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
            <p className="text-gray-600">Start your transformation journey today</p>
          </div>

          {/* Social Login */}
          <SocialLogin />

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">or create with email</span>
            </div>
          </div>

          {/* Signup Form */}
          <SignupForm />

          {/* Footer */}
          <div className="text-center mt-6">
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <Link href="/auth/login" className="font-semibold text-purple-600 hover:text-purple-700">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
