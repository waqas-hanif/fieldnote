
import { Link } from "react-router-dom"

function BlogMeta({ author, authorId, date, readTime }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">

      {authorId ? (
        <Link
          to={`/author/${authorId}`}
          className="font-medium text-gray-700 hover:text-blue-600"
        >
          {author}
        </Link>
      ) : (
        <span className="font-medium text-gray-700">
          {author}
        </span>
      )}

      <span>•</span>

      <span>{date}</span>

      <span>•</span>

      <span>{readTime} min read</span>

    </div>
  )
}

export default BlogMeta

