import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguageStore } from '../store/useLanguageStore';
import { useTranslation } from 'react-i18next';

export function useSetLanguageFromURL() {
    const location = useLocation();
    const { language, setLanguage } = useLanguageStore();
    const { i18n } = useTranslation();
    const currentLang = language || 'en';

    useEffect(() => {
        // Determine the language from the URL
        const pathLanguage = location.pathname.split('/')[1];

        // Update Zustand state if the URL language differs from the current language
        if (pathLanguage && pathLanguage !== currentLang) {
            setLanguage(pathLanguage as 'en' | 'ua');
            i18n.changeLanguage(pathLanguage); // Update i18n with the new language
        }
    }, [location.pathname, currentLang, setLanguage, i18n]);
}
