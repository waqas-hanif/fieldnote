
import { Link } from "react-router-dom"

import { useBlogs } from "../hooks/useBlogs"
import { authors } from "../data/authors"

function BlogCard({ blog }) {
  const { likeBlog, toggleBookmark, isBookmarked } = useBlogs()

  const saved = isBookmarked(blog.id)

  const author = authors.find(
    (item) => String(item.id) === String(blog.authorId)
  )

  return (
    <article className="news-card group overflow-hidden border border-black/10 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#171c18]">
      <Link to={`/blog/${blog.id}`} className="block overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="news-image h-full w-full object-cover"
          />

          <div className="absolute left-4 top-4">
            <span className="bg-[#1f5c43] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white">
              {blog.category}
            </span>
          </div>

          {blog.trending && (
            <div className="absolute right-4 top-4">
              <span className="bg-[#171916] px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-white">
                Trending
              </span>
            </div>
          )}
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-4 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-500">
          <span>{blog.date}</span>
          <span className="h-1 w-1 rounded-full bg-[#1f5c43]" />
          <span>{blog.readTime} min read</span>
        </div>

        <Link to={`/blog/${blog.id}`}>
          <h3 className="text-xl font-black leading-tight tracking-[-0.03em] text-gray-950 transition group-hover:text-[#1f5c43] dark:text-white">
            {blog.title}
          </h3>
        </Link>

        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
          {blog.excerpt}
        </p>

        <div className="mt-6 flex items-center justify-between border-t border-black/10 pt-5 dark:border-white/10">
          <Link
            to={`/author/${blog.authorId}`}
            className="flex items-center gap-3"
          >
            <img
              src={author?.avatar}
              alt={author?.name}
              className="h-9 w-9 rounded-full object-cover transition hover:scale-105"
            />

            <div>
              <p className="text-xs font-bold text-gray-900 hover:text-[#1f5c43] dark:text-white">
                {author?.name}
              </p>

              <p className="text-[10px] text-gray-500">
                {author?.role}
              </p>
            </div>
          </Link>

          <Link
            to={`/blog/${blog.id}`}
            className="text-sm font-black text-[#1f5c43] transition hover:translate-x-1"
          >
            Read →
          </Link>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button
            onClick={() => likeBlog(blog.id)}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 transition hover:text-[#1f5c43]"
          >
            <span>♡</span>
            <span>{blog.likes}</span>
          </button>

          <button
            onClick={() => toggleBookmark(blog.id)}
            className={`text-sm font-bold transition ${
              saved
                ? "text-[#1f5c43]"
                : "text-gray-400 hover:text-[#1f5c43]"
            }`}
            aria-label={saved ? "Remove bookmark" : "Save story"}
          >
            {saved ? "★ Saved" : "☆ Save"}
          </button>
        </div>
      </div>
    </article>
  )
}

export default BlogCard

