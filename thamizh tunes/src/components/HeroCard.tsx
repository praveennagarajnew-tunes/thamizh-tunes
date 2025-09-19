import React from 'react';
import { Play, Music2 } from 'lucide-react';
import { Hero } from '../types';

interface HeroCardProps {
  hero: Hero;
  onClick: () => void;
}

const HeroCard: React.FC<HeroCardProps> = ({ hero, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer overflow-hidden transform hover:scale-105"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative p-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={hero.image}
              alt={hero.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-gradient-to-r from-orange-400 to-red-400"
            />
            <div className="absolute -bottom-1 -right-1 bg-orange-500 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
              <Play className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
              {hero.name}
            </h3>
            <div className="flex items-center space-x-1 text-gray-600 mt-1">
              <Music2 className="w-4 h-4" />
              <span className="text-sm">{hero.song_count} songs</span>
            </div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
      </div>

      {/* Hover effect line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </div>
  );
};

export default HeroCard;