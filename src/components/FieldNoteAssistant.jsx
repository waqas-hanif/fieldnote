
import { useMemo, useState } from "react"

import { useBlogs } from "../hooks/useBlogs"

function FieldNoteAssistant() {
  const { blogs } = useBlogs()

  const [open, setOpen] = useState(false)
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const suggestions = useMemo(
    () => [
      "What should I read about technology?",
      "Show me agriculture stories",
      "Which stories are trending?",
    ],
    []
  )

  const askAssistant = (text = question) => {
    const query = text.trim().toLowerCase()

    if (!query) return

    let result = ""

    if (
      query.includes("technology") ||
      query.includes("tech") ||
      query.includes("ai")
    ) {
      const items = blogs
        .filter(
          (blog) =>
            blog.categorySlug === "technology" ||
            blog.categorySlug === "development"
        )
        .slice(0, 3)

      result =
        items.length > 0
          ? `I found ${items.length} technology-focused stories. You can explore: ${items
              .map((item) => item.title)
              .join(" • ")}`
          : "There are no technology stories available right now."
    } else if (
      query.includes("agriculture") ||
      query.includes("farming") ||
      query.includes("farmer")
    ) {
      const items = blogs
        .filter((blog) => blog.categorySlug === "agriculture")
        .slice(0, 3)

      result =
        items.length > 0
          ? `Here are some agriculture stories: ${items
              .map((item) => item.title)
              .join(" • ")}`
          : "There are no agriculture stories available right now."
    } else if (
      query.includes("trend") ||
      query.includes("popular")
    ) {
      const items = blogs
        .filter((blog) => blog.trending)
        .slice(0, 3)

      result =
        items.length > 0
          ? `These stories are currently marked as trending: ${items
              .map((item) => item.title)
              .join(" • ")}`
          : "There are no trending stories right now."
    } else if (
      query.includes("career") ||
      query.includes("job")
    ) {
      const items = blogs
        .filter((blog) => blog.categorySlug === "career")
        .slice(0, 3)

      result =
        items.length > 0
          ? `For career topics, try: ${items
              .map((item) => item.title)
              .join(" • ")}`
          : "There are no career stories available right now."
    } else if (
      query.includes("business") ||
      query.includes("company") ||
      query.includes("startup")
    ) {
      const items = blogs
        .filter((blog) => blog.categorySlug === "business")
        .slice(0, 3)

      result =
        items.length > 0
          ? `For business topics, try: ${items
              .map((item) => item.title)
              .join(" • ")}`
          : "There are no business stories available right now."
    } else if (
      query.includes("productivity") ||
      query.includes("time") ||
      query.includes("focus")
    ) {
      const items = blogs
        .filter((blog) => blog.categorySlug === "productivity")
        .slice(0, 3)

      result =
        items.length > 0
          ? `For productivity topics, try: ${items
              .map((item) => item.title)
              .join(" • ")}`
          : "There are no productivity stories available right now."
    } else {
      const matches = blogs
        .filter((blog) => {
          const searchableText = [
            blog.title,
            blog.excerpt,
            blog.category,
            ...(blog.tags || []),
          ]
            .join(" ")
            .toLowerCase()

          return query
            .split(" ")
            .some(
              (word) =>
                word.length > 2 &&
                searchableText.includes(word)
            )
        })
        .slice(0, 3)

      result =
        matches.length > 0
          ? `I found these FieldNote stories that may match your question: ${matches
              .map((item) => item.title)
              .join(" • ")}`
          : "I am currently connected to FieldNote's story collection. Try asking about technology, agriculture, careers, business, productivity or trending stories."
    }

    setAnswer(result)
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-[90] w-[calc(100%-2.5rem)] max-w-sm overflow-hidden border border-black/10 bg-[#f8f6f1] shadow-2xl dark:border-white/10 dark:bg-[#171c18]">
          <div className="bg-[#1f5c43] p-5 text-white">
            <div className="flex items-center gap-3">
              <div className="ai-pulse flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl">
                🤖
              </div>

              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#b8d6c5]">
                  FieldNote AI
                </p>

                <h3 className="mt-1 font-black">
                  Ask the newsroom
                </h3>
              </div>
            </div>
          </div>

          <div className="p-5">
            <p className="text-sm leading-6 text-gray-600 dark:text-gray-400">
              Ask me about stories, topics and what to read next.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {suggestions.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setQuestion(item)
                    askAssistant(item)
                  }}
                  className="border border-black/10 px-3 py-2 text-xs font-semibold text-gray-600 transition hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-400"
                >
                  {item}
                </button>
              ))}
            </div>

            {answer && (
              <div className="mt-4 border-l-4 border-[#1f5c43] bg-white p-4 text-sm leading-6 text-gray-700 dark:bg-[#101411] dark:text-gray-300">
                {answer}
              </div>
            )}

            <div className="mt-4 flex gap-2">
              <input
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    askAssistant()
                  }
                }}
                placeholder="Ask something..."
                className="min-w-0 flex-1 border border-black/10 bg-white px-4 py-3 text-sm text-gray-900 outline-none focus:border-[#1f5c43] dark:border-white/10 dark:bg-[#101411] dark:text-white"
              />

              <button
                onClick={() => askAssistant()}
                className="bg-[#171916] px-4 text-sm font-bold text-white transition hover:bg-[#1f5c43]"
              >
                →
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="ai-float ai-pulse fixed bottom-5 right-5 z-[90] flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#f4f1eb] bg-[#1f5c43] text-3xl shadow-2xl transition hover:scale-105 dark:border-[#101411]"
        aria-label="Open FieldNote AI"
      >
        {open ? "✕" : "🤖"}
      </button>
    </>
  )
}

export default FieldNoteAssistant

