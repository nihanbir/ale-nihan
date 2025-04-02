
import React from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryImage {
  id: number;
  url: string;
  alt: string;
  category: string;
}

interface GalleryLightboxProps {
  selectedImage: number | null;
  images: GalleryImage[];
  onClose: () => void;
  onNavigate: (direction: 'next' | 'prev') => void;
}

const GalleryLightbox: React.FC<GalleryLightboxProps> = ({ 
  selectedImage, 
  images, 
  onClose, 
  onNavigate 
}) => {
  return (
    <Dialog open={selectedImage !== null} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full p-0 bg-transparent border-0 shadow-none">
        {selectedImage !== null && images[selectedImage] && (
          <div className="relative bg-black rounded-lg overflow-hidden">
            <div className="absolute top-4 right-4 z-20">
              <button 
                onClick={onClose}
                className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex justify-between items-center absolute inset-x-0 top-1/2 transform -translate-y-1/2 z-20 px-4">
              <button 
                onClick={() => onNavigate('prev')}
                className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => onNavigate('next')}
                className="bg-black/30 hover:bg-black/50 text-white rounded-full p-2 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            
            <div className="relative aspect-[16/9] md:aspect-auto md:h-[80vh]">
              <img
                src={images[selectedImage].url}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GalleryLightbox;
