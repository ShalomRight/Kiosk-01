
import React from 'react';
import { PhotoContestSlideData } from '../../types';

const PhotoContestSlide: React.FC<{ data: PhotoContestSlideData }> = ({ data }) => {
  return (
    <div className="relative w-full h-full bg-black">
      <img src={data.submissions[0].imageUrl} alt="Main contest photo" className="w-full h-full object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-8">{data.title}</h2>
        <div className="grid grid-cols-3 gap-4 w-full max-w-3xl">
          {data.submissions.map((sub, index) => (
            <div key={index} className={`relative rounded-lg overflow-hidden shadow-lg ${index === 1 ? 'scale-110 z-10' : 'opacity-70'}`}>
              <img src={sub.imageUrl} alt={`Submission by ${sub.author}`} className="w-full h-full object-cover aspect-square" />
              <div className="absolute bottom-0 left-0 w-full p-2 bg-black/50 text-center text-sm font-medium">
                {sub.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoContestSlide;
