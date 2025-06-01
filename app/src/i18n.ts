import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';

const savedLanguage = typeof window !== 'undefined'
  ? sessionStorage.getItem('i18nextLng')
  : null;

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es }
  },
  lng: savedLanguage || 'es', // idioma predeterminado
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
