'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Track } from '../../../api/tracks/route';

export default function TrackDetailsPage() {
  const { id } = useParams();
  const [track, setTrack] = useState<Track | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchTrackDetails = async () => {
        try {
          const response = await fetch(`/api/tracks/${id}`);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setTrack(data);
        } catch (err) {
          console.error('Failed to fetch track details:', err);
          setError('Failed to load track details.');
        } finally {
          setLoading(false);
        }
      };

      fetchTrackDetails();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center text-white">Loading track details...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  if (!track) {
    return <div className="text-center text-white">Track not found.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="mb-6 text-3xl font-bold text-white">Track Details</h1>
      <div className="max-w-lg rounded-lg bg-gray-800 p-6 shadow-md">
        <p className="mb-2 text-lg">
          <span className="font-semibold text-gray-300">Title:</span> {track.title}
        </p>
        <p className="mb-2 text-lg">
          <span className="font-semibold text-gray-300">Artist:</span> {track.artistName}
        </p>
        <p className="mb-2 text-lg">
          <span className="font-semibold text-gray-300">Release Date:</span> {track.releaseDate}
        </p>
        <p className="mb-2 text-lg">
          <span className="font-semibold text-gray-300">Genre:</span> {track.genre}
        </p>
        <p className="mb-4 text-lg">
          <span className="font-semibold text-gray-300">Status:</span>{' '}
          <span
            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${track.status === 'Approved' ? 'bg-green-100 text-green-800' : track.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}
          >
            {track.status}
          </span>
        </p>
        <Link href="/dashboard" className="text-blue-400 hover:underline">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
