export interface IProjectDetail {
    key: { [key: string]: string };
    value: { [key: string]: string };
}

export interface ISlideInfo {
    slidesPath: string;
    slidesPhotos: string[];
}

export interface IFile {
    fileName: string;
    url: string;
}

export interface IFiles {
    pptx: IFile;
    pdf: IFile;
    docx?: IFile[];
}

export interface IProject {
    id: string;
    slug: string;
    title: { [key: string]: string };
    titleImage: string;
    slidesInfo: ISlideInfo;
    details: IProjectDetail[];
    files: IFiles;
    dopInfo?: IProjectDetail[];
}
