function About() {
  return (
    <main className="mx-auto min-h-[70vh] max-w-4xl px-6 py-20">

      <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
        About FieldNote
      </p>

      <h1 className="mt-4 text-5xl font-bold leading-tight text-gray-900">
        Knowledge becomes useful when it comes from reality.
      </h1>

      <p className="mt-8 text-lg leading-8 text-gray-600">
        FieldNote is a platform for real experiences, practical knowledge,
        useful ideas and stories that can help people understand different
        parts of the world.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-gray-50 p-6">
          <h2 className="font-bold">Real Stories</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Experiences from real situations and projects.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-6">
          <h2 className="font-bold">Useful Knowledge</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Practical information instead of unnecessary complexity.
          </p>
        </div>

        <div className="rounded-2xl bg-gray-50 p-6">
          <h2 className="font-bold">Different Fields</h2>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            Technology, agriculture, career, business and more.
          </p>
        </div>

      </div>

    </main>
  )
}

export default About