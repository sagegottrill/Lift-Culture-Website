import { Card, CardContent } from "@/components/ui/card"
import { Heart, Target, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">Our Story</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Li Culture was born from a simple belief: that true wellness encompasses body, mind, and spirit. We're more
            than just an activewear brand—we're a community dedicated to holistic transformation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              To empower individuals on their wellness journey by providing premium activewear, AI-powered coaching, and
              faith-based community support. We believe that when you strengthen your body, nurture your mind, and feed
              your spirit, you unlock your true potential.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every piece we create, every workout we design, and every community interaction we foster is guided by our
              core values of excellence, authenticity, and faith.
            </p>
          </div>
          <div className="glass rounded-2xl p-8">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Li Culture Mission"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: Heart,
              title: "Faith-Centered",
              description: "Integrating spiritual wellness into every aspect of your fitness journey",
              color: "text-pink-600",
              bg: "bg-pink-100",
            },
            {
              icon: Target,
              title: "Goal-Oriented",
              description: "AI-powered coaching that adapts to your unique goals and progress",
              color: "text-purple-600",
              bg: "bg-purple-100",
            },
            {
              icon: Users,
              title: "Community-Driven",
              description: "Building connections that inspire, motivate, and support your growth",
              color: "text-blue-600",
              bg: "bg-blue-100",
            },
            {
              icon: Award,
              title: "Excellence",
              description: "Premium quality in everything we do, from products to experiences",
              color: "text-yellow-600",
              bg: "bg-yellow-100",
            },
          ].map((value, index) => (
            <Card key={index} className="glass border-0 shadow-lg luxury-hover text-center">
              <CardContent className="p-6">
                <div className={`w-16 h-16 ${value.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className={`h-8 w-8 ${value.color}`} />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Founder & CEO",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Former fitness trainer turned entrepreneur, passionate about faith-based wellness.",
              },
              {
                name: "Michael Chen",
                role: "Head of AI Development",
                image: "/placeholder.svg?height=300&width=300",
                bio: "AI specialist focused on creating personalized wellness experiences.",
              },
              {
                name: "Emma Rodriguez",
                role: "Community Manager",
                image: "/placeholder.svg?height=300&width=300",
                bio: "Building connections and fostering growth within our community.",
              },
            ].map((member, index) => (
              <Card key={index} className="glass border-0 shadow-lg luxury-hover">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mx-auto mb-4 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-purple-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
