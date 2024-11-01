// i18n.ts
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        supportedLngs: ['en', 'ua'],
        detection: {
            order: ['path', 'navigator'],
            lookupFromPathIndex: 0,
        },
        resources: {
            en: {
                translation: {
                    header: {title: "Cherkasy City"},
                    footer: 'Footer English'
                },
            },
            ua: {
                translation: {
                    header: {title: "Черкаси"},
                    footer: 'Футер на англійській'

                },
            },
        },
    });

export default i18n;
