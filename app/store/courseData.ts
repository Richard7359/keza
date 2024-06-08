import { create } from "zustand";

export interface courseType {
    course: courseDataTypes;
    setCourse: (value: courseDataTypes) => void;
    image1: imageType;
    setImage1: (value: imageType) => void;
    image2: imageType;
    setImage2: (value: imageType) => void;
    image3: imageType;
    setImage3: (value: imageType) => void;
    image4: imageType;
    setImage4: (value: imageType) => void;
    basicImage: imageType;
    setBasicImage: (value: imageType) => void;
}

export interface stepDataTypes {
    title: string;
    step: number;
    template: string;
    attachment: {position: string, file: ""}[];
}

export interface courseDataTypes {
    basicInfo: {
        title: string;
        level: string;
        complexity: number;
        uploadedBy: string;
        attachment: string;
    },
    steps: stepDataTypes[];
}

export interface imageType {
    position: string;
    file: File | null;
}


export const CourseData : any = create<courseType>((set) => ({
    course: {
        basicInfo: {
            title: "",
            level: "",
            complexity: 0,
            uploadedBy: "Admin",
            attachment: "",
        },
        steps: [], 
    },
    setCourse: (value: courseDataTypes) => set({ course: value }),
    image1: {
        position: "",
        file: null,
    },
    setImage1: (value: imageType) => set({ image1: value }),
    image2: {
        position: "",
        file: null,
    },
    setImage2: (value: imageType) => set({ image2: value }),
    image3: {
        position: "",
        file: null,
    },
    setImage3: (value: imageType) => set({ image3: value }),
    image4: {
        position: "",
        file: null,
    },
    setImage4: (value: imageType) => set({ image4: value }),
    basicImage: {
        position: "",
        file: null,
    },
    setBasicImage: (value: imageType) => set({ basicImage: value }),
}));
