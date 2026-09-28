
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

import { authors } from "../data/authors"
import { useBlogs } from "../hooks/useBlogs"
import { useToast } from "../context/ToastContext"

import BlogMeta from "../components/BlogMeta"
import QuickTake from "../components/QuickTake"
import ResourceLinks from "../components/ResourceLinks"
import RelatedBlogs from "../components/RelatedBlogs"

function BlogDetails() {
  const { id } = useParams()

  const {
    blogs,
    comments,
    views,
    likeBlog,
    addView,
    toggleBookmark,
    isBookmarked,
    addComment,
    deleteComment,
  } = useBlogs()

  const { showToast } = useToast()

  const blog = blogs.find(
    (item) => item.id === Number(id)
  )

  const [name, setName] = useState("")
  const [commentText, setCommentText] = useState("")
  const [copied, setCopied] = useState(false)

  const author = authors.find(
    (item) => item.id === blog?.authorId
  )

  useEffect(() => {
    if (blog) {
      addView(blog.id)
    }
  }, [id])

  if (!blog) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">
          <p className="text-7xl font-bold text-gray-300">
            404
          </p>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Story not found
          </h1>

          <p className="mt-3 text-gray-500">
            The story you are looking for does not exist.
          </p>

          <Link
            to="/blogs"
            className="mt-7 inline-block rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
          >
            Browse Stories
          </Link>
        </div>
      </main>
    )
  }

  const blogComments = comments[blog.id] || []
  const viewCount = views[blog.id] || 0
  const currentUrl = window.location.href

  const relatedBlogs = blogs
    .filter(
      (item) =>
        item.categorySlug === blog.categorySlug &&
        item.id !== blog.id
    )
    .slice(0, 3)

  const handleCommentSubmit = (event) => {
    event.preventDefault()

    if (!name.trim() || !commentText.trim()) {
      showToast("Please fill in all comment fields.", "error")
      return
    }

    addComment(blog.id, {
      name: name.trim(),
      text: commentText.trim(),
    })

    setName("")
    setCommentText("")
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl)

      setCopied(true)
      showToast("Link copied successfully!")

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch {
      showToast("Could not copy the link.", "error")
    }
  }

  const shareStory = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt,
          url: currentUrl,
        })

        showToast("Story shared successfully!")
      } catch {
        // User cancelled sharing
      }
    } else {
      copyLink()
    }
  }

  const whatsappUrl =
    `https://wa.me/?text=${encodeURIComponent(
      `${blog.title} ${currentUrl}`
    )}`

  const facebookUrl =
    `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      currentUrl
    )}`

  const twitterUrl =
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      blog.title
    )}&url=${encodeURIComponent(currentUrl)}`

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      {/* Category */}
      <Link
        to={`/category/${blog.categorySlug}`}
        className="text-sm font-bold uppercase tracking-widest text-blue-600 hover:text-blue-800"
      >
        {blog.category}
      </Link>

      {/* Title */}
      <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
        {blog.title}
      </h1>

      {/* Meta */}
      <div className="mt-6">
        <BlogMeta
          author={blog.author}
          authorId={blog.authorId}
          date={blog.date}
          readTime={blog.readTime}
        />
      </div>

      {/* Image */}
      <div className="mt-10 overflow-hidden rounded-3xl">
        <img
          src={blog.image}
          alt={blog.title}
          className="max-h-[550px] w-full object-cover"
        />
      </div>

      {/* Stats */}
      <div className="mt-8 flex flex-wrap gap-3">

        <button
          onClick={() => likeBlog(blog.id)}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm transition hover:border-red-400 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-200"
        >
          ♥ {blog.likes}
        </button>

        <button
          onClick={() => toggleBookmark(blog.id)}
          className={`rounded-full border px-5 py-2 text-sm transition ${
            isBookmarked(blog.id)
              ? "border-blue-500 text-blue-600"
              : "border-gray-300 hover:border-blue-400 hover:text-blue-600"
          }`}
        >
          {isBookmarked(blog.id)
            ? "★ Saved"
            : "☆ Save"}
        </button>

        <span className="rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-500">
          👁 {viewCount} Views
        </span>

        <span className="rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-500">
          💬 {blogComments.length} Comments
        </span>

        <span className="rounded-full border border-gray-300 px-5 py-2 text-sm text-gray-500">
          ⏱ {blog.readTime} min read
        </span>

      </div>

      {/* Share */}
      <div className="mt-5 flex flex-wrap gap-3">

        <button
          onClick={shareStory}
          className="rounded-full bg-gray-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
        >
          ↗ Share
        </button>

        <button
          onClick={copyLink}
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:border-blue-500 hover:text-blue-600"
        >
          {copied ? "✓ Copied" : "🔗 Copy Link"}
        </button>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:border-green-500 hover:text-green-600"
        >
          WhatsApp
        </a>

        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:border-blue-500 hover:text-blue-600"
        >
          Facebook
        </a>

        <a
          href={twitterUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-gray-300 px-5 py-2 text-sm font-medium transition hover:border-gray-900"
        >
          X
        </a>

      </div>

      {/* Article */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_300px]">

        <article className="text-lg leading-9 text-gray-700">

          {blog.content
            .trim()
            .split("\n\n")
            .map((paragraph, index) => (
              <p
                key={index}
                className="mb-7"
              >
                {paragraph.trim()}
              </p>
            ))}

        </article>

        <aside>
          <QuickTake
            quickTake={blog.quickTake}
          />
        </aside>

      </div>

      {/* Author Profile */}
      {author && (
        <section className="mt-16 rounded-3xl border border-gray-200 bg-gray-50 p-7 md:p-9">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

            <img
              src={author.avatar}
              alt={`${author.name} profile`}
              className="h-24 w-24 rounded-full object-cover ring-4 ring-white"
            />

            <div className="flex-1">

              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Written by
              </p>

              <h2 className="mt-2 text-2xl font-bold text-gray-900">
                {author.name}
              </h2>

              <p className="mt-1 font-medium text-gray-600">
                {author.role}
              </p>

              <p className="mt-3 max-w-2xl leading-7 text-gray-500">
                {author.bio}
              </p>

            </div>

            <Link
              to={`/author/${author.id}`}
              className="rounded-full bg-gray-900 px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              View Profile →
            </Link>

          </div>

        </section>
      )}

      {/* Resources */}
      <ResourceLinks
        resources={blog.resources}
      />

      {/* Comments */}
      <section className="mt-16 border-t border-gray-200 pt-12">

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Community
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Comments
          </h2>

          <p className="mt-2 text-gray-500">
            Share your thoughts about this story.
          </p>
        </div>

        {/* Comment Form */}
        <form
          onSubmit={handleCommentSubmit}
          className="mt-8 rounded-2xl border border-gray-200 bg-white p-6"
        >

          <div className="grid gap-4 md:grid-cols-2">

            <input
              type="text"
              value={name}
              onChange={(event) =>
                setName(event.target.value)
              }
              placeholder="Your name"
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />

            <input
              type="text"
              value={commentText}
              onChange={(event) =>
                setCommentText(event.target.value)
              }
              placeholder="Write a comment..."
              className="rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />

          </div>

          <button
            type="submit"
            className="mt-4 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Post Comment
          </button>

        </form>

        {/* Comments List */}
        <div className="mt-8 space-y-4">

          {blogComments.length === 0 ? (

            <div className="rounded-2xl bg-gray-50 p-10 text-center">

              <p className="text-3xl">
                💬
              </p>

              <h3 className="mt-3 text-xl font-bold text-gray-900">
                No comments yet
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Be the first person to share a thought.
              </p>

            </div>

          ) : (

            blogComments.map((comment) => (

              <div
                key={comment.id}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >

                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h3 className="font-bold text-gray-900">
                      {comment.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-400">
                      {comment.date}
                    </p>
                  </div>

                  <button
                    onClick={() =>
                      deleteComment(
                        blog.id,
                        comment.id
                      )
                    }
                    className="text-sm text-gray-400 hover:text-red-500"
                  >
                    Delete
                  </button>

                </div>

                <p className="mt-4 leading-7 text-gray-600">
                  {comment.text}
                </p>

              </div>

            ))

          )}

        </div>

      </section>

      {/* Related Stories */}
      <RelatedBlogs
        blogs={relatedBlogs}
      />

    </main>
  )
}

export default BlogDetails

