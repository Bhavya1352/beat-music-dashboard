'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Eye, ArrowUpDown } from 'lucide-react';
import Image from 'next/image';

const TrackTable = ({ tracks }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'releaseDate', direction: 'desc' });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const sortedTracks = useMemo(() => {
    const sortableTracks = [...tracks];
    if (sortConfig !== null) {
      sortableTracks.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableTracks;
  }, [tracks, sortConfig]);

  const filteredTracks = useMemo(() =>
    sortedTracks.filter(track =>
      track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      track.artist.toLowerCase().includes(searchTerm.toLowerCase())
    ),
    [sortedTracks, searchTerm]
  );

  const paginatedTracks = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredTracks.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredTracks, currentPage]);

  const requestSort = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const totalPages = Math.ceil(filteredTracks.length / itemsPerPage);

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title or artist..."
          className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <thead>
            <tr className="w-full bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('title')}>
                Title <ArrowUpDown size={14} className="inline" />
              </th>
              <th className="py-3 px-6 text-left cursor-pointer" onClick={() => requestSort('artist')}>
                Artist <ArrowUpDown size={14} className="inline" />
              </th>
              <th className="py-3 px-6 text-center cursor-pointer" onClick={() => requestSort('releaseDate')}>
                Release Date <ArrowUpDown size={14} className="inline" />
              </th>
              <th className="py-3 px-6 text-center">Status</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 dark:text-gray-200 text-sm font-light">
            {paginatedTracks.map((track, index) => (
              <tr key={track.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 animate-row-appear" style={{ animationDelay: `${index * 0.05}s` }}>
                <td className="py-3 px-6 text-left whitespace-nowrap">{track.title}</td>
                <td className="py-3 px-6 text-left">{track.artist}</td>
                <td className="py-3 px-6 text-center">{track.releaseDate}</td>
                <td className="py-3 px-6 text-center">
                  <span
                    className={`py-1 px-3 rounded-full text-xs ${{
                      Published: "bg-green-200 text-green-800",
                      Pending: "bg-yellow-200 text-yellow-800",
                      Rejected: "bg-red-200 text-red-800",
                    }[track.status]}`}>
                    {track.status}
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <div className="flex item-center justify-center">
                    <Link href={`/track/${track.id}`} className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <Eye size={20} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden">
        {paginatedTracks.map((track, index) => (
          <div key={track.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 mb-4 animate-row-appear" style={{ animationDelay: `${index * 0.05}s` }}>
            <div className="flex justify-between items-start">
              <div>
                <p className="font-bold text-lg text-gray-900 dark:text-white">{track.title}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{track.artist}</p>
              </div>
              <Link href={`/track/${track.id}`} className="text-purple-500">
                <Eye size={20} />
              </Link>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">{track.releaseDate}</p>
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
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <nav className="flex rounded-md shadow">
          <button onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1} className="px-3 py-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded-l-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50">
            Previous
          </button>
          <span className="px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-t border-b border-gray-300 dark:border-gray-600">{currentPage} of {totalPages}</span>
          <button onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages} className="px-3 py-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded-r-md border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-50">
            Next
          </button>
        </nav>
      </div>

      {filteredTracks.length === 0 && (
        <div className="text-center mt-8 text-gray-500 dark:text-gray-400">
          <Image src="/file.svg" alt="No tracks found" width={100} height={100} className="mx-auto mb-4" />
          <p className="text-lg">No tracks found 🎧</p>
        </div>
      )}
    </div>
  );
};

export default TrackTable;
