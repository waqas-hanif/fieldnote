
function BrandSignature({ compact = false }) {
  return (
    <div
      className={`flex items-center gap-4 ${
        compact
          ? ""
          : "border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-[#171c18]"
      }`}
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1f5c43] text-sm font-black text-white">
        WH
      </div>

      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#1f5c43]">
          Founded by
        </p>

        <p className="mt-1 text-base font-black tracking-[-0.02em] text-gray-950 dark:text-white">
          Waqas Hanif
        </p>

        <p className="mt-0.5 text-xs font-medium text-gray-500 dark:text-gray-400">
          MERN Specialist
        </p>
      </div>
    </div>
  )
}

export default BrandSignature

