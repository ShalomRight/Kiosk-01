
import React from 'react';
import { LeaderboardSlideData } from '../../types';

const CrownIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M18 19H6v-1.373c0-.466.1-.92.286-1.345l1.046-2.441 1.638-3.821 1.03-2.404a.75.75 0 011.398.002l1.03 2.402 1.638 3.822 1.046 2.441a3.25 3.25 0 01.286 1.345V19z"/>
        <path d="M5.25 19.5h13.5a.75.75 0 010 1.5H5.25a.75.75 0 010-1.5zM9 4.5a.75.75 0 01.75-.75h4.5a.75.75 0 010 1.5H9.75A.75.75 0 019 4.5zM3.75 9a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H4.5a.75.75 0 01-.75-.75zM18 9a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5H18.75A.75.75 0 0118 9z"/>
    </svg>
);


const LeaderboardSlide: React.FC<{ data: LeaderboardSlideData }> = ({ data }) => {
  const topPlayer = data.entries[0];
  const otherPlayers = data.entries.slice(1);

  return (
    <div className="w-full h-full flex flex-col p-8 md:p-12 bg-gradient-to-b from-neutral-900 via-neutral-800 to-black text-white">
      <h2 className="text-4xl md:text-5xl font-black text-center mb-8">{data.title}</h2>
      
      {topPlayer && (
        <div className="relative flex flex-col items-center p-6 bg-gradient-to-br from-amber-500/20 to-yellow-500/5 rounded-xl border-2 border-amber-400/50 mb-6 text-center">
            <CrownIcon className="absolute -top-4 w-8 h-8 text-amber-300"/>
          <img src={topPlayer.avatarUrl} alt={topPlayer.name} className="w-20 h-20 rounded-full border-4 border-amber-300" />
          <h3 className="mt-2 text-2xl font-bold text-amber-300">{topPlayer.name}</h3>
          <p className="text-xl font-semibold">{topPlayer.score.toLocaleString()} PTS</p>
        </div>
      )}

      <div className="flex-1 space-y-3 overflow-y-auto">
        {otherPlayers.map((entry) => (
          <div key={entry.rank} className="flex items-center p-3 bg-white/5 rounded-lg">
            <span className="text-xl font-bold w-10 text-center text-neutral-400">{entry.rank}</span>
            <img src={entry.avatarUrl} alt={entry.name} className="w-10 h-10 rounded-full ml-4" />
            <span className="ml-4 text-lg font-semibold flex-1">{entry.name}</span>
            <span className="text-lg font-bold text-cyan-400">{entry.score.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardSlide;
