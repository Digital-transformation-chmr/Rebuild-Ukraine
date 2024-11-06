import {useEffect} from 'react';
import {useScrollStore} from "../store/useScrollStore.ts";
import {useWindowScroll} from "react-use";

export const useScrollRestoration = () => {
    const {scrollPosition, setScrollPosition} = useScrollStore();
    const {y} = useWindowScroll();

    useEffect(() => {
        let intervalId: number | undefined;

        const checkAndScroll = () => {
            const mainElement = document.querySelector('main');
            if (mainElement && mainElement.scrollHeight >= scrollPosition) {
                window.scrollTo(0, scrollPosition);
                clearInterval(intervalId);
            }
        };

        if (scrollPosition > 0) {
            intervalId = setInterval(checkAndScroll, 50);
        }

        return () => {
            setScrollPosition(y);
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [scrollPosition, setScrollPosition, y]);
};
