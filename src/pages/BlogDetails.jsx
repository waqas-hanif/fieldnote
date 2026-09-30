
import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"

import BlogMeta from "../components/BlogMeta"
import QuickTake from "../components/QuickTake"
import ResourceLinks from "../components/ResourceLinks"
import RelatedBlogs from "../components/RelatedBlogs"
import BrandSignature from "../components/BrandSignature"

import { useBlogs } from "../hooks/useBlogs"
import { authors } from "../data/authors"

function BlogDetails() {
  const { id } = useParams()

  const {
    blogs,
    comments,
    views,
    addView,
    likeBlog,
    toggleBookmark,
    isBookmarked,
    addComment,
    deleteComment,
  } = useBlogs()

  const blog = blogs.find(
    (item) => String(item.id) === String(id)
  )

  const author = authors.find(
    (item) => String(item.id) === String(blog?.authorId)
  )

  const [name, setName] = useState("")
  const [commentText, setCommentText] = useState("")

  useEffect(() => {
    if (blog) {
      addView(blog.id)
    }
  }, [blog?.id])

  const relatedBlogs = useMemo(() => {
    if (!blog) return []

    return blogs
      .filter(
        (item) =>
          item.id !== blog.id &&
          item.categorySlug === blog.categorySlug
      )
      .slice(0, 3)
  }, [blogs, blog])

  if (!blog) {
    return (
      <main className="newsroom-page min-h-screen px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1f5c43]">
            FieldNote
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] text-gray-950 dark:text-white">
            Story not found
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-gray-600 dark:text-gray-400">
            The story you are looking for may have been removed or
            the link may be incorrect.
          </p>

          <Link
            to="/blogs"
            className="mt-8 inline-flex bg-[#171916] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1f5c43] hover:shadow-lg"
          >
            Browse Latest Stories →
          </Link>
        </div>
      </main>
    )
  }

  const saved = isBookmarked(blog.id)
  const blogComments = comments[blog.id] || []
  const viewCount = views[blog.id] || 0

  const contentParagraphs = Array.isArray(blog.content)
    ? blog.content
    : String(blog.content || "")
        .split("\n")
        .filter(Boolean)

  const handleComment = (event) => {
    event.preventDefault()

    if (!name.trim() || !commentText.trim()) return

    addComment(blog.id, {
      name: name.trim(),
      text: commentText.trim(),
    })

    setCommentText("")
  }

  return (
    <main className="newsroom-page min-h-screen">
      <article>
        <header className="mx-auto max-w-5xl px-6 pb-10 pt-14 md:px-8 md:pt-20">
          <Link
            to={`/category/${blog.categorySlug}`}
            className="inline-flex text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43] transition duration-300 hover:translate-x-1 hover:underline"
          >
            {blog.category}
          </Link>

          <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-[-0.055em] text-gray-950 md:text-6xl lg:text-7xl dark:text-white">
            {blog.title}
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl dark:text-gray-400">
            {blog.excerpt}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link
              to={`/author/${blog.authorId}`}
              className="group flex items-center gap-3"
            >
              <img
                src={author?.avatar}
                alt={author?.name}
                className="h-12 w-12 rounded-full object-cover transition duration-300 group-hover:scale-110 group-hover:ring-4 group-hover:ring-[#1f5c43]/15"
              />

              <div>
                <p className="text-sm font-bold text-gray-950 transition duration-300 group-hover:text-[#1f5c43] dark:text-white">
                  {author?.name}
                </p>

                <p className="text-xs text-gray-500">
                  {author?.role}
                </p>

                <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#1f5c43]">
                  View profile →
                </p>
              </div>
            </Link>

            <div className="hidden h-8 w-px bg-black/10 sm:block dark:bg-white/10" />

            <BlogMeta blog={blog} />

            <span className="text-xs font-semibold text-gray-500">
              {viewCount} views
            </span>
          </div>
        </header>

        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <Link
            to={`/blog/${blog.id}`}
            className="group block overflow-hidden border border-black/10 bg-white dark:border-white/10 dark:bg-[#171c18]"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-[1.02] md:h-[520px] lg:h-[650px]"
            />
          </Link>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_280px]">
          <div>
            <div className="flex flex-wrap gap-3 border-b border-black/10 pb-6 dark:border-white/10">
              <button
                onClick={() => likeBlog(blog.id)}
                className="border border-black/10 px-5 py-2.5 text-sm font-semibold text-gray-600 transition duration-300 hover:-translate-y-0.5 hover:border-[#1f5c43] hover:text-[#1f5c43] hover:shadow-md dark:border-white/10 dark:text-gray-300"
              >
                ♡ {blog.likes} Likes
              </button>

              <button
                onClick={() => toggleBookmark(blog.id)}
                className={`border px-5 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:shadow-md ${
                  saved
                    ? "border-[#1f5c43] text-[#1f5c43]"
                    : "border-black/10 text-gray-600 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
                }`}
              >
                {saved ? "★ Saved" : "☆ Save Story"}
              </button>
            </div>

            <div className="mt-10">
              <QuickTake quickTake={blog.quickTake} />
            </div>

            <div className="mt-12">
              {contentParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-7 text-[17px] leading-8 text-gray-700 dark:text-gray-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {blog.tags?.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2 border-t border-black/10 pt-7 dark:border-white/10">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-black/10 px-3 py-1.5 text-xs font-semibold text-gray-500 transition duration-300 hover:-translate-y-0.5 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-12">
              <ResourceLinks
                resources={blog.resources}
                source={blog.source}
              />
            </div>

            <section className="mt-16 border-t border-black/10 pt-10 dark:border-white/10">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                Discussion
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                Join the conversation
              </h2>

              <form
                onSubmit={handleComment}
                className="mt-7 border border-black/10 bg-white p-6 transition duration-500 hover:border-[#1f5c43]/30 hover:shadow-xl dark:border-white/10 dark:bg-[#171c18]"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="Your name"
                    className="border border-black/10 bg-transparent px-4 py-3 text-sm outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10"
                  />

                  <input
                    value={commentText}
                    onChange={(event) =>
                      setCommentText(event.target.value)
                    }
                    placeholder="Write a comment"
                    className="border border-black/10 bg-transparent px-4 py-3 text-sm outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-[#1f5c43] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#174632] hover:shadow-lg"
                >
                  Post Comment
                </button>
              </form>

              <div className="mt-7 space-y-4">
                {blogComments.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No comments yet. Be the first to share your thoughts.
                  </p>
                ) : (
                  blogComments.map((comment) => (
                    <div
                      key={comment.id}
                      className="border-l-2 border-[#1f5c43] bg-white p-5 transition duration-300 hover:translate-x-1 hover:shadow-lg dark:bg-[#171c18]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-bold text-gray-950 dark:text-white">
                            {comment.name}
                          </p>

                          <p className="mt-1 text-xs text-gray-500">
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
                          className="text-xs font-semibold text-gray-400 transition hover:text-red-500"
                        >
                          Delete
                        </button>
                      </div>

                      <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
                        {comment.text}
                      </p>
                    </div>
                  ))
                )}
              </div>
            </section>
          </div>

          <aside className="lg:pt-10">
            <div className="sticky top-28 space-y-5">
              <Link
                to={`/author/${blog.authorId}`}
                className="group block border border-black/10 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-[#1f5c43]/30 hover:shadow-2xl dark:border-white/10 dark:bg-[#171c18]"
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#1f5c43]">
                  Written by
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <img
                    src={author?.avatar}
                    alt={author?.name}
                    className="h-14 w-14 rounded-full object-cover transition duration-300 group-hover:scale-110"
                  />

                  <div>
                    <p className="text-base font-black text-gray-950 transition duration-300 group-hover:text-[#1f5c43] dark:text-white">
                      {author?.name}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {author?.role}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {author?.bio}
                </p>

                <p className="mt-5 text-sm font-black text-[#1f5c43] transition duration-300 group-hover:translate-x-1">
                  View author profile →
                </p>
              </Link>

              <BrandSignature />

              <div className="border border-black/10 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#171c18]">
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#1f5c43]">
                  About this story
                </p>

                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-xs text-gray-500">
                      Published
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
                      {blog.date}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Reading time
                    </p>

                    <p className="mt-1 text-sm font-bold text-gray-900 dark:text-white">
                      {blog.readTime} minutes
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-500">
                      Category
                    </p>

                    <Link
                      to={`/category/${blog.categorySlug}`}
                      className="mt-1 inline-flex text-sm font-bold text-[#1f5c43] transition hover:translate-x-1 hover:underline"
                    >
                      {blog.category}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {relatedBlogs.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-8">
          <RelatedBlogs blogs={relatedBlogs} />
        </section>
      )}
    </main>
  )
}

export default BlogDetails

