
import { Link } from "react-router-dom"

import BlogMeta from "./BlogMeta"
import { useBlogs } from "../hooks/useBlogs"

function BlogCard({ blog }) {
  const {
    likeBlog,
    toggleBookmark,
    isBookmarked,
    comments,
    views,
  } = useBlogs()

  const commentCount = comments[blog.id]?.length || 0
  const viewCount = views[blog.id] || 0

  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-xl">

      {/* Image */}
      <Link to={`/blog/${blog.id}`}>
        <div className="aspect-[16/10] overflow-hidden">

          <img
            src={blog.image}
            alt={blog.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />

        </div>
      </Link>

      <div className="p-6">

        {/* Category */}
        <Link
          to={`/category/${blog.categorySlug}`}
          className="text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-800"
        >
          {blog.category}
        </Link>

        {/* Title */}
        <Link to={`/blog/${blog.id}`}>
          <h2 className="mt-3 text-xl font-bold leading-7 text-gray-900 group-hover:text-blue-600">
            {blog.title}
          </h2>
        </Link>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {blog.excerpt}
        </p>

        {/* Author */}
        <div className="mt-5">
          <BlogMeta
            author={blog.author}
            authorId={blog.authorId}
            date={blog.date}
            readTime={blog.readTime}
          />
        </div>

        {/* Stats */}
        <div className="mt-5 flex flex-wrap gap-3 border-t border-gray-100 pt-4">

          <button
            onClick={() => likeBlog(blog.id)}
            className="text-sm text-gray-500 transition hover:text-red-500"
          >
            ♥ {blog.likes}
          </button>

          <span className="text-sm text-gray-400">
            👁 {viewCount}
          </span>

          <span className="text-sm text-gray-400">
            💬 {commentCount}
          </span>

          <button
            onClick={() => toggleBookmark(blog.id)}
            className={`ml-auto text-sm font-medium transition ${
              isBookmarked(blog.id)
                ? "text-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
          >
            {isBookmarked(blog.id)
              ? "★ Saved"
              : "☆ Save"}
          </button>

        </div>

      </div>

    </article>
  )
}

export default BlogCard

