import { create } from 'zustand/react';

type Language = 'en' | 'ua';

interface LanguageState {
    supportedLanguages: Language[];
    language: Language;
    defaultLanguage: Language;
    setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
    supportedLanguages: ['en', 'ua'],
    language: 'en',
    defaultLanguage: 'en',
    setLanguage: (lang) => set({ language: lang }),
}));
