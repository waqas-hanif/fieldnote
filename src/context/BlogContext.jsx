
import { createContext, useContext, useState } from "react"

import { blogs as initialBlogs } from "../data/blogs"
import { useToast } from "./ToastContext"

const BlogContext = createContext()

function getSavedData(key, defaultValue) {
  try {
    const savedData = localStorage.getItem(key)
    return savedData
      ? JSON.parse(savedData)
      : defaultValue
  } catch {
    return defaultValue
  }
}

export function BlogProvider({ children }) {
  const { showToast } = useToast()

  const [blogs, setBlogs] = useState(() =>
    getSavedData("fieldnote-blogs", initialBlogs)
  )

  const [bookmarks, setBookmarks] = useState(() =>
    getSavedData("fieldnote-bookmarks", [])
  )

  const [comments, setComments] = useState(() =>
    getSavedData("fieldnote-comments", {})
  )

  const [views, setViews] = useState(() =>
    getSavedData("fieldnote-views", {})
  )

  const saveBlogs = (data) =>
    localStorage.setItem(
      "fieldnote-blogs",
      JSON.stringify(data)
    )

  const saveBookmarks = (data) =>
    localStorage.setItem(
      "fieldnote-bookmarks",
      JSON.stringify(data)
    )

  const saveComments = (data) =>
    localStorage.setItem(
      "fieldnote-comments",
      JSON.stringify(data)
    )

  const saveViews = (data) =>
    localStorage.setItem(
      "fieldnote-views",
      JSON.stringify(data)
    )

  const addBlog = (newBlog) => {
    const blog = {
      ...newBlog,
      id: Date.now(),
      likes: 0,
      featured: false,
      trending: false,
    }

    setBlogs((currentBlogs) => {
      const updatedBlogs = [blog, ...currentBlogs]
      saveBlogs(updatedBlogs)
      return updatedBlogs
    })

    showToast("Story published successfully!")
  }

  const likeBlog = (id) => {
    setBlogs((currentBlogs) => {
      const updatedBlogs = currentBlogs.map((blog) =>
        blog.id === id
          ? {
              ...blog,
              likes: blog.likes + 1,
            }
          : blog
      )

      saveBlogs(updatedBlogs)

      return updatedBlogs
    })

    showToast("Story liked!")
  }

  const addView = (id) => {
    setViews((currentViews) => {
      const updatedViews = {
        ...currentViews,
        [id]: (currentViews[id] || 0) + 1,
      }

      saveViews(updatedViews)

      return updatedViews
    })
  }

  const toggleBookmark = (id) => {
    setBookmarks((currentBookmarks) => {
      const alreadySaved =
        currentBookmarks.includes(id)

      const updatedBookmarks = alreadySaved
        ? currentBookmarks.filter(
            (blogId) => blogId !== id
          )
        : [...currentBookmarks, id]

      saveBookmarks(updatedBookmarks)

      showToast(
        alreadySaved
          ? "Story removed from saved stories."
          : "Story saved successfully.",
        "info"
      )

      return updatedBookmarks
    })
  }

  const isBookmarked = (id) =>
    bookmarks.includes(id)

  const addComment = (blogId, comment) => {
    setComments((currentComments) => {
      const updatedComments = {
        ...currentComments,
        [blogId]: [
          ...(currentComments[blogId] || []),
          {
            id: Date.now(),
            name: comment.name,
            text: comment.text,
            date: new Date().toLocaleDateString(),
          },
        ],
      }

      saveComments(updatedComments)

      return updatedComments
    })

    showToast("Comment posted successfully!")
  }

  const deleteComment = (blogId, commentId) => {
    setComments((currentComments) => {
      const updatedComments = {
        ...currentComments,
        [blogId]: (
          currentComments[blogId] || []
        ).filter(
          (comment) => comment.id !== commentId
        ),
      }

      saveComments(updatedComments)

      return updatedComments
    })

    showToast("Comment deleted.", "info")
  }

  return (
    <BlogContext.Provider
      value={{
        blogs,
        bookmarks,
        comments,
        views,
        addBlog,
        likeBlog,
        addView,
        toggleBookmark,
        isBookmarked,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}

export function useBlogContext() {
  return useContext(BlogContext)
}

