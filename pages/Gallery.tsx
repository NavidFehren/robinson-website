import React, { useState } from 'react';
import { Content } from '../types';
import { X, ZoomIn } from 'lucide-react';

interface GalleryProps {
  content: Content['gallery'];
}

const Gallery: React.FC<GalleryProps> = ({ content }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "https://picsum.photos/seed/boat1/800/600", cat: "Boat", width: "col-span-1" },
    { src: "https://picsum.photos/seed/bay1/800/800", cat: "Nature", width: "col-span-1 md:col-span-1 row-span-2" }, 
    { src: "https://picsum.photos/seed/dolphin1/800/600", cat: "Wildlife", width: "col-span-1" },
    { src: "https://picsum.photos/seed/guest1/800/600", cat: "Guests", width: "col-span-1" },
    { src: "https://picsum.photos/seed/sunset2/800/500", cat: "Sunset", width: "col-span-1 md:col-span-2" },
    { src: "https://picsum.photos/seed/underwater/800/600", cat: "Snorkel", width: "col-span-1" },
    { src: "https://picsum.photos/seed/ilovik/800/600", cat: "Destinations", width: "col-span-1" },
    { src: "https://picsum.photos/seed/boat2/800/1000", cat: "Boat", width: "col-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="text-center px-4 mb-12">
        <h2 className="font-serif text-4xl font-bold text-sea-950 mb-2">{content.title}</h2>
        <p className="text-gray-500 max-w-xl mx-auto">{content.subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-sm ${img.width}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img 
                src={img.src} 
                alt={img.cat} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-sea-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <ZoomIn className="text-white w-8 h-8 opacity-80" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-medium bg-black/30 px-3 py-1 rounded-full text-xs backdrop-blur-md border border-white/20">
                    {img.cat}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
        >
            <button className="absolute top-6 right-6 text-white hover:text-gray-300 p-2">
                <X className="w-8 h-8" />
            </button>
            <img 
                src={selectedImage} 
                alt="Full screen" 
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}
    </section>
  );
};

export default Gallery;