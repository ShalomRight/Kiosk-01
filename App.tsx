import React, { useState } from 'react';
import { SLIDE_DATA } from './constants';
import Carousel from './components/Carousel';
import WelcomeCard from './components/WelcomeCard';
import { SlideData } from './types';

const App: React.FC = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeSlide: SlideData = SLIDE_DATA[activeSlideIndex];

  return (
    <main className="w-screen h-screen bg-gray-100 flex p-4">
      <div className="w-full max-w-sm mx-auto flex flex-col h-full">
        <div className="flex-1 min-h-0">
          <Carousel slides={SLIDE_DATA} onSlideChange={setActiveSlideIndex} />
        </div>
        <div className="mt-4 flex-shrink-0">
          <WelcomeCard qrCodeUrl={activeSlide.qrCodeUrl} />
        </div>
      </div>
    </main>
  );
};

export default App;