
import { Link } from "react-router-dom"

import BlogCard from "../components/BlogCard"
import EmptyState from "../components/EmptyState"
import BrandSignature from "../components/BrandSignature"

import { useBlogs } from "../hooks/useBlogs"

function Bookmarks() {
  const { blogs, bookmarks } = useBlogs()

  const savedBlogs = blogs.filter((blog) =>
    bookmarks.includes(blog.id)
  )

  return (
    <main className="newsroom-page min-h-screen">
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-14 md:px-8 md:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
                Your Library
              </p>

              <h1 className="mt-4 text-5xl font-black leading-none tracking-[-0.06em] text-gray-950 md:text-7xl dark:text-white">
                Saved stories.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
                Keep useful FieldNote stories here so you can return to
                them whenever you want.
              </p>
            </div>

            <div className="border-l-2 border-[#1f5c43] pl-6">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-500">
                Your collection
              </p>

              <p className="mt-2 text-4xl font-black tracking-[-0.05em] text-gray-950 dark:text-white">
                {savedBlogs.length}
              </p>

              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500">
                Saved {savedBlogs.length === 1 ? "Story" : "Stories"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-14 md:px-8 md:py-20">
        {savedBlogs.length > 0 ? (
          <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
            <div>
              <div className="mb-8 border-b border-black/10 pb-5 dark:border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                  Reading List
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                  Stories you saved
                </h2>
              </div>

              <div className="grid gap-7 md:grid-cols-2">
                {savedBlogs.map((blog) => (
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
                    Reading list
                  </p>

                  <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                    Keep the good ones.
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-gray-400">
                    Save stories that are useful, interesting or worth
                    revisiting later.
                  </p>

                  <Link
                    to="/blogs"
                    className="mt-6 inline-flex text-sm font-black text-[#1f5c43] transition hover:translate-x-1 hover:underline"
                  >
                    Discover more stories →
                  </Link>
                </div>

                <BrandSignature />
              </div>
            </aside>
          </div>
        ) : (
          <EmptyState
            title="Your reading list is empty"
            message="Save a FieldNote story and it will appear here."
            actionText="Explore stories"
            actionLink="/blogs"
          />
        )}
      </section>
    </main>
  )
}

export default Bookmarks

