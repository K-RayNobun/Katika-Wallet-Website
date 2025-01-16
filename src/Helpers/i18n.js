import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import localEn from "./locales/en/translations.json";
import localFr from "./locales/fr/translations.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: localEn,
      },
      fr: {
        translation: localFr,
      },
    },
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;
