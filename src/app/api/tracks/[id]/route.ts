import { NextResponse } from "next/server";
import { tracks } from "../route"; // Import the in-memory tracks array

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const track = tracks.find(t => t.id === id);

  if (track) {
    return NextResponse.json(track);
  } else {
    return new NextResponse("Track not found", { status: 404 });
  }
}