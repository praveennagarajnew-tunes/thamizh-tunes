import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import HeroCard from './components/HeroCard';
import SongCard from './components/SongCard';
import MusicPlayer from './components/MusicPlayer';
import { AuthProvider } from './contexts/AuthContext';
import { MusicProvider } from './contexts/MusicContext';
import { heroes, songs } from './data/mockData';
import { useMusic } from './contexts/MusicContext';
import { Crown, TrendingUp, Clock } from 'lucide-react';

const AppContent: React.FC = () => {
  const { setQueue, play } = useMusic();

  const handleHeroClick = (heroName: string) => {
    const heroSongs = songs.filter(song => song.hero === heroName);
    setQueue(heroSongs);
    if (heroSongs.length > 0) {
      play(heroSongs[0]);
    }
  };

  const handleSongPlay = (song: any) => {
    const songIndex = songs.findIndex(s => s.id === song.id);
    setQueue(songs, songIndex);
    play(song);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      
      <main className="container mx-auto px-4 py-12 pb-32">
        {/* Heroes Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Crown className="w-8 h-8 text-orange-500 mr-3" />
              Kollywood Heroes
            </h2>
            <button className="text-orange-600 hover:text-orange-700 font-medium">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {heroes.map((hero) => (
              <HeroCard
                key={hero.id}
                hero={hero}
                onClick={() => handleHeroClick(hero.name)}
              />
            ))}
          </div>
        </section>

        {/* Trending Songs */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <TrendingUp className="w-8 h-8 text-red-500 mr-3" />
              Trending Now
            </h2>
            <button className="text-orange-600 hover:text-orange-700 font-medium">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {songs.slice(0, 4).map((song) => (
              <SongCard
                key={song.id}
                song={song}
                onPlay={() => handleSongPlay(song)}
              />
            ))}
          </div>
        </section>

        {/* Recent Releases */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center">
              <Clock className="w-8 h-8 text-blue-500 mr-3" />
              Latest Releases
            </h2>
            <button className="text-orange-600 hover:text-orange-700 font-medium">
              View All
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {songs.slice(2, 6).map((song) => (
              <SongCard
                key={song.id}
                song={song}
                onPlay={() => handleSongPlay(song)}
              />
            ))}
          </div>
        </section>
      </main>

      <MusicPlayer />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <MusicProvider>
        <AppContent />
      </MusicProvider>
    </AuthProvider>
  );
}

export default App;