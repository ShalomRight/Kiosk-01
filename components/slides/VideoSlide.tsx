
import React from 'react';
import { VideoSlideData } from '../../types';

const MuteIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
        <line x1="23" y1="9" x2="17" y2="15"></line>
        <line x1="17" y1="9" x2="23" y2="15"></line>
    </svg>
);


const VideoSlide: React.FC<{ data: VideoSlideData }> = ({ data }) => {
  return (
    <div className="relative w-full h-full bg-black">
      <video
        src={data.videoUrl}
        className="w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <div className="absolute top-6 right-6 p-3 rounded-full bg-black/40 backdrop-blur-sm">
        <MuteIcon className="w-6 h-6 text-white"/>
      </div>
      <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">{data.title}</h2>
      </div>
    </div>
  );
};

export default VideoSlide;
