import { BrowserRouter as Router, Route, Routes, Navigate, useParams } from "react-router-dom";
import Project from "./pages/project";
import Home from "./pages/home";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout";
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    {/* Redirect на мову за замовчуванням, якщо параметр lang не вказано */}
                    <Route path="/" element={<Navigate to="/en" replace />} />

                    {/* Підтримка мови на всіх сторінках через параметр lang */}
                    <Route path="/:lang" element={<LanguageWrapper />}>
                        <Route index element={<Home />} />
                        <Route path=":id" element={<Project />} />
                    </Route>
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

// LanguageWrapper для встановлення мови з URL
function LanguageWrapper() {
    const { lang } = useParams<{ lang: string }>();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (lang && i18n.language !== lang) {
            i18n.changeLanguage(lang);
        }
    }, [lang, i18n]);

    return <Layout />;
}

export default App;
