import { create } from "zustand";

export interface courseType {
    course: courseDataTypes;
    setCourse: (value: courseDataTypes) => void;
}

export interface stepDataTypes {
    title: string;
    step: number;
    template: string;
    attachment: {position: string, file: File | null}[];
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

export const CourseData = create<courseType>((set) => ({
    course: {
        basicInfo: {
            title: "",
            level: "",
            complexity: 0,
            uploadedBy: "",
            attachment: "",
        },
        steps: [], 
    },
    setCourse: (value: courseDataTypes) => set({ course: value }),
}));
