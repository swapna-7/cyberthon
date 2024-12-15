// components/NavbarMobile.js
import React, { useState } from 'react';

const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white py-3 px-6 flex justify-between items-center z-50">
      <div className="text-lg font-bold">CYBERTHON</div>
      <button
        onClick={toggleMenu}
        className="text-white focus:outline-none"
      >
        &#9776; {/* Hamburger icon */}
      </button>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white flex flex-col items-start space-y-4 py-4">
          <a href="/about" className="hover:text-gray-400 pl-6">
            ABOUT
          </a>
          <a href="/tracks" className="hover:text-gray-400 pl-6">
            TRACKS
          </a>
          <a href="/timeline" className="hover:text-gray-400 pl-6">
            TIMELINE
          </a>
          <a href="/fad" className="hover:text-gray-400 pl-6">
            FAD
          </a>
          <a
            href="/contact"
            className="px-4 py-2 border border-white rounded-md hover:bg-gray-800 transition-colors ml-6"
          >
            CONTACT
          </a>
          <a
            href="/join"
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-300 transition-colors ml-6"
          >
            JOIN US
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;