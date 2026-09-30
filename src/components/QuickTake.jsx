
function QuickTake({ text }) {
  if (!text) return null

  return (
    <section className="my-8 border-l-4 border-[#1f5c43] bg-[#e9e5dc] px-6 py-6 dark:bg-[#1a211c]">
      <div className="flex items-start gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1f5c43] text-lg font-black text-white">
          ✓
        </div>

        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
            Quick Take
          </p>

          <p className="mt-2 text-base font-semibold leading-7 text-gray-800 dark:text-gray-200">
            {text}
          </p>
        </div>
      </div>
    </section>
  )
}

export default QuickTake

