import {IProject} from "../types/IProject";
import {FC, useCallback} from "react";
import MainProjectPhotoSlider from "./main-project-photo-slider";
import {useNavigate} from "react-router-dom";
import {useLanguageStore} from "../store/useLanguageStore";
import MainProjectInfoSlider from "./main-project-info-slider";
import {getRandomButtonColors} from "../const/colors";
import {useTranslation} from "react-i18next";

interface Props {
    project: IProject;
}

const MainProjectCard: FC<Props> = ({project}) => {
    const navigate = useNavigate();
    const {language} = useLanguageStore();
    const {t} = useTranslation();

    const handleCardClick = useCallback(() => {
        navigate(`/${language}/${project.id}`);
    }, [navigate, language, project.id]);

    return (
        <div
            className="p-8 border shadow-2xl relative rounded-xl mb-14 flex flex-1 flex-row justify-between items-center cursor-pointer lg:mb-7 lg:p-4 md:flex-col md:p-5 md:mb-7 sm:flex-col sm:p-5 sm:mb-4"
            onClick={handleCardClick}
        >
            <div className="w-[48%] xl:w-[47%] lg:w-[53%] md:w-full sm:w-full cursor-default"
                 onClick={(e) => e.stopPropagation()}>
                <MainProjectPhotoSlider project={project}/>
            </div>
            <div className="w-[48%] xl:w-[50%] lg:w-[45%] md:w-full sm:w-full h-full cursor-default"
                 onClick={(e) => e.stopPropagation()}>
                <h1 className="text-2xl font-bold mb-5 text-center xl:text-lg lg:text-base sm:text-sm 3xl:text-lg md:mt-5 md:text-lg sm:mt-2 sm:mb-0">
                    {project.title[language]}
                </h1>
                {project.dopInfo && project.dopInfo.length > 0 && (
                    <MainProjectInfoSlider projectDetails={project.dopInfo}/>
                )}
                <button
                    onClick={handleCardClick}
                    className={`w-full ${getRandomButtonColors()} mt-5 p-5 rounded-xl cursor-pointer 3xl:text-lg sm:text-sm tilt-on-hover`}
                >
                    {t('projectInfoButton')}
                </button>
            </div>
        </div>
    );
};

export default MainProjectCard;
