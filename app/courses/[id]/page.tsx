"use client";

import React, { useState } from "react";
import Navigation from "@/app/components/Navigation_bar/Navigation";
import Footer from "@/app/components/Footer";
import image from "../../images/ichigojam.jpg";
import Image from "next/image";
import ViewMaterials from "@/app/components/courses/Dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TbArrowBadgeDown } from "react-icons/tb";
import { GiPoliceBadge } from "react-icons/gi";
import { SlBadge } from "react-icons/sl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GoDotFill } from "react-icons/go";

const Page = () => {
  const [selected, setSelected] = useState("null");
  const [oneSelected, oneSetSelected] = useState(false);
  const [twoSelected, twoSetSelected] = useState(false);
  const [threeSelected, threeSetSelected] = useState(false);
  const [fourSelected, fourSetSelected] = useState(false);

  const [oneCompleted, setOneCompleted] = useState(false);
  const [twoCompleted, setTwoCompleted] = useState(true);
  const [threeCompleted, setThreeCompleted] = useState(false);
  const [fourCompleted, setFourCompleted] = useState(false);

  return (
    <>
      <Navigation />
      <div className="">
        <div className="mb-4">
          <p className="text-center text-2xl font-bold mt-10">Ichigo Jam</p>
          <p className="text-center mt-1">BY Emma on Feb 6, 2020</p>
        </div>
        <div className="flex justify-center">
          <Image
            src={image}
            alt="KEFL Logo image"
            className="w-[500px] h-[300px] object-cover cursor-pointer rounded-[5px] border-custom"
          />
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-[40%]">
            <ViewMaterials />
            <div className="mt-4">
              <div className="flex justify-center">
                <Accordion
                  type="single"
                  collapsible
                  className="w-[100%] border-none"
                >
                  <AccordionItem
                    value="item-1"
                    className="border border-none"
                    onClick={() => {
                      oneSetSelected(!oneSelected);
                      twoSetSelected(false);
                      threeSetSelected(false);
                      fourSetSelected(false);
                    }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <TbArrowBadgeDown className="text-3xl" /> Which level of
                        the kids do you accept?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <strong>KEFL</strong> is primarily focused on the kids
                        that are in the age of 3 to 14 years old. Most of the
                        time those kids are pursuing their primary level and
                        O&apos;Level section of their normal education.
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {oneCompleted ? (
                            <Tooltip>
                              <TooltipTrigger className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center" onClick={() => {setOneCompleted(!oneCompleted)}}>
                                <GoDotFill />
                                <p>Done</p>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Mark this step as not completed</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <Tooltip>
                              <TooltipTrigger className="border border-black px-3 rounded-full font-semibold" onClick={() => setOneCompleted(!oneCompleted)}>
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
                  <AccordionItem
                    value="item-2"
                    className="border border-none mt-4"
                    onClick={() => {
                      oneSetSelected(false);
                      twoSetSelected(!twoSelected);
                      threeSetSelected(false);
                      fourSetSelected(false);
                    }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        twoSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <GiPoliceBadge className="text-3xl" />
                        Which level of the kids do you accept?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        twoSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <strong>KEFL</strong> is primarily focused on the kids
                        that are in the age of 3 to 14 years old. Most of the
                        time those kids are pursuing their primary level and
                        O&apos;Level section of their normal education.
                      </div>
                      <div className="m-2 flex justify-end">
                      <TooltipProvider>
                          {twoCompleted ? (
                            <Tooltip>
                              <TooltipTrigger className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center" onClick={() => {setTwoCompleted(!twoCompleted)}}>
                                <GoDotFill />
                                <p>Done</p>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Mark this step as not completed</p>
                              </TooltipContent>
                            </Tooltip>
                          ) : (
                            <Tooltip>
                              <TooltipTrigger className="border border-black px-3 rounded-full font-semibold" onClick={() => setTwoCompleted(!twoCompleted)}>
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
                  <AccordionItem
                    value="item-3"
                    className="border border-none mt-4"
                    onClick={() => {
                      oneSetSelected(false);
                      twoSetSelected(false);
                      threeSetSelected(!threeSelected);
                      fourSetSelected(false);
                    }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        threeSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <SlBadge className="text-3xl" />
                        Which level of the kids do you accept?
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        threeSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <strong>KEFL</strong> is primarily focused on the kids
                        that are in the age of 3 to 14 years old. Most of the
                        time those kids are pursuing their primary level and
                        O&apos;Level section of their normal education.
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="border border-black px-3 rounded-full font-semibold">
                              To Do
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Mark this step as completed</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Page;
