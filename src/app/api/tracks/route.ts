import { NextResponse } from "next/server";

// We are exporting this so we can use it directly in our server components
export const tracks = [
  {
    id: 1,
    title: "Sunset Drive",
    artist: "Analog Dreams",
    releaseDate: "2025-09-15",
    genre: "Lofi Hip Hop",
    status: "Published",
  },
  {
    id: 2,
    title: "Midnight Groove",
    artist: "Groove Master",
    releaseDate: "2025-09-10",
    genre: "Funk",
    status: "Published",
  },
  {
    id: 3,
    title: "City Lights",
    artist: "Urban Explorer",
    releaseDate: "2025-09-20",
    genre: "Chillwave",
    status: "Pending",
  },
  {
    id: 4,
    title: "Lost in Thought",
    artist: "Mindful Beats",
    releaseDate: "2025-09-05",
    genre: "Ambient",
    status: "Published",
  },
  {
    id: 5,
    title: "Retro Vibes",
    artist: "80s Kid",
    releaseDate: "2025-09-18",
    genre: "Synthwave",
    status: "Published",
  },
];

export async function GET() {
  return NextResponse.json(tracks);
}

export async function POST(request: Request) {
  const newTrack = await request.json();
  newTrack.id = tracks.length + 1;
  tracks.push(newTrack);
  return NextResponse.json(newTrack, { status: 201 });
}
