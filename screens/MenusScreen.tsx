import React, { useState, useMemo } from 'react';
import { RecipeCategory } from '../types';
import { recipes } from '../data/menus';
import { RecipeCard } from '../components/MenuCard';

interface RecipesScreenProps {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
}

const RecipesScreen: React.FC<RecipesScreenProps> = ({ bookmarks, toggleBookmark }) => {
  const [activeFilter, setActiveFilter] = useState<RecipeCategory | 'Todas'>('Todas');
  
  const filters: (RecipeCategory | 'Todas')[] = ['Todas', 'Pequeno-Almoço', 'Carne Vermelha', 'Aves e Refeições Rápidas', 'Peixes e Frutos do Mar', 'Snacks e Aperitivos', 'Sobremesas', 'Crianças'];

  const filteredRecipes = useMemo(() => {
    if (activeFilter === 'Todas') {
      return recipes;
    }
    return recipes.filter(recipe => recipe.category === activeFilter);
  }, [activeFilter]);
  
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold font-serif text-carnivore-dark dark:text-carnivore-white mb-4">Receitas Práticas</h2>
      <p className="text-lg text-gray-600 dark:text-carnivore-gray mb-6">
        Mais de 80 receitas testadas e aprovadas para tornar sua jornada deliciosa e prática.
      </p>

      <div className="flex space-x-2 overflow-x-auto pb-4 mb-6 -mx-4 px-4">
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full font-semibold text-sm whitespace-nowrap transition-colors duration-200 ${
              activeFilter === filter
                ? 'bg-carnivore-gold text-white'
                : 'bg-gray-200 dark:bg-carnivore-dark-secondary text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      
      <div className="space-y-4">
        {filteredRecipes.map(recipe => (
          <RecipeCard 
            key={recipe.id} 
            recipe={recipe}
            isBookmarked={bookmarks.includes(`recipe:${recipe.id}`)}
            toggleBookmark={() => toggleBookmark(`recipe:${recipe.id}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecipesScreen;