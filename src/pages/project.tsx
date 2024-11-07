import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import {useSetLanguageFromURL} from "../hooks/useSetLanguageFromURL.ts";
import {useFetchProject} from "../hooks/useFetchProject.ts";

import {useTranslation} from "react-i18next";
import MainProjectSlider from "../components/main-project-slider.tsx";
import {getRandomButtonStyle} from "../const/colors.ts";

export default function ProjectPage() {
    const {t} = useTranslation();

    useSetLanguageFromURL();
    const {id} = useParams<{ id: string }>();
    const {language} = useLanguageStore();
    const {project, isLoading} = useFetchProject(id, language);

    if (isLoading || project == null) return <div>Loading....</div>;

    const title = project.title?.[language] || "Назва недоступна";

    return (
        <div
            className="flex flex-row gap-[50px] p-10 xl:flex-col xl:p-0 xl:gap-[25px] lg:flex-col lg:p-0 lg:gap-2 md:flex-col md:p-0 md:gap-2 sm:flex-col sm:p-3 sm:gap-2 ">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={title}/>
            </Helmet>

            {project.slidesInfo.slidesPhotos && project.slidesInfo.slidesPhotos.length > 1 ? (
                <div className={'w-1/2 xl:w-full lg:w-full md:w-full sm:w-full '}>
                    <MainProjectSlider project={project}/>
                </div>
            ) : (
                project.titleImage && project.titleImage.length > 0 && (
                    <div className={'w-1/2 xl:w-full lg:w-full md:w-full sm:w-full'}>
                        <img src={project.titleImage} alt={title} className="w-full h-auto"/>
                    </div>
                )
            )}

            <div className="w-1/2 xl:w-full lg:w-full md:w-full sm:w-full">
                <h1 className="text-2xl font-bold mb-4 text-center sm:text-[15px]">{title}</h1>
                <div className="space-y-3">
                    {project.details.map((detail) => (
                        <div
                            key={detail.key[language] || detail.key.default}
                            className="flex items-center bg-gray-100 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-200 sm:flex-col"
                        >
                            <span className="text-lg font-semibold w-[25%] mr-2 sm:w-full sm:text-center">
                                {detail.key[language] || detail.key.default}:
                            </span>
                            <span className="text-gray-700 w-2/3 sm:w-full sm:text-center">
                                {detail.value[language] || detail.value.default}
                            </span>
                        </div>
                    ))}
                </div>

                <div
                    className="w-full flex space-x-4 mt-6 xl:justify-around lg:justify-around md:justify-around sm:flex-col gap-4 sm:space-x-0 flex-wrap">
                    <a href={project.files.pptx.url} download={project.files.pptx.fileName}>
                        <button
                            className={`px-6 py-3 ${getRandomButtonStyle()} text-black rounded-md shadow transition duration-200 w-full`}>
                            {t('button.presentationPPTX')}
                        </button>
                    </a>

                    <a href={project.files.pdf.url} download={project.files.pdf.fileName}>
                        <button
                            className={`px-6 py-3 ${getRandomButtonStyle()} text-black rounded-md shadow transition duration-200 w-full`}>
                            {t('button.presentationPDF')}
                        </button>
                    </a>

                    {project.files.docx && project.files.docx.map((file, index) => (
                        <a key={index} href={file.url} download={file.fileName}>
                            <button
                                className={`px-6 py-3 ${getRandomButtonStyle()} text-black rounded-md shadow transition duration-200 w-full`}>
                                {t('button.docs')}
                            </button>
                        </a>
                    ))}
                </div>

            </div>
        </div>
    );
}
