import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {Project} from "./project.tsx";
import {Helmet} from "react-helmet-async";


export default function Home() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div>
            <Helmet>
                <title>My Projects - Home</title>
                <meta name="description" content="Explore my portfolio of projects."/>
            </Helmet>
            <header className="p-4 bg-blue-500 text-white">
                <h1>My Projects</h1>
            </header>
            <main className="p-4 grid grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="border p-4 rounded shadow">
                        <h2>{project.title}</h2>
                    </Link>
                ))}
            </main>
            <main className="p-4 grid grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="border p-4 rounded shadow">
                        <h2>{project.title}</h2>
                    </Link>
                ))}
            </main>
            <main className="p-4 grid grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="border p-4 rounded shadow">
                        <h2>{project.title}</h2>
                    </Link>
                ))}
            </main>
            <main className="p-4 grid grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="border p-4 rounded shadow">
                        <h2>{project.title}</h2>
                    </Link>
                ))}
            </main>
            <main className="p-4 grid grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link to={`/project/${project.id}`} key={project.id} className="border p-4 rounded shadow">
                        <h2>{project.title}</h2>
                    </Link>
                ))}
            </main>

        </div>
    );
}
