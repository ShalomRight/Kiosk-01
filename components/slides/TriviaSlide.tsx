
import React, { useState, useEffect } from 'react';
import { TriviaSlideData } from '../../types';

const TriviaSlide: React.FC<{ data: TriviaSlideData }> = ({ data }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    setShowAnswer(false);
    const timer = setTimeout(() => setShowAnswer(true), data.duration - 3000); // Show answer 3s before slide change
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-center p-8 md:p-12 bg-gradient-to-br from-indigo-900 via-neutral-900 to-black text-white">
      <h3 className="text-xl font-bold text-cyan-400 mb-2">TRIVIA TIME</h3>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 max-w-3xl">{data.question}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mb-8">
        {data.options.map((option, index) => (
          <div
            key={index}
            className={`
              p-6 rounded-lg border-2 text-xl font-semibold transition-all duration-500
              ${showAnswer
                ? index === data.correctAnswerIndex
                  ? 'bg-green-500 border-green-400 scale-105 shadow-lg shadow-green-500/20'
                  : 'bg-red-500/20 border-red-500/30 opacity-60'
                : 'bg-white/10 border-white/20'
              }
            `}
          >
            {option}
          </div>
        ))}
      </div>
      <div className={`transition-opacity duration-700 w-full max-w-3xl ${showAnswer ? 'opacity-100' : 'opacity-0'}`}>
        <h4 className="font-bold text-lg text-cyan-400">DID YOU KNOW?</h4>
        <p className="text-lg mt-1">{data.funFact}</p>
      </div>
    </div>
  );
};

export default TriviaSlide;
