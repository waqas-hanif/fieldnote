import { useParams } from "react-router-dom"

import { useBlogs } from "../hooks/useBlogs"
import { categories } from "../data/categories"

import BlogCard from "../components/BlogCard"

function Category() {
  const { slug } = useParams()
  const { blogs } = useBlogs()

  const category = categories.find((item) => item.slug === slug)

  const categoryBlogs = blogs.filter(
    (blog) => blog.categorySlug === slug
  )

  if (!category) {
    return (
      <main className="mx-auto min-h-[70vh] max-w-7xl px-6 py-20">
        <h1 className="text-4xl font-bold">
          Category not found
        </h1>
      </main>
    )
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-20">

      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        Category
      </p>

      <h1 className="mt-3 text-5xl font-bold text-gray-900">
        {category.name}
      </h1>

      <p className="mt-5 max-w-2xl text-gray-600">
        {category.description}
      </p>

      <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

        {categoryBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}

      </div>

    </main>
  )
}

export default Category