import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, Anchor } from 'lucide-react';
import { Page, Language } from '../types';

interface FooterProps {
    setPage: (p: Page) => void;
    lang: Language;
}

const Footer: React.FC<FooterProps> = ({ setPage, lang }) => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-sea-950 text-white pt-16 pb-8 border-t border-sea-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
                 <Anchor className="h-6 w-6 mr-2 text-sea-500" />
                 <span className="font-serif text-xl font-bold">ROBINSON</span>
            </div>
            <p className="text-sea-300 text-sm mb-6 leading-relaxed">
              {lang === 'de' ? 'Ihr Tor zu den versteckten Juwelen von Lošinj. Private, exklusive und unvergessliche Bootstouren.' : 
               lang === 'en' ? 'Your gateway to the hidden gems of Lošinj. Private, exclusive, and unforgettable boat tours.' : 
               'Vaš ulaz u skrivene dragulje Lošinja. Privatni, ekskluzivni i nezaboravni izleti brodom.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-sea-900 flex items-center justify-center text-white hover:bg-sea-500 transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-sea-900 flex items-center justify-center text-white hover:bg-sea-500 transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">{lang === 'de' ? 'Entdecken' : lang === 'hr' ? 'Istraži' : 'Explore'}</h4>
            <ul className="space-y-3 text-sea-300 text-sm">
              <li><button onClick={() => scrollTo('home')} className="hover:text-white hover:translate-x-1 transition-all">Home</button></li>
              <li><button onClick={() => scrollTo('tours')} className="hover:text-white hover:translate-x-1 transition-all">{lang === 'hr' ? 'Izleti' : 'Tours'}</button></li>
              <li><button onClick={() => scrollTo('gallery')} className="hover:text-white hover:translate-x-1 transition-all">{lang === 'de' ? 'Galerie' : lang === 'hr' ? 'Galerija' : 'Gallery'}</button></li>
              <li><button onClick={() => scrollTo('about')} className="hover:text-white hover:translate-x-1 transition-all">{lang === 'de' ? 'Über uns' : lang === 'hr' ? 'O nama' : 'About Us'}</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">{lang === 'de' ? 'Kontaktieren Sie uns' : lang === 'hr' ? 'Kontaktirajte nas' : 'Contact Us'}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sea-300 text-sm">
                <div className="flex items-start">
                    <Phone className="w-5 h-5 mr-3 text-sea-500 mt-0.5" /> 
                    <div>
                        <span className="block text-white font-medium mb-1">Phone</span>
                        +385 91 123 4567
                    </div>
                </div>
                <div className="flex items-start">
                    <Mail className="w-5 h-5 mr-3 text-sea-500 mt-0.5" /> 
                    <div>
                        <span className="block text-white font-medium mb-1">Email</span>
                        info@robinson-losinj.com
                    </div>
                </div>
                 <div className="flex items-start sm:col-span-2">
                    <MapPin className="w-5 h-5 mr-3 text-sea-500 mt-0.5" /> 
                    <div>
                        <span className="block text-white font-medium mb-1">Location</span>
                        Mali Lošinj Harbor, Croatia
                    </div>
                </div>
            </div>
          </div>

        </div>
        <div className="border-t border-sea-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sea-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Robinson Boat Tours. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-white">Privacy Policy</a>
             <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;