import { useState } from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  number: number;
  title: string;
  description: string;
  icon: LucideIcon;
  mapContent?: boolean;
  initialFlipped?: boolean;
  height?: string;
}

export default function Card({ number, title, description, icon: Icon, mapContent, initialFlipped = false, height = 'h-64' }: CardProps) {
  const [isFlipped, setIsFlipped] = useState(initialFlipped);

  return (
    <div
      className={`relative ${height} cursor-pointer perspective`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-700 rounded-3xl shadow-xl flex flex-col items-center justify-center p-6 border-2 border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/20 hover:scale-105">
            <div className="w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center mb-4 shadow-lg">
              <span className="text-2xl font-bold text-red-900">{number}</span>
            </div>
            <p className="text-white/80 text-sm">Clique pour découvrir</p>
          </div>
        </div>

        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-white rounded-3xl shadow-xl p-6 flex flex-col items-center justify-center text-center overflow-auto">
            {mapContent ? (
              <div className="w-full h-full flex flex-col">
                <Icon className="text-red-700 mb-3 mx-auto" size={32} />
                <h3 className="text-2xl md:text-3xl font-bold text-red-900 mb-2 px-2">{title}</h3>
                <p className="text-sm text-gray-700 mb-3">{description}</p>
                <div className="flex-1 min-h-0 mt-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2628.4837947364795!2d2.7093449!3d48.8267861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e60d8e5e8e5e5f%3A0x5e8e5e5e5e5e5e5e!2s1%20Avenue%20Joseph%20Paxton%2C%2077164%20Ferri%C3%A8res-en-Brie!5e0!3m2!1sfr!2sfr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="shadow-inner"
                  ></iframe>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-red-100 p-4 rounded-full mb-4">
                  <Icon className="text-red-700" size={36} />
                </div>
                <h3 className="text-2xl font-bold text-red-900 mb-3">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{description}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
