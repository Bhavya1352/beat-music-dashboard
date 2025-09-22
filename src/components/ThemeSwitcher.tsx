'use client';

import { useTheme } from '../context/ThemeContext';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-600 transition-all duration-300 flex items-center justify-center w-12 h-12 text-xl"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? '☀️' : '🌙'}
    </button>
  );
}