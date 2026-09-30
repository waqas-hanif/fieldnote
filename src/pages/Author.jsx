
import { Link, useParams } from "react-router-dom"

import BlogCard from "../components/BlogCard"
import EmptyState from "../components/EmptyState"
import BrandSignature from "../components/BrandSignature"

import { useBlogs } from "../hooks/useBlogs"
import { authors } from "../data/authors"

function Author() {
  const { id } = useParams()
  const { blogs } = useBlogs()

  const author = authors.find(
    (item) => String(item.id) === String(id)
  )

  const authorBlogs = blogs.filter(
    (blog) => String(blog.authorId) === String(author?.id)
  )

  if (!author) {
    return (
      <main className="newsroom-page min-h-screen px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1f5c43]">
            FieldNote
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-[-0.05em] text-gray-950 dark:text-white">
            Author not found
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-gray-600 dark:text-gray-400">
            The author profile you are looking for is not available.
          </p>

          <Link
            to="/blogs"
            className="mt-8 inline-flex bg-[#171916] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1f5c43]"
          >
            Browse Stories →
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="newsroom-page min-h-screen">
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-14 md:px-8 md:py-20">
          <div className="grid gap-10 md:grid-cols-[180px_1fr] md:items-center">
            <div className="flex justify-center md:justify-start">
              <img
                src={author.avatar}
                alt={author.name}
                className="h-40 w-40 rounded-full object-cover ring-8 ring-[#1f5c43]/10"
              />
            </div>

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
                FieldNote Contributor
              </p>

              <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.06em] text-gray-950 md:text-6xl dark:text-white">
                {author.name}
              </h1>

              <p className="mt-4 text-base font-bold text-[#1f5c43]">
                {author.role}
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 dark:text-gray-400">
                {author.bio}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <div className="border border-black/10 bg-white px-5 py-3 dark:border-white/10 dark:bg-[#171c18]">
                  <p className="text-2xl font-black text-gray-950 dark:text-white">
                    {authorBlogs.length}
                  </p>

                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gray-500">
                    Published Stories
                  </p>
                </div>

                <Link
                  to="/blogs"
                  className="border border-black/10 px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
                >
                  Back to newsroom →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 py-14 md:px-8 md:py-20">
        {authorBlogs.length > 0 ? (
          <>
            <div className="grid gap-12 lg:grid-cols-[1fr_300px]">
              <div>
                <div className="mb-8 border-b border-black/10 pb-5 dark:border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                    Contributor Archive
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                    Stories by {author.name}
                  </h2>
                </div>

                <div className="grid gap-7 md:grid-cols-2">
                  {authorBlogs.map((blog) => (
                    <BlogCard
                      key={blog.id}
                      blog={blog}
                    />
                  ))}
                </div>
              </div>

              <aside>
                <div className="sticky top-28 space-y-5">
                  <div className="border border-black/10 bg-white p-6 dark:border-white/10 dark:bg-[#171c18]">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#1f5c43]">
                      About the contributor
                    </p>

                    <div className="mt-5 flex items-center gap-4">
                      <img
                        src={author.avatar}
                        alt={author.name}
                        className="h-16 w-16 rounded-full object-cover"
                      />

                      <div>
                        <p className="text-base font-black text-gray-950 dark:text-white">
                          {author.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {author.role}
                        </p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-gray-600 dark:text-gray-400">
                      {author.bio}
                    </p>
                  </div>

                  <BrandSignature />
                </div>
              </aside>
            </div>
          </>
        ) : (
          <EmptyState
            title="No stories yet"
            message={`${author.name} has not published any stories yet.`}
            actionText="Browse all stories"
            actionLink="/blogs"
          />
        )}
      </section>
    </main>
  )
}

export default Author

