
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from '@/components/shared/AnimatedSection';
import { useLazyImage } from '@/utils/animations';

interface GalleryImageProps {
  src: string;
  alt: string;
  onClick: () => void;
  index: number;
}

const GalleryImage: React.FC<GalleryImageProps> = ({ src, alt, onClick, index }) => {
  const { isLoaded, currentSrc } = useLazyImage(src);
  
  return (
    <AnimatedSection 
      animation="fade-in" 
      delay={100 * index}
      className="aspect-square overflow-hidden rounded-md cursor-pointer hover:shadow-lg transition-all duration-300 group"
    >
      <div className="relative h-full" onClick={onClick}>
        <img
          src={currentSrc}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
            isLoaded ? "blur-0" : "blur-md"
          )}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>
    </AnimatedSection>
  );
};

export default GalleryImage;
