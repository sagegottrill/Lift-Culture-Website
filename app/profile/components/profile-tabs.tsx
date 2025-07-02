"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Award, ShoppingBag, Heart, Star, Play } from "lucide-react"

const tabs = [
  { id: "activity", label: "Activity", icon: Calendar },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "orders", label: "Orders", icon: ShoppingBag },
  { id: "favorites", label: "Favorites", icon: Heart },
]

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("activity")

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-md font-medium transition-all whitespace-nowrap ${
              activeTab === tab.id ? "bg-white text-purple-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-6">
        {activeTab === "activity" && <ActivityContent />}
        {activeTab === "achievements" && <AchievementsContent />}
        {activeTab === "orders" && <OrdersContent />}
        {activeTab === "favorites" && <FavoritesContent />}
      </div>
    </div>
  )
}

function ActivityContent() {
  const activities = [
    {
      type: "workout",
      title: "Completed Strength & Scripture",
      time: "2 hours ago",
      details: "45 min session • 320 calories burned",
    },
    {
      type: "faith",
      title: "Daily Devotional Read",
      time: "This morning",
      details: "Proverbs 31:25 • 5 min reflection",
    },
    {
      type: "achievement",
      title: "Earned 15-Day Streak Badge",
      time: "Yesterday",
      details: "Consistency milestone reached",
    },
  ]

  return (
    <div className="space-y-4">
      {activities.map((activity, index) => (
        <Card key={index} className="glass border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  activity.type === "workout"
                    ? "bg-purple-100 text-purple-600"
                    : activity.type === "faith"
                      ? "bg-pink-100 text-pink-600"
                      : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {activity.type === "workout" && <Play className="h-5 w-5" />}
                {activity.type === "faith" && <Heart className="h-5 w-5" />}
                {activity.type === "achievement" && <Award className="h-5 w-5" />}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{activity.details}</p>
                <p className="text-xs text-gray-500 mt-2">{activity.time}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function AchievementsContent() {
  const achievements = [
    {
      title: "15-Day Streak",
      description: "Completed workouts for 15 consecutive days",
      earned: true,
      date: "Yesterday",
    },
    {
      title: "Faith Warrior",
      description: "Completed 50 faith-based sessions",
      earned: true,
      date: "Last week",
    },
    {
      title: "Goal Crusher",
      description: "Achieved monthly fitness goal",
      earned: true,
      date: "2 weeks ago",
    },
    {
      title: "30-Day Challenge",
      description: "Complete the 30-day transformation challenge",
      earned: false,
      progress: 75,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((achievement, index) => (
        <Card key={index} className={`glass border-0 shadow-lg ${achievement.earned ? "" : "opacity-75"}`}>
          <CardContent className="p-6 text-center">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                achievement.earned ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-400"
              }`}
            >
              <Award className="h-8 w-8" />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">{achievement.title}</h3>
            <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
            {achievement.earned ? (
              <Badge className="bg-green-100 text-green-800">Earned {achievement.date}</Badge>
            ) : (
              <div className="space-y-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${achievement.progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500">{achievement.progress}% complete</p>
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function OrdersContent() {
  const orders = [
    {
      id: "#LC-2024-001",
      date: "March 15, 2024",
      total: 154.0,
      status: "Delivered",
      items: ["Elevation Performance Leggings", "Faith & Fitness Sports Bra"],
    },
    {
      id: "#LC-2024-002",
      date: "March 8, 2024",
      total: 89.0,
      status: "Processing",
      items: ["Mindful Movement Hoodie"],
    },
  ]

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <Card key={order.id} className="glass border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-lg text-gray-900">{order.id}</h3>
                <p className="text-sm text-gray-600">{order.date}</p>
              </div>
              <div className="text-right">
                <div className="font-bold text-lg">${order.total.toFixed(2)}</div>
                <Badge
                  className={
                    order.status === "Delivered" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                  }
                >
                  {order.status}
                </Badge>
              </div>
            </div>
            <div className="space-y-1">
              {order.items.map((item, index) => (
                <p key={index} className="text-sm text-gray-600">
                  • {item}
                </p>
              ))}
            </div>
            <div className="flex space-x-2 mt-4">
              <Button size="sm" variant="outline" className="bg-transparent">
                View Details
              </Button>
              {order.status === "Delivered" && (
                <Button size="sm" variant="outline" className="bg-transparent">
                  Reorder
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

function FavoritesContent() {
  const favorites = [
    {
      id: 1,
      name: "Elevation Performance Leggings",
      price: 89,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Faith & Fitness Sports Bra",
      price: 65,
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map((item) => (
        <Card key={item.id} className="glass border-0 shadow-lg luxury-hover group cursor-pointer">
          <CardContent className="p-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{item.name}</h3>
            <div className="flex items-center mb-3">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-3 w-3 ${i < Math.floor(item.rating) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                  />
                ))}
                <span className="text-xs text-gray-600 ml-1">{item.rating}</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold text-lg">${item.price}</span>
              <Button
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                Add to Cart
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
