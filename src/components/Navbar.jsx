import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-900/60 via-teal-800/30 to-indigo-900/60 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-white text-lg font-bold tracking-wide">Deliverance Church Mateka</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#home" className="text-slate-200 hover:text-white transition">Home</a>
            <a href="#events" className="text-slate-200 hover:text-white transition">Events</a>
            <a href="#sermons" className="text-slate-200 hover:text-white transition">Sermons</a>
            <a href="#donate" className="text-slate-200 hover:text-white transition">Give</a>
            <a href="#contact" className="text-slate-200 hover:text-white transition">Contact</a>
            <a href="#visit" className="btn-primary">Plan a Visit</a>
          </div>
          <div className="md:hidden flex items-center">
            <button aria-label="Menu" className="p-2 rounded-full bg-white/10 border border-white/20" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden glass`}> 
        <div className="px-4 py-3 space-y-2">
          <a href="#home" className="block py-2 px-2 text-slate-200 hover:text-white">Home</a>
          <a href="#events" className="block py-2 px-2 text-slate-200 hover:text-white">Events</a>
          <a href="#sermons" className="block py-2 px-2 text-slate-200 hover:text-white">Sermons</a>
          <a href="#donate" className="block py-2 px-2 text-slate-200 hover:text-white">Give</a>
          <a href="#contact" className="block py-2 px-2 text-slate-200 hover:text-white">Contact</a>
          <a href="#visit" className="block py-2">
            <span className="btn-primary w-full justify-center">Plan a Visit</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
