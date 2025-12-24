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
      <div className="relative" style={{ perspective: '1000px' }}>
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
          className={`relative transition-transform duration-300 ${
            isOpening ? 'animate-gift-shake' : 'hover:scale-110'
          }`}
          disabled={isOpening}
        >
          <div className="relative" style={{ width: '200px', height: '240px' }}>
            {/* Boîte du cadeau */}
            <div
              className="absolute bg-gradient-to-br from-red-600 to-red-700 shadow-2xl"
              style={{
                width: '200px',
                height: '200px',
                top: '40px',
                left: '0',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.2), 0 10px 40px rgba(0,0,0,0.4)',
              }}
            >
              {/* Ruban horizontal */}
              <div 
                className="absolute bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 shadow-lg"
                style={{
                  width: '200px',
                  height: '12px',
                  top: 'calc(50% - 6px)',
                  left: '0',
                  boxShadow: '0 2px 8px rgba(255, 193, 7, 0.5)',
                }}
              />
              {/* Ruban vertical */}
              <div 
                className="absolute bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 shadow-lg"
                style={{
                  width: '12px',
                  height: '200px',
                  left: 'calc(50% - 6px)',
                  top: '0',
                  boxShadow: '0 2px 8px rgba(255, 193, 7, 0.5)',
                }}
              />
            </div>

            {/* Couvercle du cadeau */}
            <div
              className={`absolute bg-gradient-to-br from-red-500 to-red-600 shadow-xl ${
                isOpening ? 'animate-open-lid' : ''
              }`}
              style={{
                width: '200px',
                height: '40px',
                top: '0px',
                left: '0',
                transformOrigin: 'bottom center',
                boxShadow: 'inset 0 0 15px rgba(0,0,0,0.2), 0 5px 20px rgba(0,0,0,0.3)',
              }}
            >
              {/* Ruban horizontal sur le couvercle */}
              <div 
                className="absolute bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 shadow-md"
                style={{
                  width: '200px',
                  height: '10px',
                  top: 'calc(50% - 5px)',
                  left: '0',
                }}
              />
            </div>

            {/* Nœud - Centre */}
            <div
              className={`absolute bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-full shadow-2xl ${
                isOpening ? 'opacity-0 transition-opacity duration-500' : ''
              }`}
              style={{
                width: '60px',
                height: '60px',
                left: 'calc(50% - 30px)',
                top: '-20px',
                border: '4px solid rgba(255, 215, 0, 0.6)',
                boxShadow: '0 8px 20px rgba(0,0,0,0.5), inset 0 2px 10px rgba(255,255,255,0.3)',
              }}
            />

            {/* Boucle gauche du nœud */}
            <div
              className={`absolute bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-xl ${
                isOpening ? 'opacity-0 transition-opacity duration-500' : ''
              }`}
              style={{
                width: '50px',
                height: '35px',
                left: 'calc(50% - 55px)',
                top: '-25px',
                borderRadius: '50% 50% 45% 45%',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              }}
            />

            {/* Boucle droite du nœud */}
            <div
              className={`absolute bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-xl ${
                isOpening ? 'opacity-0 transition-opacity duration-500' : ''
              }`}
              style={{
                width: '50px',
                height: '35px',
                right: 'calc(50% - 55px)',
                top: '-25px',
                borderRadius: '50% 50% 45% 45%',
                boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
              }}
            />

            {/* Contenu révélé */}
            <div
              className={`absolute flex items-center justify-center ${
                isOpening ? 'animate-reveal-content' : 'opacity-0 pointer-events-none'
              }`}
              style={{ 
                animationDelay: '0.8s',
                left: '0',
                top: '40px',
                width: '200px',
                height: '200px',
              }}
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
