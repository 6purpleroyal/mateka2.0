import React from 'react';
import SermonCard from './SermonCard';

const Sermons = () => {
  const sermonData = [
    {
      imgSrc: '/sermons-bg.jpg',
      title: 'Sermon Title 1',
      date: 'January 1, 20XX',
      description: 'Brief description of the sermon.',
      link: 'sermon1.html'
    },
    {
      imgSrc: '/sermons1-bg.jpg',
      title: 'Sermon Title 2',
      date: 'January 8, 20XX',
      description: 'Brief description of the sermon.',
      link: 'sermon2.html'
    },
    {
      imgSrc: '/sermons2-bg.jpg',
      title: 'Sermon Title 3',
      date: 'January 15, 20XX',
      description: 'Brief description of the sermon.',
      link: 'sermon3.html'
    }
  ];

  return (
    <section id="sermons" className="container mx-auto my-5 px-4">
      <h2 className="text-center text-3xl font-bold mb-4">Sermons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sermonData.map((sermon, index) => (
          <SermonCard key={index} {...sermon} />
        ))}
      </div>
    </section>
  );
};

export default Sermons;
