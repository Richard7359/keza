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

const TemplateOptions = ({template, setTemplate} : {template : string, setTemplate: (value : string) => void}) => {
  return (
    <div className="mt-2 input_text w-full ">
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center input_bg justify-between w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none">
            {template == "" ? (
              <span>change template</span>
            ) : (
              <span>{template}</span>
            )}
            <MdOutlineKeyboardArrowDown className="ml-2 h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-full">
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setTemplate("Single Image");
            }}
          >
            Single Image
            {template == "Single Image" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setTemplate("Two Images Side by Side");
            }}
          >
            Two Images Side by Side
            {template == "Two Images Side by Side" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setTemplate("Large pic Left, Small pic Right with Bottom pic");
            }}
          >
            Large pic Left, Small pic Right with Bottom pic
            {template == "Large pic Left, Small pic Right with Bottom pic" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setTemplate("Two Images Top, One Image Bottom");
            }}
          >
            Two Images Top, One Image Bottom
            {template == "Two Images Top, One Image Bottom" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setTemplate("Four Equal Images (2x2 Grid)");
            }}
          >
            Four Equal Images (2x2 Grid)
            {template == "Four Equal Images (2x2 Grid)" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setTemplate("Two Images Vertically Stacked");
            }}
          >
            Two Images Vertically Stacked
            {template == "Two Images Vertically Stacked" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300 my-2" />
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default TemplateOptions;
