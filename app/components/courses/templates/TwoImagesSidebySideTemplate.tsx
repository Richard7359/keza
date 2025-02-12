"use client";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import s1 from "../../images/TrafficLight/s1.jpeg";
import s2 from "../../images/TrafficLight/s2.jpeg";
import { step } from "@/app/store/currectStep";

// icons
import { FaMonument } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { CourseData } from "@/app/store/courseData";
import { BsFillImageFill } from "react-icons/bs";
import { BsImage } from "react-icons/bs";
import { imageType } from "@/app/store/courseData";

const TwoImagesSidebySideTemplate = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [done, setDone] = useState<number[]>([]);
  const { currentStep } = step();
  const {
    course,
    image1,
    image2,
  } = CourseData();
  const [currentImage1, setCurrentImage1] = useState<imageType>({
    position: "",
    file: null,
  });
  const [currentImage2, setCurrentImage2] = useState<imageType>({
    position: "",
    file: null,
  });
  
  useEffect(() => {

    if (image1) {
      setCurrentImage1(image1);
    } else {
      setCurrentImage1({ position: "", file: null });
    }
    if (image2) {
      setCurrentImage2(image2);
    } else {
      setCurrentImage2({ position: "", file: null });
    }
  }, [image1, image2]);

  return (
    <div className="w-full">
      <Accordion
        type="single"
        defaultValue="1"
        collapsible
        className="w-[100%] border-none"
      >
        <AccordionItem value="1" className="border border-none">
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
              <FaMonument className="text-3xl" />{" "}
              {course.steps.length > 0
                ? `STEP ${currentStep} : ${
                    course.steps[currentStep - 1]?.title
                  }`
                : "Add the course title"}
            </div>
          </AccordionTrigger>
          <AccordionContent
            className={`pd_id _c uc ${
              activeAccordion == 1 ? "pc_id_courses" : ""
            } sm:pd_id gd`}
          >
            <div className="flex gap-2">
              {currentImage1.file ? (
                <Image
                  src={URL.createObjectURL(currentImage1?.file)}
                  alt="KEFL Logo image"
                  className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                  width={500}
                  height={300}
                />
              ) : (
                <div className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom">
                  <BsFillImageFill className="h-full w-full" />
                </div>
              )}
              {currentImage2.file ? (
                <Image
                  src={URL.createObjectURL(currentImage2.file)}
                  alt="KEFL Logo image"
                  className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                  width={500}
                  height={300}
                />
              ) : (
                <div className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom">
                  <BsImage className="h-full w-full" />
                </div>
              )}
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
      </Accordion>
    </div>
  );
};

export default TwoImagesSidebySideTemplate;
