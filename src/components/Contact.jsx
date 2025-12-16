import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="lead mb-4">Feel free to reach out for collaboration and inquiries.</p>
        <p>Email: <a href="mailto:jmusunguus@gmail.com" className="text-blue-500 hover:underline">jmusunguus@gmail.com</a></p>
        <p>Mobile: <a href="tel:+254722238438" className="text-green-500 hover:underline">+254 722 238 438</a></p>
        <p>Mobile: <a href="tel:+254720701989" className="text-green-500 hover:underline">+254 720 701 989</a></p>
        <div className="mt-4">
          <i className="fab fa-whatsapp fa-2x inline-block"></i>
          <a href="https://wa.me/254722238438" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-500 hover:underline">Whatsapp</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
