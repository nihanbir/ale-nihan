
import React from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Utensils, Music } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CEREMONY_DETAILS, RECEPTION_DETAILS } from '@/constants/wedding';

const MenuSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12" animation="fade-in">
          <h2 className="font-serif text-3xl text-wedding-dark mb-4">{t('home.menu')} & {t('details.entertainment')}</h2>
          <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-8"></div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection animation="slide-up" delay={200}>
            <div className="bg-wedding-secondary/20 rounded-lg p-8 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-wedding-primary/10 rounded-bl-lg flex items-center justify-center">
                <Utensils className="text-wedding-primary h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl text-wedding-dark mb-4">{t('details.diningExperience')}</h3>
              <p className="text-wedding-muted mb-6">
                {t('details.diningDescription')}
              </p>
              <h4 className="font-serif text-lg text-wedding-dark mb-2">{t('details.menuPreview')}</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">{t('details.firstCourse')}</p>
                    <p className="text-wedding-muted text-sm">{t('details.menuTBA')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">{t('details.mainCourse')}</p>
                    <p className="text-wedding-muted text-sm">{t('details.menuTBA')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">{t('details.dessert')}</p>
                    <p className="text-wedding-muted text-sm">{t('details.menuTBA')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={400}>
            <div className="bg-wedding-secondary/20 rounded-lg p-8 shadow-soft relative overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 bg-wedding-primary/10 rounded-bl-lg flex items-center justify-center">
                <Music className="text-wedding-primary h-5 w-5" />
              </div>
              <h3 className="font-serif text-2xl text-wedding-dark mb-4">{t('details.entertainment')}</h3>
              <p className="text-wedding-muted mb-6">
                {t('details.entertainmentDescription')}
              </p>
              <h4 className="font-serif text-lg text-wedding-dark mb-2">{t('details.schedule')}</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">{t('details.ceremony')} ({CEREMONY_DETAILS.time} - 17:00)</p>
                    <p className="text-wedding-muted text-sm">{t('details.ceremonyMusic')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">{t('details.dinner')} ({RECEPTION_DETAILS.time} - 21:00)</p>
                    <p className="text-wedding-muted text-sm">{t('details.dinnerMusic')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-wedding-primary rounded-full mt-2 mr-2"></div>
                  <div>
                    <p className="font-medium">{t('details.dancing')} (21:00 - 12:30)</p>
                    <p className="text-wedding-muted text-sm">{t('details.dancingDescription')}</p>
                  </div>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
