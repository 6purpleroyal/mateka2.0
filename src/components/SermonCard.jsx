import React from 'react';

const SermonCard = ({ imgSrc, title, date, description, link }) => {
  return (
    <div className="group glass rounded-2xl overflow-hidden">
      <div className="relative h-44">
        <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={imgSrc} alt={title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      <div className="px-6 py-5">
        <div className="font-bold text-xl mb-1">{title}</div>
        <p className="text-slate-300 text-sm">{date}</p>
        <p className="mt-3 text-slate-200 text-sm">{description}</p>
      </div>
      <div className="px-6 pb-6">
        <a href={link} className="btn-secondary">
          <i className="fa-solid fa-book-open"></i> Read More
        </a>
      </div>
    </div>
  );
};

export default SermonCard;
