import { SearchHeader } from "./components/search-header"
import { SearchFilters } from "./components/search-filters"
import { SearchResults } from "./components/search-results"
import { SearchSuggestions } from "./components/search-suggestions"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string; category?: string; sort?: string }
}) {
  const query = searchParams.q || ""
  const hasResults = query.length > 0

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-16 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <SearchHeader initialQuery={query} />

        {hasResults ? (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <SearchFilters />
            </div>
            <div className="lg:col-span-3">
              <SearchResults query={query} />
            </div>
          </div>
        ) : (
          <SearchSuggestions />
        )}
      </div>
    </div>
  )
}
