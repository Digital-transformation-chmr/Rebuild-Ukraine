import MainSlider from "./main-slider.tsx";
import {FC} from "react";
import {IProjectDetail} from "../types/IProject.ts";
import {useBreakpoint} from "../hooks/useBreakpoint.ts";
import ProjectInfoCard from "./project-info-card.tsx";

interface Props {
    projectDetails: IProjectDetail[]
}

const MainProjectInfoSlider: FC<Props> = ({projectDetails}) => {
    const breakpoint = useBreakpoint()

    let itemsPerPage;
    if (breakpoint === 'lg') {
        itemsPerPage = 2;
    } else if (breakpoint === 'xxxl') {
        itemsPerPage = 3;
    } else if (breakpoint === 'sm') {
        itemsPerPage = 1;
    } else {
        itemsPerPage = 3;
    }


    return (
        <MainSlider slidesToShow={itemsPerPage}>
            {projectDetails.map((item) => <ProjectInfoCard key={`${item.key}+${item.value}`} item={item} />)}
        </MainSlider>
    )

};

export default MainProjectInfoSlider;