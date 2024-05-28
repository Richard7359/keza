import React from "react";
import { GoDotFill } from "react-icons/go";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  complexity: number;
  className?: string;
}

const Complexity: React.FC<ButtonProps>  = ({
  complexity,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      type="button"
      className={cn(
        `inline-flex border border-custom items-center mr-2 px-2 rounded-full  ${
          complexity == 1
            ? "text-green easy-bg"
            : complexity == 2
            ? "medium medium-bg"
            : complexity == 3
            ? "text-level4 bg-level4 bg-opacity-5"
            : ""
        }`,
        className
      )}
    >
      <GoDotFill />
      <p className="text-[12px] font-bold">
        {complexity == 1
          ? "EASY"
          : complexity == 2
          ? "MEDIUM"
          : complexity == 3
          ? "HARD"
          : "NONE"}
      </p>
    </button>
  );
};

export default Complexity;
