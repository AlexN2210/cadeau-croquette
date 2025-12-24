import { Heart } from 'lucide-react';
import Countdown from './Countdown';

interface HomePageProps {
  onOpenCalendar: () => void;
}

export default function HomePage({ onOpenCalendar }: HomePageProps) {
  const targetDate = new Date('2026-01-04T14:00:00');

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-rose-900 flex items-center justify-center p-6">
      <div className="max-w-2xl w-full text-center space-y-12 animate-fade-in">
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <Heart className="text-amber-300 animate-pulse-slow" size={64} fill="currentColor" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
            Une surprise t'attend…
          </h1>

          <p className="text-xl md:text-2xl text-white/90 font-light">
            Découvre nos expériences, une case à la fois.
          </p>
        </div>

        <div className="py-8">
          <p className="text-white/70 mb-6 text-lg">Plus que :</p>
          <Countdown targetDate={targetDate} />
        </div>

        <button
          onClick={onOpenCalendar}
          className="group relative px-12 py-5 bg-gradient-to-r from-amber-400 to-amber-500 text-red-900 font-semibold text-lg rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-110 overflow-hidden"
        >
          <span className="relative z-10">Ouvrir les cases</span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-300 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        <div className="pt-8">
          <div className="flex items-center justify-center gap-2 text-white/50">
            <div className="h-px bg-white/30 w-16"></div>
            <Heart size={16} fill="currentColor" />
            <div className="h-px bg-white/30 w-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
