// components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white py-3 px-6 flex justify-between items-center z-50">
      <div className="flex space-x-6 text-sm">
        <a href="/about" className="hover:text-gray-400">
          ABOUT
        </a>
        <a href="/tracks" className="hover:text-gray-400">
          TRACKS
        </a>
        <a href="/timeline" className="hover:text-gray-400">
          TIMELINE
        </a>
        <a href="/fad" className="hover:text-gray-400">
          FAD
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="/contact"
          className="px-4 py-2 border border-white rounded-md hover:bg-gray-800 transition-colors"
        >
          CONTACT
        </a>
        <a
          href="/join"
          className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300 transition-colors"
        >
          JOIN US
        </a>
      </div>
    </nav>
  );
};

export default Navbar;