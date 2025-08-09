import React from "react";
import { Link } from "react-router-dom";
import BlogData from "../data/BlogData";

export default function Home() {
  const featured = BlogData[0];
  const others = BlogData.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-16">
      {featured && (
        <Link to={`/blog/${featured.id}`} className="block group">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/50 p-6 flex flex-col justify-end text-white">
              <h1 className="text-3xl md:text-4xl font-bold">
                {featured.title}
              </h1>
              <p className="mt-2 text-sm">{featured.description}</p>
            </div>
          </div>
        </Link>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {others.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="block group bg-white rounded-xl overflow-hidden shadow hover:shadow-md transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4 space-y-2">
              <h2 className="text-lg font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-700">{blog.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <img
                  src={blog.authorImg}
                  alt={blog.author}
                  className="w-6 h-6 rounded-full"
                />
                <span>{blog.author}</span>
                <span>•</span>
                <span>
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
