import React, { useState, useEffect } from 'react';
import { Content } from '../types';
import { ArrowRight, Users, SlidersHorizontal, Fish, MapPin } from 'lucide-react';

interface HomeProps {
  content: Content['home'];
  scrollToTours: () => void;
}

const Home: React.FC<HomeProps> = ({ content, scrollToTours }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home">
      {/* Full Screen Hero Section */}
      <section className="relative h-screen flex items-end text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.webp"
            alt="Mali Lošinj Sea"
            className="w-full h-full object-cover"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          {/* Gradient Overlay - stronger on bottom-left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sea-950/90 via-sea-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-left px-6 sm:px-10 lg:px-16 pb-12 sm:pb-28 max-w-3xl">
          <h1
            className="font-serif font-bold mb-4 sm:mb-6 leading-tight drop-shadow-2xl"
            style={{ fontSize: 'clamp(1.75rem, 6vw, 4rem)' }}
          >
            {content.hero.slogan}
          </h1>
          <p
            className="mb-6 sm:mb-8 font-light text-sea-50/90 max-w-xl leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2.5vh, 1.25rem)' }}
          >
            {content.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToTours}
              className="bg-white text-sea-900 px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] flex items-center justify-center hover:bg-sea-50"
            >
              {content.hero.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

      </section>

      {/* USP Section - Numbers First Design */}
      <section className="py-24 bg-sand-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Title */}
          <h2 className="font-serif text-4xl md:text-5xl text-sea-950 font-bold mb-16 text-center">
            {content.usp.title}
          </h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
            {content.usp.items.map((item, idx) => {
              const stats = ['12', '100%', '200+', '50+'];
              const icons = [Users, SlidersHorizontal, Fish, MapPin];
              const Icon = icons[idx];
              return (
                <div key={idx} className="text-center group">
                  <Icon className="w-8 h-8 text-sea-500 mx-auto mb-3" />
                  <div className="text-5xl md:text-6xl font-bold text-sea-600 mb-2 group-hover:scale-110 transition-transform">
                    {stats[idx]}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-sea-800 font-semibold mb-3">
                    {content.usp.statLabels[idx]}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Testimonial */}
          <div className="text-center mt-20 pt-12 border-t border-gray-200">
            <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
            <p className="font-serif italic text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              "{content.testimonial.quote}"
            </p>
            <p className="text-gray-400 mt-4 font-medium">— {content.testimonial.author}</p>
          </div>
        </div>
      </section>

      {/* Did You Know / Fact Section */}
      <section className="py-20 min-h-[400px] md:min-h-[500px] flex items-center text-white relative overflow-hidden">
         {/* Video Background */}
         <video
           autoPlay
           loop
           muted
           playsInline
           className="absolute inset-0 w-full h-full object-cover"
         >
           <source src="/dolphins.mp4" type="video/mp4" />
         </video>

         {/* Dark Overlay for text readability */}
         <div className="absolute inset-0 bg-sea-950/40" />

         {/* Content */}
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h3 className="text-sea-300 font-bold tracking-widest uppercase mb-4 text-sm">{content.didYouKnow.title}</h3>
            <p className="font-serif text-3xl md:text-5xl leading-tight">
                {content.didYouKnow.text}
            </p>
         </div>
      </section>

      {/* On Board Experience Section */}
      <section className="py-20 bg-sand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-sea-950 text-center mb-4">{content.onBoardExperience.title}</h2>
          <div className="w-20 h-1.5 bg-sea-500 mx-auto rounded-full mb-12"></div>

          {/* Bento Grid - Explicit positioning */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[180px] md:auto-rows-[200px]">

            {/* Drone Video - Large hero tile (col 1-2, row 1-2) */}
            <div className="col-span-2 row-span-2 md:col-start-1 md:row-start-1 rounded-2xl overflow-hidden shadow-xl group">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/drone_comp.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Food Image 1 (col 3, row 1) */}
            <div className="md:col-start-3 md:row-start-1 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/food/food_1.JPG"
                alt="Fresh appetizers"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Food Image 2 (col 4, row 1) */}
            <div className="md:col-start-4 md:row-start-1 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/food/food_2.webp"
                loading="lazy"
                alt="Boat deck dining"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Food Image 3 (col 3, row 2) */}
            <div className="md:col-start-3 md:row-start-2 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/food/food_3.webp"
                loading="lazy"
                alt="Culinary experience"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Ambiente (col 4, row 2) */}
            <div className="md:col-start-4 md:row-start-2 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/ambiente.webp"
                loading="lazy"
                alt="Relaxing atmosphere"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Row 3 - Boat Experience Images */}

            {/* Boat from top (col 1, row 3) */}
            <div className="md:col-start-1 md:row-start-3 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/boat_from_top.webp"
                loading="lazy"
                alt="Boat from above"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Fresh catch (col 2, row 3) */}
            <div className="md:col-start-2 md:row-start-3 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/fish.JPG"
                alt="Fresh catch"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Front of boat (col 3, row 3) */}
            <div className="md:col-start-3 md:row-start-3 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/front_of_boat.webp"
                loading="lazy"
                alt="Boat front view"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Side of boat (col 4, row 3) */}
            <div className="md:col-start-4 md:row-start-3 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/side_of_boat.webp"
                loading="lazy"
                alt="Boat side view"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;