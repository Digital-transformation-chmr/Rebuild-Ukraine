import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Project from "./pages/project";
import Home from "./pages/home";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./components/layout";
import './i18n';

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Navigate to="/en" replace />} />
                    <Route path="/:lang" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path=":id" element={<Project />} />
                    </Route>
                </Routes>
            </Router>
        </HelmetProvider>
    );
}

export default App;
