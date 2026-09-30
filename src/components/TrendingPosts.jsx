
import { Link } from "react-router-dom"

function TrendingPosts({ blogs = [] }) {
  const trendingBlogs = blogs
    .filter((blog) => blog.trending)
    .slice(0, 5)

  if (!trendingBlogs.length) return null

  return (
    <section className="border-y border-black/10 py-10 dark:border-white/10">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
            Popular Now
          </p>

          <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
            Trending stories
          </h2>
        </div>

        <Link
          to="/blogs"
          className="text-sm font-bold text-[#1f5c43] hover:underline"
        >
          View all →
        </Link>
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {trendingBlogs.map((blog, index) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="group border border-black/10 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-[#1f5c43] hover:shadow-lg dark:border-white/10 dark:bg-[#171c18]"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-3xl font-black leading-none text-[#1f5c43]/30">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-lg text-[#1f5c43] transition group-hover:translate-x-1">
                ↗
              </span>
            </div>

            <p className="mt-7 text-[10px] font-black uppercase tracking-[0.13em] text-gray-500">
              {blog.category}
            </p>

            <h3 className="mt-2 line-clamp-4 text-base font-black leading-6 tracking-[-0.02em] text-gray-950 transition group-hover:text-[#1f5c43] dark:text-white">
              {blog.title}
            </h3>

            <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4 dark:border-white/10">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                {blog.readTime} min
              </span>

              <span className="text-[10px] font-semibold text-gray-500">
                {blog.likes} likes
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default TrendingPosts

