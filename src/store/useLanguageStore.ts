
import {create} from "zustand/react";

interface LanguageState {
    language: 'en' | 'ua';
    setLanguage: (lang: 'en' | 'ua') => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
    language: 'en',
    setLanguage: (lang) => set({language: lang}),
}));
