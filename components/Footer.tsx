import React, { useState } from 'react';
import { Instagram, Mail, Phone, MapPin, Anchor, MessageCircle } from 'lucide-react';
import { Language, LegalPage } from '../types';
import { content } from '../content';
import LegalModal from './LegalModal';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPage | null>(null);
  const t = content[lang];
  return (
    <>
      {/* Wave Decoration */}
      <div className="bg-sand-50">
        <svg
          className="w-full h-16 md:h-20 lg:h-24 block"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 C150,100 350,20 600,60 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
            className="fill-sea-950"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <footer className="gradient-primary-static text-white pt-12 pb-8 -mt-px">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12 mb-12">

            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center mb-4">
                <div className="bg-white/10 p-2 rounded-lg mr-3">
                  <Anchor className="h-6 w-6 text-white/60" />
                </div>
                <div>
                  <span className="font-serif text-xl font-bold block">ROBINSON</span>
                  <span className="text-white/60 text-xs uppercase tracking-widest">Boat Tours • Mali Lošinj</span>
                </div>
              </div>
              <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-md">
                {lang === 'de' ? 'Ihr Tor zu den versteckten Juwelen von Lošinj. Private, exklusive und unvergessliche Bootstouren.' :
                 lang === 'en' ? 'Your gateway to the hidden gems of Lošinj. Private, exclusive, and unforgettable boat tours.' :
                 'Vaš ulaz u skrivene dragulje Lošinja. Privatni, ekskluzivni i nezaboravni izleti brodom.'}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://instagram.com/robinsonboattours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white hover:border-white/20 hover:scale-110 transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://share.google/CnPT0uwgWbZjsh8pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-white hover:bg-gray-100 transition-all duration-300 hover:scale-105"
                  aria-label="See our Google Reviews"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="text-gray-700 text-sm font-semibold">Google</span>
                </a>
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g297514-d28119748-Reviews-Robinson_Boat_Tours-Mali_Losinj_Losinj_Island_Kvarner_Bay_Islands_Primorje_Gorsk.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 rounded-full bg-[#34E0A1] hover:bg-[#2BC88E] transition-all duration-300 hover:scale-105"
                  aria-label="See us on TripAdvisor"
                >
                  <img
                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logomark.svg"
                    alt="TripAdvisor"
                    className="w-5 h-5"
                  />
                  <span className="text-black text-sm font-semibold">TripAdvisor</span>
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
                {lang === 'de' ? 'Kontaktieren Sie uns' : lang === 'hr' ? 'Kontaktirajte nas' : 'Contact Us'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* WhatsApp Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2.5 rounded-lg text-white/60 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <span className="block text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">
                        WhatsApp
                      </span>
                      <a href="https://wa.me/385977119736" target="_blank" rel="noopener noreferrer" className="text-white font-medium hover:text-white/70 transition-colors">
                        +385 97 7119 736
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2.5 rounded-lg text-white/60 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <span className="block text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">Email</span>
                      <a href="mailto:animamaris.adriatic@gmail.com" className="text-white font-medium hover:text-white/70 transition-colors break-all">
                        animamaris.adriatic@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card - Full Width */}
                <div className="sm:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2.5 rounded-lg text-white/60 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <span className="block text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">
                        {lang === 'de' ? 'Standort' : lang === 'hr' ? 'Lokacija' : 'Location'}
                      </span>
                      <span className="text-white font-medium">Riva lošinjskih kapetana, Mali Lošinj, Croatia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="relative">
            {/* Gradient separator */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

            <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-white/50 text-xs">
              <p className="flex items-center">
                <Anchor className="w-4 h-4 mr-2 text-white/30" />
                &copy; {new Date().getFullYear()} Robinson Boat Tours. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <button
                  onClick={() => setActiveLegalPage('imprint')}
                  className="hover:text-white/70 transition-colors cursor-pointer"
                >
                  {t.footer.imprint}
                </button>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => setActiveLegalPage('privacy')}
                  className="hover:text-white/70 transition-colors cursor-pointer"
                >
                  {t.footer.privacy}
                </button>
                <span className="text-white/20">|</span>
                <button
                  onClick={() => setActiveLegalPage('terms')}
                  className="hover:text-white/70 transition-colors cursor-pointer"
                >
                  {t.footer.terms}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal Modal */}
      {activeLegalPage && (
        <LegalModal
          isOpen={!!activeLegalPage}
          onClose={() => setActiveLegalPage(null)}
          title={t.legal[activeLegalPage].title}
          content={t.legal[activeLegalPage].content}
        />
      )}
    </>
  );
};

export default Footer;
