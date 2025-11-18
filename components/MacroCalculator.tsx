import React, { useState } from 'react';

type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active';
type Goal = 'lose' | 'maintain' | 'gain';

export const MacroCalculator: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>('light');
  const [goal, setGoal] = useState<Goal>('maintain');
  const [results, setResults] = useState<{ protein: number; fat: number; calories: number } | null>(null);

  const calculateMacros = (e: React.FormEvent) => {
    e.preventDefault();
    const weightNum = parseFloat(weight);
    if (isNaN(weightNum) || weightNum <= 0) {
      alert('Por favor, insira um peso válido.');
      return;
    }

    let proteinRatio = 2.0; // g per kg
    let fatRatio = 1.25; // ratio relative to protein

    if (goal === 'gain') {
      proteinRatio = 2.2;
      fatRatio = 1.5;
    } else if (goal === 'lose') {
      proteinRatio = 2.0;
      fatRatio = 1.0;
    }

    const protein = Math.round(weightNum * proteinRatio);
    const fat = Math.round(protein * fatRatio);
    const calories = Math.round((protein * 4) + (fat * 9));
    
    setResults({ protein, fat, calories });
  };

  return (
    <div className="mt-8">
      <div className="bg-white dark:bg-carnivore-dark-secondary p-6 rounded-xl shadow-lg space-y-4">
        <form onSubmit={calculateMacros} className="space-y-4">
          <div>
            <label htmlFor="weight-calc" className="block text-sm font-medium text-gray-700 dark:text-carnivore-gray">Seu Peso (kg)</label>
            <input 
              type="number" 
              step="0.1"
              id="weight-calc" 
              value={weight} 
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Ex: 75.5"
              className="mt-1 block w-full bg-gray-50 dark:bg-carnivore-dark border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-carnivore-gold focus:border-carnivore-gold"
              required
            />
          </div>
          
          <div>
            <label htmlFor="activity" className="block text-sm font-medium text-gray-700 dark:text-carnivore-gray">Nível de Atividade</label>
            <select 
              id="activity" 
              value={activityLevel} 
              onChange={(e) => setActivityLevel(e.target.value as ActivityLevel)}
              className="mt-1 block w-full bg-gray-50 dark:bg-carnivore-dark border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-carnivore-gold focus:border-carnivore-gold"
            >
              <option value="sedentary">Sedentário (pouco ou nenhum exercício)</option>
              <option value="light">Levemente Ativo (exercício leve 1-3 dias/semana)</option>
              <option value="moderate">Moderadamente Ativo (exercício moderado 3-5 dias/semana)</option>
              <option value="active">Muito Ativo (exercício intenso 6-7 dias/semana)</option>
            </select>
          </div>

          <div>
            <label htmlFor="goal" className="block text-sm font-medium text-gray-700 dark:text-carnivore-gray">Seu Objetivo</label>
            <select 
              id="goal" 
              value={goal} 
              onChange={(e) => setGoal(e.target.value as Goal)}
              className="mt-1 block w-full bg-gray-50 dark:bg-carnivore-dark border border-gray-300 dark:border-gray-700 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-carnivore-gold focus:border-carnivore-gold"
            >
              <option value="lose">Perder Peso</option>
              <option value="maintain">Manter o Peso</option>
              <option value="gain">Ganhar Massa Muscular</option>
            </select>
          </div>
          
          <button type="submit" className="w-full px-4 py-2 bg-carnivore-gold text-white font-bold rounded-lg shadow-md hover:bg-carnivore-gold-hover transition-colors">
            Calcular
          </button>
        </form>
        
        {results && (
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700 animate-fade-in">
            <h4 className="text-lg font-semibold text-center text-carnivore-dark dark:text-carnivore-white mb-4">Suas Metas Diárias Estimadas:</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-2xl font-bold text-carnivore-gold">{results.protein}g</p>
                <p className="text-sm text-gray-600 dark:text-carnivore-gray">Proteína</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-carnivore-gold">{results.fat}g</p>
                <p className="text-sm text-gray-600 dark:text-carnivore-gray">Gordura</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-carnivore-gold">{results.calories.toLocaleString('pt-BR')}</p>
                <p className="text-sm text-gray-600 dark:text-carnivore-gray">Calorias</p>
              </div>
            </div>
             <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-4">
              *Estes valores são um ponto de partida. Ajuste a gordura para mais ou para menos para controlar a saciedade e os resultados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};