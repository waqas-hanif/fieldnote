import { useEffect, useState } from "react"

import { useBlogs } from "../hooks/useBlogs"
import BlogCard from "../components/BlogCard"
import Pagination from "../components/Pagination"

function Blogs() {
  const { blogs } = useBlogs()

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [sort, setSort] = useState("latest")
  const [currentPage, setCurrentPage] = useState(1)

  const postsPerPage = 6

  const categories = [
    "All",
    ...new Set(blogs.map((blog) => blog.category)),
  ]

  const filteredBlogs = blogs
    .filter((blog) => {
      const searchText = `
        ${blog.title}
        ${blog.excerpt}
        ${blog.author}
        ${blog.category}
        ${blog.tags.join(" ")}
      `.toLowerCase()

      return searchText.includes(search.toLowerCase())
    })
    .filter((blog) => {
      return category === "All" || blog.category === category
    })
    .sort((a, b) => {
      if (sort === "popular") {
        return b.likes - a.likes
      }

      return b.id - a.id
    })

  const totalPages = Math.ceil(filteredBlogs.length / postsPerPage)

  const startIndex = (currentPage - 1) * postsPerPage

  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + postsPerPage
  )

  useEffect(() => {
    setCurrentPage(1)
  }, [search, category, sort])

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      {/* Heading */}
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Explore
        </p>

        <h1 className="mt-3 text-5xl font-bold text-gray-900">
          All Stories
        </h1>

        <p className="mt-5 max-w-2xl text-gray-600">
          Find practical stories, real experiences and useful ideas.
        </p>
      </div>

      {/* Filters */}
      <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-5">

        <div className="grid gap-4 md:grid-cols-[1fr_auto]">

          {/* Search */}
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search stories, authors, tags..."
            className="rounded-xl border border-gray-300 px-5 py-3 outline-none focus:border-blue-500"
          />

          {/* Sort */}
          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-xl border border-gray-300 px-5 py-3 outline-none"
          >
            <option value="latest">
              Latest
            </option>

            <option value="popular">
              Most Liked
            </option>
          </select>

        </div>

        {/* Categories */}
        <div className="mt-5 flex flex-wrap gap-2">

          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                category === item
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {item}
            </button>
          ))}

        </div>

      </div>

      {/* Result Count */}
      <div className="mt-10 flex items-center justify-between">

        <p className="text-sm text-gray-500">
          {filteredBlogs.length}{" "}
          {filteredBlogs.length === 1 ? "story" : "stories"} found
        </p>

        {(search || category !== "All") && (
          <button
            onClick={() => {
              setSearch("")
              setCategory("All")
              setSort("latest")
            }}
            className="text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            Clear filters
          </button>
        )}

      </div>

      {/* Blog Grid */}
      {currentBlogs.length > 0 ? (
        <div className="mt-6 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {currentBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
            />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-2xl bg-gray-50 px-6 py-20 text-center">

          <p className="text-4xl">
            🔎
          </p>

          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            No stories found
          </h2>

          <p className="mt-2 text-gray-500">
            Try a different search term or category.
          </p>

        </div>
      )}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

    </main>
  )
}

export default Blogs