"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { newsletterSchema, type NewsletterFormData } from "@/lib/validation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { FormError } from "@/components/ui/form-error"
import { FormSuccess } from "@/components/ui/form-success"
import { Mail, Sparkles, Gift, Zap, Heart } from "lucide-react"

interface NewsletterSignupProps {
  variant?: "default" | "compact" | "footer"
  className?: string
}

export function NewsletterSignup({ variant = "default", className = "" }: NewsletterSignupProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string>("")
  const [success, setSuccess] = useState<string>("")

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  })

  const onSubmit = async (data: NewsletterFormData) => {
    setIsLoading(true)
    setError("")
    setSuccess("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))
      setSuccess("Welcome to Li Culture! Check your email for a special welcome gift.")
      reset()
    } catch (err) {
      setError("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  if (variant === "compact") {
    return (
      <div className={`glass rounded-2xl p-6 ${className}`}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
            <Mail className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Stay Connected</h3>
            <p className="text-sm text-gray-600">Get exclusive updates & offers</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}

          <div className="flex space-x-2">
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className={`glass ${errors.email ? "border-red-500" : ""}`}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 whitespace-nowrap"
            >
              {isLoading ? "..." : "Join"}
            </Button>
          </div>
          <FormError message={errors.email?.message} />
        </form>
      </div>
    )
  }

  if (variant === "footer") {
    return (
      <div className={className}>
        <h3 className="font-bold text-white mb-4">Join Our Community</h3>
        <p className="text-gray-300 mb-4">
          Get exclusive access to new products, wellness tips, and faith-based inspiration.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          {error && <FormError message={error} />}
          {success && <FormSuccess message={success} />}

          <div className="flex space-x-2">
            <Input
              {...register("email")}
              type="email"
              placeholder="Enter your email"
              className={`glass bg-white/10 border-white/20 text-white placeholder:text-gray-300 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
            >
              {isLoading ? "Joining..." : "Subscribe"}
            </Button>
          </div>
          <FormError message={errors.email?.message} />
        </form>
      </div>
    )
  }

  // Default variant
  return (
    <Card className={`glass border-0 shadow-2xl overflow-hidden ${className}`}>
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 text-white">
          <div className="flex items-center space-x-3 mb-4">
            <Sparkles className="h-8 w-8" />
            <div>
              <h2 className="text-2xl font-bold">Join Li Culture</h2>
              <p className="text-purple-100">Transform your wellness journey</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <Gift className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
              <p className="text-sm">Exclusive Offers</p>
            </div>
            <div className="text-center">
              <Zap className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
              <p className="text-sm">Wellness Tips</p>
            </div>
            <div className="text-center">
              <Heart className="h-6 w-6 mx-auto mb-2 text-yellow-300" />
              <p className="text-sm">Faith Inspiration</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {error && <FormError message={error} />}
            {success && <FormSuccess message={success} />}

            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email address"
                  className={`pl-12 h-12 glass border-gray-200 focus:border-purple-500 focus:ring-purple-500 ${
                    errors.email ? "border-red-500" : ""
                  }`}
                />
              </div>
              <FormError message={errors.email?.message} />
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-700">I'm interested in:</p>
              <div className="grid grid-cols-2 gap-3">
                {["Fitness Tips", "New Products", "Faith Content", "Community Events"].map((interest) => (
                  <label key={interest} className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      value={interest}
                      {...register("preferences")}
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <span className="text-sm text-gray-600">{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-lg luxury-hover"
            >
              {isLoading ? "Joining Li Culture..." : "Join Li Culture"}
            </Button>

            <p className="text-xs text-gray-500 text-center">
              By subscribing, you agree to our{" "}
              <a href="/privacy" className="text-purple-600 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="/terms" className="text-purple-600 hover:underline">
                Terms of Service
              </a>
              . Unsubscribe anytime.
            </p>
          </form>
        </div>
      </CardContent>
    </Card>
  )
}
