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
    <section id="events" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Weekly Events</h2>
        </div>
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4">
            <div 
              className="h-64 rounded-lg mb-4 bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
            ></div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="space-y-4">
              <div className="p-4 border rounded-lg shadow-md bg-white">
                <i className="fas fa-calendar mr-2"></i>
                <h3 className="text-xl font-semibold">Bible Study</h3>
                <p>Details about Event 1</p>
              </div>
              <div className="p-4 border rounded-lg shadow-md bg-white">
                <i className="fas fa-calendar mr-2"></i>
                <h3 className="text-xl font-semibold">Cell Group Meeting</h3>
                <p>Details about Event 2</p>
              </div>
              <div className="p-4 border rounded-lg shadow-md bg-white">
                <i className="fas fa-calendar mr-2"></i>
                <h3 className="text-xl font-semibold">Sunday Service</h3>
                <p>Details about Event 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyEvents;
