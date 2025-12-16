import React from 'react';

const Donate = () => {
  return (
    <section id="donate" className="max-w-6xl mx-auto px-6 py-16 text-center">
      <div className="glass p-10 rounded-2xl">
        <h2 className="text-3xl font-bold">Support Our Mission</h2>
        <p className="mt-3 text-slate-200">Your generosity fuels outreach, discipleship, and community impact.</p>
        <div className="mt-8 flex justify-center gap-4">
          <a href="donate.html" className="btn-primary"><i className="fa-solid fa-hand-holding-heart"></i> Donate Now</a>
          <a href="#contact" className="btn-secondary"><i className="fa-solid fa-envelope"></i> Talk to Us</a>
        </div>
      </div>
    </section>
  );
};

export default Donate;
