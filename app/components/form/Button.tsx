"use client";
import React from 'react';
import { cn } from "@/lib/utils"

// Define an interface for the props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className,...props }) => {
  return (
    <button {...props} className={cn("text-sm border uc px-2 py-1 rounded-md bg-deepSkyBlue font-medium text-white", className)}>
      {children}
    </button>
  );
};

export default Button;