import {useEffect, useState} from "react";
import {IProject} from "../types/IProject.ts";

export function useFetchAllProjects() {
    const [projects, setProjects] = useState<IProject[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((data) => {
                setProjects(data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching projects:", error);
                setIsLoading(false);
            })
            .finally(() => setIsLoading(false));
    }, []);

    return {projects, isLoading};
}