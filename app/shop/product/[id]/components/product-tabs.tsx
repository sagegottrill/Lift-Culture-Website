"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const tabs = [
  { id: "description", label: "Description" },
  { id: "fit", label: "Fit & Care" },
  { id: "materials", label: "Materials" },
  { id: "faith", label: "Faith Story" },
]

export function ProductTabs() {
  const [activeTab, setActiveTab] = useState("description")

  return (
    <div className="mb-16">
      {/* Tab Navigation */}
      <div className="flex space-x-1 bg-gray-100 rounded-lg p-1 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
              activeTab === tab.id ? "bg-white text-purple-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardContent className="p-8">
          {activeTab === "description" && (
            <div className="prose prose-gray max-w-none">
              <h3>Elevate Your Performance</h3>
              <p>
                Our Elevation Performance Leggings are more than just activewear—they're a testament to your commitment
                to excellence in body, mind, and spirit. Crafted with premium four-way stretch fabric, these leggings
                move with you through every squat, lunge, and leap of faith.
              </p>
              <h4>Key Features:</h4>
              <ul>
                <li>Moisture-wicking technology keeps you dry and comfortable</li>
                <li>High-waisted design for optimal support and coverage</li>
                <li>Hidden pocket for essentials</li>
                <li>Flatlock seams prevent chafing</li>
                <li>Faith-inspired design elements</li>
              </ul>
            </div>
          )}

          {activeTab === "fit" && (
            <div className="prose prose-gray max-w-none">
              <h3>Fit Guide</h3>
              <p>These leggings feature a compression fit that's designed to feel like a second skin.</p>
              <h4>Care Instructions:</h4>
              <ul>
                <li>Machine wash cold with like colors</li>
                <li>Do not bleach or use fabric softener</li>
                <li>Tumble dry low or hang dry</li>
                <li>Do not iron or dry clean</li>
              </ul>
            </div>
          )}

          {activeTab === "materials" && (
            <div className="prose prose-gray max-w-none">
              <h3>Premium Materials</h3>
              <p>We believe in using only the finest materials for our activewear.</p>
              <ul>
                <li>75% Recycled Polyester - Sustainable and durable</li>
                <li>25% Spandex - Four-way stretch for ultimate flexibility</li>
                <li>Moisture-wicking finish</li>
                <li>UPF 50+ sun protection</li>
                <li>Antimicrobial treatment</li>
              </ul>
            </div>
          )}

          {activeTab === "faith" && (
            <div className="prose prose-gray max-w-none">
              <h3>The Story Behind the Design</h3>
              <p>
                Every piece in our collection is inspired by scripture and designed to remind you of your strength and
                purpose. The Elevation leggings feature subtle design elements inspired by Philippians 4:13: "I can do
                all things through Christ who strengthens me."
              </p>
              <blockquote>
                "She is clothed with strength and dignity; she can laugh at the days to come." - Proverbs 31:25
              </blockquote>
              <p>
                When you wear Li Culture, you're not just wearing activewear—you're wearing a reminder of your identity
                and calling.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
