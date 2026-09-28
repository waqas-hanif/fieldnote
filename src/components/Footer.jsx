function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="grid gap-10 md:grid-cols-3">

          <div>
            <h2 className="text-2xl font-bold">
              Field<span className="text-blue-400">Note</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-400">
              Real stories, practical knowledge and ideas from the real world.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Explore</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>Technology</p>
              <p>Agriculture</p>
              <p>Development</p>
              <p>Career</p>
              <p>Business</p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">FieldNote</h3>

            <div className="mt-4 space-y-3 text-sm text-gray-400">
              <p>Real experiences</p>
              <p>Practical knowledge</p>
              <p>Useful ideas</p>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-gray-800 pt-6 text-sm text-gray-500">
          © 2026 FieldNote. All rights reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer