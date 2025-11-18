import React from 'react';
import { resources } from '../data/resources';
import { ResourceCategory } from '../types';
import { ResourceLink } from '../components/ResourceLink';

interface ResourcesScreenProps {
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
}

const ResourcesScreen: React.FC<ResourcesScreenProps> = ({ bookmarks, toggleBookmark }) => {
  const categorizedResources = resources.reduce((acc, resource) => {
    (acc[resource.category] = acc[resource.category] || []).push(resource);
    return acc;
  }, {} as Record<ResourceCategory, typeof resources>);

  const categories: ResourceCategory[] = ['Apps e Ferramentas', 'Canais Educativos', 'Recursos Científicos', 'Comunidades Online'];

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold font-serif text-carnivore-dark dark:text-carnivore-white mb-6">Recursos e Ferramentas</h2>
      
      <div className="space-y-8">
        {categories.map(category => (
          categorizedResources[category] && (
            <section key={category}>
              <h3 className="text-2xl font-semibold font-serif border-b-2 border-carnivore-gold pb-2 mb-4 text-carnivore-dark dark:text-carnivore-white">{category}</h3>
              <div className="space-y-4">
                {categorizedResources[category]?.map(resource => (
                  <ResourceLink
                    key={resource.id}
                    resource={resource}
                    isBookmarked={bookmarks.includes(`resource:${resource.id}`)}
                    toggleBookmark={() => toggleBookmark(`resource:${resource.id}`)}
                  />
                ))}
              </div>
            </section>
          )
        ))}
      </div>
    </div>
  );
};

export default ResourcesScreen;