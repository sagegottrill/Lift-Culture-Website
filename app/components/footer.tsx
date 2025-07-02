import { NewsletterSignup } from "@/components/newsletter-signup"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube, Heart, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Join thousands of women on their wellness journey. Get exclusive access to new products, workout tips,
                and faith-based inspiration delivered to your inbox.
              </p>
            </div>
            <div>
              <NewsletterSignup variant="footer" />
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LC</span>
                </div>
                <span className="font-bold text-xl">Li Culture</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Empowering women to strengthen body, mind, and spirit through premium activewear, AI-powered coaching,
                and faith-based community.
              </p>
              <div className="flex space-x-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Youtube, href: "#" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {[
                  { label: "Shop", href: "/shop" },
                  { label: "AI Coach", href: "/ai-coach" },
                  { label: "Community", href: "/community" },
                  { label: "Faith", href: "/faith" },
                  { label: "About Us", href: "/about" },
                  { label: "Contact", href: "/contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Care</h3>
              <ul className="space-y-2">
                {[
                  { label: "Size Guide", href: "/size-guide" },
                  { label: "Shipping & Returns", href: "/shipping" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Track Your Order", href: "/track" },
                  { label: "Gift Cards", href: "/gift-cards" },
                  { label: "Student Discount", href: "/student" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">support@liculture.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">1-800-LI-CULTURE</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-400" />
                  <span className="text-gray-300">Austin, TX</span>
                </div>
              </div>
              <div className="mt-4 p-4 bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-300 mb-2">Customer Support Hours:</p>
                <p className="text-sm text-white">Mon-Fri: 9AM-6PM CST</p>
                <p className="text-sm text-white">Sat-Sun: 10AM-4PM CST</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-300">© 2024 Li Culture. All rights reserved.</p>
              <div className="flex items-center space-x-1 text-gray-300">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-500" />
                <span>for your wellness journey</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/accessibility" className="text-gray-300 hover:text-white transition-colors text-sm">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
