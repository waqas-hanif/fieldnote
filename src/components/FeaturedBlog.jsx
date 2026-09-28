
import { Link } from "react-router-dom"

import BlogMeta from "./BlogMeta"
import { useBlogs } from "../hooks/useBlogs"

function FeaturedBlog({ blog }) {
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
    <section className="overflow-hidden rounded-3xl bg-gray-950 text-white">

      <div className="grid md:grid-cols-2">

        {/* Image */}
        <Link
          to={`/blog/${blog.id}`}
          className="overflow-hidden"
        >
          <img
            src={blog.image}
            alt={blog.title}
            className="h-full min-h-[350px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </Link>

        {/* Content */}
        <div className="flex flex-col justify-center p-8 md:p-12">

          {/* Label */}
          <span className="w-fit rounded-full bg-blue-500/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-400">
            Featured Story
          </span>

          {/* Category */}
          <Link
            to={`/category/${blog.categorySlug}`}
            className="mt-5 w-fit text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-blue-400"
          >
            {blog.category}
          </Link>

          {/* Title */}
          <Link to={`/blog/${blog.id}`}>
            <h2 className="mt-3 text-3xl font-bold leading-tight hover:text-blue-400 md:text-4xl">
              {blog.title}
            </h2>
          </Link>

          {/* Excerpt */}
          <p className="mt-5 leading-7 text-gray-400">
            {blog.excerpt}
          </p>

          {/* Author Meta */}
          <div className="mt-6">

            <BlogMeta
              author={blog.author}
              authorId={blog.authorId}
              date={blog.date}
              readTime={blog.readTime}
            />

          </div>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-gray-400">

            <span>
              👁 {viewCount} views
            </span>

            <span>
              💬 {commentCount} comments
            </span>

            <button
              onClick={() => likeBlog(blog.id)}
              className="hover:text-red-400"
            >
              ♥ {blog.likes}
            </button>

          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-3">

            <Link
              to={`/blog/${blog.id}`}
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-gray-950 transition hover:bg-blue-500 hover:text-white"
            >
              Read Story →
            </Link>

            <button
              onClick={() => toggleBookmark(blog.id)}
              className={`rounded-full border px-6 py-3 text-sm font-semibold transition ${
                isBookmarked(blog.id)
                  ? "border-blue-400 text-blue-400"
                  : "border-gray-700 text-gray-300 hover:border-blue-400 hover:text-blue-400"
              }`}
            >
              {isBookmarked(blog.id)
                ? "★ Saved"
                : "☆ Save"}
            </button>

          </div>

        </div>

      </div>

    </section>
  )
}

export default FeaturedBlog

