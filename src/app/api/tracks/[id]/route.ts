import { NextResponse } from "next/server";
import type { NextRequest, RouteHandlerContext } from "next/server"; // Import NextRequest and RouteHandlerContext
import { tracks } from "../route"; // Import the in-memory tracks array

export async function GET(
  request: NextRequest,
  context: RouteHandlerContext<{ id: string }> // Use RouteHandlerContext
) {
  const { id } = context.params;
  const trackId = parseInt(id);
  const track = tracks.find(t => t.id === trackId);

  if (track) {
    return NextResponse.json(track);
  } else {
    return new NextResponse("Track not found", { status: 404 });
  }
}
