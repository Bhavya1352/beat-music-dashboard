import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"; // Import NextRequest
import { tracks } from "../route"; // Import the in-memory tracks array

export async function GET(request: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params; // Destructure id from context.params
  const trackId = parseInt(id);
  const track = tracks.find(t => t.id === trackId);

  if (track) {
    return NextResponse.json(track);
  } else {
    return new NextResponse("Track not found", { status: 404 });
  }
}