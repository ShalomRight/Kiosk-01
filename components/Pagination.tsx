import React from 'react';

interface PaginationProps {
  slideCount: number;
  currentIndex: number;
}

const Pagination: React.FC<PaginationProps> = ({ slideCount, currentIndex }) => {
  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: slideCount }).map((_, index) => (
        <div
          key={index}
          className={`
            rounded-full transition-all duration-300 ease-in-out
            ${currentIndex === index ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'}
          `}
        />
      ))}
    </div>
  );
};

export default Pagination;