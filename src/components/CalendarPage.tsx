import { Clock, Waves, Wind, Flame, GlassWater, MapPin } from 'lucide-react';
import Card from './Card';

export default function CalendarPage() {
  const cards = [
    {
      number: 1,
      title: 'Accès chambre 5h',
      description: 'Un cocon rien que pour nous deux, où le temps s\'arrête pendant 5 heures de pure détente.',
      icon: Clock,
    },
    {
      number: 2,
      title: 'Accès piscine intérieure',
      description: 'Plonge avec moi dans une oasis de tranquillité, où chaque instant devient magique.',
      icon: Waves,
    },
    {
      number: 3,
      title: 'Accès hammam',
      description: 'Laisse la vapeur envelopper nos moments de complicité dans une ambiance apaisante.',
      icon: Wind,
    },
    {
      number: 4,
      title: 'Accès sauna',
      description: 'Ressens la chaleur bienfaisante qui réchauffe le corps et rapproche les cœurs.',
      icon: Flame,
    },
    {
      number: 5,
      title: 'Cocktail avec ou sans alcool',
      description: 'Trinquons ensemble à ce moment privilégié, avec une boisson préparée rien que pour toi.',
      icon: GlassWater,
    },
    {
      number: 6,
      title: 'Spa de 5h, Chambre et Cocktail au Paxton Paris MLV ****',
      description: '1, Av. Joseph Paxton, 77164 Ferrières-en-Brie',
      icon: MapPin,
      mapContent: true,
    },
  ];

  const destinationCard = cards.find(card => card.mapContent);
  const otherCards = cards.filter(card => !card.mapContent);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-rose-900 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Notre destination
          </h1>
          <p className="text-white/80 text-lg">
            Clique sur chaque case pour découvrir les surprises
          </p>
        </div>

        {destinationCard && (
          <div className="mb-12 flex justify-center animate-fade-in">
            <div className="w-full max-w-2xl">
              <Card 
                {...destinationCard} 
                initialFlipped={true}
                height="h-96"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {otherCards.map((card) => (
            <Card key={card.number} {...card} />
          ))}
        </div>

        <div className="text-center py-8 animate-fade-in">
          <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl">
            <p className="text-white text-xl font-light italic">
              "J'ai hâte de vivre ce moment avec toi."
            </p>
            <div className="mt-4 text-amber-300 text-3xl">❤️</div>
          </div>
        </div>
      </div>
    </div>
  );
}
