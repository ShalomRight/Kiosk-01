
import React from 'react';
import { ImageSlideData } from '../../types';

interface Props {
  data: ImageSlideData;
}

const ImageSlide: React.FC<Props> = ({ data }) => {
  return (
    <div className="relative w-full h-full bg-black">
      <img
        src={data.imageUrl}
        alt={data.title}
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">{data.title}</h2>
        {data.caption && <p className="mt-2 text-lg md:text-xl max-w-lg">{data.caption}</p>}
      </div>
    </div>
  );
};

export default ImageSlide;
