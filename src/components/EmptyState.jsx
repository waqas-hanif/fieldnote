
function EmptyState({
  icon = "📭",
  title = "Nothing here yet",
  message = "There is nothing to show right now.",
}) {
  return (
    <div className="rounded-3xl border border-gray-200 bg-gray-50 p-12 text-center">
      <p className="text-4xl">{icon}</p>

      <h2 className="mt-4 text-xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
        {message}
      </p>
    </div>
  )
}

export default EmptyState

