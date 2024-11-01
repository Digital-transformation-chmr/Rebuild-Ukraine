import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

interface Project {
    id: string;
    slug: string;
    title: { [key: string]: string }; // Об'єкт для назв
    description: { [key: string]: string }; // Об'єкт для описів
    image: string;
}

export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);
    const lang = localStorage.getItem('language') || 'en'; // Зчитування мови з localStorage

    useEffect(() => {
        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div>
            <Helmet>
                <title>My Projects - Home</title>
                <meta name="description" content="Explore my portfolio of projects." />
            </Helmet>
            <header className="p-4 bg-blue-500 text-white">
                <h1>{lang === 'en' ? 'My Projects' : 'Мої Проекти'}</h1>
            </header>
            <main className="p-4 grid grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link to={`/${lang}/${project.id}`} key={project.id} className="border p-4 rounded shadow">
                        <h2>{project.title[lang]}</h2> {/* Вибір назви залежно від мови */}
                    </Link>
                ))}
            </main>
        </div>
    );
}
