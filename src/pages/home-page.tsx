import {Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import {useFetchAllProjects} from "../hooks/useFetchAllProjects.ts";
import MainProjectCard from "../components/main-project-card.tsx";

export default function HomePage() {
    const {language} = useLanguageStore();
    const {projects} = useFetchAllProjects();

    return (
        <div>
            <Helmet>
                <title>Rebuild-Ukraine | Cherkasy</title>
                <meta name="description" content="Explore my portfolio of projects."/>
            </Helmet>

            {projects?.[0] && <MainProjectCard project={projects[0]}/>}
            <main
                className="grid grid-cols-2 sm:grid-cols-1 gap-[60px] xl:gap-[40px] lg:gap-[28px] md:gap-[20px]  sm:gap-4">
                {projects.slice(1).map((project) => (
                    <Link to={`/${language}/${project.id}`} key={project.id}>
                        <div
                            className="group flex justify-center items-center flex-col border shadow-2xl relative rounded-xl overflow-hidden">
                            <img src={project.titleImage} alt={project.title[language]}
                                 className="w-full h-full object-cover"/>
                            <div
                                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 flex justify-center items-center transition-all duration-500 ease-in-out">
                                <span
                                    className="p-4 text-white text-lg text-center font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out xl:text-[18px] lg:text-[15px] md:text-[14px] sm:text-[14px]">
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
