
import { createContext, useContext, useState } from "react"

import { useToast } from "./ToastContext"

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const { showToast } = useToast()

  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("fieldnote-user")
      return savedUser ? JSON.parse(savedUser) : null
    } catch {
      return null
    }
  })

  const login = (email, password) => {
    const savedAccount = localStorage.getItem("fieldnote-account")

    if (!savedAccount) {
      return {
        success: false,
        message: "No account found. Please register first.",
      }
    }

    const account = JSON.parse(savedAccount)

    if (
      account.email !== email ||
      account.password !== password
    ) {
      return {
        success: false,
        message: "Invalid email or password.",
      }
    }

    const loggedUser = {
      name: account.name,
      email: account.email,
    }

    setUser(loggedUser)

    localStorage.setItem(
      "fieldnote-user",
      JSON.stringify(loggedUser)
    )

    showToast("Login successful!")

    return {
      success: true,
    }
  }

  const register = (name, email, password) => {
    const existingAccount = localStorage.getItem(
      "fieldnote-account"
    )

    if (existingAccount) {
      const account = JSON.parse(existingAccount)

      if (account.email === email) {
        return {
          success: false,
          message: "An account with this email already exists.",
        }
      }
    }

    const account = {
      name,
      email,
      password,
    }

    localStorage.setItem(
      "fieldnote-account",
      JSON.stringify(account)
    )

    const loggedUser = {
      name,
      email,
    }

    setUser(loggedUser)

    localStorage.setItem(
      "fieldnote-user",
      JSON.stringify(loggedUser)
    )

    showToast("Account created successfully!")

    return {
      success: true,
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("fieldnote-user")
    showToast("Logged out successfully.", "info")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

