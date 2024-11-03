import {useParams} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import {useSetLanguageFromURL} from "../hooks/useSetLanguageFromURL.ts";
import {useFetchProject} from "../hooks/useFetchProject.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useTranslation} from "react-i18next";

export default function ProjectPage() {
    const {t} = useTranslation();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

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

            {project.slides && project.slides.length > 0 ? (
                <div className={'w-1/2'}>
                    <Slider {...settings}>
                        {project.slides.map((slide, index) => (
                            <div key={index}>
                                <img src={project.slidesPath + slide} alt={title}/>
                            </div>
                        ))}
                    </Slider>
                </div>
            ) : (
                project.image && project.image.length > 0 && (
                    <div className={'w-1/2'}>
                        <img src={project.image} alt={title} className="w-full h-auto"/>
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
                    <button
                        className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition duration-200">
                        {t('button.presentationPPTX')}
                    </button>
                    <button
                        className="px-6 py-3 bg-amber-500 text-black rounded-md shadow hover:bg-amber-600 transition duration-200">
                        {t('button.presentationPDF')}
                    </button>
                    <button
                        className="px-6 py-3 bg-green-500 text-black rounded-md shadow hover:bg-green-600 transition duration-200">
                        {t('button.docs')}
                    </button>
                </div>
            </div>
        </div>
    );
}
