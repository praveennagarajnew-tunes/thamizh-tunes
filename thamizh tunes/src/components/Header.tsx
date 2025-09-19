import React, { useState } from 'react';
import { Search, User, Menu, X, Music, Crown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

const Header: React.FC = () => {
  const { user, signOut } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">Thamizh Rhythms</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">Browse</a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">Heroes</a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors">Playlists</a>
              <a href="#" className="text-white hover:text-yellow-300 transition-colors flex items-center">
                <Crown className="w-4 h-4 mr-1" />
                Premium
              </a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search songs, heroes, artists..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-full py-2 pl-10 pr-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
            </div>

            {/* User Section */}
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-3">
                  <div className="hidden md:block text-right">
                    <p className="text-white text-sm font-medium">{user.name}</p>
                    <p className="text-yellow-300 text-xs flex items-center">
                      {user.subscription_type === 'premium' ? (
                        <>
                          <Crown className="w-3 h-3 mr-1" />
                          Premium
                        </>
                      ) : (
                        'Free Plan'
                      )}
                    </p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-all"
                  >
                    <User className="w-5 h-5 text-white" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="bg-white text-orange-500 hover:bg-yellow-50 px-4 py-2 rounded-full font-medium transition-all"
                >
                  Sign In
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="md:hidden text-white p-2"
              >
                {showMobileMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden bg-black/50 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full bg-white/20 border border-white/30 rounded-full py-2 pl-10 pr-4 text-white placeholder-white/70"
                />
              </div>
              <nav className="flex flex-col space-y-3">
                <a href="#" className="text-white hover:text-yellow-300 py-2">Home</a>
                <a href="#" className="text-white hover:text-yellow-300 py-2">Browse</a>
                <a href="#" className="text-white hover:text-yellow-300 py-2">Heroes</a>
                <a href="#" className="text-white hover:text-yellow-300 py-2">Playlists</a>
                <a href="#" className="text-white hover:text-yellow-300 py-2 flex items-center">
                  <Crown className="w-4 h-4 mr-1" />
                  Premium
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}
    </>
  );
};

export default Header;