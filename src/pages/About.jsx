import React from "react";
import { BookmarkCheck, PenSquare, LayoutGrid, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-20">
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            Welcome to <span className="text-indigo-600">Blogify</span>
          </h1>
          <p className="text-lg text-gray-600">
            Blogify isn’t just another blog — it’s your space to create, share,
            and save the stories that matter most. Whether you’re a writer with
            ideas bursting to be shared or a reader looking for inspiration,
            Blogify makes it effortless.
          </p>
          <p className="text-gray-600">
            Built with <span className="font-medium">React, Tailwind CSS</span>,
            and <span className="font-medium">Jotai</span> for a smooth,
            real-time experience, our app is designed for speed, beauty, and
            simplicity.
          </p>
          <Link
            to="/create"
            className="inline-block bg-indigo-600 text-white font-medium px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Start Writing
          </Link>
        </div>
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Blog app preview"
          className="w-full h-80 object-cover rounded-xl shadow-lg"
        />
      </section>

      <section className="space-y-12">
        <h2 className="text-3xl font-semibold text-center">Why You’ll Love It</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center">
            <PenSquare className="mx-auto w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="font-medium mb-2">Write Effortlessly</h3>
            <p className="text-gray-600 text-sm">
              Create and edit blogs instantly with our clean, distraction-free
              editor.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center">
            <BookmarkCheck className="mx-auto w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="font-medium mb-2">Save Your Favorites</h3>
            <p className="text-gray-600 text-sm">
              Bookmark posts you love and revisit them anytime in one click.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center">
            <LayoutGrid className="mx-auto w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="font-medium mb-2">Beautiful Layout</h3>
            <p className="text-gray-600 text-sm">
              Enjoy a responsive, Figma-inspired design that looks stunning on
              any device.
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition text-center">
            <Zap className="mx-auto w-10 h-10 text-indigo-500 mb-4" />
            <h3 className="font-medium mb-2">Lightning Fast</h3>
            <p className="text-gray-600 text-sm">
              Powered by Vite + SWC for instant loading and smooth navigation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-indigo-600 text-white rounded-xl p-10 text-center space-y-4">
        <h2 className="text-2xl font-semibold">Your Story Deserves to Be Heard</h2>
        <p className="max-w-xl mx-auto text-indigo-100">
          With Blogify, you can publish in seconds, bookmark inspiration, and
          explore a growing community of readers and writers.
        </p>
        <Link
          to="/"
          className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Explore Blogs
        </Link>
      </section>
    </div>
  );
}
