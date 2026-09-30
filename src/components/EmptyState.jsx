
import { Link } from "react-router-dom"

function EmptyState({
  title = "Nothing here yet",
  message = "There are no stories available at the moment.",
  actionText,
  actionLink,
}) {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center border border-dashed border-black/15 bg-white px-6 py-12 text-center dark:border-white/15 dark:bg-[#171c18]">
      <div className="flex h-16 w-16 items-center justify-center bg-[#e9e5dc] text-2xl dark:bg-[#202620]">
        ◌
      </div>

      <h2 className="mt-6 text-2xl font-black tracking-[-0.03em] text-gray-950 dark:text-white">
        {title}
      </h2>

      <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
        {message}
      </p>

      {actionText && actionLink && (
        <Link
          to={actionLink}
          className="mt-6 bg-[#1f5c43] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#174632]"
        >
          {actionText}
        </Link>
      )}
    </div>
  )
}

export default EmptyState

