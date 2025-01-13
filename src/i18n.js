import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

// Initialize i18n
i18n
  .use(HttpBackend) // Load translations using HTTP
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Bind with React
  .init({
    fallbackLng: 'en', // Default language
    lng: 'en', // Initial language
    debug: process.env.NODE_ENV === 'development', // Debug in development only
    interpolation: {
      escapeValue: false, // React handles escaping
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Correct path to translations
    },
  });

export default i18n;

