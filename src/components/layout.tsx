import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from './header';
import Footer from './footer';
import {useSetLanguageFromURL} from "../hooks/useSetLanguageFromURL.ts";
import {useScrollRestoration} from "../hooks/useScrollRestoration.ts";
import {useBrowserBackButtonNavigation} from "../hooks/useMobileScrollRestoration.ts";

const Layout: React.FC = () => {
    useSetLanguageFromURL();
    useScrollRestoration();
    useBrowserBackButtonNavigation();

    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-grow p-[30px] xl:p-[20px] lg:p-5 md:p-4 sm:p-3">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;
