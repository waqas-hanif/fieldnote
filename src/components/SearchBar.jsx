
import { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"

function SearchBar({ compact = false }) {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [query, setQuery] = useState(
    searchParams.get("q") || ""
  )

  useEffect(() => {
    setQuery(searchParams.get("q") || "")
  }, [searchParams])

  const handleSubmit = (event) => {
    event.preventDefault()

    const value = query.trim()

    if (!value) {
      navigate("/search")
      return
    }

    navigate(`/search?q=${encodeURIComponent(value)}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex w-full ${
        compact ? "max-w-md" : "max-w-2xl"
      }`}
    >
      <div className="relative flex w-full items-center">
        <span className="pointer-events-none absolute left-4 text-lg text-gray-400">
          ⌕
        </span>

        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search FieldNote..."
          className="w-full border border-black/10 bg-white py-3.5 pl-11 pr-28 text-sm text-gray-900 outline-none transition focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10 dark:bg-[#171c18] dark:text-white"
        />

        <button
          type="submit"
          className="absolute right-1.5 bg-[#1f5c43] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#174632]"
        >
          Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar
