
import { createContext, useContext, useState } from "react"

const ToastContext = createContext()

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const showToast = (message, type = "success") => {
    const id = Date.now() + Math.random()

    setToasts((current) => [
      ...current,
      { id, message, type },
    ])

    setTimeout(() => {
      setToasts((current) =>
        current.filter((toast) => toast.id !== id)
      )
    }, 3000)
  }

  const removeToast = (id) => {
    setToasts((current) =>
      current.filter((toast) => toast.id !== id)
    )
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      <div
        className="fixed right-4 top-20 z-[100] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3"
        aria-live="polite"
      >
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`rounded-2xl border bg-white p-4 shadow-xl ${
              toast.type === "error"
                ? "border-red-200"
                : toast.type === "info"
                ? "border-blue-200"
                : "border-green-200"
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-lg">
                {toast.type === "error"
                  ? "✕"
                  : toast.type === "info"
                  ? "ℹ"
                  : "✓"}
              </span>

              <p className="flex-1 text-sm font-medium text-gray-700">
                {toast.message}
              </p>

              <button
                onClick={() => removeToast(toast.id)}
                className="text-gray-400 hover:text-gray-900"
                aria-label="Close notification"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return useContext(ToastContext)
}

