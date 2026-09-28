
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from "../context/AuthContext"

function Register() {
  const navigate = useNavigate()
  const { register } = useAuth()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] =
    useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    setError("")

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("Please fill in all fields.")
      return
    }

    if (password.length < 6) {
      setError(
        "Password must be at least 6 characters."
      )
      return
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.")
      return
    }

    setLoading(true)

    setTimeout(() => {
      const result = register(
        name.trim(),
        email.trim(),
        password
      )

      setLoading(false)

      if (!result.success) {
        setError(result.message)
        return
      }

      navigate("/add-blog")
    }, 500)
  }

  return (
    <main className="flex min-h-[75vh] items-center justify-center px-6 py-16">

      <div className="w-full max-w-md">

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Join FieldNote
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            Create an Account
          </h1>

          <p className="mt-3 text-gray-500">
            Create your account and publish your own stories.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 rounded-3xl border border-gray-200 bg-white p-7 shadow-sm"
        >

          {error && (
            <div className="mb-5 rounded-xl bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          <label className="text-sm font-semibold text-gray-700">
            Full Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(event) =>
              setName(event.target.value)
            }
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            required
          />

          <label className="mt-5 block text-sm font-semibold text-gray-700">
            Email
          </label>

          <input
            type="email"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            required
          />

          <label className="mt-5 block text-sm font-semibold text-gray-700">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(event) =>
              setPassword(event.target.value)
            }
            placeholder="At least 6 characters"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            required
          />

          <label className="mt-5 block text-sm font-semibold text-gray-700">
            Confirm Password
          </label>

          <input
            type="password"
            value={confirmPassword}
            onChange={(event) =>
              setConfirmPassword(event.target.value)
            }
            placeholder="Repeat your password"
            className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? "Creating Account..."
              : "Create Account"}
          </button>

          <p className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-blue-600 hover:text-blue-800"
            >
              Sign In
            </Link>
          </p>

        </form>

      </div>

    </main>
  )
}

export default Register

