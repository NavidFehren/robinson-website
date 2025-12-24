import { Language } from '../types';

const SUPPORTED_LANGUAGES: Language[] = ['de', 'en', 'hr', 'it'];
const STORAGE_KEY = 'robinson-lang';
const DEFAULT_LANGUAGE: Language = 'en';

/**
 * Maps browser language codes to supported languages.
 * Handles both full codes (de-DE) and base codes (de).
 */
const BROWSER_LANGUAGE_MAP: Record<string, Language> = {
  'de': 'de',
  'de-de': 'de',
  'de-at': 'de',
  'de-ch': 'de',
  'en': 'en',
  'en-us': 'en',
  'en-gb': 'en',
  'en-au': 'en',
  'hr': 'hr',
  'hr-hr': 'hr',
  'it': 'it',
  'it-it': 'it',
  'it-ch': 'it',
};

/**
 * Validates if a string is a supported language.
 */
export function isValidLanguage(lang: string | null): lang is Language {
  return lang !== null && SUPPORTED_LANGUAGES.includes(lang as Language);
}

/**
 * Gets language from URL parameter (?lang=xx).
 */
export function getLanguageFromUrl(): Language | null {
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang')?.toLowerCase();
  return isValidLanguage(langParam) ? langParam : null;
}

/**
 * Gets language from localStorage.
 */
export function getStoredLanguage(): Language | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return isValidLanguage(stored) ? stored : null;
}

/**
 * Detects language from browser settings.
 * Checks navigator.language first, then navigator.languages array.
 */
export function detectBrowserLanguage(): Language | null {
  // Try primary language first
  const primary = navigator.language?.toLowerCase();
  if (primary) {
    if (BROWSER_LANGUAGE_MAP[primary]) {
      return BROWSER_LANGUAGE_MAP[primary];
    }
    // Try base language (e.g., 'de' from 'de-DE')
    const base = primary.split('-')[0];
    if (BROWSER_LANGUAGE_MAP[base]) {
      return BROWSER_LANGUAGE_MAP[base];
    }
  }

  // Check languages array for any match
  const languages = navigator.languages || [];
  for (const lang of languages) {
    const normalized = lang.toLowerCase();
    if (BROWSER_LANGUAGE_MAP[normalized]) {
      return BROWSER_LANGUAGE_MAP[normalized];
    }
    const base = normalized.split('-')[0];
    if (BROWSER_LANGUAGE_MAP[base]) {
      return BROWSER_LANGUAGE_MAP[base];
    }
  }

  return null;
}

/**
 * Determines initial language using priority: URL > localStorage > browser > default.
 */
export function getInitialLanguage(): Language {
  return (
    getLanguageFromUrl() ??
    getStoredLanguage() ??
    detectBrowserLanguage() ??
    DEFAULT_LANGUAGE
  );
}

/**
 * Persists language preference to localStorage.
 */
export function saveLanguage(lang: Language): void {
  localStorage.setItem(STORAGE_KEY, lang);
}

/**
 * Updates the URL parameter without page reload.
 * Only updates if a lang param already exists.
 */
export function updateUrlLanguage(lang: Language): void {
  const url = new URL(window.location.href);
  if (url.searchParams.has('lang')) {
    url.searchParams.set('lang', lang);
    window.history.replaceState({}, '', url.toString());
  }
}

/**
 * Updates the HTML lang attribute for accessibility and SEO.
 */
export function updateHtmlLang(lang: Language): void {
  document.documentElement.lang = lang;
}
