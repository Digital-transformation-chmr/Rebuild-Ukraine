import React from "react";
import {IProject} from "../types/IProject";
import SliderComponent from "./Slider";
import {useTranslation} from "react-i18next";

interface ProjectSliderProps {
    project: IProject;
}

const MainProjectSlider: React.FC<ProjectSliderProps> = ({project}) => {
    const {t} = useTranslation();


    const photos = project.slidesInfo.slidesPhotos.map(photo => `${project.slidesInfo.slidesPath}${photo}`);

    return (
        <SliderComponent photos={photos} altText={t('sliderText')}/>
    );
};


export default MainProjectSlider;