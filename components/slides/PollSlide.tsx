import React from 'react';
import { PollSlideData } from '../../types';

const PollSlide: React.FC<{ data: PollSlideData }> = ({ data }) => {
  return (
    <div className="relative w-full h-full bg-black">
      <img
        src={data.imageUrl}
        alt={data.question}
        className="w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-6 text-white w-full">
        <p className="font-bold text-green-400 text-sm uppercase tracking-wider">Community Highlight</p>
        <h2 className="text-3xl font-bold mt-1">{data.question}</h2>
        {data.subtitle && <p className="mt-2 text-gray-200">{data.subtitle}</p>}
      </div>
    </div>
  );
};

export default PollSlide;