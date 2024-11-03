export interface IProjectDetail {
    key: { [key: string]: string };
    value: { [key: string]: string };
}

export interface IProject {
    id: string;
    slug: string;
    title: { [key: string]: string };
    image: string;
    slidesPath: string;
    slides: string[];
    details: IProjectDetail[];
}
