"use client";

import {useState} from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { FaChessBishop } from "react-icons/fa";
import s1 from "../../images/TrafficLight/s1.jpeg";
import s2 from "../../images/TrafficLight/s2.jpeg";
import { step } from "@/app/store/currectStep";

const Preview = () => {
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [done, setDone] = useState<number[]>([]);
    const { currentStep, setCurrentStep } = step();

  return (
    <div className="flex justify-center">

      {currentStep == 0 ?<div>this section will provide an overview of the feature of adding courses is structured , like the way images are uploaded how to change the template, next and save, submit form as final form ..............</div>: <Accordion type="single" collapsible className="w-[100%] border-none">
        <AccordionItem value=" 1" className="border border-none">
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
              <FaChessBishop className="text-3xl" /> STEP {currentStep}: Taking S1 and S2
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
      </Accordion>}
    </div>
  );
};

export default Preview;
