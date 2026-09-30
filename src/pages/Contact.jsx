
import { useState } from "react"

import BrandSignature from "../components/BrandSignature"
import { site } from "../data/site"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      return
    }

    setSubmitted(true)

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <main className="newsroom-page min-h-screen">
      <section className="border-b border-black/10 dark:border-white/10">
        <div className="mx-auto max-w-[1400px] px-6 py-16 md:px-8 md:py-24">
          <div className="max-w-4xl">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
              Contact FieldNote
            </p>

            <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-[-0.06em] text-gray-950 md:text-7xl dark:text-white">
              Have something
              <span className="block text-[#1f5c43]">
                worth sharing?
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 md:text-lg dark:text-gray-400">
              Send us a story idea, correction, feedback or general
              inquiry. We are building FieldNote around useful information
              and thoughtful conversations.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-14 md:px-8 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_330px]">
          <div>
            {submitted ? (
              <div className="border border-[#1f5c43]/20 bg-[#eef4ef] p-8 dark:border-[#1f5c43]/30 dark:bg-[#142019]">
                <div className="flex h-12 w-12 items-center justify-center bg-[#1f5c43] text-xl font-black text-white">
                  ✓
                </div>

                <p className="mt-6 text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                  Message received
                </p>

                <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                  Thanks for contacting FieldNote.
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-7 text-gray-600 dark:text-gray-400">
                  Your message has been captured by this demo interface.
                  A production version can connect this form to an email
                  service or backend API.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 bg-[#171916] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#1f5c43] hover:shadow-lg"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="border border-black/10 bg-white p-7 shadow-xl transition duration-500 hover:shadow-2xl md:p-9 dark:border-white/10 dark:bg-[#171c18]"
              >
                <div className="mb-8 border-b border-black/10 pb-6 dark:border-white/10">
                  <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                    Send a message
                  </p>

                  <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                    Let's talk.
                  </h2>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
                      Your name
                    </label>

                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="mt-2 w-full border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-2 w-full border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10 dark:text-white"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
                    Subject
                  </label>

                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="mt-2 w-full border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10 dark:text-white"
                  />
                </div>

                <div className="mt-5">
                  <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    rows="7"
                    className="mt-2 w-full resize-none border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-6 bg-[#1f5c43] px-7 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#174632] hover:shadow-xl"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>

          <aside>
            <div className="sticky top-28 space-y-5">
              <div className="border border-black/10 bg-white p-7 transition duration-500 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-[#171c18]">
                <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
                  Contact information
                </p>

                <h2 className="mt-3 text-2xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                  Reach FieldNote
                </h2>

                <div className="mt-7 space-y-6">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-gray-500">
                      Email
                    </p>

                    <a
                      href={`mailto:${site.email}`}
                      className="mt-2 inline-block text-sm font-bold text-[#1f5c43] transition hover:translate-x-1 hover:underline"
                    >
                      {site.email}
                    </a>
                  </div>

                  <div className="border-t border-black/10 pt-6 dark:border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-gray-500">
                      Publication
                    </p>

                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      Story ideas, corrections, feedback and collaboration
                      inquiries are welcome.
                    </p>
                  </div>

                  <div className="border-t border-black/10 pt-6 dark:border-white/10">
                    <p className="text-[10px] font-black uppercase tracking-[0.14em] text-gray-500">
                      Founded by
                    </p>

                    <p className="mt-2 text-base font-black text-gray-950 dark:text-white">
                      {site.founder}
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      {site.founderRole}
                    </p>
                  </div>
                </div>
              </div>

              <BrandSignature />
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default Contact
