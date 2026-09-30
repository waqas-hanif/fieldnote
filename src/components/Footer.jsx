
import { Link } from "react-router-dom"

import { site } from "../data/site"

function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#171916] text-white dark:border-white/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-8">
        <div className="grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Link
              to="/"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-11 w-11 items-center justify-center bg-[#1f5c43] text-lg font-black transition duration-300 group-hover:rotate-3 group-hover:scale-105">
                F
              </div>

              <div>
                <p className="text-2xl font-black tracking-[-0.05em]">
                  {site.name}
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-gray-400">
                  {site.tagline}
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              {site.description}
            </p>

            <div className="mt-7 border-l-2 border-[#1f5c43] pl-4">
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#8fc0a5]">
                Independent publication
              </p>

              <p className="mt-2 text-sm font-medium text-gray-300">
                Useful information. Clear stories. Real-world context.
              </p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8fc0a5]">
              Sections
            </p>

            <div className="mt-5 grid gap-3">
              <Link
                to="/blogs"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Latest
              </Link>

              <Link
                to="/category/technology"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Technology
              </Link>

              <Link
                to="/category/agriculture"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Agriculture
              </Link>

              <Link
                to="/category/business"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Business
              </Link>

              <Link
                to="/category/world"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                World
              </Link>

              <Link
                to="/category/science"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Science
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8fc0a5]">
              FieldNote
            </p>

            <div className="mt-5 grid gap-3">
              {site.footerLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-white"
                >
                  {item.label}
                </Link>
              ))}

              <Link
                to="/bookmarks"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Saved Stories
              </Link>

              <Link
                to="/search"
                className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-white"
              >
                Search
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8fc0a5]">
              Contact
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Have a story idea, correction or question? Get in touch
              with the FieldNote team.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex border border-white/15 px-5 py-3 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#8fc0a5] hover:bg-[#1f5c43] hover:shadow-lg"
            >
              Contact FieldNote →
            </a>

            <div className="mt-8">
              <p className="text-[9px] font-black uppercase tracking-[0.16em] text-gray-500">
                Founded by
              </p>

              <p className="mt-2 text-sm font-black">
                {site.founder}
              </p>

              <p className="mt-1 text-xs text-gray-500">
                {site.founderRole}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <p>
            Built for useful knowledge.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
