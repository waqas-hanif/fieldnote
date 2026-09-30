
import { Link } from "react-router-dom"

function RelatedBlogs({ blogs = [] }) {
  if (!blogs.length) return null

  return (
    <section className="mt-14 border-t border-black/10 pt-10 dark:border-white/10">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
          Keep Reading
        </p>

        <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
          Related stories
        </h2>
      </div>

      <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.slice(0, 3).map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="news-card group overflow-hidden border border-black/10 bg-white transition duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#171c18]"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="news-image h-full w-full object-cover"
              />
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.13em] text-[#1f5c43]">
                <span>{blog.category}</span>
                <span className="h-1 w-1 rounded-full bg-[#1f5c43]" />
                <span>{blog.readTime} min</span>
              </div>

              <h3 className="mt-3 text-lg font-black leading-tight tracking-[-0.025em] text-gray-950 transition group-hover:text-[#1f5c43] dark:text-white">
                {blog.title}
              </h3>

              <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                {blog.excerpt}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-4 dark:border-white/10">
                <span className="text-xs font-semibold text-gray-500">
                  {blog.author?.name}
                </span>

                <span className="text-sm font-black text-[#1f5c43] transition group-hover:translate-x-1">
                  Read →
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RelatedBlogs
