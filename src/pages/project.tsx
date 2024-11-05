import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import {useSetLanguageFromURL} from "../hooks/useSetLanguageFromURL.ts";
import {useFetchProject} from "../hooks/useFetchProject.ts";

import {useTranslation} from "react-i18next";
import MainProjectSlider from "../components/main-project-slider.tsx";

export default function ProjectPage() {
    const {t} = useTranslation();

    useSetLanguageFromURL();
    const {id} = useParams<{ id: string }>();
    const {language} = useLanguageStore();
    const project = useFetchProject(id, language);

    if (!project) return <div>Завантаження...</div>;

    const title = project.title?.[language] || "Назва недоступна";

    return (
        <div className="flex flex-col md:flex-row p-10 space-y-6 md:space-y-0 md:space-x-8 ">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title}/>
            </Helmet>

            {project.slidesInfo.slidesPhotos && project.slidesInfo.slidesPhotos.length > 1 ? (
                <div className={'w-1/2'}>
                    <MainProjectSlider project={project} />
                </div>
            ) : (
                project.titleImage && project.titleImage.length > 0 && (
                    <div className={'w-1/2'}>
                        <img src={project.titleImage} alt={title} className="w-full h-auto"/>
                    </div>
                )
            )}

            <div className="md:w-1/2 w-full">
                <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>

                <div className="space-y-3">
                    {project.details.map((detail) => (
                        <div
                            key={detail.key[language] || detail.key.default}
                            className="flex items-center bg-gray-100 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
                        >
                            <span className="text-lg font-semibold w-[25%] mr-2">
                                {detail.key[language] || detail.key.default}:
                            </span>
                            <span className="text-gray-700 w-2/3">
                                {detail.value[language] || detail.value.default}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex space-x-4 mt-6">
                    <a href={project.files.pptx.url} download={project.files.pptx.fileName}>
                        <button
                            className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-200">
                            {t('button.presentationPPTX')}
                        </button>
                    </a>

                    <a href={project.files.pdf.url} download={project.files.pdf.fileName}>
                        <button
                            className="px-6 py-3 bg-amber-500 text-black rounded-md shadow hover:bg-amber-600 transition duration-200">
                            {t('button.presentationPDF')}
                        </button>
                    </a>
                    <button
                        className="px-6 py-3 bg-green-500 text-black rounded-md shadow hover:bg-green-600 transition duration-200">
                        {t('button.docs')}
                    </button>
                </div>
            </div>
        </div>
    );
}
