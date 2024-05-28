import { create } from "zustand";

export interface stepState {
  currentStep: number;
  setCurrentStep: (value: number) => void;
  previousStep: number;
  setPreviousStep: (value: number) => void;
}

export const step = create<stepState>((set) => ({
  currentStep: 0,
  setCurrentStep: (value: number) => set({ currentStep: value }),
  previousStep: 0,
  setPreviousStep: (value: number) => set({ previousStep: value }),
}));
