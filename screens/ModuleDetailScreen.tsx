import React from 'react';
import { modules } from '../data/modules';
import { ModuleContent } from '../types';
import { BookmarkIcon } from '../components/icons/BookmarkIcon';
import { MacroCalculator } from '../components/MacroCalculator';

interface ModuleDetailScreenProps {
  moduleId: number;
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
}

const ModuleDetailScreen: React.FC<ModuleDetailScreenProps> = ({ moduleId, bookmarks, toggleBookmark }) => {
  const module = modules.find(m => m.id === moduleId);

  if (!module) {
    return <div className="text-center p-8">Módulo não encontrado.</div>;
  }

  const bookmarkId = `module:${module.id}`;
  const isBookmarked = bookmarks.includes(bookmarkId);

  const renderContent = (content: ModuleContent, index: number) => {
    switch (content.type) {
      case 'heading':
        return <h3 key={index} className="text-2xl font-serif font-semibold mt-8 mb-4 text-carnivore-dark dark:text-carnivore-white">{content.content}</h3>;
      case 'paragraph':
        return <p key={index} className="mb-4 text-lg leading-relaxed text-gray-700 dark:text-carnivore-gray">{content.content}</p>;
      case 'list':
        return (
          <ul key={index} className="list-disc list-inside mb-4 pl-4 text-lg text-gray-700 dark:text-carnivore-gray space-y-2">
            {(content.content as string[]).map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        );
      case 'quote':
        return (
          <blockquote key={index} className="my-6 p-4 border-l-4 border-carnivore-gold bg-gray-100 dark:bg-carnivore-dark-secondary rounded-r-lg">
            <p className="text-lg italic text-gray-800 dark:text-carnivore-gray">"{content.content}"</p>
            {content.author && <footer className="mt-2 text-right text-sm text-gray-600 dark:text-gray-400">- {content.author}</footer>}
          </blockquote>
        );
      case 'evidence':
        return (
          <div key={index} className="my-6 p-4 border border-yellow-300 dark:border-carnivore-gold/50 rounded-lg bg-yellow-50 dark:bg-carnivore-gold/10">
            <h4 className="font-bold text-carnivore-gold mb-2">Evidência Científica</h4>
            <p className="text-gray-800 dark:text-carnivore-gray">{content.content}</p>
            {content.author && content.year && <p className="mt-2 text-sm text-right text-gray-600 dark:text-gray-400">({content.author}, {content.year})</p>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <article className="animate-fade-in">
      <header className="mb-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-4xl font-bold font-serif text-carnivore-dark dark:text-carnivore-white mb-2">{module.title}</h2>
            <p className="text-xl text-gray-500 dark:text-gray-400">{module.subtitle}</p>
          </div>
          <button onClick={() => toggleBookmark(bookmarkId)} className="p-2 -mr-2">
            <BookmarkIcon className={`w-7 h-7 transition-colors ${isBookmarked ? 'text-carnivore-gold fill-current' : 'text-gray-400 hover:text-carnivore-gold'}`} />
          </button>
        </div>
      </header>
      
      <div className="prose prose-lg dark:prose-invert max-w-none">
        {module.content.map(renderContent)}
      </div>
      
      {module.id === 7 && <MacroCalculator />}
    </article>
  );
};

export default ModuleDetailScreen;