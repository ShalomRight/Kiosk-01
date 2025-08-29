import React, { useState, useEffect, useCallback } from 'react';
import { SlideData } from '../types';
import Pagination from './Pagination';

import ImageSlide from './slides/ImageSlide';
import VideoSlide from './slides/VideoSlide';
import PollSlide from './slides/PollSlide';
import PhotoContestSlide from './slides/PhotoContestSlide';
import TriviaSlide from './slides/TriviaSlide';
import MapSlide from './slides/MapSlide';
import MapboxSlide from './slides/MapboxSlide';
import EventHighlightSlide from './slides/EventHighlightSlide';
import VendorSpotlightSlide from './slides/VendorSpotlightSlide';
import LeaderboardSlide from './slides/LeaderboardSlide';
import SocialFeedSlide from './slides/SocialFeedSlide';

interface CarouselProps {
  slides: SlideData[];
  onSlideChange: (index: number) => void;
}

const slideComponents: { [key: string]: React.FC<any> } = {
  image: ImageSlide,
  video: VideoSlide,
  poll: PollSlide,
  photo_contest: PhotoContestSlide,
  trivia: TriviaSlide,
  map: MapSlide,
  mapbox: MapboxSlide,
  event_highlight: EventHighlightSlide,
  vendor_spotlight: VendorSpotlightSlide,
  leaderboard: LeaderboardSlide,
  social_feed: SocialFeedSlide,
};

const Carousel: React.FC<CarouselProps> = ({ slides, onSlideChange }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  useEffect(() => {
    onSlideChange(currentIndex);
    const slideDuration = slides[currentIndex]?.duration || 10000;
    const timer = setTimeout(goToNext, slideDuration);
    return () => clearTimeout(timer);
  }, [currentIndex, goToNext, onSlideChange, slides]);

  return (
    <div className="relative w-full h-full shadow-lg rounded-2xl">
      <div className="w-full h-full overflow-hidden rounded-2xl">
        <div
          className="h-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => {
            const SlideComponent = slideComponents[slide.type];
            return (
              <div key={slide.id} className="w-full h-full flex-shrink-0">
                {SlideComponent ? <SlideComponent data={slide} /> : <div>Unknown slide type</div>}
              </div>
            );
          })}
        </div>
      </div>
       <div className="absolute bottom-4 right-4 z-20">
        <Pagination slideCount={slides.length} currentIndex={currentIndex} />
      </div>
    </div>
  );
};

export default Carousel;