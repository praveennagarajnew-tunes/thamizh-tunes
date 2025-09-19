import React, { useState } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Shuffle,
  Repeat,
  Volume2,
  VolumeX,
  Heart,
  Maximize2
} from 'lucide-react';
import { useMusic } from '../contexts/MusicContext';

const MusicPlayer: React.FC = () => {
  const {
    currentSong,
    isPlaying,
    volume,
    isShuffled,
    repeatMode,
    currentTime,
    duration,
    play,
    pause,
    playNext,
    playPrevious,
    setVolume,
    toggleShuffle,
    toggleRepeat,
    seekTo
  } = useMusic();

  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  if (!currentSong) return null;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    seekTo(percent * duration);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(0.7);
      setIsMuted(false);
    } else {
      setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-t border-gray-700 p-4 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Song Info */}
          <div className="flex items-center space-x-4 min-w-0 flex-1">
            <img
              src={currentSong.cover_image}
              alt={currentSong.title}
              className="w-14 h-14 rounded-lg object-cover"
            />
            <div className="min-w-0">
              <h4 className="text-white font-semibold truncate">{currentSong.title}</h4>
              <p className="text-gray-400 text-sm truncate">{currentSong.artist}</p>
              <p className="text-orange-400 text-xs">{currentSong.hero}</p>
            </div>
            <button className="text-gray-400 hover:text-red-500 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Player Controls */}
          <div className="flex flex-col items-center space-y-2 flex-1 max-w-lg">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleShuffle}
                className={`transition-colors ${
                  isShuffled ? 'text-orange-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Shuffle className="w-5 h-5" />
              </button>
              
              <button
                onClick={playPrevious}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SkipBack className="w-6 h-6" />
              </button>

              <button
                onClick={isPlaying ? pause : () => play()}
                className="bg-white hover:bg-gray-100 text-black rounded-full p-3 transition-all transform hover:scale-105"
              >
                {isPlaying ? (
                  <Pause className="w-6 h-6" />
                ) : (
                  <Play className="w-6 h-6 fill-current" />
                )}
              </button>

              <button
                onClick={playNext}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <SkipForward className="w-6 h-6" />
              </button>

              <button
                onClick={toggleRepeat}
                className={`transition-colors ${
                  repeatMode !== 'none' ? 'text-orange-400' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Repeat className="w-5 h-5" />
                {repeatMode === 'one' && (
                  <span className="absolute -mt-2 -mr-1 text-xs">1</span>
                )}
              </button>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center space-x-3 w-full">
              <span className="text-gray-400 text-xs w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <div
                className="flex-1 bg-gray-700 rounded-full h-1 cursor-pointer"
                onClick={handleSeek}
              >
                <div
                  className="bg-orange-400 h-1 rounded-full transition-all"
                  style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                />
              </div>
              <span className="text-gray-400 text-xs w-10">
                {formatTime(duration)}
              </span>
            </div>
          </div>

          {/* Volume & Extra Controls */}
          <div className="flex items-center space-x-4 justify-end flex-1">
            <div
              className="relative flex items-center space-x-2"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button
                onClick={toggleMute}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              
              {showVolumeSlider && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                </div>
              )}
            </div>

            <button className="text-gray-400 hover:text-white transition-colors">
              <Maximize2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;