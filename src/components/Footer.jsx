import React from "react";
import { Facebook, Mail, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="text-lg font-bold mb-4 md:mb-0">Blog</div>
        <div className="text-center text-sm text-gray-400 mt-4">
        © 2025 Blog. All rights reserved.
        </div>

        <div className="flex gap-6">
          <a
            href="https://t.me/blogapp"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Send size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <Facebook size={20} />
          </a>
          <a href="mailto:Tursinayisehak@gmail.com" className="hover:text-red-400">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
