import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BlogData from "../data/BlogData";
import { Pencil, Trash2, Bookmark } from "lucide-react";
import EditBlog from "./EditBlog";
import { useAtom } from "jotai";
import { bookmarkedAtom } from "../atoms/bookmarkedAtom";

export default function BlogDetails() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(BlogData);
  const [isEditing, setIsEditing] = useState(false);

  const [bookmarked, setBookmarked] = useAtom(bookmarkedAtom);

  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) return <div>Blog not found</div>;

  const handleSaveEdit = (updatedBlog) => {
    setBlogs((prev) =>
      prev.map((b) => (b.id === updatedBlog.id ? updatedBlog : b))
    );
    setIsEditing(false);
  };

  const handleDelete = () => {
    setBlogs((prev) => prev.filter((b) => b.id !== blog.id));
  };

  const handleToggleBookmark = () => {
    if (bookmarked.some((b) => b.id === blog.id)) {
      setBookmarked((prev) => prev.filter((b) => b.id !== blog.id));
    } else {
      setBookmarked((prev) => [blog, ...prev]);
    }
  };

  const isBookmarked = bookmarked.some((b) => b.id === blog.id);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 relative">
      <div className="absolute top-4 right-4 flex gap-2">
        <button
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={() => setIsEditing(true)}
        >
          <Pencil size={18} />
        </button>
        <button
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          onClick={handleDelete}
        >
          <Trash2 size={18} />
        </button>
        <button
          className={`p-2 rounded-full ${
            isBookmarked ? "bg-yellow-300" : "bg-gray-100"
          } hover:bg-gray-200`}
          onClick={handleToggleBookmark}
        >
          <Bookmark size={18} />
        </button>
      </div>

      <div className="flex flex-col items-center">
        <img
          src={blog.authorImg}
          alt={blog.author}
          className="w-16 h-16 rounded-full object-cover mb-3"
        />
        <h1 className="text-3xl font-bold text-center mb-2">{blog.title}</h1>
        <p className="text-sm text-gray-500 mb-6">
          {blog.author} •{" "}
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </p>
      </div>

      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-lg mb-6"
      />

      <div className="prose max-w-none">
        {blog.content.split("\n").map((para, index) => (
          <p key={index}>{para.trim()}</p>
        ))}
      </div>

      {isEditing && (
        <EditBlog
          blog={blog}
          onClose={() => setIsEditing(false)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
}
