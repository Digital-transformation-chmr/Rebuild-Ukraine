import {IProject} from "../types/IProject";
import {FC} from "react";
import MainProjectSlider from "./main-project-slider.tsx";
import {useNavigate} from "react-router-dom";
import {useLanguageStore} from "../store/useLanguageStore.ts";
import MainProjectInfobords from "./main-project-infobords.tsx";
import {getRandomButtonStyle} from "../const/colors.ts";
import {useTranslation} from "react-i18next";

interface Props {
    projectData: IProject;
}

const MainProjectCard: FC<Props> = ({projectData}) => {
    const navigate = useNavigate();
    const {language} = useLanguageStore();
    const {t} = useTranslation()

    const handleCardClick = () => {
        navigate(`/${language}/${projectData.id}`);
    };

    return (
        <div
            className="p-8 border shadow-2xl relative rounded-xl mb-[60px] flex flex-1 flex-row justify-between items-center cursor-pointer lg:mb-7 lg:p-4 md:flex-col md:p-5 md:mb-[30px] sm:flex-col  sm:p-5 sm:mb-4  "
            onClick={handleCardClick}>
            <div
                className="w-[48%] xl:w-[47%] lg:w-[53%] md:w-full sm:w-full cursor-default"
                onClick={(e) => e.stopPropagation()}
            >
                <MainProjectSlider project={projectData}/>
            </div>
            <div onClick={(e) => e.stopPropagation()}
                 className={'w-[48%] xl:w-[50%] lg:w-[45%] md:w-full  sm:w-full h-[inherit] cursor-default'}>
                <h1 className={'text-[22px] font-bold mb-5 text-center xl:text-[18px] lg:text-[16px] sm:text-sm 3xl:text-[18px] md:mt-5 md:text-[17px] sm:mt-2 sm:mb-0'}>{projectData.title[language]}</h1>
                {projectData.dopInfo && projectData.dopInfo.length > 0 && (
                    <MainProjectInfobords projectDetails={projectData.dopInfo}/>
                )}
                <button
                    className={`w-full ${getRandomButtonStyle()} mt-5 p-5 rounded-xl cursor-pointer 3xl:text-[18px] sm:text-sm tilt-on-hover`}
                    onClick={handleCardClick}>{t('projectInfoButton')}
                </button>
            </div>


        </div>
    );
};

export default MainProjectCard;
