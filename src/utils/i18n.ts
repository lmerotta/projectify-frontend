import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

export default i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    react: {
      wait: true,
    },
    lng: "en",
    backend: {
      loadPath: "/translations/{{lng}}.json",
    },
    supportedLngs: ["en"],
    fallbackLng: "en",
    load: "languageOnly",
    keySeparator: "__",
    interpolation: {
      escapeValue: false,
    },
  });
