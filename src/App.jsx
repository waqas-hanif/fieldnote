
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import ProtectedRoute from "./components/ProtectedRoute"

import Home from "./pages/Home"
import Blogs from "./pages/Blogs"
import BlogDetails from "./pages/BlogDetails"
import Category from "./pages/Category"
import Author from "./pages/Author"
import Search from "./pages/Search"
import Bookmarks from "./pages/Bookmarks"
import AddBlog from "./pages/AddBlog"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/category/:slug" element={<Category />} />

        <Route path="/author/:id" element={<Author />} />

        <Route path="/search" element={<Search />} />

        <Route path="/bookmarks" element={<Bookmarks />} />

        <Route
          path="/add-blog"
          element={
            <ProtectedRoute>
              <AddBlog />
            </ProtectedRoute>
          }
        />

        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  )
}

export default App

