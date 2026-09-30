
function ResourceLinks({ resources = [], source }) {
  const hasResources = resources?.length > 0
  const hasSource = source?.name && source?.url

  if (!hasResources && !hasSource) {
    return null
  }

  return (
    <section className="border-t border-black/10 pt-10 dark:border-white/10">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1f5c43]">
          Sources & Resources
        </p>

        <h2 className="mt-2 text-3xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
          Go deeper
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
          Explore the original publisher and supporting resources
          behind this FieldNote story.
        </p>
      </div>

      {hasSource && (
        <div className="group relative mt-7 overflow-hidden border border-[#1f5c43]/20 bg-[#eef4ef] p-6 transition duration-500 hover:-translate-y-1 hover:border-[#1f5c43]/50 hover:shadow-xl dark:border-[#1f5c43]/30 dark:bg-[#142019]">
          <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#1f5c43]/10 transition duration-500 group-hover:scale-150" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#1f5c43]">
                Original Publisher
              </p>

              <h3 className="mt-2 text-xl font-black text-gray-950 dark:text-white">
                {source.name}
              </h3>

              {source.publishedAt && (
                <p className="mt-1 text-xs font-medium text-gray-500">
                  Published {source.publishedAt}
                </p>
              )}
            </div>

            <a
              href={source.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group/button inline-flex shrink-0 items-center justify-center gap-2 bg-[#1f5c43] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#174632] hover:shadow-lg"
            >
              Visit Original Source
              <span className="transition-transform duration-300 group-hover/button:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      )}

      {hasResources && (
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {resources.map((resource, index) => (
            <a
              key={`${resource.url}-${index}`}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="group relative overflow-hidden border border-black/10 bg-white p-5 transition duration-500 hover:-translate-y-1 hover:border-[#1f5c43]/40 hover:shadow-xl dark:border-white/10 dark:bg-[#171c18]"
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#1f5c43] transition-all duration-500 group-hover:w-full" />

              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#1f5c43]">
                    Resource
                  </p>

                  <h3 className="mt-2 text-base font-black leading-6 text-gray-950 transition duration-300 group-hover:text-[#1f5c43] dark:text-white">
                    {resource.title}
                  </h3>

                  {resource.description && (
                    <p className="mt-2 text-xs leading-6 text-gray-500 dark:text-gray-400">
                      {resource.description}
                    </p>
                  )}
                </div>

                <span className="shrink-0 text-xl text-gray-400 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#1f5c43]">
                  ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </section>
  )
}

export default ResourceLinks

