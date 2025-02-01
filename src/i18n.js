import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from "i18next-http-backend"; // *** added this ***

i18n
  .use(HttpBackend) // *** added this ***
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: 'en',
    supportedLngs: ["en", "ar"], // Fix 'es' -> 'ar'
    ns: ['translation'],
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
        loadPath: `https://mahmoudsameeh.github.io/material-kit-react/locales/{{lng}}/translation.json`,
    }
  });

export default i18n;