import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useBrowserBackButtonNavigation = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handlePopState = () => {
            // Виконуємо навігацію назад при спрацьовуванні popstate
            navigate(-1);
        };

        // Додаємо слухач на подію popstate
        window.addEventListener('popstate', handlePopState);

        // Прибираємо слухач при розмонтуванні компонента
        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [navigate]);
};
