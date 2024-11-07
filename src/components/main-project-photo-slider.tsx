import React from "react";
import {IProject} from "../types/IProject";
import MainSlider from "./main-slider.tsx";
import {useTranslation} from "react-i18next";

interface ProjectSliderProps {
    project: IProject;
    isLoading?: boolean;
}

const MainProjectPhotoSlider: React.FC<ProjectSliderProps> = ({project}) => {
    const {t} = useTranslation();

    const photos = project.slidesInfo.slidesPhotos.map(photo => `${project.slidesInfo.slidesPath}${photo}`);

    return (
        <MainSlider photos={photos} altText={t('sliderText')}/>
    );
};

export default MainProjectPhotoSlider