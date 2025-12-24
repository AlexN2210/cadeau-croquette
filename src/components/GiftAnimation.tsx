import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface GiftAnimationProps {
  onComplete: () => void;
}

export default function GiftAnimation({ onComplete }: GiftAnimationProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const handleClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    
    setTimeout(() => {
      setShowParticles(true);
    }, 400);

    setTimeout(() => {
      onComplete();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-red-900 via-red-800 to-rose-900">
      <div className="relative perspective">
        {showParticles && (
          <>
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 animate-float-up"
                style={{
                  animationDelay: `${i * 0.08}s`,
                  left: `calc(50% + ${(Math.random() - 0.5) * 200}px)`,
                  top: `calc(50% + ${(Math.random() - 0.5) * 200}px)`,
                }}
              >
                <Sparkles className="text-amber-300" size={20} />
              </div>
            ))}
          </>
        )}

        <button
          onClick={handleClick}
          className={`relative preserve-3d transition-transform duration-300 ${
            isOpening ? 'animate-gift-shake' : 'hover:scale-110'
          }`}
          disabled={isOpening}
        >
          <div className="relative w-56 h-56">
            {/* Boîte du cadeau */}
            <div
              className={`absolute inset-0 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl shadow-2xl transition-all duration-500 ${
                isOpening ? 'shadow-red-900/50' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Ruban horizontal */}
              <div className="absolute inset-x-0 top-1/2 h-10 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 -translate-y-1/2 shadow-lg border-y-2 border-amber-500/30"></div>
              {/* Ruban vertical */}
              <div className="absolute inset-y-0 left-1/2 w-10 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 -translate-x-1/2 shadow-lg border-x-2 border-amber-500/30"></div>
              {/* Noeud central */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-xl border-4 border-amber-300 z-10"></div>
            </div>

            {/* Couvercle du cadeau */}
            <div
              className={`absolute inset-x-0 -top-4 h-28 bg-gradient-to-br from-red-500 to-red-600 rounded-t-2xl shadow-2xl preserve-3d transition-all duration-500 ${
                isOpening ? 'animate-open-lid' : ''
              }`}
              style={{
                transformStyle: 'preserve-3d',
                transformOrigin: 'bottom center',
              }}
            >
              {/* Ruban horizontal sur le couvercle */}
              <div className="absolute inset-x-0 top-1/2 h-8 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 -translate-y-1/2 shadow-md border-y border-amber-500/30"></div>
              {/* Noeud sur le couvercle */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-12 bg-gradient-to-b from-amber-400 to-amber-500 rounded-full shadow-lg border-2 border-amber-300"></div>
            </div>

            {/* Contenu révélé */}
            <div
              className={`absolute inset-0 flex items-center justify-center ${
                isOpening ? 'animate-reveal-content' : 'opacity-0 pointer-events-none'
              }`}
              style={{ animationDelay: '0.6s' }}
            >
              <div className="text-7xl animate-bounce-slow drop-shadow-2xl">❤️</div>
            </div>
          </div>
        </button>

        {!isOpening && (
          <p className="text-white text-center mt-12 text-lg font-light animate-pulse">
            Clique sur le cadeau
          </p>
        )}
      </div>
    </div>
  );
}
