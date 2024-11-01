import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

interface Project {
    id: string;
    slug: string;
    title: { [key: string]: string }; // Об'єкт для назв
    description: { [key: string]: string }; // Об'єкт для описів
    image: string;
}

export default function ProjectPage() {
    const { id } = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);
    const lang = localStorage.getItem('language') || 'en'; // Зчитування мови з localStorage

    useEffect(() => {
        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((data) => {
                const foundProject = data.find((proj: Project) => proj.id === id);
                setProject(foundProject || null);
            });
    }, [id]);

    if (!project) return <div>Loading...</div>;

    return (
        <div>
            <Helmet>
                <title>{project.title[lang]}</title>
                <meta name="description" content={project.description[lang]} />
            </Helmet>
            <h1>{project.title[lang]}</h1>
            <p>{project.description[lang]}</p>
            <img src={project.image} alt={project.title[lang]} />
        </div>
    );
}
