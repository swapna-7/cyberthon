// components/NavbarMobile.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


const NavbarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

    const location = useLocation();
  

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
          <a href="/#about" className="hover:text-gray-400 pl-6">
            ABOUT
          </a>
          <a href="/#tracks" className="hover:text-gray-400 pl-6">
            TRACKS
          </a>
          <a href="/#timeline" className="hover:text-gray-400 pl-6">
            TIMELINE
          </a>
          <a href="/#faq" className="hover:text-gray-400 pl-6">
            FAQ
          </a>
          <a
            href="/contactus"
            className="px-4 py-2 border border-white rounded-md hover:bg-gray-800 transition-colors ml-6"
          >
            CONTACT US
          </a>
         
        </div>
      )}
    </nav>
  );
};

export default NavbarMobile;