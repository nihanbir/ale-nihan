
import React from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface GalleryFiltersProps {
  filter: string | null;
  setFilter: (filter: string | null) => void;
}

const GalleryFilters: React.FC<GalleryFiltersProps> = ({ filter, setFilter }) => {
  const { t } = useLanguage();
  
  return (
    <AnimatedSection className="mb-12" animation="fade-in">
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setFilter(null)}
          className={cn(
            "px-6 py-2 rounded-full transition-all text-sm",
            filter === null
              ? "bg-wedding-primary text-white"
              : "bg-wedding-secondary/50 text-wedding-dark hover:bg-wedding-secondary"
          )}
        >
          {t('gallery.allPhotos')}
        </button>
        <button
            onClick={() => setFilter('pre-wedding')}
            className={cn(
                "px-6 py-2 rounded-full transition-all text-sm",
                filter === 'pre-wedding'
                    ? "bg-wedding-primary text-white"
                    : "bg-wedding-secondary/50 text-wedding-dark hover:bg-wedding-secondary"
            )}
        >
          {t('gallery.preWedding')}
        </button>
        <button
          onClick={() => setFilter('engagement')}
          className={cn(
            "px-6 py-2 rounded-full transition-all text-sm",
            filter === 'engagement'
              ? "bg-wedding-primary text-white"
              : "bg-wedding-secondary/50 text-wedding-dark hover:bg-wedding-secondary"
          )}
        >
          {t('gallery.engagement')}
        </button>
       
      </div>
    </AnimatedSection>
  );
};

export default GalleryFilters;
