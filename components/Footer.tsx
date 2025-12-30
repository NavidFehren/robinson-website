import React from 'react';
import { Instagram, Mail, Phone, MapPin, Anchor } from 'lucide-react';
import { Language } from '../types';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
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
      <footer className="bg-gradient-to-b from-sea-950 to-sea-900 text-white pt-12 pb-8 -mt-px">
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
                  <span className="text-white/60 text-xs uppercase tracking-widest">Boat Tours</span>
                </div>
              </div>
              <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-md">
                {lang === 'de' ? 'Ihr Tor zu den versteckten Juwelen von Lošinj. Private, exklusive und unvergessliche Bootstouren.' :
                 lang === 'en' ? 'Your gateway to the hidden gems of Lošinj. Private, exclusive, and unforgettable boat tours.' :
                 'Vaš ulaz u skrivene dragulje Lošinja. Privatni, ekskluzivni i nezaboravni izleti brodom.'}
              </p>
              <div className="flex space-x-3">
                <a
                  href="https://instagram.com/robinsonboattours"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white hover:border-white/20 hover:scale-110 transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">
                {lang === 'de' ? 'Kontaktieren Sie uns' : lang === 'hr' ? 'Kontaktirajte nas' : 'Contact Us'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2.5 rounded-lg text-white/60 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <span className="block text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">
                        {lang === 'de' ? 'Telefon' : lang === 'hr' ? 'Telefon' : 'Phone'}
                      </span>
                      <a href="tel:+385911234567" className="text-white font-medium hover:text-white/70 transition-colors">
                        +385 91 123 4567
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2.5 rounded-lg text-white/60 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <span className="block text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">Email</span>
                      <a href="mailto:animamaris.adriatic@gmail.com" className="text-white font-medium hover:text-white/70 transition-colors">
                        animamaris.adriatic@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card - Full Width */}
                <div className="sm:col-span-2 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className="bg-white/10 p-2.5 rounded-lg text-white/60 group-hover:bg-white/20 group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="ml-4">
                      <span className="block text-white/60 text-xs uppercase tracking-wider font-semibold mb-1">
                        {lang === 'de' ? 'Standort' : lang === 'hr' ? 'Lokacija' : 'Location'}
                      </span>
                      <span className="text-white font-medium">Mali Lošinj Harbor, Croatia</span>
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
                <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
                <span className="text-white/20">|</span>
                <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
