import { useSearchParams } from "react-router-dom"

import { useBlogs } from "../hooks/useBlogs"
import BlogCard from "../components/BlogCard"
import SearchBar from "../components/SearchBar"

function Search() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q") || ""

  const { blogs } = useBlogs()

  const results = blogs.filter((blog) => {
    const text = `
      ${blog.title}
      ${blog.excerpt}
      ${blog.category}
      ${blog.author}
      ${blog.tags.join(" ")}
    `.toLowerCase()

    return text.includes(query.toLowerCase())
  })

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        Search
      </p>

      <h1 className="mt-3 text-5xl font-bold">
        Find Stories
      </h1>

      <div className="mt-8 max-w-2xl">
        <SearchBar />
      </div>

      {query && (
        <p className="mt-10 text-gray-500">
          Search results for:
          <span className="ml-2 font-semibold text-gray-900">
            "{query}"
          </span>
        </p>
      )}

      <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

        {results.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}

      </div>

      {query && results.length === 0 && (
        <div className="py-20 text-center">
          <h2 className="text-2xl font-bold">
            No stories found
          </h2>

          <p className="mt-2 text-gray-500">
            Try another search term.
          </p>
        </div>
      )}

    </main>
  )
}

export default Search