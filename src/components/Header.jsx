
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { site } from "../data/site"
import { useAuth } from "../context/AuthContext"

function Header() {
  const { user, logout, isAuthenticated } = useAuth()
  const location = useLocation()

  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("fieldnote-theme") === "dark"
  })

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode)

    localStorage.setItem(
      "fieldnote-theme",
      darkMode ? "dark" : "light"
    )
  }, [darkMode])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    logout()
  }

  return (
    <>
      <div className="news-ticker border-b border-black/10 bg-[#171916] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-white">
        <div className="news-ticker-track gap-12">
          <span>
            FieldNote · Real-world knowledge, clearly told.
          </span>

          <span>
            Technology · Agriculture · Business · Careers · World · Science
          </span>

          <span>
            FieldNote · Real-world knowledge, clearly told.
          </span>

          <span>
            Technology · Agriculture · Business · Careers · World · Science
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-black/10 bg-[#f4f1eb]/95 backdrop-blur-xl dark:border-white/10 dark:bg-[#101411]/95">
        <div className="mx-auto max-w-[1400px] px-6 md:px-8">
          <div className="flex h-20 items-center justify-between gap-6">
            <Link
              to="/"
              className="group shrink-0"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-[#1f5c43] text-lg font-black text-white transition duration-300 group-hover:rotate-3 group-hover:scale-105">
                  F
                </div>

                <div>
                  <p className="text-xl font-black tracking-[-0.04em] text-gray-950 dark:text-white">
                    FieldNote
                  </p>

                  <p className="hidden text-[9px] font-bold uppercase tracking-[0.12em] text-gray-500 sm:block">
                    Real-world knowledge
                  </p>
                </div>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              {site.navigation.map((item) => {
                const active = location.pathname === item.path

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative text-xs font-bold transition duration-300 hover:text-[#1f5c43] ${
                      active
                        ? "text-[#1f5c43]"
                        : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    {item.label}

                    <span
                      className={`absolute -bottom-2 left-0 h-0.5 bg-[#1f5c43] transition-all duration-300 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                )
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Link
                to="/search"
                className="flex h-10 w-10 items-center justify-center text-lg text-gray-600 transition duration-300 hover:bg-white hover:text-[#1f5c43] dark:text-gray-300 dark:hover:bg-[#171c18]"
                aria-label="Search FieldNote"
              >
                ⌕
              </Link>

              <Link
                to="/bookmarks"
                className="border border-black/10 px-4 py-2.5 text-xs font-bold text-gray-700 transition duration-300 hover:-translate-y-0.5 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
              >
                Saved
              </Link>

              <Link
                to="/add-blog"
                className="bg-[#1f5c43] px-4 py-2.5 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#174632] hover:shadow-lg"
              >
                + Write Story
              </Link>

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex h-10 w-10 items-center justify-center border border-black/10 text-sm transition duration-300 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? "☀" : "☾"}
              </button>

              {isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <div className="border border-black/10 px-3 py-2 dark:border-white/10">
                    <p className="max-w-[100px] truncate text-xs font-bold text-gray-900 dark:text-white">
                      {user?.name}
                    </p>
                  </div>

                  <button
                    onClick={handleLogout}
                    className="px-3 py-2 text-xs font-bold text-gray-500 transition hover:text-red-600"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="border border-black/10 px-4 py-2.5 text-xs font-bold text-gray-700 transition duration-300 hover:-translate-y-0.5 hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
                >
                  Sign In
                </Link>
              )}
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center border border-black/10 text-xl text-gray-800 transition hover:border-[#1f5c43] hover:text-[#1f5c43] lg:hidden dark:border-white/10 dark:text-white"
              aria-label="Toggle menu"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {menuOpen && (
            <div className="border-t border-black/10 py-5 lg:hidden dark:border-white/10">
              <nav className="flex flex-col">
                {site.navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="border-b border-black/5 py-3 text-sm font-bold text-gray-700 transition hover:pl-2 hover:text-[#1f5c43] dark:border-white/5 dark:text-gray-300"
                  >
                    {item.label}
                  </Link>
                ))}

                <Link
                  to="/search"
                  className="border-b border-black/5 py-3 text-sm font-bold text-gray-700 transition hover:pl-2 hover:text-[#1f5c43] dark:border-white/5 dark:text-gray-300"
                >
                  Search
                </Link>

                <Link
                  to="/bookmarks"
                  className="border-b border-black/5 py-3 text-sm font-bold text-gray-700 transition hover:pl-2 hover:text-[#1f5c43] dark:border-white/5 dark:text-gray-300"
                >
                  Saved Stories
                </Link>

                <Link
                  to="/add-blog"
                  className="mt-4 flex items-center justify-center bg-[#1f5c43] px-5 py-3.5 text-sm font-black text-white transition duration-300 hover:bg-[#174632] hover:shadow-lg"
                >
                  + Write a Story
                </Link>

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="mt-3 border border-black/10 px-5 py-3 text-sm font-bold text-gray-700 transition hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
                >
                  {darkMode ? "☀ Light Mode" : "☾ Dark Mode"}
                </button>

                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="mt-3 border border-red-200 px-5 py-3 text-sm font-bold text-red-600 transition hover:bg-red-50"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    to="/login"
                    className="mt-3 border border-black/10 px-5 py-3 text-center text-sm font-bold text-gray-700 transition hover:border-[#1f5c43] hover:text-[#1f5c43] dark:border-white/10 dark:text-gray-300"
                  >
                    Sign In
                  </Link>
                )}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}

export default Header

