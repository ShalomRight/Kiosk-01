
import React from 'react';
import { LayoutMode } from '../types';

interface LayoutToggleProps {
  layout: LayoutMode;
  onToggle: () => void;
}

const ScreenFullIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M4 12v-4a2 2 0 0 1 2-2h4M4 12h16M20 12v-4a2 2 0 0 0-2-2h-4M4 12v4a2 2 0 0 0 2 2h4M20 12v4a2 2 0 0 1-2 2h-4"/>
    </svg>
);

const ScreenMinIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M10 4H4v6M10 20H4v-6M14 4h6v6M14 20h6v-6"/>
        <path d="M4 12h16"/>
    </svg>
);


const LayoutToggle: React.FC<LayoutToggleProps> = ({ layout, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-white/20 transition-colors"
      aria-label="Toggle layout"
    >
      {layout === LayoutMode.Fullscreen ? (
        <ScreenMinIcon className="w-6 h-6" />
      ) : (
        <ScreenFullIcon className="w-6 h-6" />
      )}
    </button>
  );
};

export default LayoutToggle;
