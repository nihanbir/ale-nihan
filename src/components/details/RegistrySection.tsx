
import React from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const RegistrySection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-wedding-secondary/30">
      <div className="container max-w-4xl mx-auto px-6">
        <AnimatedSection className="text-center" animation="fade-in">
          <div className="w-16 h-16 bg-wedding-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="text-wedding-primary h-8 w-8" />
          </div>
          <h2 className="font-serif text-3xl text-wedding-dark mb-4">{t('details.registry')}</h2>
          <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-6"></div>
          <p className="text-wedding-muted max-w-3xl mx-auto mb-8">
            {t('details.registryInfo')}
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <Button 
              variant="outline" 
              className="border-wedding-primary text-wedding-primary hover:bg-wedding-primary hover:text-white transition-all py-6"
            >
              {t('details.amazonRegistry')}
            </Button>
            <Button 
              variant="outline" 
              className="border-wedding-primary text-wedding-primary hover:bg-wedding-primary hover:text-white transition-all py-6"
            >
              {t('details.crateBarrel')}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RegistrySection;
