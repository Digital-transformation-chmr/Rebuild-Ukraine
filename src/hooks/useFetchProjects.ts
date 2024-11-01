import {useEffect, useState} from "react";
import {IProject} from "../types/IProject.ts";

export function useFetchProjects() {
    const [projects, setProjects] = useState<IProject[]>([]);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((response) => response.json())
            .then((data) => setProjects(data));
    }, []);

    return projects;
}
