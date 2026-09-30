
import { Link } from "react-router-dom"

import BrandSignature from "../components/BrandSignature"
import { site } from "../data/site"
import { categories } from "../data/categories"

function About() {
  return (
    <main className="newsroom-page min-h-screen">
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-5xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
              About FieldNote
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 md:text-7xl lg:text-8xl dark:text-white">
              Real-world knowledge.
              <span className="block text-[#1f5c43]">
                Clearly told.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl dark:text-gray-400">
              {site.description}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-14 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              Why FieldNote exists
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.05em] text-gray-950 md:text-5xl dark:text-white">
              Information should be useful.
            </h2>

            <div className="mt-8 space-y-6 text-base leading-8 text-gray-700 dark:text-gray-300">
              <p>
                The internet gives us more information every day, but
                more information does not always mean better understanding.
                FieldNote was created around a simple idea: stories should
                help people understand something that matters.
              </p>

              <p>
                We cover technology, agriculture, business, careers,
                development, productivity, science, climate and world
                developments. The subjects may be different, but the goal
                remains the same: explain useful ideas clearly and put
                information into context.
              </p>

              <p>
                FieldNote is designed to grow into a digital publication
                where readers can discover practical knowledge, follow
                important developments and explore original stories without
                unnecessary clutter.
              </p>
            </div>
          </div>

          <aside>
            <div className="border border-black/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-[#171c18]">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                Our approach
              </p>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xl font-black text-gray-950 dark:text-white">
                    01
                  </p>

                  <p className="mt-2 text-sm font-bold text-gray-900 dark:text-white">
                    Explain clearly
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Complex subjects should be understandable without
                    unnecessary jargon.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-6 dark:border-white/10">
                  <p className="text-xl font-black text-gray-950 dark:text-white">
                    02
                  </p>

                  <p className="mt-2 text-sm font-bold text-gray-900 dark:text-white">
                    Add context
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Facts become more useful when readers understand why
                    they matter.
                  </p>
                </div>

                <div className="border-t border-black/10 pt-6 dark:border-white/10">
                  <p className="text-xl font-black text-gray-950 dark:text-white">
                    03
                  </p>

                  <p className="mt-2 text-sm font-bold text-gray-900 dark:text-white">
                    Link to sources
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Readers should be able to explore original publishers
                    and supporting resources.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-8 md:py-20">
          <div className="mb-9">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              Our sections
            </p>

            <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 md:text-4xl dark:text-white">
              Explore what we cover
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group border border-black/10 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:border-[#1f5c43]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#171c18]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-2xl font-black text-[#1f5c43]">
                    {String(category.id).padStart(2, "0")}
                  </span>

                  <span className="text-gray-400 transition duration-300 group-hover:translate-x-1 group-hover:text-[#1f5c43]">
                    →
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-black text-gray-950 transition duration-300 group-hover:text-[#1f5c43] dark:text-white">
                  {category.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {category.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1000px] px-6 py-16 md:px-8 md:py-24">
        <div className="border border-black/10 bg-[#171916] p-8 text-white shadow-2xl md:p-12">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#8fc0a5]">
            Built with purpose
          </p>

          <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.05em] md:text-5xl">
            A publication designed to grow with its readers.
          </h2>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
            FieldNote is being developed as a modern digital publication,
            with a focus on useful journalism, original experiences,
            responsible sourcing and technology-enabled publishing.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/blogs"
              className="bg-[#1f5c43] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#286d50] hover:shadow-lg"
            >
              Explore Stories →
            </Link>

            <Link
              to="/contact"
              className="border border-white/15 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:border-white/30 hover:bg-white/5"
            >
              Contact FieldNote
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <BrandSignature />
        </div>
      </section>
    </main>
  )
}

export default About
