import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../store/useLanguageStore';
import { useTranslation } from 'react-i18next';

export function useSetLanguageFromURL() {
    const location = useLocation();
    const navigate = useNavigate();
    const { language, setLanguage, defaultLanguage, supportedLanguages } = useLanguageStore();
    const { i18n } = useTranslation();

    useEffect(() => {
        const segments = location.pathname.split('/').filter(Boolean);

        const pathLanguage = segments[0];

        if (!supportedLanguages.includes(pathLanguage as typeof supportedLanguages[number])) {
            setLanguage(defaultLanguage);
            i18n.changeLanguage(defaultLanguage);

            const newPath = `/${defaultLanguage}/${segments.slice(1).join('/')}`;
            navigate(newPath, { replace: true });
        } else if (pathLanguage !== language) {
            setLanguage(pathLanguage as typeof supportedLanguages[number]);
            i18n.changeLanguage(pathLanguage);
        }
    }, [location.pathname, language, setLanguage, i18n, navigate, defaultLanguage, supportedLanguages]);
}
