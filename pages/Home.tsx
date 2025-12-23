import React from 'react';
import { Content } from '../types';
import { Users, Anchor, Heart, Fish, ArrowRight, Star } from 'lucide-react';

interface HomeProps {
  content: Content['home'];
  scrollToTours: () => void;
}

const Home: React.FC<HomeProps> = ({ content, scrollToTours }) => {
  return (
    <div id="home">
      {/* Full Screen Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/losinjboat/1920/1080" 
            alt="Mali Losinj Sea" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          {/* Gradient Overlay for luxury feel */}
          <div className="absolute inset-0 bg-gradient-to-b from-sea-950/70 via-black/20 to-sea-950/80"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-20">
          <div className="mb-6 inline-flex items-center px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-sm font-medium tracking-widest uppercase">
            Mali Lošinj • Croatia
          </div>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight drop-shadow-2xl">
            {content.hero.slogan}
          </h1>
          <p className="text-xl md:text-2xl mb-12 font-light text-sea-50/90 max-w-3xl mx-auto leading-relaxed">
            {content.hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={scrollToTours}
              className="bg-white text-sea-900 px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_40px_-10px_rgba(255,255,255,0.5)] flex items-center justify-center hover:bg-sea-50"
            >
              {content.hero.ctaPrimary}
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
                <div className="w-1 h-3 bg-white rounded-full"></div>
            </div>
        </div>
      </section>

      {/* USP Section - "Experience the Ocean" Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Image Side */}
            <div className="lg:w-1/2 relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-sand-100 rounded-full opacity-50 blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-sea-100 rounded-full opacity-50 blur-3xl"></div>
                <img 
                    src="https://picsum.photos/seed/boatinterior/800/1000" 
                    alt="Luxury Boat Experience" 
                    className="relative z-10 rounded-[2rem] shadow-2xl w-full object-cover h-[600px]"
                />
                {/* Float Card */}
                <div className="absolute bottom-10 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-gray-100">
                    <div className="flex items-center gap-4 mb-3">
                        <div className="bg-sea-500 text-white p-2 rounded-full">
                            <Star className="w-5 h-5 fill-current" />
                        </div>
                        <div>
                            <p className="font-bold text-gray-900 text-sm">Top Rated</p>
                            <div className="flex text-yellow-400 text-xs">★★★★★</div>
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm italic">"{content.testimonial.quote}"</p>
                </div>
            </div>

            {/* Content Side */}
            <div className="lg:w-1/2">
                <h2 className="font-serif text-4xl md:text-5xl text-sea-950 font-bold mb-8 leading-tight">
                    {content.usp.title}
                </h2>
                
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                    {content.usp.items.map((item, idx) => {
                        const icons = [Users, Anchor, Heart, Fish];
                        const Icon = icons[idx] || Anchor;
                        return (
                            <div key={idx} className="flex flex-col items-start group">
                                <div className="bg-sea-50 group-hover:bg-sea-100 transition-colors p-4 rounded-2xl mb-4 text-sea-600">
                                    <Icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>

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