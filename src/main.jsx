
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"

import App from "./App"
import { ToastProvider } from "./context/ToastContext"
import { AuthProvider } from "./context/AuthContext"
import { BlogProvider } from "./context/BlogContext"

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <AuthProvider>
        <BlogProvider>
          <App />
        </BlogProvider>
      </AuthProvider>
    </ToastProvider>
  </StrictMode>
)

