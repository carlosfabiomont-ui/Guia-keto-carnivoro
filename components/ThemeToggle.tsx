
import React from 'react';
import { SunIcon } from './icons/SunIcon';
import { MoonIcon } from './icons/MoonIcon';

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-carnivore-dark dark:text-carnivore-white hover:bg-gray-200 dark:hover:bg-carnivore-dark-secondary transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
    </button>
  );
};

export default ThemeToggle;
