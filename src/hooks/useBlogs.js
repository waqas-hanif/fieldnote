
import { useBlogContext } from "../context/BlogContext"

export function useBlogs() {
  const {
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
  } = useBlogContext()

  return {
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
  }
}

