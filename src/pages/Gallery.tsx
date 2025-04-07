
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
        url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/engagement.jpg',
        alt: t('gallery.engagement') + ' 1',
        category: 'engagement'
      },
      {
        id: 2,
        url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/finger.jpg',
        alt: t('gallery.engagement') + ' 2',
        category: 'engagement'
      },
      
      {
      id: 4,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/grad.jpg',
      alt: t('gallery.preWedding') + ' 1',
      category: 'pre-wedding'
    },
    {
      id: 5,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/lastxmas.jpg',
      alt: t('gallery.preWedding') + ' 2',
      category: 'pre-wedding'
    },
    {
      id: 6,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/ducks.jpg',
      alt: t('gallery.preWedding') + ' 3',
      category: 'pre-wedding'
    },
    {
      id: 7,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/frog.jpg',
      alt: t('gallery.preWedding') + ' 4',
      category: 'pre-wedding'
    },
    {
      id: 8,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/ale.jpg',
      alt: t('gallery.preWedding') + ' 5',
      category: 'pre-wedding'
    },
    {
      id: 9,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/anders.jpg',
      alt: t('gallery.preWedding') + ' 6',
      category: 'pre-wedding'
    },
    {
      id: 10,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/boat.jpg',
      alt: t('gallery.preWedding') + ' 7',
      category: 'pre-wedding'
    },
    {
      id: 11,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/erdem.jpg',
      alt: t('gallery.preWedding') + ' 8',
      category: 'pre-wedding'
    },
    {
      id: 12,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/börje.jpg',
      alt: t('gallery.preWedding') + ' 9',
      category: 'pre-wedding'
    },
    {
      id: 13,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/fam.jpg',
      alt: t('gallery.preWedding') + ' 10',
      category: 'pre-wedding'
    },
    {
      id: 14,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/firstxmastree.jpg',
      alt: t('gallery.preWedding') + ' 11',
      category: 'pre-wedding'
    },
    {
      id: 15,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/forgor.jpg',
      alt: t('gallery.preWedding') + ' 12',
      category: 'pre-wedding'
    },
    {
      id: 16,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/göteborg.jpg',
      alt: t('gallery.preWedding') + ' 13',
      category: 'pre-wedding'
    },
    {
      id: 17,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/jörn.jpg',
      alt: t('gallery.preWedding') + ' 14',
      category: 'pre-wedding'
    },
    {
      id: 18,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/pretty.jpg',
      alt: t('gallery.preWedding') + ' 15',
      category: 'pre-wedding'
    },
    {
      id: 19,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/puss.jpg',
      alt: t('gallery.preWedding') + ' 16',
      category: 'pre-wedding'
    },
    {
      id: 20,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/baba.jpg',
      alt: t('gallery.preWedding') + ' 17',
      category: 'pre-wedding'
    },
    {
      id: 21,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/sibel.jpg',
      alt: t('gallery.preWedding') + ' 18',
      category: 'pre-wedding'
    },
    {
      id: 22,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/slappy.jpg',
      alt: t('gallery.preWedding') + ' 19',
      category: 'pre-wedding'
    },
    {
      id: 23,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/snowhole.jpg',
      alt: t('gallery.preWedding') + ' 20',
      category: 'pre-wedding'
    },
    {
      id: 24,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/stu.jpg',
      alt: t('gallery.preWedding') + ' 21',
      category: 'pre-wedding'
    },
    {
      id: 25,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/stubday.jpg',
      alt: t('gallery.preWedding') + ' 22',
      category: 'pre-wedding'
    },
    {
      id: 26,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/xmas.jpg',
      alt: t('gallery.preWedding') + ' 21',
      category: 'pre-wedding'
    },
    {
      id: 27,
      url: 'https://raw.githubusercontent.com/nihanbir/ale-nihan/refs/heads/main/src/components/media/xmasbuffet.jpg',
      alt: t('gallery.preWedding') + ' 21',
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
