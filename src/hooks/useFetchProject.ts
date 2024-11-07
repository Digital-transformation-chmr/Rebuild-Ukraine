import {useEffect, useState} from "react";
import {IProject} from "../types/IProject.ts";

export function useFetchProject(id: string | undefined, language: string) {
    const [project, setProject] = useState<IProject | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        if (!id) {
            setIsLoading(false); // Set loading
            return;
        }

        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((data) => {
                const foundProject = data.find((proj: IProject) => proj.id === id);
                setProject(foundProject || null);
            })
            .catch((error) => {
                console.error("Error fetching project:", error);
            })
            .finally(() => setIsLoading(false));
    }, [id, language]);

    return {project, isLoading};
}