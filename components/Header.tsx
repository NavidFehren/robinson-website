import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Anchor, Phone, ChevronDown } from 'lucide-react';
import { Language, Content } from '../types';

const FLAGS: Record<Language, { emoji: string; label: string }> = {
  de: { emoji: '🇩🇪', label: 'Deutsch' },
  en: { emoji: '🇬🇧', label: 'English' },
  hr: { emoji: '🇭🇷', label: 'Hrvatski' },
  it: { emoji: '🇮🇹', label: 'Italiano' },
};

const LANGUAGE_ORDER: Language[] = ['de', 'en', 'hr', 'it'];

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  content: Content['nav'];
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const langDesktopRef = useRef<HTMLDivElement>(null);
  const langMobileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      const isOutsideDesktop = langDesktopRef.current && !langDesktopRef.current.contains(target);
      const isOutsideMobile = langMobileRef.current && !langMobileRef.current.contains(target);
      if (isOutsideDesktop && isOutsideMobile) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNav = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navClass = (isMobile = false) => 
    isMobile 
    ? "block w-full text-left px-3 py-3 text-base font-medium text-gray-700 hover:text-sea-700 hover:bg-sea-50 rounded-md"
    : `cursor-pointer transition-colors font-medium ${scrolled ? 'text-gray-700 hover:text-sea-600' : 'text-white/90 hover:text-white'}`;

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <div className={`p-2 rounded-full mr-2 ${scrolled ? 'bg-sea-50 text-sea-700' : 'bg-white/10 text-white backdrop-blur-sm'}`}>
                <Anchor className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className={`font-serif text-xl font-bold tracking-tight leading-none ${scrolled ? 'text-sea-900' : 'text-white'}`}>ROBINSON</span>
              <span className={`text-[10px] font-medium tracking-[0.2em] uppercase ${scrolled ? 'text-sea-600' : 'text-sea-100'}`}>Boat Tours • Lošinj</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button onClick={() => handleNav('home')} className={navClass()}>{content.home}</button>
            <button onClick={() => handleNav('tours')} className={navClass()}>{content.tours}</button>
            <button onClick={() => handleNav('about')} className={navClass()}>{content.about}</button>
            <button onClick={() => handleNav('gallery')} className={navClass()}>{content.gallery}</button>
            <button onClick={() => handleNav('contact')} className={navClass()}>{content.contact}</button>
            
            {/* Lang Switcher */}
            <div className="relative" ref={langDesktopRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-all ${
                  scrolled
                    ? 'hover:bg-gray-100'
                    : 'hover:bg-white/10'
                }`}
                aria-expanded={isLangOpen}
                aria-haspopup="listbox"
              >
                <span className="text-xl">{FLAGS[lang].emoji}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isLangOpen ? 'rotate-180' : ''} ${scrolled ? 'text-gray-500' : 'text-white/70'}`} />
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-1 min-w-[140px] z-50">
                  {LANGUAGE_ORDER.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setIsLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-sea-50 transition-colors ${
                        lang === l ? 'bg-sea-50 text-sea-700' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-xl">{FLAGS[l].emoji}</span>
                      <span className="text-sm font-medium">{FLAGS[l].label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('contact')}
              className={`px-6 py-2.5 rounded-full font-bold transition-all shadow-lg flex items-center transform hover:scale-105 ${
                scrolled
                  ? 'bg-sea-600 hover:bg-sea-700 text-white'
                  : 'bg-white text-sea-700 hover:bg-sea-50'
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              {content.bookNow}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <div className="relative" ref={langMobileRef}>
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={`flex items-center gap-1 px-2 py-1 rounded-lg transition-all ${
                  scrolled ? 'hover:bg-gray-100' : 'hover:bg-white/10'
                }`}
              >
                <span className="text-lg">{FLAGS[lang].emoji}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''} ${scrolled ? 'text-gray-500' : 'text-white/70'}`} />
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-xl border border-gray-100 py-1 min-w-[140px] z-50">
                  {LANGUAGE_ORDER.map((l) => (
                    <button
                      key={l}
                      onClick={() => { setLang(l); setIsLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-sea-50 transition-colors ${
                        lang === l ? 'bg-sea-50 text-sea-700' : 'text-gray-700'
                      }`}
                    >
                      <span className="text-lg">{FLAGS[l].emoji}</span>
                      <span className="text-sm font-medium">{FLAGS[l].label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${scrolled ? 'text-gray-600' : 'text-white'} hover:opacity-80`}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <button onClick={() => handleNav('home')} className={navClass(true)}>{content.home}</button>
            <button onClick={() => handleNav('tours')} className={navClass(true)}>{content.tours}</button>
            <button onClick={() => handleNav('about')} className={navClass(true)}>{content.about}</button>
            <button onClick={() => handleNav('gallery')} className={navClass(true)}>{content.gallery}</button>
            <button onClick={() => handleNav('contact')} className={navClass(true)}>{content.contact}</button>
            <div className="pt-4">
               <button onClick={() => handleNav('contact')} className="w-full bg-sea-600 text-white py-3 rounded-lg font-bold shadow-md">{content.bookNow}</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;