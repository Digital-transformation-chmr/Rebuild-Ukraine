import SliderComponent from "./Slider.tsx";
import {FC} from "react";
import {randomColor} from "../const/colors.ts";
import {IProjectDetail} from "../types/IProject.ts";
import {useLanguageStore} from "../store/useLanguageStore.ts";

interface Props {
    projectDetails: IProjectDetail[]
}

const MainProjectInfobords: FC<Props> = ({projectDetails}) => {
    const {language} = useLanguageStore()
    return (
        <SliderComponent slidesToShow={3}>
            {projectDetails.map((item, index) => (
                <div
                    key={index}
                    style={{marginRight: "20px"}}
                    className={`${randomColor()} h-[270px] mr-10 rounded-lg shadow-md p-4 transition-transform duration-300 hover:animate-tilt-on-hover overflow-hidden`}
                >
                    <h4 className="text-md font-semibold text-gray-700 mb-2">
                        {item.key[language]}
                    </h4>
                    <p className="text-sm text-gray-600">
                        {item.value[language]}
                    </p>
                </div>
            ))}
        </SliderComponent>)
};

export default MainProjectInfobords;