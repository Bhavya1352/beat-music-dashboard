import { NextResponse } from 'next/server';
import { Track } from '../route'; // Import the Track interface

// Mock track database (same as in ../route.ts for consistency)
const tracks: Track[] = [
  {
    id: '1',
    title: 'Summer Vibes',
    artistName: 'DJ Beat',
    releaseDate: '2025-07-15',
    genre: 'Electronic',
    status: 'Approved',
  },
  {
    id: '2',
    title: 'Midnight Serenade',
    artistName: 'Acoustic Soul',
    releaseDate: '2025-08-01',
    genre: 'R&B',
    status: 'Pending',
  },
  {
    id: '3',
    title: 'Urban Pulse',
    artistName: 'City Rhythms',
    releaseDate: '2025-09-01',
    genre: 'Hip Hop',
    status: 'Rejected',
  },
];

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const track = tracks.find(t => t.id === id);

  if (!track) {
    return NextResponse.json({ message: 'Track not found.' }, { status: 404 });
  }

  return NextResponse.json(track);
}
