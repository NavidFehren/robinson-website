import React, { useState } from 'react';
import { Content } from '../types';
import { X, Instagram, Camera } from 'lucide-react';

interface GalleryProps {
  content: Content['gallery'];
}

const Gallery: React.FC<GalleryProps> = ({ content }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/gallery/tour-1.webp" },
    { src: "/gallery/tour-7.webp" },
    { src: "/gallery/tour-3.webp" },
    { src: "/gallery/tour-4.webp" },
    { src: "/gallery/tour-5.webp" },
    { src: "/gallery/tour-6.webp" },
  ];

  // Split images for left and right sides
  const leftImages = images.slice(0, 3);
  const rightImages = images.slice(3, 6);
  // Mobile shows first 4 images
  const mobileTopImages = images.slice(0, 2);
  const mobileBottomImages = images.slice(2, 4);

  const ImageCard = ({ src, className = "" }: { src: string; className?: string }) => (
    <div
      className={`relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg ${className}`}
      onClick={() => setSelectedImage(src)}
    >
      <img
        src={src}
        alt="Tour impression"
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
  );

  return (
    <section id="gallery" className="py-24 bg-sand-50">
      {/* Desktop Layout */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[1fr_minmax(280px,320px)_1fr] gap-6 lg:gap-8 xl:gap-10 items-center min-h-[500px]">
          {/* Left Column - Staggered Images */}
          <div className="flex gap-4">
            {/* Left stack */}
            <div className="flex flex-col gap-4 pt-12">
              <ImageCard src={leftImages[0].src} className="w-36 h-28 lg:w-40 lg:h-32 xl:w-48 xl:h-40" />
              <ImageCard src={leftImages[1].src} className="w-36 h-44 lg:w-40 lg:h-48 xl:w-48 xl:h-56" />
            </div>
            {/* Right stack (offset) */}
            <div className="flex flex-col gap-4 pb-8">
              <ImageCard src={leftImages[2].src} className="w-32 h-48 lg:w-36 lg:h-56 xl:w-44 xl:h-64" />
            </div>
          </div>

          {/* Center Column - Instagram CTA */}
          <div className="flex flex-col items-center justify-center text-center py-12">
            <span className="text-sea-500 font-bold tracking-widest uppercase text-sm mb-2 block">
              <Camera className="w-4 h-4 inline-block mr-2" />
              {content.instagram.sectionLabel}
            </span>
            <h3 className="font-serif text-3xl lg:text-4xl text-sea-950 mb-8 leading-tight">
              {content.instagram.heading}
            </h3>
            <a
              href={content.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-b from-sea-950 to-sea-900 text-white px-8 py-3 rounded-full hover:from-sea-900 hover:to-sea-800 transition-colors font-medium"
            >
              <Instagram className="w-5 h-5" />
              {content.instagram.buttonText}
            </a>
          </div>

          {/* Right Column - Staggered Images */}
          <div className="flex gap-4 justify-end">
            {/* Left stack (offset) */}
            <div className="flex flex-col gap-4 pt-8">
              <ImageCard src={rightImages[0].src} className="w-32 h-48 lg:w-36 lg:h-56 xl:w-44 xl:h-64" />
            </div>
            {/* Right stack */}
            <div className="flex flex-col gap-4 pb-12">
              <ImageCard src={rightImages[1].src} className="w-36 h-36 lg:w-40 lg:h-40 xl:w-48 xl:h-48" />
              <ImageCard src={rightImages[2].src} className="w-36 h-40 lg:w-40 lg:h-44 xl:w-48 xl:h-52" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden px-4">
        {/* Top Images */}
        <div className="grid grid-cols-2 gap-4 mb-12">
          {mobileTopImages.map((img, idx) => (
            <ImageCard key={idx} src={img.src} className="h-40" />
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center py-8">
          <span className="text-sea-500 font-bold tracking-widest uppercase text-sm mb-2 block">
            <Camera className="w-4 h-4 inline-block mr-2" />
            {content.instagram.sectionLabel}
          </span>
          <h3 className="font-serif text-2xl text-sea-950 mb-6 leading-tight">
            {content.instagram.heading}
          </h3>
          <a
            href={content.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-b from-sea-950 to-sea-900 text-white px-6 py-3 rounded-full hover:from-sea-900 hover:to-sea-800 transition-colors font-medium"
          >
            <Instagram className="w-5 h-5" />
            {content.instagram.buttonText}
          </a>
        </div>

        {/* Bottom Images */}
        <div className="grid grid-cols-2 gap-4 mt-12">
          {mobileBottomImages.map((img, idx) => (
            <ImageCard key={idx} src={img.src} className="h-40" />
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
