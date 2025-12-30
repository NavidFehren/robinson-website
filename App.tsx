import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Destinations from './pages/Destinations';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import { content } from './content';
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
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <Header 
        lang={lang} 
        setLang={setLang} 
        content={currentContent.nav}
      />
      
      <main className="flex-grow">
        <Home content={currentContent.home} scrollToTours={() => scrollToSection('tours')} />
        <Tours content={currentContent.tours} openContact={() => scrollToSection('contact')} />
        <Destinations content={currentContent.destinations} />
        <About content={currentContent.about} />
        <Gallery content={currentContent.gallery} />
        <Contact content={currentContent.contact} tours={currentContent.tours.items} />
        <FAQ
          title={currentContent.contact.faqTitle}
          faqs={currentContent.contact.faqs}
          ctaSubtitle={currentContent.contact.faqCtaSubtitle}
          ctaButton={currentContent.contact.faqCtaButton}
          onScrollToContact={() => scrollToSection('contact')}
        />
      </main>

      <Footer lang={lang} />
    </div>
  );
}

export default App;