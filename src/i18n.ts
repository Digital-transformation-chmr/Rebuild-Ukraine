// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en', // Мова за замовчуванням
        supportedLngs: ['en', 'ua'],
        detection: {
            order: ['path', 'navigator'], // Визначення мови через шлях у URL
            lookupFromPathIndex: 0, // Зчитування першого параметра в URL як мови
        },
        resources: {
            en: {
                translation: {
                    header: { title: "Cherkasy City" },
                    footer: 'Footer English'
                    // інші переклади
                },
            },
            ua: {
                translation: {
                    header: { title: "Черкаси" },
                    footer: 'Футер на англійській'
                    // інші переклади
                },
            },
        },
    });

export default i18n;
