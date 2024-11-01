import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import {useSetLanguageFromURL} from "../hooks/useSetLanguageFromURL.ts";
import {useFetchProject} from "../hooks/useFetchProject.ts";

export default function ProjectPage() {
    useSetLanguageFromURL();
    const {id} = useParams<{ id: string }>();
    const {language} = useLanguageStore();
    const project = useFetchProject(id, language);

    if (!project) return <div>Loading...</div>;

    return (
        <div>
            <Helmet>
                <title>{project.title[language]}</title>
                <meta name="description" content={project.description[language]}/>
            </Helmet>
            <h1>{project.title[language]}</h1>
            <p>{project.description[language]}</p>
            <img src={project.image} alt={project.title[language]}/>
        </div>
    );
}
