
import { useParams } from "react-router-dom"

import { authors } from "../data/authors"
import { useBlogs } from "../hooks/useBlogs"

import BlogCard from "../components/BlogCard"

function Author() {
  const { id } = useParams()
  const { blogs, comments, views } = useBlogs()

  const author = authors.find(
    (item) => item.id === Number(id)
  )

  if (!author) {
    return (
      <main className="flex min-h-[70vh] items-center justify-center px-6">
        <div className="text-center">

          <p className="text-6xl font-bold text-gray-300">
            404
          </p>

          <h1 className="mt-4 text-3xl font-bold">
            Author not found
          </h1>

        </div>
      </main>
    )
  }

  const authorBlogs = blogs.filter(
    (blog) => blog.authorId === author.id
  )

  const totalLikes = authorBlogs.reduce(
    (total, blog) => total + blog.likes,
    0
  )

  const totalViews = authorBlogs.reduce(
    (total, blog) => total + (views[blog.id] || 0),
    0
  )

  const totalComments = authorBlogs.reduce(
    (total, blog) =>
      total + (comments[blog.id]?.length || 0),
    0
  )

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      {/* Profile */}
      <section className="overflow-hidden rounded-3xl bg-gray-950 p-8 text-white md:p-12">

        <div className="flex flex-col gap-8 md:flex-row md:items-center">

          <img
            src={author.avatar}
            alt={author.name}
            className="h-32 w-32 rounded-full object-cover ring-4 ring-white/10"
          />

          <div className="max-w-3xl">

            <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
              FieldNote Author
            </p>

            <h1 className="mt-3 text-4xl font-bold md:text-5xl">
              {author.name}
            </h1>

            <p className="mt-2 text-lg font-medium text-blue-400">
              {author.role}
            </p>

            <p className="mt-5 leading-7 text-gray-400">
              {author.bio}
            </p>

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-500">
            Stories
          </p>

          <p className="mt-2 text-3xl font-bold text-gray-900">
            {authorBlogs.length}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-500">
            Total Likes
          </p>

          <p className="mt-2 text-3xl font-bold text-gray-900">
            {totalLikes}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-500">
            Total Views
          </p>

          <p className="mt-2 text-3xl font-bold text-gray-900">
            {totalViews}
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <p className="text-sm text-gray-500">
            Comments
          </p>

          <p className="mt-2 text-3xl font-bold text-gray-900">
            {totalComments}
          </p>
        </div>

      </section>

      {/* Stories */}
      <section className="mt-16">

        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Published Stories
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Stories by {author.name}
          </h2>
        </div>

        {authorBlogs.length > 0 ? (
          <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

            {authorBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                blog={blog}
              />
            ))}

          </div>
        ) : (
          <div className="mt-8 rounded-2xl bg-gray-50 p-12 text-center">

            <h3 className="text-xl font-bold">
              No stories yet
            </h3>

            <p className="mt-2 text-gray-500">
              This author has not published any stories.
            </p>

          </div>
        )}

      </section>

    </main>
  )
}

export default Author

