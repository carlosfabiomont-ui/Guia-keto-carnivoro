import React, { useState } from 'react';
import { Recipe } from '../types';
import { BookmarkIcon } from './icons/BookmarkIcon';
import { ChevronLeftIcon } from './icons/ChevronLeftIcon';

interface RecipeCardProps {
  recipe: Recipe;
  isBookmarked: boolean;
  toggleBookmark: () => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, isBookmarked, toggleBookmark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white dark:bg-carnivore-dark-secondary rounded-xl shadow-md overflow-hidden transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 flex justify-between items-center"
      >
        <div>
            <h3 className="text-lg font-bold font-serif text-carnivore-dark dark:text-carnivore-white">{recipe.title}</h3>
            <p className="text-sm text-gray-500">{recipe.category}</p>
        </div>
        <ChevronLeftIcon className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? '-rotate-90' : 'rotate-0'}`} />
      </button>

      {isOpen && (
        <div className="p-4 pt-0 animate-fade-in-up">
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <div className="flex justify-between items-start">
              <h4 className="font-semibold text-carnivore-dark dark:text-carnivore-white mb-2">Ingredientes</h4>
              <button onClick={(e) => { e.stopPropagation(); toggleBookmark(); }} className="p-2 -mr-2 -mt-2">
                <BookmarkIcon className={`w-6 h-6 transition-colors ${isBookmarked ? 'text-carnivore-gold fill-current' : 'text-gray-400 hover:text-carnivore-gold'}`} />
              </button>
            </div>
            <ul className="list-disc list-inside text-gray-600 dark:text-carnivore-gray mb-4 pl-2 space-y-1">
              {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
            </ul>

            <h4 className="font-semibold text-carnivore-dark dark:text-carnivore-white mb-2">Modo de Preparo</h4>
            <ol className="list-decimal list-inside text-gray-600 dark:text-carnivore-gray mb-4 pl-2 space-y-1">
              {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
            </ol>

            {recipe.tip && (
              <div>
                <h4 className="font-semibold text-carnivore-dark dark:text-carnivore-white mb-1">Dica Especial</h4>
                <p className="text-sm text-gray-600 dark:text-carnivore-gray italic">"{recipe.tip}"</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};