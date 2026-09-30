
import { useMemo, useState } from "react"

import BlogCard from "../components/BlogCard"
import SearchBar from "../components/SearchBar"
import Pagination from "../components/Pagination"
import EmptyState from "../components/EmptyState"

import { useBlogs } from "../hooks/useBlogs"

function Blogs() {
  const { blogs } = useBlogs()

  const [category, setCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  const postsPerPage = 6

  const categories = [
    "all",
    ...new Set(blogs.map((blog) => blog.categorySlug)),
  ]

  const filteredBlogs = useMemo(() => {
    if (category === "all") {
      return blogs
    }

    return blogs.filter(
      (blog) => blog.categorySlug === category
    )
  }, [blogs, category])

  const totalPages = Math.ceil(
    filteredBlogs.length / postsPerPage
  )

  const safePage = Math.min(
    currentPage,
    Math.max(totalPages, 1)
  )

  const startIndex = (safePage - 1) * postsPerPage

  const visibleBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + postsPerPage
  )

  const handleCategory = (value) => {
    setCategory(value)
    setCurrentPage(1)
  }

  return (
    <main className="newsroom-page min-h-screen">
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
                FieldNote Archive
              </p>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-[-0.06em] text-gray-950 md:text-7xl dark:text-white">
                Latest stories.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
                Explore practical stories, real experiences and useful
                ideas from across the FieldNote newsroom.
              </p>
            </div>

            <SearchBar />
          </div>
        </div>
      </section>

      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-6 py-5 md:px-8">
          {categories.map((item) => {
            const active = category === item

            return (
              <button
                key={item}
                onClick={() => handleCategory(item)}
                className={`shrink-0 px-5 py-2.5 text-xs font-black uppercase tracking-[0.12em] transition ${
                  active
                    ? "bg-[#1f5c43] text-white"
                    : "border border-black/10 text-gray-600 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-400"
                }`}
              >
                {item === "all" ? "All Stories" : item}
              </button>
            )
          })}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-14 md:px-8 md:py-20">
        <div className="mb-8 flex flex-col gap-3 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between dark:border-white/10">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              {category === "all" ? "All Sections" : category}
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
              {filteredBlogs.length}{" "}
              {filteredBlogs.length === 1 ? "story" : "stories"}
            </h2>
          </div>

          {filteredBlogs.length > 0 && (
            <p className="text-sm font-medium text-gray-500">
              Showing {startIndex + 1}–
              {Math.min(
                startIndex + postsPerPage,
                filteredBlogs.length
              )}
            </p>
          )}
        </div>

        {visibleBlogs.length > 0 ? (
          <>
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {visibleBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                />
              ))}
            </div>

            <Pagination
              currentPage={safePage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        ) : (
          <EmptyState
            title="No stories found"
            message="There are no stories in this section yet."
            actionText="View all stories"
            actionLink="/blogs"
          />
        )}
      </section>
    </main>
  )
}

export default Blogs