import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bookmarks from "./pages/Bookmarks";
import About from "./pages/About";
import BlogDetails from "./pages/BlogDetails";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/EditBlog";
import BlogForm from "./components/BlogForm";


export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
    setIsModalOpen(false);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onPostClick={() => setIsModalOpen(true)} />

        {isModalOpen && (
          <BlogForm
            onClose={() => setIsModalOpen(false)}
            onPost={handleAddBlog}
          />
        )}

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home blogs={blogs} />} />
            <Route path="/saved" element={<Bookmarks />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/edit/:id" element={<EditBlog />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
