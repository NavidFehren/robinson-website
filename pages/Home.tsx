import React, { useState, useEffect } from 'react';
import { Content } from '../types';
import { ArrowRight, Users, SlidersHorizontal, Fish, MapPin, Sparkles } from 'lucide-react';

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
            {/* Review Links */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {/* Google Badge - White with multi-color G */}
              <a
                href="https://share.google/CnPT0uwgWbZjsh8pt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="text-gray-700 text-sm font-semibold">{content.testimonial.googleReviewsLink}</span>
              </a>

              {/* TripAdvisor Badge - Green */}
              <a
                href="https://www.tripadvisor.com/Attraction_Review-g297514-d28119748-Reviews-Robinson_Boat_Tours-Mali_Losinj_Losinj_Island_Kvarner_Bay_Islands_Primorje_Gorsk.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#34E0A1] hover:bg-[#2BC88E] transition-all duration-300 hover:scale-105"
              >
                <img
                  src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logomark.svg"
                  alt="TripAdvisor"
                  className="w-5 h-5"
                />
                <span className="text-black text-sm font-semibold">{content.testimonial.tripAdvisorLink}</span>
              </a>
            </div>
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
          <div className="text-center mb-12">
            <span className="text-sea-500 font-bold tracking-widest uppercase text-sm mb-2 block">
              <Sparkles className="w-4 h-4 inline-block mr-2" />
              {content.onBoardExperience.sectionLabel}
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-sea-950">{content.onBoardExperience.title}</h2>
          </div>

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
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Food Image 2 (col 4, row 1) */}
            <div className="md:col-start-4 md:row-start-1 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/food/food_2.webp"
                loading="lazy"
                alt="Boat deck dining"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Food Image 3 (col 3, row 2) */}
            <div className="md:col-start-3 md:row-start-2 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/food/food_3.webp"
                loading="lazy"
                alt="Culinary experience"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Ambiente (col 4, row 2) */}
            <div className="md:col-start-4 md:row-start-2 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/ambiente.webp"
                loading="lazy"
                alt="Relaxing atmosphere"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Row 3 - Boat Experience Images */}

            {/* Boat from top (col 1, row 3) */}
            <div className="md:col-start-1 md:row-start-3 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/boat_from_top.webp"
                loading="lazy"
                alt="Boat from above"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Fresh catch (col 2, row 3) */}
            <div className="md:col-start-2 md:row-start-3 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/fish.JPG"
                alt="Fresh catch"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Front of boat (col 3, row 3) */}
            <div className="md:col-start-3 md:row-start-3 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/front_of_boat.webp"
                loading="lazy"
                alt="Boat front view"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Side of boat (col 4, row 3) */}
            <div className="md:col-start-4 md:row-start-3 rounded-xl overflow-hidden shadow-lg group">
              <img
                src="/side_of_boat.webp"
                loading="lazy"
                alt="Boat side view"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;