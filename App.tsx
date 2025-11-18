import React, { useState, useEffect } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import { Tab, View, DiaryEntry } from './types';
import HomeScreen from './screens/HomeScreen';
import ModulesScreen from './screens/ModulesScreen';
import RecipesScreen from './screens/MenusScreen';
import ResourcesScreen from './screens/ResourcesScreen';
import ModuleDetailScreen from './screens/ModuleDetailScreen';
import DiaryScreen from './screens/DiaryScreen';
import TabBar from './components/TabBar';
import ThemeToggle from './components/ThemeToggle';
import { ChevronLeftIcon } from './components/icons/ChevronLeftIcon';

const App: React.FC = () => {
  const [theme, setTheme] = useLocalStorage<string>('theme', 'dark');
  const [view, setView] = useState<View>({ current: 'home' });
  const [bookmarks, setBookmarks] = useLocalStorage<string[]>('bookmarks', []);
  const [diaryEntries, setDiaryEntries] = useLocalStorage<DiaryEntry[]>('diaryEntries', []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleNavigate = (tab: Tab) => {
    setView({ current: tab });
  };
  
  const handleSelectModule = (id: number) => {
    setView({ current: 'moduleDetail', moduleId: id });
  };
  
  const handleBack = () => {
    setView({ current: 'modules' });
  };

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
  };

  const addDiaryEntry = (entry: Omit<DiaryEntry, 'id' | 'date'>) => {
    const newEntry: DiaryEntry = {
      ...entry,
      id: new Date().toISOString(),
      date: new Date().toISOString(),
    };
    setDiaryEntries(prev => [newEntry, ...prev].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()));
  };

  const deleteDiaryEntry = (id: string) => {
    setDiaryEntries(prev => prev.filter(entry => entry.id !== id));
  };

  const renderContent = () => {
    switch (view.current) {
      case 'home':
        return <HomeScreen onStart={() => handleNavigate('modules')} />;
      case 'modules':
        return <ModulesScreen onSelectModule={handleSelectModule} />;
      case 'moduleDetail':
        return view.moduleId !== undefined ? <ModuleDetailScreen moduleId={view.moduleId} bookmarks={bookmarks} toggleBookmark={toggleBookmark} /> : <ModulesScreen onSelectModule={handleSelectModule} />;
      case 'recipes':
        return <RecipesScreen bookmarks={bookmarks} toggleBookmark={toggleBookmark} />;
      case 'resources':
        return <ResourcesScreen bookmarks={bookmarks} toggleBookmark={toggleBookmark} />;
      case 'diary':
        return <DiaryScreen entries={diaryEntries} addEntry={addDiaryEntry} deleteEntry={deleteDiaryEntry} />;
      default:
        return <HomeScreen onStart={() => handleNavigate('modules')} />;
    }
  };
  
  const isTabView = ['home', 'modules', 'recipes', 'resources', 'diary'].includes(view.current);

  return (
    <div className="bg-carnivore-white dark:bg-carnivore-dark min-h-screen font-sans text-carnivore-dark-secondary dark:text-carnivore-gray transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <header className="p-4 flex items-center justify-between sticky top-0 bg-carnivore-white/80 dark:bg-carnivore-dark/80 backdrop-blur-sm z-10 border-b border-gray-200 dark:border-gray-800">
          <div className="w-10">
            {view.current === 'moduleDetail' && (
              <button onClick={handleBack} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-carnivore-dark-secondary transition-colors">
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
            )}
          </div>
          <div className="flex-grow text-center">
            <h1 className="text-xl font-serif font-semibold text-carnivore-dark dark:text-carnivore-white truncate">
              Keto Carnívoro
            </h1>
          </div>
          <div className="w-10 flex justify-end">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
        </header>
        <main className="pb-24 px-4 pt-6">
          {renderContent()}
        </main>
        {isTabView && <TabBar activeTab={view.current} onNavigate={handleNavigate} />}
      </div>
    </div>
  );
};

export default App;