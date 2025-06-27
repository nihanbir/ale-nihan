import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-wedding-secondary/30 border-t border-wedding-accent/20 py-12">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <Link
                to="/"
                className="text-sm text-wedding-dark hover:text-wedding-primary transition-colors"
            >
              {t('common.home')}
            </Link>
            <Link
                to="/details"
                className="text-sm text-wedding-dark hover:text-wedding-primary transition-colors"
            >
              {t('common.details')}
            </Link>
            <Link
                to="/gallery"
                className="text-sm text-wedding-dark hover:text-wedding-primary transition-colors"
            >
              {t('common.gallery')}
            </Link>
          </div>

          <div className="flex items-center justify-center mb-4">
            <Heart size={16} className="text-wedding-primary mr-2" />
            <p className="text-sm text-wedding-muted">
              {t('footer.madeWithLove')}
            </p>
          </div>

          <p className="text-xs text-wedding-muted text-center">
            © {currentYear} Nihan Bir & Ale Flärd. {t('footer.allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
