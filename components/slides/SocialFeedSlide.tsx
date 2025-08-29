
import React from 'react';
import { SocialFeedSlideData } from '../../types';

const HeartIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
);


const SocialFeedSlide: React.FC<{ data: SocialFeedSlideData }> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col p-8 md:p-12 bg-gradient-to-b from-blue-900/50 via-neutral-900 to-black text-white">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-8">{data.title}</h2>
      <div className="flex-1 space-y-4 overflow-hidden">
        {data.posts.map((post) => (
          <div key={post.id} className="p-4 bg-white/5 rounded-lg backdrop-blur-sm animate-fade-in">
            <div className="flex items-start">
              <img src={post.avatarUrl} alt={post.author} className="w-12 h-12 rounded-full" />
              <div className="ml-4 flex-1">
                <p className="font-bold">{post.author}</p>
                <p className="text-neutral-300 mt-1">{post.text}</p>
                {post.imageUrl && <img src={post.imageUrl} alt="Post image" className="mt-2 rounded-lg w-full object-cover max-h-40" />}
                <div className="flex items-center mt-2 text-red-400">
                    <HeartIcon className="w-5 h-5"/>
                    <span className="ml-1.5 text-sm font-semibold text-neutral-300">{post.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialFeedSlide;
