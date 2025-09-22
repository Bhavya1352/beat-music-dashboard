'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TrackDetailsPage = ({ params }: { params: { id: string } }) => {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const res = await fetch(`/api/tracks/${params.id}`);
        if (!res.ok) {
          throw new Error('Track not found');
        }
        const data = await res.json();
        setTrack(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchTrack();
  }, [params.id]);

  if (loading) {
    return <div className="text-center py-10">Loading track details...</div>;
  }

  if (error || !track) {
    return <div className="text-center py-10">Track not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Link href="/dashboard" className="text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-200 mb-4 inline-block animate-slide-in">
        &larr; Back to Dashboard
      </Link>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <Image 
              className="h-48 w-full object-cover md:w-48 transform hover:scale-105 transition-transform duration-300" 
              src={`https://picsum.photos/seed/${track.id}/400/400`} 
              alt="Album Art" 
              width={400} 
              height={400} 
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 dark:text-indigo-400 font-semibold">{track.genre}</div>
            <h1 className="mt-1 text-3xl leading-tight font-extrabold text-gray-900 dark:text-white">{track.title}</h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">{track.artist}</p>
            <div className="mt-4 flex items-center">
              <span className="text-gray-500 dark:text-gray-400">{track.releaseDate}</span>
              <span className="mx-2 text-gray-500 dark:text-gray-400">&bull;</span>
              <span
                className={`py-1 px-3 rounded-full text-xs ${{
                  Published: "bg-green-200 text-green-800",
                  Pending: "bg-yellow-200 text-yellow-800",
                  Rejected: "bg-red-200 text-red-800",
                }[track.status]}`}>
                {track.status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackDetailsPage;
