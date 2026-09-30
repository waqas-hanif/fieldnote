
import { Link } from "react-router-dom"

function NotFound() {
  return (
    <main className="newsroom-page min-h-[70vh]">
      <section className="mx-auto flex min-h-[70vh] max-w-[1100px] items-center justify-center px-6 py-20 md:px-8">
        <div className="w-full text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#1f5c43]">
            FieldNote · 404
          </p>

          <h1 className="mt-5 text-[110px] font-black leading-none tracking-[-0.09em] text-gray-950 md:text-[180px] dark:text-white">
            404
          </h1>

          <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-gray-950 md:text-4xl dark:text-white">
            This page went off the record.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 md:text-base dark:text-gray-400">
            The page you are looking for does not exist, may have moved,
            or the link may be incorrect.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/"
              className="bg-[#1f5c43] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#174632] hover:shadow-xl"
            >
              Back to Homepage →
            </Link>

            <Link
              to="/blogs"
              className="border border-black/10 px-6 py-3 text-sm font-bold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
            >
              Browse Stories
            </Link>

            <Link
              to="/search"
              className="border border-black/10 px-6 py-3 text-sm font-bold text-gray-700 transition duration-300 hover:-translate-y-1 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
            >
              Search FieldNote
            </Link>
          </div>

          <div className="mx-auto mt-14 max-w-2xl border-t border-black/10 pt-7 dark:border-white/10">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-gray-500">
              FieldNote
            </p>

            <p className="mt-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
              Real-world knowledge, clearly told.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NotFound

