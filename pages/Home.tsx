import React from 'react';
import { Content } from '../types';
import { ArrowRight } from 'lucide-react';

interface HomeProps {
  content: Content['home'];
  scrollToTours: () => void;
}

const Home: React.FC<HomeProps> = ({ content, scrollToTours }) => {
  return (
    <div id="home">
      {/* Full Screen Hero Section */}
      <section className="relative h-screen flex items-end text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/hero.jpg"
            alt="Mali Losinj Sea"
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          {/* Gradient Overlay - stronger on bottom-left for text readability */}
          <div className="absolute inset-0 bg-gradient-to-tr from-sea-950/90 via-sea-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 text-left px-6 sm:px-10 lg:px-16 pb-28 max-w-3xl">
          <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium tracking-widest uppercase">
            Mali Lošinj • Croatia
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            {content.hero.slogan}
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light text-sea-50/90 max-w-xl leading-relaxed">
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
              const labels = ['Gäste max', 'Flexibel', 'Delfine', 'Buchten'];
              return (
                <div key={idx} className="text-center group">
                  <div className="text-5xl md:text-6xl font-bold text-sea-600 mb-2 group-hover:scale-110 transition-transform">
                    {stats[idx]}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-sea-800 font-semibold mb-3">
                    {labels[idx]}
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
      <section className="py-24 pb-32 bg-gradient-to-b from-sea-950 via-sea-900 to-sea-700 text-white relative overflow-hidden">
         {/* Content */}
         <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h3 className="text-sea-300 font-bold tracking-widest uppercase mb-4 text-sm">{content.didYouKnow.title}</h3>
            <p className="font-serif text-3xl md:text-5xl leading-tight">
                {content.didYouKnow.text}
            </p>
         </div>

         {/* Animated Waves */}
         <div className="absolute bottom-0 left-0 w-full overflow-hidden" style={{ height: '100px' }}>
            {/* Wave 1 - Back (slowest) */}
            <svg className="wave-animation-slow absolute bottom-0" style={{ width: '200%', height: '100px' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.1)"/>
            </svg>
            {/* Wave 2 - Middle */}
            <svg className="wave-animation absolute bottom-0" style={{ width: '200%', height: '80px' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M0,80 C200,20 400,100 600,60 C800,20 1000,100 1200,80 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.15)"/>
            </svg>
            {/* Wave 3 - Front (fastest) */}
            <svg className="wave-animation-fast absolute bottom-0" style={{ width: '200%', height: '60px' }} viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M0,100 C300,60 600,100 900,60 C1050,40 1150,80 1200,100 L1200,120 L0,120 Z" fill="rgba(255,255,255,0.2)"/>
            </svg>
         </div>
      </section>
    </div>
  );
};

export default Home;