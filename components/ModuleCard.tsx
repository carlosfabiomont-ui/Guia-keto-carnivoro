import React from 'react';
import { Module } from '../types';

interface ModuleCardProps {
  module: Module;
  onSelect: () => void;
  index: number;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({ module, onSelect, index }) => {
  const animationDelay = `${index * 100}ms`;

  return (
    <div 
      onClick={onSelect} 
      className="bg-white dark:bg-carnivore-dark-secondary rounded-xl shadow-lg hover:shadow-2xl dark:hover:shadow-carnivore-gold/20 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer overflow-hidden animate-fade-in-up"
      style={{ animationDelay }}
    >
      <div className="p-6">
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 bg-carnivore-gold/10 dark:bg-carnivore-gold/20 p-3 rounded-full">
            <span className="text-2xl">{module.icon}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold font-serif text-carnivore-dark dark:text-carnivore-white">{module.title}</h3>
            <p className="text-gray-600 dark:text-carnivore-gray mt-1">{module.subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};