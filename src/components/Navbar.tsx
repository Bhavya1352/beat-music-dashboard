'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import ThemeSwitcher from './ThemeSwitcher';
import { LogOut } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  // Don't show navbar on login or signup page
  if (pathname === '/' || pathname === '/login' || pathname === '/signup') {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    router.push('/login');
  };

  const NavLink = ({ href, children }) => (
    <Link href={href} className="relative text-lg font-medium text-white transition-colors duration-300 group">
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </Link>
  );

  return (
    <nav className="bg-gray-900/50 backdrop-blur-lg p-4 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/dashboard" className="text-2xl font-extrabold tracking-wide hover:text-gray-200 transition duration-200">
          Beat Music
        </Link>
        <div className="flex items-center space-x-6">
          <NavLink href="/dashboard">Dashboard</NavLink>
          <NavLink href="/upload">Upload Track</NavLink>
          <ThemeSwitcher />
          <button onClick={handleLogout} className="p-2 rounded-full hover:bg-white/10 transition-colors">
            <LogOut size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
}
