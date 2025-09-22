'use client';

import React, { useState, useEffect } from 'react';
import TrackTable from '../../../components/TrackTable';
import NowPlayingPreview from '../../../components/NowPlayingPreview';

const DashboardPage = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const res = await fetch('/api/tracks', { cache: 'no-store' });
      const data = await res.json();
      setTracks(data);
    };
    fetchTracks();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Dashboard</h1>
      <NowPlayingPreview />
      <TrackTable tracks={tracks} />
    </div>
  );
};

export default DashboardPage;
