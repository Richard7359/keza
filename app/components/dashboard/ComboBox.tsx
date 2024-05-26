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

const Combobox = () => {
  const [level, setLevel] = useState("");
  return (
    <div className="mt-2 input_text">
      {" "}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center input_bg justify-between w-60 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none">
            {level == "" ? (
              <span>Select the course level</span>
            ) : (
              <span>{level}</span>
            )}
            <MdOutlineKeyboardArrowDown className="ml-2 h-4 w-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-60">
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setLevel("Beginner");
            }}
          >
            Beginner
            {level == "Beginner" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setLevel("Middle");
            }}
          >
            Middle
            {level == "Middle" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setLevel("Pre-advanced");
            }}
          >
            Pre-advanced
            {level == "Pre-advanced" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300" />
            )}
          </DropdownMenuItem>
          <DropdownMenuItem
            className="flex items-center justify-between"
            onClick={() => {
              setLevel("advanced");
            }}
          >
            advanced
            {level == "advanced" && (
              <BsCheckAll className="h-3.5 w-3.5 text-hc-gray-700 dark:text-gray-300" />
            )}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Combobox;
