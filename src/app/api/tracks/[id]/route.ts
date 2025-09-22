import { NextResponse } from "next/server";
import type { NextRequest } from "next/server"; // Import NextRequest
import { tracks } from "../route"; // Import the in-memory tracks array

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  // This function signature is the standard for Next.js App Router dynamic API routes.
  // If a Type error persists, it might indicate a specific environment or Next.js version issue.
  const id = parseInt(params.id);
  const track = tracks.find(t => t.id === id);

  if (track) {
    return NextResponse.json(track);
  } else {
    return new NextResponse("Track not found", { status: 404 });
  }
}