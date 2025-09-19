import React, { createContext, useContext, useState, useRef, useEffect } from 'react';
import { Song } from '../types';

interface MusicContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  queue: Song[];
  currentIndex: number;
  volume: number;
  isShuffled: boolean;
  repeatMode: 'none' | 'one' | 'all';
  currentTime: number;
  duration: number;
  play: (song?: Song) => void;
  pause: () => void;
  playNext: () => void;
  playPrevious: () => void;
  setQueue: (songs: Song[], startIndex?: number) => void;
  setVolume: (volume: number) => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  seekTo: (time: number) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [queue, setQueue] = useState<Song[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'none' | 'one' | 'all'>('none');
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  
  const audioRef = useRef<HTMLAudioElement>(new Audio());

  useEffect(() => {
    const audio = audioRef.current;
    
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    const handleEnded = () => {
      if (repeatMode === 'one') {
        audio.currentTime = 0;
        audio.play();
      } else {
        playNext();
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);
    audio.volume = volume;

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [repeatMode, volume]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const play = (song?: Song) => {
    if (song) {
      setCurrentSong(song);
      const index = queue.findIndex(s => s.id === song.id);
      if (index !== -1) {
        setCurrentIndex(index);
      }
      // Simulate audio URL (in real app, this would be actual audio files)
      audioRef.current.src = song.audio_url || '/audio/sample.mp3';
    }
    
    if (currentSong || song) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const playNext = () => {
    if (queue.length === 0) return;
    
    let nextIndex = currentIndex + 1;
    if (nextIndex >= queue.length) {
      if (repeatMode === 'all') {
        nextIndex = 0;
      } else {
        pause();
        return;
      }
    }
    
    setCurrentIndex(nextIndex);
    setCurrentSong(queue[nextIndex]);
    audioRef.current.src = queue[nextIndex].audio_url || '/audio/sample.mp3';
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const playPrevious = () => {
    if (queue.length === 0) return;
    
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) {
      prevIndex = queue.length - 1;
    }
    
    setCurrentIndex(prevIndex);
    setCurrentSong(queue[prevIndex]);
    audioRef.current.src = queue[prevIndex].audio_url || '/audio/sample.mp3';
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const handleSetQueue = (songs: Song[], startIndex = 0) => {
    setQueue(songs);
    setCurrentIndex(startIndex);
    if (songs.length > 0) {
      setCurrentSong(songs[startIndex]);
    }
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const toggleRepeat = () => {
    const modes: ('none' | 'one' | 'all')[] = ['none', 'one', 'all'];
    const currentModeIndex = modes.indexOf(repeatMode);
    const nextMode = modes[(currentModeIndex + 1) % modes.length];
    setRepeatMode(nextMode);
  };

  const seekTo = (time: number) => {
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  return (
    <MusicContext.Provider value={{
      currentSong,
      isPlaying,
      queue,
      currentIndex,
      volume,
      isShuffled,
      repeatMode,
      currentTime,
      duration,
      play,
      pause,
      playNext,
      playPrevious,
      setQueue: handleSetQueue,
      setVolume,
      toggleShuffle,
      toggleRepeat,
      seekTo
    }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within MusicProvider');
  }
  return context;
};