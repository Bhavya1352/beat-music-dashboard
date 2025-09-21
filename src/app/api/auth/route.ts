import { NextResponse } from 'next/server';

interface User {
  id: string;
  username: string;
  passwordHash: string; // In a real app, this would be a hashed password
}

// Mock user database (in-memory)
const users: User[] = [];

// Helper to generate a simple hash for mock passwords
const hashPassword = (password: string) => {
  // In a real application, use a strong hashing library like bcrypt
  return btoa(password); // Simple base64 encoding for mock purposes
};

// Mock Sign-Up
export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (!username || !password || password.length < 6) {
    return NextResponse.json({ message: 'Username and password (min 6 chars) are required.' }, { status: 400 });
  }

  if (users.some(user => user.username === username)) {
    return NextResponse.json({ message: 'Username already exists.' }, { status: 409 });
  }

  const newUser: User = {
    id: String(users.length + 1),
    username,
    passwordHash: hashPassword(password),
  };
  users.push(newUser);

  // In a real app, you'd return a JWT or session token
  return NextResponse.json({ message: 'User registered successfully.', user: { id: newUser.id, username: newUser.username } }, { status: 201 });
}

// Mock Sign-In (GET for simplicity, POST is more typical for login)
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username');
  const password = searchParams.get('password');

  if (!username || !password) {
    return NextResponse.json({ message: 'Username and password are required.' }, { status: 400 });
  }

  const user = users.find(u => u.username === username);

  if (!user || user.passwordHash !== hashPassword(password)) {
    return NextResponse.json({ message: 'Invalid credentials.' }, { status: 401 });
  }

  // In a real app, you'd return a JWT or session token
  return NextResponse.json({ message: 'Login successful.', user: { id: user.id, username: user.username } }, { status: 200 });
}
