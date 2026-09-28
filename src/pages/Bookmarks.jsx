import { useBlogs } from "../hooks/useBlogs"
import BlogCard from "../components/BlogCard"

function Bookmarks() {
  const { blogs, bookmarks } = useBlogs()

  const savedBlogs = blogs.filter((blog) =>
    bookmarks.includes(blog.id)
  )

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        Your Library
      </p>

      <h1 className="mt-3 text-5xl font-bold">
        Saved Stories
      </h1>

      {savedBlogs.length > 0 ? (
        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {savedBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <div className="mt-12 rounded-2xl bg-gray-50 p-12 text-center">
          <h2 className="text-2xl font-bold">
            No saved stories yet
          </h2>

          <p className="mt-2 text-gray-500">
            Save useful stories and they will appear here.
          </p>
        </div>
      )}

    </main>
  )
}

export default Bookmarks