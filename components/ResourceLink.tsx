import React from 'react';
import { Resource, View } from '../types';
import { BookmarkIcon } from './icons/BookmarkIcon';
import { ExternalLinkIcon } from './icons/ExternalLinkIcon';

interface ResourceLinkProps {
  resource: Resource;
  isBookmarked: boolean;
  toggleBookmark: () => void;
  setView: (view: View) => void;
}

export const ResourceLink: React.FC<ResourceLinkProps> = ({ resource, isBookmarked, toggleBookmark, setView }) => {
  const content = (
    <>
      <h4 className="font-semibold text-carnivore-dark dark:text-carnivore-white group-hover:text-carnivore-gold dark:group-hover:text-carnivore-gold transition-colors flex items-center">
        {resource.title}
        {resource.url && <ExternalLinkIcon className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />}
      </h4>
      <p className="text-sm text-gray-600 dark:text-carnivore-gray">{resource.author}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{resource.description}</p>
    </>
  );

  return (
    <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-carnivore-dark-secondary rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-colors">
      <div className="flex-1 mr-4">
        {resource.url ? (
          <a href={resource.url} target="_blank" rel="noopener noreferrer" className="group">
            {content}
          </a>
        ) : (
          <button onClick={() => resource.internalView && setView(resource.internalView)} className="group text-left w-full">
            {content}
          </button>
        )}
      </div>
      <button onClick={toggleBookmark} className="p-2">
        <BookmarkIcon className={`w-6 h-6 transition-colors ${isBookmarked ? 'text-carnivore-gold fill-current' : 'text-gray-400 hover:text-carnivore-gold'}`} />
      </button>
    </div>
  );
};