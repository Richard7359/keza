import { create } from "zustand";

export interface stepState {
  currentStep: number;
  setCurrentStep: (value: number) => void;
}

export interface courseType {
    course: courseDataTypes;
    setCourse: (value: courseDataTypes) => void;
}

export interface stepDataTypes {
    title: string;
    template: string;
    attachment: {position: string, file: string};
}

export interface courseDataTypes {
    basicInfo: {
        title: string;
        level: string;
        complexity: string;
        uploadedBy: string;
        attachment: string;
    },
    steps: stepDataTypes[];
}

export const step = create<courseType>((set) => ({
    course: {
        basicInfo: {
            title: "",
            level: "",
            complexity: "",
            uploadedBy: "",
            attachment: "",
        },
        steps: [], 
    },
    setCourse: (value: courseDataTypes) => set({ course: value }),
}));
