import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import {useFetchProjects} from "../hooks/useFetchProjects.ts";
import MainProjectCard from "../components/main-project-card.tsx";

export default function Home() {
    const {language} = useLanguageStore();
    const projects = useFetchProjects();

    return (
        <div>
            <Helmet>
                <title>Rebuild-Ukraine | Cherkasy</title>
                <meta name="description" content="Explore my portfolio of projects."/>
            </Helmet>
            {projects?.[0] && <MainProjectCard projectData={projects[0]}/>}
            <main className="grid grid-cols-2 gap-[60px]">
                {projects.slice(1).map((project) => (
                    <Link to={`/${language}/${project.id}`} key={project.id}>
                        <div
                            className="group flex justify-center items-center flex-col border shadow-2xl relative rounded-xl overflow-hidden">
                            <img src={project.titleImage} alt={project.title[language]}
                                 className="w-full h-full object-cover"/>
                            <div
                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex justify-center items-center transition-all duration-500 ease-in-out">
        <span
            className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            {project.title[language]}
        </span>
                            </div>
                        </div>

                    </Link>
                ))}
            </main>

        </div>
    );
}
