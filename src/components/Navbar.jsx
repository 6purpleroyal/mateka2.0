import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#home" className="flex items-center py-4 px-2">
                <span className="font-semibold text-gray-500 text-lg">Deliverance Church - Mateka</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <a href="index.html" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a>
            <a href="about.html" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About us</a>
            <a href="sermons.html" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Sermons</a>
            <a href="ministries.html" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Ministries</a>
            <a href="donate.html" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Give</a>
            <a href="visit_us.html" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Visit Us</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <a href="index.html" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
        <a href="about.html" className="block py-2 px-4 text-sm hover:bg-gray-200">About us</a>
        <a href="sermons.html" className="block py-2 px-4 text-sm hover:bg-gray-200">Sermons</a>
        <a href="ministries.html" className="block py-2 px-4 text-sm hover:bg-gray-200">Ministries</a>
        <a href="donate.html" className="block py-2 px-4 text-sm hover:bg-gray-200">Give</a>
        <a href="visit_us.html" className="block py-2 px-4 text-sm hover:bg-gray-200">Visit Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
