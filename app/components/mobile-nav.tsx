"use client"

import Link from "next/link"
import { Home, ShoppingBag, Bot, Users, Heart, Plus } from "lucide-react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <>
      {/* Floating Action Button */}
      <div className="md:hidden fixed bottom-20 right-6 z-50">
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl glow"
        >
          <Plus className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 z-40 shadow-2xl">
        <div className="grid grid-cols-5 py-2">
          {[
            { href: "/", icon: Home, label: "Home" },
            { href: "/shop", icon: ShoppingBag, label: "Shop" },
            { href: "/ai-coach", icon: Bot, label: "Coach" },
            { href: "/community", icon: Users, label: "Community" },
            { href: "/faith", icon: Heart, label: "Faith" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center py-3 px-1 transition-all duration-200 ${
                isActive(item.href) ? "text-purple-600 scale-110" : "text-gray-500 hover:text-purple-400"
              }`}
            >
              <div
                className={`p-1 rounded-full transition-all duration-200 ${isActive(item.href) ? "bg-purple-100" : ""}`}
              >
                <item.icon className="h-5 w-5 mb-1" />
              </div>
              <span className="text-xs font-medium">{item.label}</span>
              {isActive(item.href) && <div className="w-1 h-1 bg-purple-600 rounded-full mt-1" />}
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
