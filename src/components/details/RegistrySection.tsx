import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaypal } from '@fortawesome/free-brands-svg-icons';
import {faCopy} from '@fortawesome/free-solid-svg-icons';

const RegistrySection: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-white">
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

            <Link to="">
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(t('details.swishNumber'));
                  alert(t('details.swishNumber') + ' copied to clipboard!');
                }}
                className="bg-wedding-primary/50 text-wedding-dark hover:bg-wedding-accent/50 transition-all"
                >
                <FontAwesomeIcon icon={faCopy} className="mr-2" />
                {t('details.swishButton')}
              </Button>
            </Link>

            <Link 
             to="https://paypal.me/NihanAle?country.x=SE&locale.x=sv_SE"
             target="_blank"
             rel="noopener noreferrer">
                <Button className="bg-wedding-primary/50 text-wedding-dark hover:bg-wedding-accent/50 transition-all">
                      PayPal
                  <FontAwesomeIcon icon={faPaypal} />
                </Button>        
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default RegistrySection;
