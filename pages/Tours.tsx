import React from 'react';
import { Content } from '../types';
import { Clock, Users as UsersIcon, Check, Map, Ship, Anchor } from 'lucide-react';

interface ToursProps {
  content: Content['tours'];
  openContact: () => void;
}

const Tours: React.FC<ToursProps> = ({ content, openContact }) => {
  return (
    <section id="tours" className="py-24 bg-sea-50/50">
      {/* Header */}
      <div className="text-center px-4 mb-16">
        <span className="text-sea-500 font-bold tracking-widest uppercase text-sm mb-2 block">
          <Anchor className="w-4 h-4 inline-block mr-2" />
          {content.sectionLabel}
        </span>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-sea-950 mb-4">{content.title}</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">{content.subtitle}</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {content.items.map((tour) => (
            <div key={tour.id} className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-gray-100 flex flex-col xl:flex-row group transition-all hover:shadow-2xl hover:border-sea-100">
              {/* Image Side */}
              <div className="xl:w-2/5 relative h-64 md:h-72 xl:h-auto overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-5 py-2.5 rounded-full text-sm font-bold text-sea-900 shadow-md">
                   {tour.price}
                </div>
              </div>

              {/* Content Side */}
              <div className="xl:w-3/5 p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-4 text-sm font-medium text-gray-500 mb-6">
                    <span className="flex items-center bg-sea-50 px-4 py-1.5 rounded-full text-sea-700 border border-sea-100">
                        <Clock className="w-4 h-4 mr-2" /> {tour.duration}
                    </span>
                    <span className="flex items-center bg-sand-50 px-4 py-1.5 rounded-full text-sand-900 border border-sand-100">
                        <UsersIcon className="w-4 h-4 mr-2" /> Max 12 Pers.
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-3xl font-bold text-sea-950 mb-4">{tour.name}</h3>
                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">{tour.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h4 className="font-bold text-sea-900 mb-3 flex items-center text-sm uppercase tracking-wider"><Map className="w-4 h-4 mr-2 text-sea-500"/> Highlights</h4>
                        <ul className="space-y-2">
                            {tour.highlights.map((h, i) => (
                                <li key={i} className="text-gray-600 text-sm flex items-start">
                                    <span className="mr-2 text-sea-400 mt-1.5 w-1.5 h-1.5 rounded-full bg-sea-400 block"></span> {h}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-sea-900 mb-3 flex items-center text-sm uppercase tracking-wider"><Ship className="w-4 h-4 mr-2 text-sea-500"/> {content.info.includedTitle}</h4>
                        <ul className="space-y-2">
                            {tour.included.map((inc, i) => (
                                <li key={i} className="text-gray-600 text-sm flex items-start">
                                    <Check className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" /> {inc}
                                </li>
                            ))}
                        </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-8 border-t border-gray-100 flex justify-start">
                    <button
                        onClick={openContact}
                        className="w-full md:w-auto gradient-primary text-white font-semibold py-4 px-10 rounded-full transition-all shadow-lg hover:shadow-sea-900/20 text-center"
                    >
                        {content.info.bookButton}
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* General Info */}
        <div className="mt-20 bg-white rounded-[2rem] p-10 border border-gray-100 shadow-lg">
            <div className="grid md:grid-cols-3 gap-10">
                <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center mb-4 text-sand-800 font-bold font-serif text-xl">1</div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-sea-950">{content.info.bringTitle}</h3>
                    <p className="text-gray-500 text-sm">{content.info.bringText}</p>
                </div>
                <div className="flex flex-col items-center text-center border-l-0 md:border-l border-gray-100">
                    <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center mb-4 text-sand-800 font-bold font-serif text-xl">2</div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-sea-950">{content.info.foodTitle}</h3>
                    <p className="text-gray-500 text-sm">{content.info.foodText}</p>
                </div>
                <div className="flex flex-col items-center text-center border-l-0 md:border-l border-gray-100">
                    <div className="w-12 h-12 bg-sand-100 rounded-full flex items-center justify-center mb-4 text-sand-800 font-bold font-serif text-xl">3</div>
                    <h3 className="font-serif font-bold text-lg mb-2 text-sea-950">{content.info.kidsTitle}</h3>
                    <p className="text-gray-500 text-sm">{content.info.kidsText}</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Tours;