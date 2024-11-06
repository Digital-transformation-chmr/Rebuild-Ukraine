import {create} from "zustand/react";

interface ScrollStore {
    scrollPosition: number;
    setScrollPosition: (position: number) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
    scrollPosition: 0,
    setScrollPosition: (position: number) => set({scrollPosition: position}),
}));