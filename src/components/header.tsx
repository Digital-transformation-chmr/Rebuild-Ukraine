import { Link, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export const Header = () => {
    const { t, i18n } = useTranslation();
    const location = useLocation();

    // Отримуємо поточну мову
    const currentLang = i18n.language || 'en';

    const changeLanguage = (lng: string) => {
        if (currentLang !== lng) {
            i18n.changeLanguage(lng);
            localStorage.setItem('language', lng); // Зберігаємо мову в localStorage
        }
    };

    // Формуємо новий шлях, змінюючи мову
    const newPath = location.pathname.replace(/^\/(en|ua)/, `/${currentLang === 'en' ? 'ua' : 'en'}`);

    return (
        <header className="border-b h-[100px] w-full flex items-center justify-between pl-20 pr-20 sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5">
            <div>{t('header.title')}</div>
            <div>
                <Link to={newPath}>
                    <button onClick={() => changeLanguage(currentLang === 'en' ? 'ua' : 'en')} className="mx-2">
                        {currentLang === 'en' ? 'UA' : 'EN'}
                    </button>
                </Link>
            </div>
        </header>
    );
};
