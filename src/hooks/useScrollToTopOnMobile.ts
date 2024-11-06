import {useEffect} from 'react';

export const useScrollToTopOnMobile = () => {
    useEffect(() => {
        const isMobile = window.innerWidth <= 1024; // Ширина экрана для мобильных устройств

        if (isMobile) {
            window.scrollTo(0, 0); // Скроллим вверх при монтировании
        }
    }, []);
};
