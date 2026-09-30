
import { Link } from "react-router-dom"

import { useBlogs } from "../hooks/useBlogs"
import { authors } from "../data/authors"

function FeaturedBlog({ blog }) {
  const { likeBlog, toggleBookmark, isBookmarked } = useBlogs()

  if (!blog) return null

  const saved = isBookmarked(blog.id)

  const author = authors.find(
    (item) => String(item.id) === String(blog.authorId)
  )

  const quickTake =
    typeof blog.quickTake === "string"
      ? blog.quickTake
      : blog.quickTake?.solution ||
        blog.quickTake?.problem ||
        ""

  return (
    <article className="news-card group overflow-hidden border border-black/10 bg-white shadow-xl dark:border-white/10 dark:bg-[#171c18]">
      <div className="grid lg:grid-cols-2">
        <Link
          to={`/blog/${blog.id}`}
          className="relative block min-h-[320px] overflow-hidden lg:min-h-[520px]"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="news-image absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute left-6 top-6">
            <span className="bg-[#1f5c43] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white">
              Lead Story
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[#b8d6c5]">
              {blog.category}
            </p>

            <h2 className="max-w-2xl text-3xl font-black leading-tight tracking-[-0.04em] md:text-4xl lg:text-5xl">
              {blog.title}
            </h2>
          </div>
        </Link>

        <div className="flex flex-col justify-between p-7 md:p-9 lg:p-12">
          <div>
            <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.13em] text-gray-500">
              <span>{blog.date}</span>
              <span className="h-1 w-1 rounded-full bg-[#1f5c43]" />
              <span>{blog.readTime} min read</span>
            </div>

            <p className="mt-7 text-lg leading-8 text-gray-600 dark:text-gray-400">
              {blog.excerpt}
            </p>

            {quickTake && (
              <div className="mt-8 border-l-4 border-[#1f5c43] bg-[#f4f1eb] p-5 dark:bg-[#101411]">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#1f5c43]">
                  Quick Take
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-gray-700 dark:text-gray-300">
                  {quickTake}
                </p>
              </div>
            )}

            <Link
              to={`/author/${blog.authorId}`}
              className="mt-8 flex items-center gap-3"
            >
              <img
                src={author?.avatar}
                alt={author?.name}
                className="h-11 w-11 rounded-full object-cover transition duration-300 hover:scale-105"
              />

              <div>
                <p className="text-sm font-bold text-gray-950 hover:text-[#1f5c43] dark:text-white">
                  {author?.name}
                </p>

                <p className="text-xs text-gray-500">
                  {author?.role}
                </p>
              </div>
            </Link>
          </div>

          <div className="mt-10 border-t border-black/10 pt-6 dark:border-white/10">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to={`/blog/${blog.id}`}
                className="bg-[#171916] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1f5c43]"
              >
                Read Full Story →
              </Link>

              <button
                onClick={() => likeBlog(blog.id)}
                className="border border-black/10 px-5 py-3 text-sm font-semibold text-gray-600 transition hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
              >
                ♡ {blog.likes}
              </button>

              <button
                onClick={() => toggleBookmark(blog.id)}
                className={`border px-5 py-3 text-sm font-semibold transition ${
                  saved
                    ? "border-[#1f5c43] text-[#1f5c43]"
                    : "border-black/10 text-gray-600 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
                }`}
              >
                {saved ? "★ Saved" : "☆ Save"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default FeaturedBlog

