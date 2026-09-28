import BlogCard from "./BlogCard"

function RelatedBlogs({ blogs }) {
  if (!blogs.length) return null

  return (
    <section className="mt-16">

      <h2 className="mb-7 text-3xl font-bold text-gray-900">
        Related Stories
      </h2>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

    </section>
  )
}

export default RelatedBlogs