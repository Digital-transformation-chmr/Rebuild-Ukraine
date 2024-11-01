import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Helmet} from "react-helmet-async";

export interface Project {
    "id": string,
    "slug": string,
    "title": string,
    "description": string,
    "image": string
}

export default function Project() {
    const {id} = useParams<{ id: string }>();
    const [project, setProject] = useState<Project | null>(null);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((data) => {
                const foundProject = data.find((proj: Project) => proj.id === id);
                setProject(foundProject);
            });
    }, [id]);

    if (!project) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <Helmet>
                <title>My Projects - Home</title>
                <meta name="description" content="Explore my portfolio of projects."/>
            </Helmet>
            <div className="p-4">
                <h1>{project.title}</h1>
                <a href={project.image} download className="text-blue-500 underline">
                    Завантажити документ
                </a>
            </div>
        </>

    );
}
