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
                    projectInfoButton:'Please familiarize yourself with the project details',
                    sliderText: 'slide image',
                    header: {title: "Rebuild Ukraine | Cherkasy"},
                    footer: {
                        name: 'Cherkasy City Council',
                        street: '36 Baidy Vyshnevetskoho Street',
                        city: 'Cherkasy',
                        country: 'Ukraine',
                        zipCode: '18000',
                        tel: 'Tel.',
                        mob: 'Mob.',
                        email: 'Email',
                        website: 'Website',
                        createdBy: 'Created with the help of Municipal Enterprise "Institute for City Development and Digital Transformation" of the Cherkasy City Council'
                    },
                    button: {
                        presentationPPTX: 'Download presentation (.pptx)',
                        presentationPDF: 'Download presentation (.pdf)',
                        docs: 'Project and cost documentation (.docx)'
                    }
                },
            },
            ua: {
                translation: {
                    projectInfoButton:'Ознайомитись з проєктом',
                    sliderText: 'Зображення в слайдері',
                    header: {title: "Rebuild Ukraine | Черкаси"},
                    footer: {
                        name: 'Черкаська міська рада',
                        street: 'вул. Байди Вишневецького, 36',
                        city: 'Черкаси',
                        country: 'Україна',
                        zipCode: '18000',
                        tel: 'Тел.',
                        mob: 'Моб.',
                        email: 'E-mail',
                        website: 'Веб-сайт',
                        createdBy: 'Створено за допомогою Комунального підприємства "Інститут розвитку міста та цифрової трансформації" Черкаської міської ради.'
                    },
                    button: {
                        presentationPPTX: 'Завантажити презентацію (.pptx)',
                        presentationPDF: 'Завантажити презентацію (.pdf)',
                        docs: 'Проєктно-кошторисна документація (.docx)'
                    }
                },
            },
        },
    });

export default i18n;
