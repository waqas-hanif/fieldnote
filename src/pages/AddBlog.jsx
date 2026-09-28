import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { useBlogs } from "../hooks/useBlogs"

function AddBlog() {
  const { addBlog } = useBlogs()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: "",
    category: "Technology",
    author: "",
    description: "",
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const categorySlug = form.category.toLowerCase()

    addBlog({
      title: form.title,
      slug: form.title.toLowerCase().replaceAll(" ", "-"),
      category: form.category,
      categorySlug,
      authorId: 4,
      author: form.author,
      date: new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      }),
      readTime: 4,
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
      excerpt: form.description,
      content: `
        ${form.description}

        This story was published on FieldNote and can be expanded
        with more detailed content later.
      `,
      quickTake: {
        problem: "This article explains a practical real-world problem.",
        whyItMatters: "Understanding the problem can help people make better decisions.",
        solution: "Apply the practical ideas discussed in this story.",
      },
      tags: [form.category],
      resources: [],
    })

    navigate("/blogs")
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-20">

      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        Contribute
      </p>

      <h1 className="mt-3 text-5xl font-bold">
        Write a Story
      </h1>

      <p className="mt-5 text-gray-600">
        Share a practical experience or useful idea with the FieldNote community.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-12 space-y-6"
      >

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Story Title
          </label>

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
            placeholder="Enter your story title"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Category
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
          >
            <option>Technology</option>
            <option>Agriculture</option>
            <option>Development</option>
            <option>Career</option>
            <option>Business</option>
            <option>Productivity</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Author Name
          </label>

          <input
            name="author"
            value={form.author}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Your name"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold">
            Story Description
          </label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            rows="7"
            className="w-full rounded-xl border border-gray-300 px-4 py-3"
            placeholder="Write a short description..."
          />
        </div>

        <button
          type="submit"
          className="rounded-full bg-gray-900 px-7 py-3 font-semibold text-white hover:bg-blue-600"
        >
          Publish Story
        </button>

      </form>

    </main>
  )
}

export default AddBlog