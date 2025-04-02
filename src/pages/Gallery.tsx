
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';
import GalleryHeader from '@/components/gallery/GalleryHeader';
import GalleryFilters from '@/components/gallery/GalleryFilters';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import GalleryLightbox from '@/components/gallery/GalleryLightbox';
import GalleryComingSoon from '@/components/gallery/GalleryComingSoon';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string | null>(null);
  const { t } = useLanguage();
  
  // Mock gallery data - in a real app this would come from a database
  const galleryImages = [
    {
      id: 1,
      url: '',
      alt: t('gallery.engagement') + ' 1',
      category: 'engagement'
    },
    {
      id: 2,
      url: '',
      alt: t('gallery.engagement') + ' 2',
      category: 'engagement'
    },
    {
      id: 3,
      url: '',
      alt: t('gallery.engagement') + ' 3',
      category: 'engagement'
    },
    {
      id: 4,
      url: '',
      alt: t('gallery.preWedding') + ' 1',
      category: 'pre-wedding'
    },
    {
      id: 5,
      url: '',
      alt: t('gallery.preWedding') + ' 2',
      category: 'pre-wedding'
    },
    {
      id: 6,
      url: '',
      alt: t('gallery.preWedding') + ' 3',
      category: 'pre-wedding'
    },
  ];
  
  const filteredImages = filter 
    ? galleryImages.filter(img => img.category === filter)
    : galleryImages;
    
  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    const totalImages = filteredImages.length;
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % totalImages);
    } else {
      setSelectedImage((selectedImage - 1 + totalImages) % totalImages);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Header */}
        <GalleryHeader />
        
        {/* Gallery */}
        <section className="py-16 bg-white">
          <div className="container max-w-6xl mx-auto px-6">
            {/* Filters */}
            <GalleryFilters filter={filter} setFilter={setFilter} />
            
            {/* Gallery Grid */}
            <GalleryGrid images={filteredImages} onImageClick={openLightbox} />
          </div>
        </section>
        
        {/* Coming Soon */}
        <GalleryComingSoon />
      </main>
      
      <Footer />
      
      {/* Lightbox */}
      <GalleryLightbox 
        selectedImage={selectedImage}
        images={filteredImages}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
      />
    </div>
  );
};

export default Gallery;
