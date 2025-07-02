import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Heart, Bookmark } from "lucide-react"
import { Input } from "@/components/ui/input"

const scriptures = [
  {
    verse: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
    category: "Strength",
    saved: true,
  },
  {
    verse: "Therefore, do not worry about tomorrow, for tomorrow will worry about itself.",
    reference: "Matthew 6:34",
    category: "Peace",
    saved: false,
  },
  {
    verse: "Do you not know that your bodies are temples of the Holy Spirit?",
    reference: "1 Corinthians 6:19",
    category: "Health",
    saved: true,
  },
  {
    verse: "She is clothed with strength and dignity; she can laugh at the days to come.",
    reference: "Proverbs 31:25",
    category: "Confidence",
    saved: false,
  },
]

const categories = ["All", "Strength", "Peace", "Health", "Confidence", "Perseverance", "Joy"]

export function ScriptureLibrary() {
  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle>Scripture Library</CardTitle>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input placeholder="Search scriptures..." className="pl-10" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-purple-100"
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="space-y-4">
          {scriptures.map((scripture, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-3">
                <Badge variant="secondary">{scripture.category}</Badge>
                <Button variant="ghost" size="icon">
                  {scripture.saved ? (
                    <Bookmark className="h-4 w-4 text-purple-600 fill-current" />
                  ) : (
                    <Bookmark className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <blockquote className="text-lg text-gray-700 italic mb-2">"{scripture.verse}"</blockquote>
              <cite className="text-purple-600 font-medium">{scripture.reference}</cite>
              <div className="flex items-center justify-between mt-3">
                <Button size="sm" variant="ghost">
                  <Heart className="h-4 w-4 mr-1" />
                  Like
                </Button>
                <Button size="sm" variant="ghost">
                  Share
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
