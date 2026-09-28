import { Link } from "react-router-dom"

import { useBlogs } from "../hooks/useBlogs"

import FeaturedBlog from "../components/FeaturedBlog"
import BlogCard from "../components/BlogCard"
import TrendingPosts from "../components/TrendingPosts"
import Newsletter from "../components/Newsletter"

function Home() {
  const { blogs } = useBlogs()

  const featuredBlog = blogs.find((blog) => blog.featured)

  const trendingBlogs = blogs
    .filter((blog) => blog.trending)
    .slice(0, 3)

  const latestBlogs = blogs
    .filter((blog) => !blog.featured)
    .slice(0, 3)

  return (
    <main>

      <section className="bg-gray-950 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Real Stories • Practical Knowledge
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Ideas from the real world,
            <span className="text-blue-400"> worth knowing.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Discover practical stories, experiences, insights and ideas
            from technology, agriculture, business, careers and everyday life.
          </p>

          <Link
            to="/blogs"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-bold text-gray-950 hover:bg-blue-500 hover:text-white"
          >
            Explore Stories →
          </Link>

        </div>
      </section>

      {featuredBlog && (
        <section className="mx-auto max-w-7xl px-6 py-20">
          <FeaturedBlog blog={featuredBlog} />
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <TrendingPosts blogs={trendingBlogs} />
      </section>

      <section className="bg-gray-50 px-6 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Fresh from FieldNote
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Latest Stories
          </h2>

          <div className="mt-10 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {latestBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Newsletter />
      </section>

    </main>
  )
}

export default Home