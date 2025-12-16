import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <Navbar />
      <section id="home" className="relative pt-24">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 via-transparent to-teal-900/60"></div>
          <div className="bg-cover bg-center min-h-[85vh]" style={{ backgroundImage: "url('/sermons-bg.jpg')" }}>
            <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
              <div className="glass p-8 md:p-12 rounded-2xl">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">We Invite You to Deliverance Church Mateka</h1>
                <p className="mt-3 text-lg md:text-xl text-teal-200">Your Choice of Church</p>
                <p className="mt-6 text-slate-200">Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.</p>
                <p className="mt-2 text-slate-300">James 1:12</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a href="#visit" className="btn-primary"><i className="fa-solid fa-location-dot"></i> Plan a Visit</a>
                  <a href="#sermons" className="btn-secondary"><i className="fa-solid fa-play"></i> Watch Sermons</a>
                  <a href="#donate" className="btn-secondary"><i className="fa-solid fa-hand-holding-heart"></i> Give</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
