import React, { useState, useEffect } from "react";

// import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "@tabler/icons";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import Button from "../form/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsCheckAll } from "react-icons/bs";
import { step } from "@/app/store/currectStep";
import { CourseData } from "@/app/store/courseData";

const TemplateOptions = () => {
  const { currentStep } = step();
  const { course, setCourse } = CourseData();

  const setStepTemplate = (inputTemplate: string) => {
    if (currentStep > 0) {
      setCourse({
        ...course,
        steps: course.steps.map((step : any) => {
          if (step.step == currentStep) {
            return {
              ...step,
              template: inputTemplate,
            };
          }
          return step;
        }),
      });
    }
  };

  return (
    <div className="mt-2 input_text w-full ">
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger defaultValue={"Two Images Side by Side"} asChild>
          <button className="flex items-center input_bg justify-between w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none">
            {course.steps[currentStep - 1]?.template == "" ? (
              <span>select the template</span>
            ) : (
              <span>{course.steps[currentStep - 1]?.template}</span>
            )}
            <MdOutlineKeyboardArrowDown className="ml-2 h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-full">
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setStepTemplate("Single Image");
            }}
          >
            Single Image
            {course.steps[currentStep - 1]?.template == "Single Image" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setStepTemplate("Single Image Fit");
            }}
          >
            Single Image Fit
            {course.steps[currentStep - 1]?.template == "Single Image Fit" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setStepTemplate("Two Images Side by Side");
            }}
          >
            Two Images Side by Side
            {course.steps[currentStep - 1]?.template ==
              "Two Images Side by Side" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setStepTemplate(
                "Large pic Left, Small pic Right with Bottom pic"
              );
            }}
          >
            Large pic Left, Small pic Right with Bottom pic
            {course.steps[currentStep - 1]?.template ==
              "Large pic Left, Small pic Right with Bottom pic" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setStepTemplate("Two Images Top, One Image Bottom");
            }}
          >
            Two Images Top, One Image Bottom
            {course.steps[currentStep - 1]?.template ==
              "Two Images Top, One Image Bottom" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setStepTemplate("Four Equal Images (2x2 Grid)");
            }}
          >
            Four Equal Images (2x2 Grid)
            {course.steps[currentStep - 1]?.template ==
              "Four Equal Images (2x2 Grid)" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setStepTemplate("Two Images Vertically Stacked");
            }}
          >
            Two Images Vertically Stacked
            {course.steps[currentStep - 1]?.template ==
              "Two Images Vertically Stacked" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TemplateOptions;
