import {useEffect, useState} from "react";
import {IProject} from "../types/IProject.ts";


export function useFetchProject(id: string | undefined, language: string) {
    const [project, setProject] = useState<IProject | null>(null);

    useEffect(() => {
        if (!id) return;

        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((data) => {
                const foundProject = data.find((proj: IProject) => proj.id === id);
                setProject(foundProject || null);
            });
    }, [id, language]); // Следим за изменением id и языка

    return project;
}
