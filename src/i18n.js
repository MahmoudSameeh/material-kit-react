import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';  // Import the backend plugin

i18n
  .use(HttpBackend)  // Use the backend plugin
  .use(initReactI18next)  // Use the React integration
  .init({
    fallbackLng: ['en', 'en-GB'],  // Fallback languages
    debug: true,
    interpolation: {
      escapeValue: false, // React already protects from XSS
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
