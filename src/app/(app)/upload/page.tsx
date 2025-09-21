'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function UploadPage() {
  const [title, setTitle] = useState('');
  const [artistName, setArtistName] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await fetch('/api/tracks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, artistName, releaseDate, genre }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Track uploaded successfully!');
        setTitle('');
        setArtistName('');
        setReleaseDate('');
        setGenre('');
        router.push('/dashboard'); // Redirect to dashboard after successful upload
      } else {
        setError(data.message || 'Failed to upload track.');
      }
    } catch (err) {
      console.error('Upload error:', err);
      setError('An unexpected error occurred during upload.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="mb-6 text-3xl font-bold text-white">Upload New Track</h1>
      <div className="max-w-lg rounded-lg bg-gray-800 p-6 shadow-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-300">
              Track Title
            </label>
            <input
              type="text"
              id="title"
              className="w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:border-blue-500 focus:outline-none"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="artistName" className="mb-2 block text-sm font-medium text-gray-300">
              Artist Name
            </label>
            <input
              type="text"
              id="artistName"
              className="w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:border-blue-500 focus:outline-none"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="releaseDate" className="mb-2 block text-sm font-medium text-gray-300">
              Release Date
            </label>
            <input
              type="date"
              id="releaseDate"
              className="w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:border-blue-500 focus:outline-none"
              value={releaseDate}
              onChange={(e) => setReleaseDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="genre" className="mb-2 block text-sm font-medium text-gray-300">
              Genre
            </label>
            <input
              type="text"
              id="genre"
              className="w-full rounded-md border border-gray-600 bg-gray-700 p-3 text-white focus:border-blue-500 focus:outline-none"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-center text-red-400">{error}</p>}
          {success && <p className="text-center text-green-400">{success}</p>}
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 p-3 font-semibold text-white transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            disabled={loading}
          >
            {loading ? 'Uploading...' : 'Upload Track'}
          </button>
        </form>
      </div>
    </div>
  );
}
