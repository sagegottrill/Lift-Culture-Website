"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, X, Clock, TrendingUp } from "lucide-react"

interface SearchHeaderProps {
  initialQuery: string
}

export function SearchHeader({ initialQuery }: SearchHeaderProps) {
  const [query, setQuery] = useState(initialQuery)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [recentSearches] = useState(["leggings", "sports bra", "yoga mat", "hoodie"])
  const [trendingSearches] = useState(["faith fitness", "mindful movement", "elevation series"])

  const router = useRouter()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (query.length > 2) {
      // Simulate API call for suggestions
      const mockSuggestions = [
        "elevation performance leggings",
        "faith & fitness sports bra",
        "mindful movement hoodie",
        "serenity yoga shorts",
      ].filter((item) => item.toLowerCase().includes(query.toLowerCase()))

      setSuggestions(mockSuggestions)
      setShowSuggestions(true)
    } else {
      setShowSuggestions(false)
    }
  }, [query])

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      const params = new URLSearchParams(searchParams.toString())
      params.set("q", searchQuery.trim())
      router.push(`/search?${params.toString()}`)
      setShowSuggestions(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch(query)
  }

  return (
    <div className="mb-8">
      <div className="relative max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products, categories, or brands..."
              className="pl-12 pr-12 h-14 text-lg glass border-gray-200 focus:border-purple-500 focus:ring-purple-500"
              onFocus={() => query.length > 2 && setShowSuggestions(true)}
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("")
                  setShowSuggestions(false)
                }}
                className="absolute right-12 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            <Button
              type="submit"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </form>

        {/* Search Suggestions Dropdown */}
        {showSuggestions && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
            {suggestions.length > 0 && (
              <div className="p-4 border-b">
                <h4 className="font-semibold text-gray-900 mb-2">Suggestions</h4>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(suggestion)}
                    className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md text-gray-700"
                  >
                    <Search className="h-4 w-4 inline mr-3 text-gray-400" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}

            {!query && (
              <>
                <div className="p-4 border-b">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Recent Searches
                  </h4>
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md text-gray-700"
                    >
                      {search}
                    </button>
                  ))}
                </div>

                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Trending
                  </h4>
                  {trendingSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearch(search)}
                      className="block w-full text-left px-3 py-2 hover:bg-gray-50 rounded-md text-gray-700"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {initialQuery && (
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Showing results for <span className="font-semibold">"{initialQuery}"</span>
          </p>
        </div>
      )}
    </div>
  )
}
