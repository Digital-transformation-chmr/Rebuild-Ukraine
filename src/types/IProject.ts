export interface IProject {
    id: string;
    slug: string;
    title: { [key: string]: string };
    description: { [key: string]: string };
    image: string;
}