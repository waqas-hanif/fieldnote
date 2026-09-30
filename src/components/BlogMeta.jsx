
function BlogMeta({ blog }) {
  if (!blog) return null

  return (
    <div className="flex flex-wrap items-center gap-4 border-y border-black/10 py-5 dark:border-white/10">
      <div className="flex items-center gap-3">
        <img
          src={blog.author?.avatar}
          alt={blog.author?.name}
          className="h-10 w-10 rounded-full object-cover"
        />

        <div>
          <p className="text-sm font-bold text-gray-950 dark:text-white">
            {blog.author?.name}
          </p>

          <p className="text-xs text-gray-500">
            {blog.author?.role}
          </p>
        </div>
      </div>

      <span className="hidden h-5 w-px bg-black/10 sm:block dark:bg-white/10" />

      <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-gray-500">
        <span>{blog.date}</span>

        <span className="h-1 w-1 rounded-full bg-[#1f5c43]" />

        <span>{blog.readTime} min read</span>

        <span className="h-1 w-1 rounded-full bg-[#1f5c43]" />

        <span>{blog.category}</span>
      </div>
    </div>
  )
}

export default BlogMeta
