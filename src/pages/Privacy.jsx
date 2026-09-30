
import { Link } from "react-router-dom"

import { site } from "../data/site"

function Privacy() {
  return (
    <main className="newsroom-page min-h-screen">
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1100px] px-6 py-16 md:px-8 md:py-24">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
            FieldNote Legal
          </p>

          <h1 className="mt-5 text-5xl font-black leading-none tracking-[-0.06em] text-gray-950 md:text-7xl dark:text-white">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
            This page explains how FieldNote may collect, use and
            protect information when visitors use the website.
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
              Information we collect
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              FieldNote may collect information that visitors voluntarily
              provide, such as a name or email address when using forms,
              registration features, comments or newsletter features.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              02
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              How information is used
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              Information may be used to provide website features,
              respond to messages, improve the publication and maintain
              the security and functionality of the website.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              03
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Cookies and local storage
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              FieldNote may use cookies, browser storage or similar
              technologies to remember preferences and support website
              functionality. Current frontend features may also store
              information such as bookmarks, comments, theme preferences
              and demo account data in the visitor's browser.
            </p>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              If advertising, analytics or other third-party services
              are introduced, those services may use their own cookies
              or similar technologies according to their respective
              policies.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              04
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Advertising
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              FieldNote may display advertising in the future. When
              advertising services are enabled, third-party advertising
              providers may use cookies or similar technologies to
              provide, measure or personalize advertisements according
              to their applicable policies and user choices.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              05
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Third-party links
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              FieldNote stories may contain links to external websites,
              publishers and resources. FieldNote does not control the
              privacy practices of those external websites. Visitors
              should review the privacy policies of third-party services
              before providing them with personal information.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              06
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Data security
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              Reasonable measures may be used to protect information
              handled by the website. However, no internet transmission
              or electronic storage system can be guaranteed to be
              completely secure.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              07
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Children's privacy
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              FieldNote is intended as a general-interest publication.
              We do not knowingly request unnecessary personal
              information from children. Parents or guardians should
              supervise children's use of online services where
              appropriate.
            </p>
          </section>

          <section>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              08
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Changes to this policy
            </h2>

            <p className="mt-4 text-sm leading-8 text-gray-600 dark:text-gray-400">
              This privacy policy may be updated when FieldNote adds
              new features, services or legal requirements. The latest
              version will be published on this page.
            </p>
          </section>

          <section className="border border-[#1f5c43]/20 bg-[#eef4ef] p-7 dark:border-[#1f5c43]/30 dark:bg-[#142019]">
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              Questions
            </p>

            <h2 className="mt-2 text-2xl font-black text-gray-950 dark:text-white">
              Need to contact us?
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              For privacy-related questions, contact the FieldNote team.
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
              to="/terms"
              className="text-sm font-bold text-[#1f5c43] transition hover:translate-x-1 hover:underline"
            >
              Terms of Use →
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

export default Privacy
