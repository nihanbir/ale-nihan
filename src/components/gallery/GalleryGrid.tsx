
import React from 'react';
import AnimatedSection from '@/components/shared/AnimatedSection';
import GalleryImage from './GalleryImage';
import { useLanguage } from '@/contexts/LanguageContext';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  const { t } = useLanguage();
  
  return (
    <>
      {images.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <GalleryImage
              key={image.id}
              src={image.url}
              alt={image.alt}
              onClick={() => onImageClick(index)}
              index={index}
            />
          ))}
        </div>
      ) : (
        <AnimatedSection className="text-center py-12" animation="fade-in">
          <p className="text-wedding-muted">{t('gallery.noPhotos')}</p>
        </AnimatedSection>
      )}
    </>
  );
};

export default GalleryGrid;
