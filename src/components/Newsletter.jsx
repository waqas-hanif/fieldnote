
import { useState } from "react"

import { useToast } from "../context/ToastContext"

function Newsletter() {
  const { showToast } = useToast()
  const [email, setEmail] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const value = email.trim()

    if (!value) {
      showToast("Please enter your email address.", "error")
      return
    }

    if (!value.includes("@")) {
      showToast("Please enter a valid email address.", "error")
      return
    }

    localStorage.setItem("fieldnote-newsletter-email", value)
    setEmail("")
    showToast("You are subscribed to FieldNote.")
  }

  return (
    <section className="relative overflow-hidden border border-black/10 bg-[#1f5c43] px-6 py-10 text-white md:px-10 md:py-12 dark:border-white/10">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border-[40px] border-white/5" />

      <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full border-[50px] border-white/5" />

      <div className="relative grid gap-8 lg:grid-cols-[1fr_460px] lg:items-center">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#b8d6c5]">
            FieldNote Briefing
          </p>

          <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.04em] md:text-4xl">
            Useful stories. Straight to your inbox.
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-white/70">
            Get selected stories, practical insights and important ideas from
            FieldNote without the noise.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email address"
            className="min-w-0 flex-1 border border-white/20 bg-white px-4 py-3.5 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-white"
          />

          <button
            type="submit"
            className="bg-[#171916] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-black"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter

