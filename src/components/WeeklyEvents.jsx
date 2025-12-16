import React, { useState, useEffect } from 'react';

const images = ['/sermons-bg.jpg', '/sermons1-bg.jpg', '/sermons2-bg.jpg'];

const WeeklyEvents = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="events" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Weekly Events</h2>
          <p className="mt-2 text-slate-300">Join our church family throughout the week</p>
        </div>
        <div className="flex flex-wrap items-center gap-8">
          <div className="w-full md:w-1/2">
            <div
              className="h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl relative"
              style={{ backgroundImage: `url(${images[currentIndex]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="mt-4 flex gap-3">
              {images.map((img, idx) => (
                <button key={idx} onClick={() => setCurrentIndex(idx)} className={`h-2 w-8 rounded-full ${currentIndex === idx ? 'bg-teal-400' : 'bg-white/30'}`}></button>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="space-y-4">
              <div className="glass p-5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-book-bible text-teal-400"></i>
                  <h3 className="text-xl font-semibold">Bible Study</h3>
                </div>
                <p className="mt-2 text-slate-200">Deepen your faith with interactive study sessions.</p>
              </div>
              <div className="glass p-5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-people-group text-teal-400"></i>
                  <h3 className="text-xl font-semibold">Cell Group Meeting</h3>
                </div>
                <p className="mt-2 text-slate-200">Connect in smaller groups and grow together.</p>
              </div>
              <div className="glass p-5 rounded-2xl">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-church text-teal-400"></i>
                  <h3 className="text-xl font-semibold">Sunday Service</h3>
                </div>
                <p className="mt-2 text-slate-200">Celebrate God with worship and inspiring messages.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyEvents;
