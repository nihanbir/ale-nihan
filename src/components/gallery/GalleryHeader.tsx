
import React from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { useLanguage } from '@/contexts/LanguageContext';

const GalleryHeader: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-20 bg-wedding-secondary/30">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center" animation="fade-in">
          <h1 className="font-serif text-5xl text-wedding-dark mb-4">{t('gallery.title')}</h1>
          <div className="w-16 h-0.5 bg-wedding-primary mx-auto mb-8"></div>
          <p className="text-wedding-muted max-w-3xl mx-auto">
            {t('gallery.description')}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GalleryHeader;
