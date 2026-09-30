id="u2c8xk"
function ErrorState({
  title = "Something went wrong",
  message = "We could not load this content right now.",
  onRetry,
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center border border-red-200 bg-white px-6 py-12 text-center dark:border-red-900/40 dark:bg-[#171c18]">
      <div className="flex h-16 w-16 items-center justify-center bg-red-50 text-2xl text-red-500 dark:bg-red-950/30">
        !
      </div>

      <h2 className="mt-6 text-2xl font-black tracking-[-0.03em] text-gray-950 dark:text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
        {message}
      </p>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-6 bg-[#1f5c43] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#174632]"
        >
          Try Again
        </button>
      )}
    </div>
  )
}

export default ErrorState
