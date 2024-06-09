"use client";
import { BiPackage } from "react-icons/bi";
import { GoDotFill } from "react-icons/go";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
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
import { stepDataTypes } from "@/app/store/courseData";

const FourImageSideBySide = ({ step }: { step: stepDataTypes }) => {
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
          activeAccordion == 2 ? "pc_id_courses_bottom uf_course se_course" : ""
        } ${done.includes(2) ? "uf_course se_course" : ""}`}
        onClick={() => {
          setActiveAccordion(2);
          if (activeAccordion == 2) {
            setActiveAccordion(0);
          }
        }}
      >
        <div className="flex items-center">
          <BiPackage className="text-3xl" />
          {`STEP ${String(step?.step)} : ${step?.title}`}
        </div>
      </AccordionTrigger>
      <AccordionContent
            className={`pd_id _c uc ${
              activeAccordion == 1 ? "pc_id_courses" : ""
            } sm:pd_id gd`}
          >
            <div className="flex gap-2">
                <Image
                  src={process.env.NEXT_PUBLIC_IMAGE_URL as string + step?.attachment[0].file}
                  alt="KEFL Logo image"
                  className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                  width={500}
                  height={300}
                />
                <Image
                  src={process.env.NEXT_PUBLIC_IMAGE_URL as string + step?.attachment[1].file}
                  alt="KEFL Logo image"
                  className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                  width={500}
                  height={300}
                />
            </div>
            <div className="flex gap-2 mt-2">
                <Image
                  src={process.env.NEXT_PUBLIC_IMAGE_URL as string + step?.attachment[2].file}
                  alt="KEFL Logo image"
                  className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                  width={500}
                  height={300}
                />
                <Image
                  src={process.env.NEXT_PUBLIC_IMAGE_URL as string + step?.attachment[3].file}
                  alt="KEFL Logo image"
                  className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                  width={500}
                  height={300}
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

export default FourImageSideBySide;
