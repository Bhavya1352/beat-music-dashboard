'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Music } from 'lucide-react';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  // useEffect(() => {
  //   if (localStorage.getItem('isLoggedIn')) {
  //     router.push('/dashboard');
  //   }
  // }, [router]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard');
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    router.push('/dashboard');
  };

  return (
    // The main container fills the screen, centers content, and has padding
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden animated-gradient-bg">
      
      {/* Animated Blobs in the background */}
      <div 
        className="blob w-72 h-72 bg-purple-500 top-1/4 left-1/4" 
        style={{ animation: 'move-blob-1 15s infinite alternate' }}
      ></div>
      <div 
        className="blob w-80 h-80 bg-pink-500 bottom-1/4 right-1/4" 
        style={{ animation: 'move-blob-2 18s infinite alternate' }}
      ></div>

      {/* The Centered "Beautiful Shape" Container */}
      <div className="login-form-container p-4 space-y-6 bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 animate-fade-in max-w-md w-full overflow-auto">
        <div className="flex justify-center">
          <div className="p-3 bg-white/20 rounded-full">
            <Music className="text-white animate-pulse" size={40} />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-center text-white">
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h1>
        {isLogin ? (
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
              <input type="email" id="email" required className="mt-1 block w-full px-4 py-2 bg-black/20 border border-white/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-white placeholder-gray-400" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
              <input type="password" id="password" required className="mt-1 block w-full px-4 py-2 bg-black/20 border border-white/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-white placeholder-gray-400" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-bold text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-150 ease-in-out transform hover:scale-105">Sign In</button>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">Name</label>
              <input type="text" id="name" required className="mt-1 block w-full px-4 py-2 bg-black/20 border border-white/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-white placeholder-gray-400" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
              <input type="email" id="email" required className="mt-1 block w-full px-4 py-2 bg-black/20 border border-white/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-white placeholder-gray-400" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
              <input type="password" id="password" required className="mt-1 block w-full px-4 py-2 bg-black/20 border border-white/30 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-white placeholder-gray-400" placeholder="••••••••" />
            </div>
            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-bold text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-all duration-150 ease-in-out transform hover:scale-105">Sign Up</button>
          </form>
        )}
        <p className="text-center text-sm text-gray-200">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
          <button onClick={() => setIsLogin(!isLogin)} className="font-medium text-pink-400 hover:text-pink-300 transition-colors">
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;