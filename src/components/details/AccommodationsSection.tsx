
import React from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Hotel, Car, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ACCOMMODATIONS } from '@/constants/wedding';

const AccommodationsSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-wedding-secondary/20">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12" animation="fade-in">
          <h2 className="font-serif text-3xl text-wedding-dark mb-4">{t('home.accommodations')}</h2>
          <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-8"></div>
          <p className="text-wedding-muted max-w-3xl mx-auto">
            {t('details.accommodationsInfo')}
          </p>
        </AnimatedSection>
        
        <div className="space-y-8">
          <AnimatedSection animation="fade-in" delay={200}>
            <div className="bg-white rounded-lg p-8 shadow-soft">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4 flex justify-center md:justify-start">
                  <div className="w-16 h-16 bg-wedding-primary/10 rounded-full flex items-center justify-center">
                    <Hotel className="text-wedding-primary h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div>
                    <h3 className="font-serif text-2xl text-wedding-dark mb-4">{ACCOMMODATIONS.name}</h3>
                    <div className="flex items-start">
                      <div className="space-y-4">
                        <p className="text-wedding-muted mb-4">
                          {t('details.roomDescription')}
                        </p>
                        {/* Check-in, Check-out */}
                        <div className="flex items-start gap-3">
                          <div className="text-wedding-primary h-5 w-5 mt-1 mr-3 flex-shrink-0">
                            <Clock className="text-wedding-primary h-8 w-8" />
                          </div>
                          <div>
                            <p className="font-medium">{t('details.checkIn')}</p>
                            <p className="text-wedding-muted text-sm">{t('details.weddingDay')}
                            </p>
                            <p className="text-wedding-muted text-sm">{ACCOMMODATIONS.checkin}</p>
                          </div>
                          <div className="text-wedding-primary h-5 w-5 mt-1 mr-3 flex-shrink-0">
                            <Clock className="text-wedding-primary h-8 w-8" />
                          </div>
                          <div>
                            <p className="font-medium">{t('details.checkOut')}</p>
                            <p className="text-wedding-muted text-sm">{t('details.nextDay')}</p>
                            <p className="text-wedding-muted text-sm">{ACCOMMODATIONS.checkout}</p>
                          </div>
                        </div>
                        {/* Breakfast */}
                        <div className="flex items-start gap-3">
                          <div className="text-wedding-primary h-5 w-5 mt-1 mr-3 flex-shrink-0">
                            <Clock className="text-wedding-primary h-8 w-8" />
                          </div>
                          <div>
                            <p className="font-medium">{t('details.breakfast')}</p>
                            <p className="text-wedding-muted text-sm">{t('details.nextDay')}</p>
                            <p className="text-wedding-muted text-sm">{ACCOMMODATIONS.breakfast}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={300}>
            <div className="bg-white rounded-lg p-8 shadow-soft">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="md:w-1/4 flex justify-center md:justify-start">
                  <div className="w-16 h-16 bg-wedding-primary/10 rounded-full flex items-center justify-center">
                    <Car className="text-wedding-primary h-8 w-8" />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <h3 className="font-serif text-xl text-wedding-dark mb-2">{t('details.transportation')}</h3>
                  <p className="text-wedding-muted mb-4">
                    {t('details.menuTBA')}
                  </p>
                  <p className="text-wedding-muted">
                    {t('details.parkingInfo')}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AccommodationsSection;
