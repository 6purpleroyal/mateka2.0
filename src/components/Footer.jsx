import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 bg-gray-800">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Deliverance Church Mateka. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
