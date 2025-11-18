import React from 'react';
import { Tab } from '../types';
import { HomeIcon } from './icons/HomeIcon';
import { BookOpenIcon } from './icons/BookOpenIcon';
import { UtensilsIcon } from './icons/UtensilsIcon';
import { LinkIcon } from './icons/LinkIcon';
import { JournalIcon } from './icons/JournalIcon';

interface TabBarProps {
  activeTab: Tab | 'moduleDetail';
  onNavigate: (tab: Tab) => void;
}

const TabBar: React.FC<TabBarProps> = ({ activeTab, onNavigate }) => {
  const tabs: { key: Tab, label: string, icon: React.ReactNode }[] = [
    { key: 'home', label: 'Início', icon: <HomeIcon /> },
    { key: 'modules', label: 'Módulos', icon: <BookOpenIcon /> },
    { key: 'recipes', label: 'Receitas', icon: <UtensilsIcon /> },
    { key: 'resources', label: 'Recursos', icon: <LinkIcon /> },
    { key: 'diary', label: 'Diário', icon: <JournalIcon /> },
  ];

  const getEffectiveTab = (tab: Tab | 'moduleDetail'): Tab => {
    if (tab === 'home') return 'home';
    if (tab === 'modules' || tab === 'moduleDetail') return 'modules';
    if (tab === 'recipes') return 'recipes';
    if (tab === 'resources') return 'resources';
    if (tab === 'diary') return 'diary';
    return 'home';
  }

  const effectiveActiveTab = getEffectiveTab(activeTab);

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-4xl mx-auto bg-carnivore-white/80 dark:bg-carnivore-dark/80 backdrop-blur-lg border-t border-gray-200 dark:border-gray-800">
      <div className="flex justify-around items-center h-16">
        {tabs.map(({ key, label, icon }) => (
          <button
            key={key}
            onClick={() => onNavigate(key)}
            className={`flex flex-col items-center justify-center w-full transition-colors duration-200 ${
              effectiveActiveTab === key ? 'text-carnivore-gold dark:text-carnivore-gold' : 'text-gray-500 dark:text-carnivore-gray hover:text-carnivore-dark dark:hover:text-carnivore-white'
            }`}
          >
            <div className="w-6 h-6 mb-1">{icon}</div>
            <span className="text-xs font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default TabBar;