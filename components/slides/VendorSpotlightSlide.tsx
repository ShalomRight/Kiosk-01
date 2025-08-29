
import React from 'react';
import { VendorSpotlightSlideData } from '../../types';

const VendorSpotlightSlide: React.FC<{ data: VendorSpotlightSlideData }> = ({ data }) => {
  return (
    <div className="relative w-full h-full bg-black">
      <img src={data.bannerUrl} alt={`${data.vendorName} banner`} className="w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-8">
        <img
          src={data.logoUrl}
          alt={`${data.vendorName} logo`}
          className="w-24 h-24 md:w-32 md:h-32 rounded-full mb-6 border-4 border-white shadow-lg"
        />
        <h3 className="text-lg font-bold text-neutral-300 uppercase tracking-widest">Vendor Spotlight</h3>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mt-2">{data.vendorName}</h2>
        <p className="mt-4 text-lg md:text-xl max-w-lg text-neutral-200">{data.tagline}</p>
      </div>
    </div>
  );
};

export default VendorSpotlightSlide;
