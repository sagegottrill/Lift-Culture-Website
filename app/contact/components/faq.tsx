"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "What makes Li Culture different from other activewear brands?",
    answer:
      "Li Culture uniquely combines premium activewear with AI-powered coaching and faith-based wellness. We're not just selling clothes—we're building a community focused on holistic transformation of body, mind, and spirit.",
  },
  {
    question: "How does the AI coaching work?",
    answer:
      "Our AI coach creates personalized workout plans, nutrition guidance, and spiritual practices based on your goals, preferences, and progress. It adapts in real-time to help you achieve optimal results while staying true to your values.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all unworn items with original tags. If you're not completely satisfied with your purchase, we'll provide a full refund or exchange.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Currently, we ship within the United States and Canada. We're working on expanding to international markets and will update our community when new regions become available.",
  },
  {
    question: "How can I join the Li Culture community?",
    answer:
      "Simply create an account on our website to access our community features, including challenges, prayer circles, success stories, and exclusive member content. Premium members get additional benefits and early access to new products.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Card key={index} className="glass border-0 shadow-lg">
            <CardContent className="p-0">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
