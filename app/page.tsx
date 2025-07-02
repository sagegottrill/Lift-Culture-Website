import { HeroSection } from "./components/hero-section"
import { FeaturedProducts } from "./components/featured-products"
import { AICoachPreview } from "./components/ai-coach-preview"
import { CommunityHighlights } from "./components/community-highlights"
import { FaithSection } from "./components/faith-section"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function HomePage() {
  return (
    <div className="pb-16 md:pb-0">
      <HeroSection />
      <FeaturedProducts />
      <AICoachPreview />
      <CommunityHighlights />
      <FaithSection />

      {/* Newsletter Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}
