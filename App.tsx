import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { content } from './content';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { lang, setLang } = useLanguage();
  
  const currentContent = content[lang];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      <Header 
        lang={lang} 
        setLang={setLang} 
        content={currentContent.nav}
      />
      
      <main className="flex-grow">
        <Home content={currentContent.home} scrollToTours={() => scrollToSection('tours')} />
        <Tours content={currentContent.tours} openContact={() => scrollToSection('contact')} />
        <About content={currentContent.about} />
        <Gallery content={currentContent.gallery} />
        <Contact content={currentContent.contact} />
        <FAQ
          title={currentContent.contact.faqTitle}
          faqs={currentContent.contact.faqs}
          ctaSubtitle={currentContent.contact.faqCtaSubtitle}
          ctaButton={currentContent.contact.faqCtaButton}
          onScrollToContact={() => scrollToSection('contact')}
        />
      </main>

      <Footer lang={lang} />

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button 
            onClick={() => scrollToSection('contact')}
            className="bg-sea-600 text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform animate-pulse-slow"
        >
            <MessageSquare className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App;