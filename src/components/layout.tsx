import React, { PropsWithChildren } from 'react';
import { Header } from "./header.tsx";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="flex-grow min-h-full">
                {children}
            </div>
            <div className="h-[150px] bg-orange-400">
                Footer
            </div>
        </div>
    );
};

export default Layout;
