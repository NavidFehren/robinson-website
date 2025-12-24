import { useState, useEffect, useCallback } from 'react';
import { Language } from '../types';
import {
  getInitialLanguage,
  saveLanguage,
  updateUrlLanguage,
  updateHtmlLang,
  getLanguageFromUrl,
} from '../utils/language';

export function useLanguage() {
  // Initialize with a function to compute initial state only once
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  // Handle URL parameter changes (e.g., browser back/forward)
  useEffect(() => {
    const handlePopState = () => {
      const urlLang = getLanguageFromUrl();
      if (urlLang && urlLang !== lang) {
        setLangState(urlLang);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [lang]);

  // Update HTML lang attribute whenever language changes
  useEffect(() => {
    updateHtmlLang(lang);
  }, [lang]);

  // Enhanced setLang that also persists and updates URL
  const setLang = useCallback((newLang: Language) => {
    setLangState(newLang);
    saveLanguage(newLang);
    updateUrlLanguage(newLang);
  }, []);

  return { lang, setLang };
}
