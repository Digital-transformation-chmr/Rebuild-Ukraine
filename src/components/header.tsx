import {Link, useLocation} from "react-router-dom";
import {useLanguageStore} from '../store/useLanguageStore';
import {changeLanguage} from "i18next";
import {useState} from "react";

export const Header = () => {
    const {language} = useLanguageStore();
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    // Update the URL path based on the selected language
    const newPath = location.pathname.replace(/^\/(en|ua)/, `/${language === 'en' ? 'ua' : 'en'}`);

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const handleLanguageChange = (lang: 'en' | 'ua') => {
        if (lang !== language) {
            changeLanguage(lang);
            setDropdownOpen(false);
        }
    };

    return (
        <header
            className="border-b h-[100px] w-full flex items-center justify-between pl-20 pr-20 sticky top-0 z-10 bg-white py-5 shadow-lg shadow-black/5">
            {/*<h1 className={'text-[20px] font-light'}>{t('header.title')}</h1>*/}
            <Link to={`/${language}`}>
                <img src={'/Rebuild-logo.webp'} alt={'Rebuild-Ukraine | Cherkasy'} className={'h-[80px]'}/>
            </Link>
            <Link to={`/${language}`}>
                <img src={'/Cherkasy-logo.png'} alt={'Rebuild-Ukraine | Cherkasy'} className={'h-[80px]'}/>
            </Link>
            <div className="relative">
                <button
                    onClick={toggleDropdown}
                    className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all text-[16px]"
                >
                    <img
                        src={language === 'en' ? '/USA.png' : '/Ukraine.webp'}
                        alt={`${language.toUpperCase()} flag`}
                        className="h-5 w-5 mr-2"
                    />
                    {language.toUpperCase()}
                </button>
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg">
                        {language === 'en' ? (
                            <Link to={newPath}>
                                <button
                                    onClick={() => handleLanguageChange('ua')}
                                    className="flex items-center w-full px-4 py-2 text-left hover:bg-blue-600 hover:text-white"
                                >
                                    <img src={'/Ukraine.webp'} alt="UA flag" className="h-5 w-5 mr-2"/>
                                    UA
                                </button>
                            </Link>
                        ) : (
                            <Link to={newPath}>
                                <button
                                    onClick={() => handleLanguageChange('en')}
                                    className="flex items-center w-full px-4 py-2 text-left hover:bg-blue-600 hover:text-white"
                                >
                                    <img src={'/USA.png'} alt="EN flag" className="h-5 w-5 mr-2"/>
                                    EN
                                </button>
                            </Link>
                        )}
                    </div>
                )}
            </div>

        </header>
    );
};
