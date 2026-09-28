function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null

  return (
    <div className="mt-12 flex items-center justify-center gap-4">

      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="rounded-full border px-5 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        ← Previous
      </button>

      <span className="text-sm font-medium text-gray-600">
        Page {currentPage} of {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="rounded-full border px-5 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next →
      </button>

    </div>
  )
}

export default Pagination