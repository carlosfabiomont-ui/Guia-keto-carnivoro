import React from 'react';
import { modules } from '../data/modules';
import { ModuleCard } from '../components/ModuleCard';

interface ModulesScreenProps {
  onSelectModule: (id: number) => void;
}

const ModulesScreen: React.FC<ModulesScreenProps> = ({ onSelectModule }) => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold font-serif text-carnivore-dark dark:text-carnivore-white mb-6">Módulos Educacionais</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <ModuleCard key={module.id} module={module} onSelect={() => onSelectModule(module.id)} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ModulesScreen;