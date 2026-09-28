function ResourceLinks({ resources }) {
  if (!resources?.length) return null

  return (
    <section className="mt-10 border-t pt-8">

      <h2 className="text-xl font-bold text-gray-900">
        Useful Resources
      </h2>

      <div className="mt-4 flex flex-wrap gap-3">

        {resources.map((resource) => (
          <a
            key={resource.url}
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50"
          >
            {resource.title} ↗
          </a>
        ))}

      </div>

    </section>
  )
}

export default ResourceLinks