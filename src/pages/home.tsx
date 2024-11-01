import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProjectCardMini from "../components/project-card-mini.tsx";
import { useLanguageStore } from "../store/useLanguageStore.ts";
import { useFetchProjects } from "../hooks/useFetchProjects.ts";

export default function Home() {
    const { language } = useLanguageStore();
    const projects = useFetchProjects();

    return (
        <div>
            <Helmet>
                <title>My Projects - Home</title>
                <meta name="description" content="Explore my portfolio of projects." />
            </Helmet>
            <main className="p-4 grid grid-cols-2 gap-4">
                {projects.map((project) => (
                    <Link to={`/${language}/${project.id}`} key={project.id} className="border p-4 rounded shadow">
                        <ProjectCardMini
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            slug={project.slug}
                            image={project.image}
                        />
                    </Link>
                ))}
            </main>
        </div>
    );
}
