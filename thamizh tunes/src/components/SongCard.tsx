import React from 'react';
import { Play, Pause, Heart, MoreHorizontal } from 'lucide-react';
import { Song } from '../types';
import { useMusic } from '../contexts/MusicContext';

interface SongCardProps {
  song: Song;
  onPlay: () => void;
}

const SongCard: React.FC<SongCardProps> = ({ song, onPlay }) => {
  const { currentSong, isPlaying } = useMusic();
  const isCurrentSong = currentSong?.id === song.id;

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={song.cover_image}
          alt={song.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={onPlay}
            className="bg-white rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg"
          >
            {isCurrentSong && isPlaying ? (
              <Pause className="w-6 h-6 text-orange-500" />
            ) : (
              <Play className="w-6 h-6 text-orange-500 fill-current" />
            )}
          </button>
        </div>
        {isCurrentSong && (
          <div className="absolute top-3 left-3">
            <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              {isPlaying ? 'Playing' : 'Paused'}
            </div>
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate group-hover:text-orange-600 transition-colors">
              {song.title}
            </h3>
            <p className="text-gray-600 text-sm truncate">{song.artist}</p>
            <p className="text-orange-500 text-sm font-medium">{song.hero}</p>
          </div>
          <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
            <button className="text-gray-400 hover:text-gray-600 transition-colors">
              <MoreHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between mt-3 text-sm text-gray-500">
          <span>{song.year}</span>
          <span>{formatDuration(song.duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default SongCard;