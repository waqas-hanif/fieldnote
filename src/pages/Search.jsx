
import { useMemo, useState } from "react"

import BlogCard from "../components/BlogCard"
import EmptyState from "../components/EmptyState"

import { useBlogs } from "../hooks/useBlogs"

function Search() {
  const { blogs } = useBlogs()

  const [query, setQuery] = useState("")
  const [searched, setSearched] = useState("")

  const results = useMemo(() => {
    const value = searched.trim().toLowerCase()

    if (!value) return []

    return blogs.filter((blog) => {
      const searchableText = [
        blog.title,
        blog.excerpt,
        blog.category,
        blog.author?.name,
        blog.author?.role,
        ...(blog.tags || []),
      ]
        .join(" ")
        .toLowerCase()

      return searchableText.includes(value)
    })
  }, [blogs, searched])

  const handleSearch = (event) => {
    event.preventDefault()
    setSearched(query)
  }

  return (
    <main className="newsroom-page min-h-screen">
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-8 md:py-20">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
            FieldNote Search
          </p>

          <h1 className="mt-4 text-5xl font-black leading-none tracking-[-0.06em] text-gray-950 md:text-7xl dark:text-white">
            Find a story.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
            Search FieldNote stories by title, topic, author or tag.
          </p>

          <form
            onSubmit={handleSearch}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search technology, agriculture, careers..."
              className="min-w-0 flex-1 border border-black/10 bg-white px-5 py-4 text-sm text-gray-900 outline-none transition focus:border-[#1f5c43] dark:border-white/10 dark:bg-[#171c18] dark:text-white"
            />

            <button
              type="submit"
              className="bg-[#1f5c43] px-8 py-4 text-sm font-bold text-white transition hover:bg-[#174632]"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-14 md:px-8 md:py-20">
        {!searched ? (
          <div className="border border-black/10 bg-white p-8 dark:border-white/10 dark:bg-[#171c18]">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              Search FieldNote
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
              What are you looking for?
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
              Try a topic such as technology, AI, farming, business,
              productivity or careers.
            </p>
          </div>
        ) : results.length > 0 ? (
          <>
            <div className="mb-8 border-b border-black/10 pb-6 dark:border-white/10">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                Search Results
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                {results.length}{" "}
                {results.length === 1 ? "story" : "stories"} found
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Results for “{searched}”
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {results.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                />
              ))}
            </div>
          </>
        ) : (
          <EmptyState
            title="No stories found"
            message={`We could not find any FieldNote stories matching "${searched}".`}
            actionText="Browse all stories"
            actionLink="/blogs"
          />
        )}
      </section>
    </main>
  )
}

export default Search
