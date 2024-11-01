import { useLanguageStore } from '../store/useLanguageStore';
import {IProject} from "../types/IProject.ts";
import React from "react";

const ProjectCardMini: React.FC<IProject> = ({ id, slug, title, image, description }) => {
    const { language } = useLanguageStore();

    return (
        <div className="border border-black">
            <div>id: {id}</div>
            <div>description: {description[language]}</div>
            <div>slug: {slug}</div>
            <div>title: {title[language]}</div>
            <div>image: {image}</div>
        </div>
    );
};

export default ProjectCardMini;
