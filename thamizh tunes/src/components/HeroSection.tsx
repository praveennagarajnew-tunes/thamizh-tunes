import React from 'react';
import { Play, Sparkles } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-yellow-300/30 rounded-full animate-pulse delay-1000" />
          <div className="absolute bottom-20 left-1/4 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse delay-2000" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-medium">Welcome to Tamil Music Paradise</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Feel the
            <span className="bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
              {" "}Tamil Beats
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-orange-100 mb-8 leading-relaxed">
            Discover the soul of Kollywood through our vast collection of Tamil songs.
            From mass kuthu beats to soulful melodies, experience music like never before.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button className="bg-white text-orange-600 hover:bg-yellow-50 px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 transform hover:scale-105 transition-all shadow-xl">
              <Play className="w-6 h-6 fill-current" />
              <span>Start Listening Free</span>
            </button>
            
            <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-full font-semibold text-lg transform hover:scale-105 transition-all">
              Explore Premium
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">10,000+</div>
              <div className="text-orange-100">Tamil Songs</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">500+</div>
              <div className="text-orange-100">Top Artists</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
              <div className="text-orange-100">Kollywood Heroes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-white">
          <path d="m0,60l50,15c50,15 150,45 250,45c100,0 200,-30 300,-30c100,0 200,30 300,30c100,0 200,-30 300,-30c100,0 200,30 200,30l0,60l-1200,0z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;