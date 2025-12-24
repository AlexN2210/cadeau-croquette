import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface GiftAnimationProps {
  onComplete: () => void;
}

export default function GiftAnimation({ onComplete }: GiftAnimationProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setShowParticles(true);

    setTimeout(() => {
      onComplete();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-rose-900">
      <div className="relative">
        {showParticles && (
          <>
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 animate-float-up"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  left: `calc(50% + ${(i - 6) * 20}px)`,
                }}
              >
                <Sparkles className="text-amber-300" size={20} />
              </div>
            ))}
          </>
        )}

        <button
          onClick={handleClick}
          className={`relative transition-transform duration-300 ${
            isOpening ? 'animate-shake' : 'hover:scale-110'
          }`}
        >
          <div className="relative">
            <div
              className={`w-48 h-48 bg-gradient-to-br from-red-600 to-red-700 rounded-3xl shadow-2xl transition-all duration-700 ${
                isOpening ? 'opacity-0 scale-0' : ''
              }`}
            >
              <div className="absolute inset-x-0 top-1/2 h-8 bg-amber-400 -translate-y-1/2 shadow-lg"></div>
              <div className="absolute inset-y-0 left-1/2 w-8 bg-amber-400 -translate-x-1/2 shadow-lg"></div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6">
                <div className="w-16 h-12 bg-amber-400 rounded-t-full"></div>
              </div>
            </div>

            <div
              className={`absolute inset-x-0 -top-8 h-32 bg-gradient-to-br from-red-500 to-red-600 rounded-t-3xl transition-all duration-700 origin-bottom ${
                isOpening ? '-translate-y-32 rotate-12 opacity-0' : ''
              }`}
            >
              <div className="absolute inset-x-0 bottom-0 h-8 bg-amber-400"></div>
            </div>

            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ${
                isOpening ? 'opacity-100 scale-150' : 'opacity-0 scale-0'
              }`}
            >
              <div className="text-6xl animate-bounce-slow">❤️</div>
            </div>
          </div>
        </button>

        {!isOpening && (
          <p className="text-white text-center mt-8 text-lg font-light animate-pulse">
            Clique sur le cadeau
          </p>
        )}
      </div>
    </div>
  );
}
