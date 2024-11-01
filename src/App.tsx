import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Project from "./pages/project.tsx";
import Home from "./pages/home.tsx";
import {HelmetProvider} from "react-helmet-async";
import Layout from "./components/layout.tsx";

function App() {
    return (
        <HelmetProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/project/:id" element={<Project/>}/>
                    </Routes>
                </Layout>
            </Router>
        </HelmetProvider>
    );
}

export default App;
