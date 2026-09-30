
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}) {
  if (totalPages <= 1) return null

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  )

  return (
    <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
      <button
        onClick={() =>
          onPageChange(Math.max(1, currentPage - 1))
        }
        disabled={currentPage === 1}
        className="border border-black/10 px-4 py-2.5 text-sm font-bold text-gray-700 transition hover:border-[#1f5c43] hover:text-[#1f5c43] disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/10 dark:text-gray-300"
      >
        ← Previous
      </button>

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`h-10 min-w-10 px-3 text-sm font-bold transition ${
            currentPage === page
              ? "bg-[#1f5c43] text-white"
              : "border border-black/10 text-gray-700 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() =>
          onPageChange(
            Math.min(totalPages, currentPage + 1)
          )
        }
        disabled={currentPage === totalPages}
        className="border border-black/10 px-4 py-2.5 text-sm font-bold text-gray-700 transition hover:border-[#1f5c43] hover:text-[#1f5c43] disabled:cursor-not-allowed disabled:opacity-30 dark:border-white/10 dark:text-gray-300"
      >
        Next →
      </button>
    </div>
  )
}

export default Pagination
