import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchBar() {
  const [query, setQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (event) => {
    event.preventDefault()

    if (!query.trim()) return

    navigate(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-3">

      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search stories..."
        className="w-full rounded-full border border-gray-300 px-5 py-3 outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
      >
        Search
      </button>

    </form>
  )
}

export default SearchBar