import React, { useState } from "react";

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

// import { vitalsRange } from "@store/rangeStore";

const TemplateOptions = ({template, setTemplate} : {template : string, setTemplate: (value : string) => void}) => {
  return (
    <div className="mt-2 input_text">
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center input_bg justify-between w-44 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none">
            {template == "" ? (
              <span>change template</span>
            ) : (
              <span>{template}</span>
            )}
            <MdOutlineKeyboardArrowDown className="ml-2 h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-44">
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setTemplate("single-images");
            }}
          >
            single-images
            {template == "single-images" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setTemplate("two-images");
            }}
          >
            two-images
            {template == "two-images" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setTemplate("three-images");
            }}
          >
            three-images
            {template == "three-images" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setTemplate("four-images");
            }}
          >
            four-images
            {template == "four-images" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300" />
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TemplateOptions;
