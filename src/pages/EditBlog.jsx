import React, { useState } from "react";
import { useAtom } from "jotai";
import { blogsAtom } from "../atoms/blogsAtom";

export default function EditBlog({ blog, onClose }) {
  const [, setBlogs] = useAtom(blogsAtom);

  const [title, setTitle] = useState(blog?.title || "");
  const [image, setImage] = useState(blog?.image || "");
  const [content, setContent] = useState(blog?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedBlog = {
      ...blog,
      title,
      image,
      content,
      updatedAt: new Date().toISOString(),
    };

    setBlogs((prev) =>
      prev.map((b) => (b.id === updatedBlog.id ? updatedBlog : b))
    );

    onClose();
  };

  if (!blog) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Edit Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full border p-2 rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows="5"
            className="w-full border p-2 rounded"
            required
          />
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-black text-white rounded"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
