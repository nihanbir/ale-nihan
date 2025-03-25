
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  names?: {
    partner1: string;
    partner2: string;
  };
  date?: string;
  location?: string;
}

const Hero: React.FC<HeroProps> = ({
  names = { partner1: 'Sarah', partner2: 'Michael' },
  date = 'June 15, 2024',
  location = 'Bella Vista, New York'
}) => {
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
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2000')]">
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div 
          className={cn(
            "transition-all duration-1000 ease-out transform",
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <p 
            className="text-white/80 font-serif italic mb-4 tracking-wide"
            style={{ transitionDelay: '200ms' }}
          >
            We're getting married
          </p>
          
          <h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-6 font-light"
            style={{ transitionDelay: '400ms' }}
          >
            <span className="block mb-2">{names.partner1}</span>
            <span className="inline-block mx-2 md:mx-4 text-wedding-primary animate-pulse-soft">&</span>
            <span className="block">{names.partner2}</span>
          </h1>
          
          <div 
            className="flex flex-col items-center space-y-3 mb-10"
            style={{ transitionDelay: '600ms' }}
          >
            <p className="text-white/90 font-medium tracking-wider uppercase text-sm md:text-base">
              {date}
            </p>
            <div className="w-12 h-px bg-wedding-primary"></div>
            <p className="text-white/90 font-medium tracking-wider uppercase text-sm md:text-base">
              {location}
            </p>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            style={{ transitionDelay: '800ms' }}
          >
            <Link to="/details">
              <Button className="bg-wedding-primary hover:bg-wedding-primary/90 text-white transition-all px-6 py-5 rounded-md">
                View Details
              </Button>
            </Link>
            <Link to="/rsvp">
              <Button variant="outline" className="bg-transparent border border-white hover:bg-white/10 text-white transition-all px-6 py-5 rounded-md">
                RSVP Now
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
