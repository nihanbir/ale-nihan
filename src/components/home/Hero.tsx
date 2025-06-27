
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  names?: {
    partner1: string;
    partner2: string;
  };
  date?: string;
  location?: string;
}

const Hero: React.FC<HeroProps> = ({
  names = { partner1: 'Nihan', partner2: 'Ale' },
  date,
  location
}) => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContent = () => {
    const contentElement = document.getElementById('about-section');
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background container */}
        <div className="absolute inset-0">
          <div
              className="hidden absolute sm:block inset-0 bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/extended.jpg')`,
                backgroundSize: '118%',
                filter: 'blur(8px) brightness(0.8)',
              }}
          />

          <div
            className="hidden absolute sm:block inset-0 bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/us.jpg')`,
              backgroundSize: '50%',
              maskImage: 'radial-gradient(circle at center, white 35%, transparent 45%)',
              WebkitMaskImage: 'radial-gradient(circle at center, white 35%, transparent 45%)'
            }}
          />

          <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden"
              style={{
                backgroundImage: `url('https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/us.jpg')`,
              }}
          />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      {/* Content */}
      <div className="relative text-center px-6 max-w-4xl mx-auto pt-24 md:pt-24 lg:pt-32">
        <div
            className={cn(
                "transition-all duration-1000 ease-out transform",
                isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
        >
          <p
              className="text-wedding-secondary/95 font-serif italic mb-6 md:mb-8 tracking-wide"
              style={{ transitionDelay: '200ms' }}
          >
            {t('hero.gettingMarried')}
          </p>

          <h1
              className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-8 md:mb-12 font-light"
              style={{ transitionDelay: '400ms' }}
          >
            <span className="block mb-3 md:mb-4">{names.partner1}</span>
            <span className="inline-block mx-2 md:mx-4 text-wedding-primary animate-pulse-soft">&</span>
            <span className="block mt-3 md:mt-4">{names.partner2}</span>
          </h1>

          <div
              className="flex flex-col items-center space-y-4 mb-12 md:mb-16"
              style={{ transitionDelay: '600ms' }}
          >
            <p className="text-secondary/95 font-medium tracking-wider uppercase bg-wedding-dark/70 text-sm md:text-base">
              {date}
            </p>
            <div className="w-12 h-px bg-wedding-primary"></div>
            <p className="text-secondary/95 font-medium tracking-wider uppercase bg-wedding-dark/70 text-sm md:text-base">
              {location}
            </p>
          </div>

          <div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-8 md:pb-12"
              style={{ transitionDelay: '800ms' }}
          >
            <Link to="/details">
              <Button className="bg-wedding-primary hover:bg-wedding-secondary/90 hover:text-wedding-primary text-white transition-all px-6 py-5 rounded-md">
                {t('hero.viewDetails')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className={cn(
          "absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-all",
          "animate-bounce"
        )}
      >
        <ArrowDown size={28} />
      </button>
    </div>
  );
};

export default Hero;
