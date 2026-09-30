
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../context/AuthContext"

function Register() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [error, setError] = useState("")

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

    setError("")
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      setError("Please complete all fields.")
      return
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.")
      return
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    const result = register(
      form.name.trim(),
      form.email.trim(),
      form.password
    )

    if (!result.success) {
      setError(result.message)
      return
    }

    navigate("/")
  }

  return (
    <main className="newsroom-page min-h-screen">
      <section className="mx-auto grid min-h-[calc(100vh-140px)] max-w-[1400px] items-center gap-12 px-6 py-14 md:px-8 lg:grid-cols-[1fr_480px]">
        <div className="hidden lg:block">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
            Join FieldNote
          </p>

          <h1 className="mt-5 max-w-3xl text-7xl font-black leading-[0.92] tracking-[-0.06em] text-gray-950 dark:text-white">
            Read.
            <span className="block text-[#1f5c43]">
              Learn.
            </span>
            <span className="block">
              Share.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-gray-600 dark:text-gray-400">
            Create a FieldNote account to save useful stories and
            participate in the publication.
          </p>

          <div className="mt-10 border-l-2 border-[#1f5c43] pl-6">
            <p className="text-xs font-black uppercase tracking-[0.15em] text-gray-500">
              FieldNote
            </p>

            <p className="mt-2 text-xl font-black text-gray-950 dark:text-white">
              Real-world knowledge, clearly told.
            </p>
          </div>
        </div>

        <div className="border border-black/10 bg-white p-7 shadow-2xl transition duration-500 hover:shadow-[0_25px_70px_rgba(23,25,22,0.15)] md:p-9 dark:border-white/10 dark:bg-[#171c18]">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
              Create account
            </p>

            <h1 className="mt-2 text-4xl font-black tracking-[-0.05em] text-gray-950 dark:text-white">
              Join FieldNote.
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Create your account and start exploring.
            </p>
          </div>

          {error && (
            <div className="mt-6 border-l-4 border-red-500 bg-red-50 p-4 text-sm leading-6 text-red-700 dark:bg-red-950/20 dark:text-red-300">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="mt-7"
          >
            <div>
              <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
                Full name
              </label>

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                autoComplete="name"
                className="mt-2 w-full border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10 dark:text-white"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                autoComplete="email"
                className="mt-2 w-full border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10 dark:text-white"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                autoComplete="new-password"
                className="mt-2 w-full border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10 dark:text-white"
              />
            </div>

            <div className="mt-5">
              <label className="text-xs font-black uppercase tracking-[0.1em] text-gray-500">
                Confirm password
              </label>

              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Repeat your password"
                autoComplete="new-password"
                className="mt-2 w-full border border-black/10 bg-transparent px-4 py-3.5 text-sm text-gray-900 outline-none transition duration-300 focus:border-[#1f5c43] focus:ring-2 focus:ring-[#1f5c43]/10 dark:border-white/10 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="mt-6 w-full bg-[#1f5c43] px-6 py-3.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#174632] hover:shadow-xl"
            >
              Create Account →
            </button>
          </form>

          <div className="mt-7 border-t border-black/10 pt-6 text-center dark:border-white/10">
            <p className="text-sm text-gray-500">
              Already have an account?
            </p>

            <Link
              to="/login"
              className="mt-2 inline-block text-sm font-black text-[#1f5c43] transition hover:translate-x-1 hover:underline"
            >
              Sign in →
            </Link>
          </div>

          <Link
            to="/"
            className="mt-6 block text-center text-xs font-bold text-gray-400 transition hover:text-[#1f5c43]"
          >
            ← Back to FieldNote
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Register
