
import React from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

const GalleryComingSoon: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-wedding-secondary/20">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center" animation="fade-in">
          <h2 className="font-serif text-3xl text-wedding-dark mb-4">{t('gallery.weddingPhotos')}</h2>
          <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-6"></div>
          <p className="text-wedding-muted max-w-3xl mx-auto">
            {t('gallery.weddingPhotosDesc')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GalleryComingSoon;
