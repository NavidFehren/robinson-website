import React from 'react';
import { Content } from '../types';

interface AboutProps {
  content: Content['about'];
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-start">
                <div className="md:w-1/2">
                    <div className="relative mb-12">
                        <div className="absolute top-4 left-4 w-full h-full border-2 border-sea-100 rounded-2xl z-0 transform translate-x-4 translate-y-4"></div>
                        <img
                            src="/capitan.webp"
                            loading="lazy"
                            alt="Captain"
                            className="relative z-10 rounded-2xl shadow-xl object-cover h-72 md:h-80 lg:h-96 xl:h-[500px] w-full"
                        />
                    </div>

                    <div className="bg-sea-50 p-6 rounded-2xl border border-sea-100">
                        <h3 className="font-serif text-xl font-bold text-sea-900 mb-3">{content.nameTitle}</h3>
                        <p className="text-gray-600 leading-relaxed">{content.nameText}</p>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <span className="text-sea-500 font-bold tracking-widest uppercase text-sm mb-2 block">{content.title}</span>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-sea-950 mb-8">{content.storyTitle}</h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">{content.storyText}</p>
                    
                    <div className="bg-sand-50 p-8 rounded-2xl border border-sand-100 mb-8">
                        <h3 className="font-serif text-xl font-bold text-sea-900 mb-3">{content.captainTitle}</h3>
                        <p className="text-gray-600 italic mb-6">"{content.captainText}"</p>
                        <div className="flex flex-wrap gap-3">
                            {content.captainBio.map((item, i) => (
                                <span key={i} className="px-3 py-1 bg-white rounded-md text-xs font-semibold text-sea-800 border border-sand-200 uppercase tracking-wide">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div>
                         <h3 className="font-serif text-xl font-bold text-sea-900 mb-4">{content.philosophyTitle}</h3>
                         <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {content.philosophyItems.map((item, i) => (
                                <li key={i} className="flex items-center text-gray-700">
                                    <div className="w-6 h-6 rounded-full bg-sea-100 text-sea-600 flex items-center justify-center mr-3 flex-shrink-0 text-xs">✓</div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

       </div>
    </section>
  );
};

export default About;