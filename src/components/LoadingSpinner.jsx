
function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="flex min-h-[240px] flex-col items-center justify-center gap-4">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-black/10 border-t-[#1f5c43] dark:border-white/10 dark:border-t-[#7db394]" />

      <p className="text-sm font-semibold text-gray-500 dark:text-gray-400">
        {text}
      </p>
    </div>
  )
}

export default LoadingSpinner
