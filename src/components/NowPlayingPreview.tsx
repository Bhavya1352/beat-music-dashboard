'use client';

import React from 'react';
import { PlayCircle, Music } from 'lucide-react';

const NowPlayingPreview = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 my-6 animate-fade-in">
      <div className="flex items-center">
        <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
          <Music className="text-white" size={32} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-white">Now Playing</h3>
          <p className="text-gray-300">Sunset Drive - Analog Dreams</p>
        </div>
        <div className="ml-auto">
          <button className="text-white hover:text-purple-300 transition-colors">
            <PlayCircle size={40} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingPreview;
