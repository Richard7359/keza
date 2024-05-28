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
import { SiOpslevel } from "react-icons/si";
import { GiArmorDowngrade } from "react-icons/gi";
import { AiFillApi } from "react-icons/ai";
import { BiLogoUnsplash } from "react-icons/bi";
import { BiPackage } from "react-icons/bi";
import { CgEricsson } from "react-icons/cg";
import { CgFigma } from "react-icons/cg";
import { CgPolaroid } from "react-icons/cg";
import { CgTally } from "react-icons/cg";
import { CgTrees } from "react-icons/cg";
import { CgTapDouble } from "react-icons/cg";
import { CgScreenShot } from "react-icons/cg";
import { CgServerless } from "react-icons/cg";
import { FaChessBishop } from "react-icons/fa";
import { FaMonument } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { FaPlug } from "react-icons/fa";
import { FaVenus } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { GoDotFill } from "react-icons/go";
import { CourseData } from "@/app/store/courseData";
import { BsFillImageFill } from "react-icons/bs";
import { BsImage } from "react-icons/bs";


const Preview = () => {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [done, setDone] = useState<number[]>([]);
  const { currentStep } = step();
  const { course, setCourse } = CourseData();
  const [currentImage1, setCurrentImage1] = useState<File | null>(null);
  const [currentImage2, setCurrentImage2] = useState<File | null>(null);

  useEffect(() => {
    const currentStepObj = course.steps.find(step => step.step === currentStep);

    if (currentStepObj) {
      const up_left = currentStepObj.attachment.find(att => att.position === 'up_left');
      const up_right = currentStepObj.attachment.find(att => att.position === 'up_right');
  
      if (up_left) {
        setCurrentImage1(up_left.file);
      }else{
        setCurrentImage1(null);
      }
      if (up_right) {
        setCurrentImage2(up_right.file);
      }else{
        setCurrentImage2(null);
      }
    }
  }, [course]);

  return (
    <div className="flex justify-center">
      {currentStep == 0 ? (
        <div>
          this section will provide an overview of the feature of adding courses
          is structured , like the way images are uploaded how to change the
          template, next and save, submit form as final form ..............
        </div>
      ) : (
        <Accordion type="single" defaultValue="1" collapsible className="w-[100%] border-none">
          <AccordionItem value="1" className="border border-none" >
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
                {course.steps.length > 0 ?  `STEP ${currentStep} : ${course.steps[currentStep - 1].title }`: "Add the course title" }
              </div>
            </AccordionTrigger>
            <AccordionContent
              className={`pd_id _c uc ${
                activeAccordion == 1 ? "pc_id_courses" : ""
              } sm:pd_id gd`}
            >
              <div className="flex gap-2">
                {currentImage1 ? (
                  <Image
                    src={URL.createObjectURL(currentImage1)}
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
                {currentImage2 ? (
                  <Image
                    src={URL.createObjectURL(currentImage2)}
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
      )}
    </div>
  );
};

export default Preview;
