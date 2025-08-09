import React from "react";
import { BookmarkCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function Saved() {
  const savedBlogs = JSON.parse(localStorage.getItem("bookmarks")) || [];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">Saved Blogs</h1>

      {savedBlogs.length === 0 ? (
        <p className="text-gray-500">No saved blogs yet.</p>
      ) : (
        <div className="space-y-10">
          {savedBlogs.map((blog) => (
            <div
              key={blog.id}
              className="border-b pb-6 last:border-b-0"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <img
                    src={blog.authorAvatar}
                    alt={blog.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span className="text-sm font-medium">{blog.author}</span>
                </div>
                <BookmarkCheck className="w-5 h-5 text-black" />
              </div>

              <Link to={`/blog/${blog.id}`}>
                <h2 className="text-xl font-semibold hover:underline mb-3">
                  {blog.title}
                </h2>
              </Link>

              <Link to={`/blog/${blog.id}`}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
              </Link>

              <p className="text-gray-600">{blog.excerpt}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
