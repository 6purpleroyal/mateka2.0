import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-2xl p-6 text-center">
          <p>&copy; {new Date().getFullYear()} Deliverance Church Mateka. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
