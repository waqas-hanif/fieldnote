function QuickTake({ quickTake }) {
  return (
    <section className="rounded-2xl bg-gray-50 p-6">

      <h2 className="text-xl font-bold text-gray-900">
        Quick Take
      </h2>

      <div className="mt-5 space-y-5">

        <div>
          <p className="text-sm font-bold text-red-600">
            Problem
          </p>
          <p className="mt-1 text-gray-600">
            {quickTake.problem}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-blue-600">
            Why it matters
          </p>
          <p className="mt-1 text-gray-600">
            {quickTake.whyItMatters}
          </p>
        </div>

        <div>
          <p className="text-sm font-bold text-green-600">
            Practical solution
          </p>
          <p className="mt-1 text-gray-600">
            {quickTake.solution}
          </p>
        </div>

      </div>
    </section>
  )
}

export default QuickTake