import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { username, password } = await request.json();

  // Mock signup logic: In a real app, you'd save the user to a database
  if (username && password) {
    return NextResponse.json({ message: 'Signup successful' }, { status: 201 });
  } else {
    return NextResponse.json({ message: 'Missing username or password' }, { status: 400 });
  }
}
