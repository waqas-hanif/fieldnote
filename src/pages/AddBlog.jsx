
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useBlogs } from "../hooks/useBlogs"
import { categories } from "../data/categories"
import { useAuth } from "../context/AuthContext"

function AddBlog() {
  const { addBlog } = useBlogs()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
    categorySlug: "technology",
    description: "",
    image: "",
    content: "",
    tags: "",
  })

  const [error, setError] = useState("")

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

    setError("")
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !form.title.trim() ||
      !form.description.trim() ||
      !form.content.trim()
    ) {
      setError(
        "Please complete the title, description and story content."
      )
      return
    }

    const selectedCategory =
      categories.find(
        (item) => item.slug === form.categorySlug
      ) || categories[0]

    const blog = {
      title: form.title.trim(),
      slug: form.title
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
      category: selectedCategory.name,
      categorySlug: selectedCategory.slug,
      authorId: 3,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readTime: Math.max(
        1,
        Math.ceil(form.content.trim().split(/\s+/).length / 180)
      ),
      image:
        form.image.trim() ||
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1400&q=85",
      excerpt: form.description.trim(),
      content: form.content
        .trim()
        .split("\n")
        .filter(Boolean),
      quickTake: {
        problem: "A new FieldNote story shared by a contributor.",
        whyItMatters: form.description.trim(),
        solution:
          "Read the complete story and explore the ideas shared by the author.",
      },
      tags: form.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
      likes: 0,
      featured: false,
      trending: false,
    }

    addBlog(blog)
    navigate("/blogs")
  }

  return (
    <main className="newsroom-page min-h-screen">
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1100px] px-6 py-14 md:px-8 md:py-20">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
            FieldNote Contributor
          </p>

          <h1 className="mt-4 text-5xl font-black leading-none tracking-[-0.06em] text-gray-950 md:text-7xl dark:text-white">
            Write a story.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
            Share a useful idea, real experience or practical story
            with the FieldNote community.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-14 md:px-8 md:py-20">
        <form
          onSubmit={handleSubmit}
          className="border border-black/10 bg-white p-7 shadow-xl transition duration-500 hover:shadow-2xl md:p-10 dark:border-white/10 dark:bg-[#171c18]"
        >
          <div className="border-b border-black/10 pb-6 dark:border-white/10">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              New publication
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
              Create your FieldNote story
            </h2>

            <p className="mt-3 text-sm text-gray-500">
              Publishing as {user?.name || "FieldNote contributor"}.
            </p>
          </div>

          {error && (
            <div className="mt-6 border-l-4 border-red-500 bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/20 dark:text-red-300">
              {error}
            </div>
          )}

          <div className="mt-8">
            <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
              Story title
            </label>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Enter your story title"
              className="mt-2 w-full border border-black/10 bg-transparent px-4 py-4 text-lg font-bold text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10 dark:text-white"
            />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
                Category
              </label>

              <select
                name="categorySlug"
                value={form.categorySlug}
                onChange={handleChange}
                className="mt-2 w-full border border-black/10 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] dark:border-white/10 dark:bg-[#171c18] dark:text-white"
              >
                {categories.map((category) => (
                  <option
                    key={category.id}
                    value={category.slug}
                  >
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
                Image URL
              </label>

              <input
                name="image"
                value={form.image}
                onChange={handleChange}
                placeholder="https://..."
                className="mt-2 w-full border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] dark:border-white/10 dark:text-white"
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
              Short description
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="4"
              placeholder="Explain what this story is about..."
              className="mt-2 w-full resize-none border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] dark:border-white/10 dark:text-white"
            />
          </div>

          <div className="mt-6">
            <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
              Story content
            </label>

            <textarea
              name="content"
              value={form.content}
              onChange={handleChange}
              rows="14"
              placeholder="Write your complete story here. Use a new line for each paragraph."
              className="mt-2 w-full resize-y border border-black/10 bg-transparent px-4 py-3.5 text-sm leading-7 text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] dark:border-white/10 dark:text-white"
            />
          </div>

          <div className="mt-6">
            <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
              Tags
            </label>

            <input
              name="tags"
              value={form.tags}
              onChange={handleChange}
              placeholder="AI, Technology, Business"
              className="mt-2 w-full border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] dark:border-white/10 dark:text-white"
            />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 border-t border-black/10 pt-7 dark:border-white/10">
            <button
              type="submit"
              className="bg-[#1f5c43] px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#174632] hover:shadow-xl"
            >
              Publish Story →
            </button>

            <Link
              to="/blogs"
              className="border border-black/10 px-7 py-3.5 text-sm font-bold text-gray-600 transition duration-300 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
            >
              Cancel
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}

export default AddBlog
