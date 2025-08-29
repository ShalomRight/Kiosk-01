
import React from 'react';
import { EventHighlightSlideData } from '../../types';

const EventHighlightSlide: React.FC<{ data: EventHighlightSlideData }> = ({ data }) => {
  return (
    <div className="relative w-full h-full bg-black">
      <img src={data.imageUrl} alt={data.title} className="w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
      <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-white">
        <div className="max-w-lg">
          {data.status === 'Now Live' ? (
             <div className="flex items-center mb-4">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
                <span className="ml-3 text-red-400 font-bold text-lg uppercase tracking-widest">{data.status}</span>
            </div>
          ) : (
            <span className="text-cyan-400 font-bold text-lg uppercase tracking-widest mb-4 block">{data.status}</span>
          )}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">{data.title}</h2>
          <p className="mt-4 text-xl md:text-2xl font-semibold text-neutral-300">{data.date}</p>
        </div>
      </div>
    </div>
  );
};

export default EventHighlightSlide;
