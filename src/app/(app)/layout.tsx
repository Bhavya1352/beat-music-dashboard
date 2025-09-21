'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../globals.css';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, clear authentication tokens/session
    console.log('Logging out...');
    router.push('/login');
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 p-4 shadow-md">
          <div className="container mx-auto flex items-center justify-between">
            <Link href="/dashboard" className="text-2xl font-bold text-white">
              Beat Dashboard
            </Link>
            <div className="space-x-4">
              <Link href="/dashboard" className="text-gray-300 hover:text-white">
                Dashboard
              </Link>
              <Link href="/upload" className="text-gray-300 hover:text-white">
                Upload Track
              </Link>
              <button
                onClick={handleLogout}
                className="rounded-md bg-red-600 px-3 py-2 text-white hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
