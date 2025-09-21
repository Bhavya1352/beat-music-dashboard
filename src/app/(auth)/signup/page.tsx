'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function SignupPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        console.log('Signup successful:', data);
        router.push('/login'); // Redirect to login after successful signup
      } else {
        setError(data.message || 'Signup failed.');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className="w-full max-w-md rounded-lg bg-white/10 p-8 shadow-xl backdrop-blur-sm">
      <h1 className="mb-6 text-center text-3xl font-bold text-white">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="username" className="mb-2 block text-sm font-medium text-white">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full rounded-md border border-gray-300 bg-white/20 p-3 text-white placeholder-gray-200 focus:border-blue-500 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full rounded-md border border-gray-300 bg-white/20 p-3 text-white placeholder-gray-200 focus:border-blue-500 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
          />
        </div>
        {error && <p className="text-center text-red-300">{error}</p>}
        <button
          type="submit"
          className="w-full rounded-md bg-blue-600 p-3 font-semibold text-white transition duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-6 text-center text-sm text-white">
        Already have an account?{' '}
        <Link href="/login" className="font-medium text-blue-300 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}
