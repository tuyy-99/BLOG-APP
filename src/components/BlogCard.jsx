import React from "react";
import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog.id}`}>
      <div className="rounded-xl overflow-hidden shadow hover:shadow-xl transition duration-300 cursor-pointer">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{blog.title}</h2>
          <p className="text-sm text-gray-500 mt-2">{blog.description}</p>
          <div className="flex items-center gap-2 mt-4">
            <img
              src={blog.authorImg}
              alt={blog.author}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">{blog.author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
