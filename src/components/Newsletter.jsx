import { useState } from "react"

function Newsletter() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!email.trim()) return

    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="rounded-3xl bg-gray-950 p-8 text-white md:p-12">

      <p className="text-sm font-bold uppercase tracking-widest text-blue-400">
        Stay informed
      </p>

      <h2 className="mt-3 text-3xl font-bold">
        Get useful stories in your inbox.
      </h2>

      <p className="mt-3 max-w-xl text-gray-400">
        A simple collection of practical ideas and real-world experiences.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">

        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Your email address"
          className="flex-1 rounded-full px-5 py-3 text-gray-900 outline-none"
        />

        <button
          type="submit"
          className="rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
        >
          Subscribe
        </button>

      </form>

      {submitted && (
        <p className="mt-4 text-sm text-green-400">
          Thanks! You are subscribed.
        </p>
      )}

    </section>
  )
}

export default Newsletter