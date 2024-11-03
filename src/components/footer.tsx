// import { useTranslation } from 'react-i18next';

import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold">{t('footer.name')}</h2>
                    <p>{t('footer.street')}</p>
                    <p>{t('footer.city')}, {t('footer.country')}, {t('footer.zipCode')}</p>
                </div>

                <div className="text-center">
                    <p>{t('footer.tel')}: <a className={'underline'} href="tel:+380472331980">+38 (047)233-19-80</a></p>
                    <p>{t('footer.mob')}: <a className={'underline'} href="tel:+380636103147">+38 (063)610-31-47</a></p>
                    <p>{t('footer.email')}: <a href="mailto:depec@ukr.net" className="text-blue-400">depec@ukr.net</a></p>
                    <p>{t('footer.website')}: <a href="http://chmr.gov.ua" className="text-blue-400">chmr.gov.ua</a></p>
                </div>

                <div className="flex justify-center md:justify-end items-center gap-4">
                    <img src={'/Rebuild-logo.webp'} alt={'Rebuild-Ukraine | Cherkasy'} className="h-[80px]"/>
                    <img src={'/Cherkasy-logo.png'} alt={'Rebuild-Ukraine | Cherkasy'} className="h-[80px]"/>
                </div>
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
                <p>{t('footer.createdBy')}</p>
            </div>
        </footer>
    );
};

export default Footer;
