import { NextResponse } from 'next/server';

export interface Track {
  id: string;
  title: string;
  artistName: string;
  releaseDate: string;
  genre: string;
  status: 'Pending' | 'Approved' | 'Rejected';
}

// Mock track database (in-memory)
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

// GET all tracks
export async function GET() {
  return NextResponse.json(tracks);
}

// POST a new track
export async function POST(request: Request) {
  const { title, artistName, releaseDate, genre } = await request.json();

  if (!title || !artistName || !releaseDate || !genre) {
    return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
  }

  const newTrack: Track = {
    id: String(tracks.length + 1),
    title,
    artistName,
    releaseDate,
    genre,
    status: 'Pending', // Default status for new uploads
  };
  tracks.push(newTrack);

  return NextResponse.json(newTrack, { status: 201 });
}
