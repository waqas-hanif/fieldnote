
import { Link } from "react-router-dom"

import { site } from "../data/site"

function Terms() {
  return (
    <main className="newsroom-page min-h-screen">
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-8 md:py-24">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
            FieldNote Legal
          </p>

          <h1 className="mt-5 text-5xl font-black leading-none tracking-[-0.06em] text-gray-950 md:text-7xl dark:text-white">
            Terms of Use
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            These terms describe the general rules for using the
            FieldNote website and its content.
          </p>

          <p className="mt-4 text-xs font-semibold text-gray-500">
            Last updated: September 30, 2026
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-6 py-14 md:px-8 md:py-20">
        <div className="space-y-10">
          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              01
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Using FieldNote
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              You may use FieldNote for lawful personal, educational and
              informational purposes. You agree not to misuse the website,
              interfere with its operation or use it for unlawful activity.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              02
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Content and copyright
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              FieldNote content may include original articles, commentary,
              images, links and other materials. Unless otherwise stated,
              FieldNote content should not be copied, republished or
              redistributed in substantial form without appropriate
              permission.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              External publishers and resources linked from FieldNote
              remain the property of their respective owners.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              03
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              User comments
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              When commenting features are available, users are responsible
              for the content they submit. Comments should be respectful,
              lawful and relevant to the discussion.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              FieldNote may remove comments that are abusive, unlawful,
              misleading, spam-like or otherwise inappropriate for the
              publication.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              04
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              External sources
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              FieldNote may link to external news publishers, research
              organizations, websites and other resources. These links
              are provided for additional information. FieldNote does not
              control external websites or guarantee their availability,
              accuracy or privacy practices.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              05
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Informational purpose
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              FieldNote content is provided for general informational and
              educational purposes. Readers should consider the original
              sources and seek qualified professional advice when a subject
              requires specialized guidance.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              06
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Accuracy and updates
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              We aim to present useful and accurate information, but
              information can change over time. FieldNote may correct,
              update or remove content when necessary.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              07
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Website availability
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              We may change, update, suspend or discontinue website
              features from time to time. We do not guarantee that every
              feature will always be available or free from interruption.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              08
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Changes to these terms
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              These terms may be updated as FieldNote grows and introduces
              new services or features. The latest version will be
              available on this page.
            </p>
          </section>

          <section className="border border-[#1f5c43]/20 bg-[#eef4ef] p-7 dark:border-[#1f5c43]/30 dark:bg-[#142019]">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              Questions
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Need more information?
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              Contact the FieldNote team if you have questions about these
              terms or the use of the website.
            </p>

            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex bg-[#1f5c43] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#174632] hover:shadow-lg"
            >
              Contact FieldNote →
            </a>
          </section>

          <div className="flex flex-wrap gap-5 border-t border-black/10 pt-7 dark:border-white/10">
            <Link
              to="/privacy"
              className="text-sm font-bold text-[#1f5c43] transition hover:translate-x-1 hover:underline"
            >
              Privacy Policy →
            </Link>

            <Link
              to="/contact"
              className="text-sm font-bold text-[#1f5c43] transition hover:translate-x-1 hover:underline"
            >
              Contact →
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Terms

