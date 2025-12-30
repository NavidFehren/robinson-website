import React from 'react';
import { Content } from '../types';
import { MapPin, Star } from 'lucide-react';

interface DestinationsProps {
  content: Content['destinations'];
}

const Destinations: React.FC<DestinationsProps> = ({ content }) => {
  return (
    <section id="destinations" className="py-24 bg-sand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sea-500 font-bold tracking-widest uppercase text-sm mb-2 block">
            <MapPin className="w-4 h-4 inline-block mr-2" />
            Destinations
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sea-950 mb-4">{content.title}</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        {/* Destinations Grid */}
        <div className="space-y-16">
          {content.items.map((destination, index) => (
            <div
              key={destination.id}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}
            >
              {/* Image */}
              <div className="lg:w-1/2 relative">
                <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-full h-full border-2 border-sea-200 rounded-2xl z-0 transform ${index % 2 === 0 ? 'translate-x-4' : '-translate-x-4'} translate-y-4`}></div>
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  className="relative z-10 rounded-2xl shadow-xl object-cover h-64 md:h-80 lg:h-96 w-full"
                />
                {destination.nickname && (
                  <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <span className="flex items-center text-sea-700 font-semibold text-sm">
                      <Star className="w-4 h-4 mr-1 text-yellow-500 fill-yellow-500" />
                      {destination.nickname}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="lg:w-1/2">
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-sea-950 mb-4">
                  {destination.name}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {destination.description}
                </p>

                {/* Highlights */}
                <div className="bg-white p-6 rounded-xl border border-sand-200 shadow-sm">
                  <h4 className="font-semibold text-sea-900 mb-4 uppercase tracking-wide text-sm">Highlights</h4>
                  <ul className="space-y-3">
                    {destination.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-sea-100 text-sea-600 flex items-center justify-center mr-3 flex-shrink-0 text-xs mt-0.5">
                          ✓
                        </div>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
