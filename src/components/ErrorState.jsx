
function ErrorState({
  title = "Something went wrong",
  message = "Please try again.",
  onRetry,
}) {
  return (
    <div className="rounded-3xl border border-red-200 bg-red-50 p-10 text-center">
      <p className="text-4xl">⚠️</p>

      <h2 className="mt-4 text-xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mt-2 text-sm text-gray-600">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-5 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-600"
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorState

