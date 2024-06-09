"use client";

import { FaChessBishop } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import s1 from "../../../images/TrafficLight/s1.jpeg";
import s2 from "../../../images/TrafficLight/s2.jpeg";
import { stepDataTypes } from "@/app/store/courseData";

const TwoEqualImages = ({ step }: { step: stepDataTypes }) => {
  console.log("step", step);
  let localData;
  if (typeof window !== "undefined") {
    localData = localStorage.getItem("done");
  }
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [done, setDone] = useState<number[]>(
    localData ? JSON.parse(localData) : []
  );

  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(done));
  }, [done]);
  return (
      <AccordionItem value={String(step?.step)} className="border border-none mt-4">
        <AccordionTrigger
          className={`pd_id _c uc pc_id hover:uf hover:se ${
            activeAccordion == 1
              ? "pc_id_courses_bottom uf_course se_course"
              : ""
          } ${done.includes(1) ? "uf_course se_course" : ""}`}
          onClick={() => {
            setActiveAccordion(1);
            if (activeAccordion == 1) {
              setActiveAccordion(0);
            }
          }}
        >
          <div className="flex items-center">
            <FaChessBishop className="text-3xl" /> STEP 1: Taking S1 and S2
          </div>
        </AccordionTrigger>
        <AccordionContent
          className={`pd_id _c uc ${
            activeAccordion == 1 ? "pc_id_courses" : ""
          } sm:pd_id gd`}
        >
          <div className="flex gap-2">
            <Image
              src={s1}
              alt="KEFL Logo image"
              className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
            />
            <Image
              src={s2}
              alt="KEFL Logo image"
              className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
            />
          </div>
          <div className="m-2 flex justify-end">
            <TooltipProvider>
              {done.includes(1) ? (
                <Tooltip>
                  <TooltipTrigger
                    className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                    onClick={(e) => {
                      e.preventDefault();
                      const newDone = done.filter((item) => item !== 1);
                      setDone(newDone);
                    }}
                  >
                    <GoDotFill />
                    <p>Done</p>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mark this step as not completed</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <Tooltip>
                  <TooltipTrigger
                    className="border border-black px-3 rounded-full font-semibold"
                    onClick={(e) => {
                      e.preventDefault();
                      setDone([...done, 1]);
                    }}
                  >
                    To Do
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Mark this step as completed</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </TooltipProvider>
          </div>
        </AccordionContent>
      </AccordionItem>
  );
};

export default TwoEqualImages;
