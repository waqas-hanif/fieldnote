
import { Link } from "react-router-dom"

import BlogCard from "../components/BlogCard"
import FeaturedBlog from "../components/FeaturedBlog"
import TrendingPosts from "../components/TrendingPosts"
import Newsletter from "../components/Newsletter"
import BrandSignature from "../components/BrandSignature"
import FieldNoteAssistant from "../components/FieldNoteAssistant"

import { useBlogs } from "../hooks/useBlogs"

function Home() {
  const { blogs } = useBlogs()

  const featuredBlog =
    blogs.find((blog) => blog.featured) || blogs[0]

  const latestBlogs = blogs
    .filter((blog) => blog.id !== featuredBlog?.id)
    .slice(0, 6)

  const technologyCount = blogs.filter(
    (blog) => blog.categorySlug === "technology"
  ).length

  const agricultureCount = blogs.filter(
    (blog) => blog.categorySlug === "agriculture"
  ).length

  const businessCount = blogs.filter(
    (blog) => blog.categorySlug === "business"
  ).length

  const developmentCount = blogs.filter(
    (blog) => blog.categorySlug === "development"
  ).length

  return (
    <main className="newsroom-page min-h-screen">
      <section className="mx-auto max-w-[1400px] px-6 pb-14 pt-14 md:px-8 md:pb-20 md:pt-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_380px] lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1f5c43]">
              FieldNote · Independent Knowledge Publication
            </p>

            <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 md:text-7xl lg:text-8xl dark:text-white">
              Stories from the
              <span className="block text-[#1f5c43]">
                real world.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 md:text-lg dark:text-gray-400">
              FieldNote brings together practical reporting, useful
              knowledge and thoughtful stories about technology,
              agriculture, business, careers and everyday life.
            </p>
          </div>

          <div className="border-l-2 border-[#1f5c43] pl-6">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-gray-500">
              Today at FieldNote
            </p>

            <p className="mt-3 text-2xl font-black leading-tight tracking-[-0.03em] text-gray-950 dark:text-white">
              Less noise.
              <br />
              More useful information.
            </p>

            <Link
              to="/blogs"
              className="mt-5 inline-flex text-sm font-black text-[#1f5c43] hover:underline"
            >
              Explore all stories →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 dark:border-white/10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">
          <Link
            to="/category/technology"
            className="border-r border-black/10 px-6 py-5 transition hover:bg-white dark:border-white/10 dark:hover:bg-[#171c18]"
          >
            <p className="text-2xl font-black text-gray-950 dark:text-white">
              {technologyCount}
            </p>

            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">
              Technology
            </p>
          </Link>

          <Link
            to="/category/agriculture"
            className="border-b border-black/10 px-6 py-5 transition hover:bg-white md:border-b-0 md:border-r dark:border-white/10 dark:hover:bg-[#171c18]"
          >
            <p className="text-2xl font-black text-gray-950 dark:text-white">
              {agricultureCount}
            </p>

            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">
              Agriculture
            </p>
          </Link>

          <Link
            to="/category/business"
            className="border-r border-black/10 px-6 py-5 transition hover:bg-white dark:border-white/10 dark:hover:bg-[#171c18]"
          >
            <p className="text-2xl font-black text-gray-950 dark:text-white">
              {businessCount}
            </p>

            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">
              Business
            </p>
          </Link>

          <Link
            to="/category/development"
            className="px-6 py-5 transition hover:bg-white dark:hover:bg-[#171c18]"
          >
            <p className="text-2xl font-black text-gray-950 dark:text-white">
              {developmentCount}
            </p>

            <p className="mt-1 text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">
              Development
            </p>
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-14 md:px-8 md:py-20">
        <div className="mb-7 flex items-end justify-between gap-5">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              Lead Story
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
              What matters right now
            </h2>
          </div>

          <Link
            to="/blogs"
            className="hidden text-sm font-bold text-[#1f5c43] hover:underline sm:block"
          >
            See all stories →
          </Link>
        </div>

        <FeaturedBlog blog={featuredBlog} />
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-14 md:px-8 md:pb-20">
        <TrendingPosts blogs={blogs} />
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-14 md:px-8 md:pb-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_330px]">
          <div>
            <div className="flex items-end justify-between border-b border-black/10 pb-5 dark:border-white/10">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                  Latest
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                  Fresh from the newsroom
                </h2>
              </div>

              <Link
                to="/blogs"
                className="text-sm font-bold text-[#1f5c43] hover:underline"
              >
                View all →
              </Link>
            </div>

            <div className="mt-7 grid gap-6 md:grid-cols-2">
              {latestBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                />
              ))}
            </div>
          </div>

          <aside className="lg:pt-16">
            <div className="border border-black/10 bg-white p-7 dark:border-white/10 dark:bg-[#171c18]">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                About FieldNote
              </p>

              <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                Knowledge without the clutter.
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                We focus on stories that explain something useful,
                document a real experience or help readers understand
                the world around them.
              </p>

              <Link
                to="/about"
                className="mt-6 inline-flex text-sm font-black text-[#1f5c43] hover:underline"
              >
                About FieldNote →
              </Link>
            </div>

            <div className="mt-5">
              <BrandSignature />
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 pb-20 md:px-8">
        <Newsletter />
      </section>

      <FieldNoteAssistant />
    </main>
  )
}

export default Home

