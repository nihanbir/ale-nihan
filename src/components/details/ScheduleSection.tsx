
import React from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import WeddingDetailsCard from '@/components/shared/WeddingDetailsCard';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CEREMONY_DETAILS, RECEPTION_DETAILS } from '@/constants/wedding';

const ScheduleSection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
      <div className="container max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-12" animation="fade-in">
          <h2 className="font-serif text-3xl text-wedding-dark mb-4">{t('details.title')}</h2>
          <div className="w-12 h-0.5 bg-wedding-primary mx-auto mb-8"></div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-12">
          <AnimatedSection animation="slide-up" delay={200}>
            <div className="bg-wedding-secondary/20 rounded-lg p-8 shadow-soft relative overflow-hidden">
              <WeddingDetailsCard
                  title={t('details.ceremony')}
                  icon={<Calendar className="text-wedding-primary h-5 w-5" />}
                  description={CEREMONY_DETAILS.description}
                  items={[
                    {
                      icon: <Clock className="h-5 w-5" />,
                      title: CEREMONY_DETAILS.time,
                      description: `Saturday, ${CEREMONY_DETAILS.date}`
                    },
                    {
                      icon: <MapPin className="h-5 w-5" />,
                      title: CEREMONY_DETAILS.venue,
                      description: CEREMONY_DETAILS.address
                    }
                  ]}
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="slide-up" delay={400}>
            <div className="bg-wedding-secondary/20 rounded-lg p-8 shadow-soft relative overflow-hidden">
              <WeddingDetailsCard
                  title={t('details.reception')}
                  icon={<Calendar className="text-wedding-primary h-5 w-5" />}
                  description={RECEPTION_DETAILS.description}
                  items={[
                    {
                      icon: <Clock className="h-5 w-5" />,
                      title: RECEPTION_DETAILS.time,
                      description: `Saturday, ${RECEPTION_DETAILS.date}`
                    },
                    {
                      icon: <MapPin className="h-5 w-5" />,
                      title: RECEPTION_DETAILS.venue,
                      description: RECEPTION_DETAILS.address
                    }
                  ]}
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
