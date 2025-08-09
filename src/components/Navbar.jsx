import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Bookmark, UserCircle2 } from "lucide-react";

export default function Navbar({ onPostClick }) {
  const location = useLocation();

  const linkClasses = (path) =>
    `px-4 py-2 rounded-md transition ${
      location.pathname === path
        ? "bg-black text-white"
        : "hover:bg-black hover:text-white"
    }`;

  return (
    <nav className="flex items-center justify-between py-4 px-6 bg-white shadow">
      <h1 className="text-xl font-bold">Blog</h1>

      <div className="flex space-x-4">
        <Link to="/" className={linkClasses("/")}>
          Home
        </Link>
        <Link to="/about" className={linkClasses("/about")}>
          About
        </Link>
        <Link to="/saved" className={linkClasses("/saved")}>
          Saved
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={onPostClick}
          className="bg-black text-white px-4 py-1.5 rounded-full hover:opacity-90"
        >
          Post a Blog
        </button>
      </div>
    </nav>
  );
}
