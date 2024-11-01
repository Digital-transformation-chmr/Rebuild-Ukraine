import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useLanguageStore } from '../store/useLanguageStore';
import {changeLanguage} from "i18next";

export const Header = () => {
    const { t } = useTranslation();
    const { language } = useLanguageStore();

    const newPath = location.pathname.replace(/^\/(en|ua)/, `/${language === 'en' ? 'ua' : 'en'}`);

    return (
        <header className="border-b h-[100px] w-full flex items-center justify-between pl-20 pr-20 sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5">
            <div>{t('header.title')}</div>
            <div>
                <Link to={newPath}>
                    <button onClick={() => changeLanguage(language === 'en' ? 'ua' : 'en')} className="mx-2">
                        {language === 'en' ? 'UA' : 'EN'}
                    </button>
                </Link>
            </div>
        </header>
    );
};
