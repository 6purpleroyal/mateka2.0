import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="bg-light text-white text-center py-5">
        <div className="intro-text">
          <h1 className="name hero-text">We Invite You to Deliverance Church Mateka</h1>
          <p className="role hero-text">Your Choice of Church</p>
          <p className="subtitle hero-text">Blessed is the one who perseveres under trial because, having stood the test, that person will receive the crown of life that the Lord has promised to those who love him.</p>
          <p>James 1:12</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
