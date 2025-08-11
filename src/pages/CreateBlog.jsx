import React, { useState } from "react";
import BlogForm from "../components/BlogForm";

export default function CreateBlog({ setBlogs }) {
  const [showModal, setShowModal] = useState(true);

  const handleSave = (newBlog) => {
    setBlogs((prev) => [newBlog, ...prev]);
  };

  return (
    <>
      {showModal && (
        <BlogForm onClose={() => setShowModal(false)} onSave={handleSave} />
      )}
    </>
  );
}
