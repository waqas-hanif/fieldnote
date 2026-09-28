import { Link } from "react-router-dom"

function TrendingPosts({ blogs }) {
  return (
    <section>

      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
          Popular right now
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900">
          Trending Stories
        </h2>
      </div>

      <div className="divide-y border-y border-gray-200">

        {blogs.map((blog, index) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="group flex gap-5 py-6"
          >

            <span className="text-2xl font-bold text-gray-300">
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="min-w-0 flex-1">

              <p className="text-xs font-bold uppercase text-blue-600">
                {blog.category}
              </p>

              <h3 className="mt-2 text-lg font-bold text-gray-900 group-hover:text-blue-600">
                {blog.title}
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {blog.author} • {blog.readTime} min read
              </p>

            </div>

            <img
              src={blog.image}
              alt=""
              className="h-20 w-24 rounded-xl object-cover sm:h-24 sm:w-32"
            />

          </Link>
        ))}

      </div>
    </section>
  )
}

export default TrendingPosts