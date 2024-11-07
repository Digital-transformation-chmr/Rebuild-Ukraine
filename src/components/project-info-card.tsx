import {FC} from 'react';
import {IProjectDetail} from "../types/IProject.ts";
import {randomColor} from "../const/colors.ts";
import {useLanguageStore} from "../store/useLanguageStore.ts";

interface Props {
    item: IProjectDetail;
}

const ProjectInfoCard: FC<Props> = ({item}) => {
    const {language} = useLanguageStore()

    return (
        <div
            className={`${randomColor()} h-[270px] rounded-lg shadow-md p-4 transition-transform duration-300 hover:animate-tilt-on-hover overflow-hidden 3xl:h-[325px] lg:h-[220px] md:h-[200px] sm:h-[auto]`}>
            <h4 className="text-sm font-semibold text-gray-700 mb-2 3xl:text-[19px] xl:text-[13px] ">
                {item.key[language]}
            </h4>
            <p className="text-sm text-gray-600 3xl:text-[18px] 3xl:leading-7 3xl:mt-5 2xl:leading-6 xl:text-[12px]">
                {item.value[language]}
            </p>
        </div>
    );
};

export default ProjectInfoCard;