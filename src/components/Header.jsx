
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { useAuth } from "../context/AuthContext"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const [darkMode, setDarkMode] = useState(() => {
    return (
      localStorage.getItem("fieldnote-theme") ===
      "dark"
    )
  })

  const { user, logout } = useAuth()
  const { pathname } = useLocation()

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode")
      localStorage.setItem(
        "fieldnote-theme",
        "dark"
      )
    } else {
      document.body.classList.remove("dark-mode")
      localStorage.setItem(
        "fieldnote-theme",
        "light"
      )
    }
  }, [darkMode])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const handleLogout = () => {
    logout()
    closeMenu()
  }

  const navClass = (active) =>
    `text-sm font-medium transition ${
      active
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-600"
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link
          to="/"
          onClick={closeMenu}
          className="text-2xl font-bold text-gray-900"
          aria-label="FieldNote home"
        >
          Field<span className="text-blue-600">Note</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">

          <Link
            to="/"
            className={navClass(pathname === "/")}
          >
            Home
          </Link>

          <Link
            to="/blogs"
            className={navClass(pathname === "/blogs")}
          >
            Explore
          </Link>

          <Link
            to="/search"
            className={navClass(pathname === "/search")}
          >
            Search
          </Link>

          <Link
            to="/bookmarks"
            className={navClass(
              pathname === "/bookmarks"
            )}
          >
            Saved
          </Link>

          <Link
            to="/about"
            className={navClass(
              pathname === "/about"
            )}
          >
            About
          </Link>

        </nav>

        <div className="hidden items-center gap-3 md:flex">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀ Light" : "🌙 Dark"}
          </button>

          {user ? (
            <>
              <div className="hidden max-w-[150px] truncate rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 lg:block">
                👤 {user.name}
              </div>

              <button
                onClick={handleLogout}
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-red-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-300"
              >
                Logout
              </button>

              <Link
                to="/add-blog"
                className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Write a Story
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="rounded-full bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Get Started
              </Link>
            </>
          )}

        </div>

        <div className="flex items-center gap-2 md:hidden">

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border border-gray-300 px-3 py-2 text-sm"
            aria-label="Toggle dark mode"
          >
            {darkMode ? "☀" : "🌙"}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-2xl text-gray-900"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

      </div>

      {menuOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">

          <nav className="flex flex-col gap-4">

            <Link
              to="/"
              onClick={closeMenu}
              className={navClass(pathname === "/")}
            >
              Home
            </Link>

            <Link
              to="/blogs"
              onClick={closeMenu}
              className={navClass(
                pathname === "/blogs"
              )}
            >
              Explore
            </Link>

            <Link
              to="/search"
              onClick={closeMenu}
              className={navClass(
                pathname === "/search"
              )}
            >
              Search
            </Link>

            <Link
              to="/bookmarks"
              onClick={closeMenu}
              className={navClass(
                pathname === "/bookmarks"
              )}
            >
              Saved Stories
            </Link>

            <Link
              to="/about"
              onClick={closeMenu}
              className={navClass(
                pathname === "/about"
              )}
            >
              About
            </Link>

            {user && (
              <div className="rounded-xl bg-gray-100 px-4 py-3 text-sm font-medium text-gray-700">
                👤 {user.name}
              </div>
            )}

            {user ? (
              <>
                <Link
                  to="/add-blog"
                  onClick={closeMenu}
                  className="mt-2 rounded-full bg-gray-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-600"
                >
                  Write a Story
                </Link>

                <button
                  onClick={handleLogout}
                  className="rounded-full border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:border-red-500 hover:text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="mt-2 rounded-full border border-gray-300 px-5 py-3 text-center text-sm font-semibold text-gray-700 hover:border-blue-500 hover:text-blue-600"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  onClick={closeMenu}
                  className="rounded-full bg-gray-900 px-5 py-3 text-center text-sm font-semibold text-white hover:bg-blue-600"
                >
                  Get Started
                </Link>
              </>
            )}

          </nav>

        </div>
      )}

    </header>
  )
}

export default Header

