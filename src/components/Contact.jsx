import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass p-10 rounded-2xl text-center">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="mt-2 text-slate-200">We would love to connect with you.</p>
          <div className="mt-6 space-y-2">
            <p>Email: <a href="mailto:jmusunguus@gmail.com" className="text-teal-300 hover:underline">jmusunguus@gmail.com</a></p>
            <p>Mobile: <a href="tel:+254722238438" className="text-teal-300 hover:underline">+254 722 238 438</a></p>
            <p>Mobile: <a href="tel:+254720701989" className="text-teal-300 hover:underline">+254 720 701 989</a></p>
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <a href="https://wa.me/254722238438" target="_blank" rel="noopener noreferrer" className="btn-primary"><i className="fa-brands fa-whatsapp"></i> Whatsapp</a>
            <a href="#visit" className="btn-secondary"><i className="fa-solid fa-location-dot"></i> Visit Us</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
