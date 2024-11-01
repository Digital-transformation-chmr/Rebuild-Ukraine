import React, { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Header } from './header';
import Footer from './footer';

const Layout: React.FC = () => {
    const { lang } = useParams<{ lang: string }>();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (lang && i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet /> {/* Рендеритиме дочірній компонент, який є `children` для `Layout` */}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
