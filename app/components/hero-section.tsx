import { Button } from "@/components/ui/button"
import { Play, ArrowRight, Sparkles, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-stone-50 via-rose-50 to-purple-50 overflow-hidden">
      {/* Floating elements with enhanced animations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse float" />
        <div className="absolute bottom-32 right-16 w-24 h-24 bg-pink-200/40 rounded-full blur-lg animate-bounce" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-200/20 rounded-full blur-md animate-ping" />
        <div
          className="absolute top-1/3 right-1/3 w-8 h-8 bg-purple-300/40 rounded-full blur-sm float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {/* Premium badge with enhanced styling */}
            <div className="inline-flex items-center px-6 py-3 glass rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
              <Sparkles className="h-4 w-4 text-purple-600 mr-2 animate-pulse" />
              <span className="text-sm font-semibold text-purple-800">Premium Wellness Experience</span>
              <div className="ml-2 flex space-x-1">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              <span className="block text-gray-900 mb-2">Elevate Your</span>
              <span className="block gradient-text animate-pulse">Body, Mind & Spirit</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-lg">
              Where premium activewear meets AI-powered coaching and faith-based wellness. Your transformation journey
              starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 luxury-hover group px-8 py-4 text-lg font-semibold"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 glass luxury-hover group px-8 py-4 text-lg font-semibold bg-transparent"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Story
              </Button>
            </div>

            {/* Enhanced stats with animations */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: "10K+", label: "Active Members", color: "text-purple-600" },
                { number: "50K+", label: "Workouts Completed", color: "text-pink-600" },
                { number: "98%", label: "Satisfaction Rate", color: "text-green-600" },
              ].map((stat, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div
                    className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                  <div className="w-8 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Enhanced hero image with multiple layers */}
            <div className="relative aspect-square">
              {/* Background glow effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl animate-pulse" />
              <div className="absolute inset-2 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-3xl blur-lg" />

              {/* Main image container */}
              <div className="relative glass rounded-3xl shadow-2xl overflow-hidden luxury-hover">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Li Culture Premium Experience"
                  className="w-full h-full object-cover"
                />
                {/* Enhanced overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 via-transparent to-pink-900/10" />

                {/* Floating elements on image */}
                <div className="absolute top-6 left-6 glass rounded-full p-3 float">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </div>

            {/* Enhanced floating status card */}
            <div className="absolute -bottom-6 -right-6 glass rounded-2xl p-6 shadow-2xl border border-purple-100 luxury-hover">
              <div className="flex items-center space-x-3">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse glow" />
                <div>
                  <div className="font-bold text-gray-900">AI Coach Active</div>
                  <div className="text-sm text-gray-600">Ready for your session</div>
                </div>
              </div>
              <div className="mt-3 flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <span className="text-xs text-gray-500">+1.2K active now</span>
              </div>
            </div>

            {/* Enhanced achievement badge */}
            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl p-4 shadow-lg rotate-12 hover:rotate-0 transition-transform duration-300 cursor-pointer">
              <div className="text-white font-bold text-sm flex items-center">
                <Star className="h-4 w-4 mr-1 fill-current" />
                Premium Member
              </div>
            </div>

            {/* New floating testimonial */}
            <div
              className="absolute top-1/4 -left-8 glass rounded-xl p-4 shadow-lg max-w-48 float"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                <div>
                  <div className="text-xs font-semibold">Sarah M.</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-600">"Life-changing experience!"</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
