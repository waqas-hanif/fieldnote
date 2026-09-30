
import { Link, useParams } from "react-router-dom"

import BlogCard from "../components/BlogCard"
import EmptyState from "../components/EmptyState"
import BrandSignature from "../components/BrandSignature"

import { useBlogs } from "../hooks/useBlogs"
import { categories } from "../data/categories"

function Category() {
  const { slug } = useParams()
  const { blogs } = useBlogs()

  const category = categories.find(
    (item) => item.slug === slug
  )

  const categoryBlogs = blogs.filter(
    (blog) => blog.categorySlug === slug
  )

  if (!category) {
    return (
      <main className="newsroom-page min-h-screen px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1f5c43]">
            FieldNote
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] text-gray-950 dark:text-white">
            Section not found
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-gray-600 dark:text-gray-400">
            This newsroom section does not exist yet.
          </p>

          <Link
            to="/blogs"
            className="mt-8 inline-flex bg-[#171916] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#1f5c43] hover:shadow-lg"
          >
            Browse all stories →
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="newsroom-page min-h-screen">
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
                FieldNote Section
              </p>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-[-0.06em] text-gray-950 md:text-7xl dark:text-white">
                {category.name}
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
                {category.description}
              </p>
            </div>

            <div className="border-l-2 border-[#1f5c43] pl-6">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-500">
                Section Archive
              </p>

              <p className="mt-3 text-4xl font-black tracking-[-0.05em] text-gray-950 dark:text-white">
                {categoryBlogs.length}
              </p>

              <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
                {categoryBlogs.length === 1
                  ? "Published Story"
                  : "Published Stories"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-14 md:px-8 md:py-20">
        {categoryBlogs.length > 0 ? (
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="mb-8 flex items-end justify-between border-b border-black/10 pb-5 dark:border-white/10">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                    Latest in {category.name}
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                    Stories from this section
                  </h2>
                </div>

                <Link
                  to="/blogs"
                  className="hidden text-sm font-bold text-[#1f5c43] transition hover:translate-x-1 hover:underline sm:block"
                >
                  All stories →
                </Link>
              </div>

              <div className="grid gap-7 md:grid-cols-2">
                {categoryBlogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    blog={blog}
                  />
                ))}
              </div>
            </div>

            <aside>
              <div className="sticky top-28 space-y-5">
                <div className="border border-black/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#171c18]">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                    About this section
                  </p>

                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                    {category.name}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>

                  <div className="mt-6 border-t border-black/10 pt-5 dark:border-white/10">
                    <p className="text-xs text-gray-500">
                      Stories published
                    </p>

                    <p className="mt-1 text-2xl font-black text-gray-950 dark:text-white">
                      {categoryBlogs.length}
                    </p>
                  </div>
                </div>

                <BrandSignature />

                <Link
                  to="/blogs"
                  className="group block border border-black/10 bg-[#171916] p-6 text-white transition duration-500 hover:-translate-y-1 hover:bg-[#1f5c43] hover:shadow-xl dark:border-white/10"
                >
                  <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#b8d6c5]">
                    Explore
                  </p>

                  <p className="mt-3 text-xl font-black tracking-[-0.03em]">
                    Browse the complete FieldNote archive
                  </p>

                  <p className="mt-4 text-sm text-gray-300 transition group-hover:translate-x-1">
                    View all stories →
                  </p>
                </Link>
              </div>
            </aside>
          </div>
        ) : (
          <EmptyState
            title={`No ${category.name} stories yet`}
            message="This section is ready for new FieldNote stories."
            actionText="Browse all stories"
            actionLink="/blogs"
          />
        )}
      </section>
    </main>
  )
}

export default Category
