
import React from 'react';
import { MapSlideData } from '../../types';

const MapPinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M12 2.25c-3.99 0-7.25 3.26-7.25 7.25 0 4.34 7.25 12.25 7.25 12.25s7.25-7.91 7.25-12.25C19.25 5.51 15.99 2.25 12 2.25zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" clipRule="evenodd" />
    </svg>
);


const MapSlide: React.FC<{ data: MapSlideData }> = ({ data }) => {
  return (
    <div className="relative w-full h-full bg-black">
      <img src={data.mapUrl} alt="Map" className="w-full h-full object-cover opacity-50 blur-sm" />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
        <h2 className="text-4xl md:text-5xl font-black mb-8">{data.title}</h2>
        <div className="relative w-full max-w-md lg:max-w-xl aspect-[4/3] rounded-lg overflow-hidden shadow-2xl shadow-black">
          <img src={data.mapUrl} alt="Map" className="w-full h-full object-cover" />
        </div>
        <div className="mt-6 flex items-center p-3 px-4 bg-cyan-500/20 text-cyan-300 rounded-full backdrop-blur-sm border border-cyan-500/30">
            <MapPinIcon className="w-6 h-6 mr-2 text-cyan-400" />
            <span className="font-semibold text-lg">{data.highlightArea}</span>
        </div>
      </div>
    </div>
  );
};

export default MapSlide;
