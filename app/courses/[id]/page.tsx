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
// level icons
import { TbArrowBadgeDown } from "react-icons/tb";
import { GiPoliceBadge } from "react-icons/gi";
import { SiOpslevel } from "react-icons/si";
import { GiArmorDowngrade } from "react-icons/gi";
import { AiFillApi } from "react-icons/ai";
import { BiLogoUnsplash } from "react-icons/bi";

import { SlBadge } from "react-icons/sl";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { GoDotFill } from "react-icons/go";
import final_traffic_light from "../../images/TrafficLight/traffic_light.jpeg";
import s1 from "../../images/TrafficLight/s1.jpeg";
import s2 from "../../images/TrafficLight/s2.jpeg";
import s1s2 from "../../images/TrafficLight/s1s2.jpg";
import s1s2full from "../../images/TrafficLight/s1s2full.jpeg";
import s4 from "../../images/TrafficLight/s4.jpeg";
import s4s1 from "../../images/TrafficLight/s4s1.jpeg";
import plugs4s1 from "../../images/TrafficLight/plugw1s4.jpeg";
import fulls1s2 from "../../images/TrafficLight/fulls1s2.jpeg";
import l2 from "../../images/TrafficLight/l2.jpeg";
import wd from "../../images/TrafficLight/wd.jpeg";
import plugl2wd from "../../images/TrafficLight/plugl2wd.jpg";

const Page = () => {
  const [selected, setSelected] = useState("null");
  const [oneSelected, oneSetSelected] = useState(false);
  const [twoSelected, twoSetSelected] = useState(false);
  const [threeSelected, threeSetSelected] = useState(false);
  const [fourSelected, fourSetSelected] = useState(false);

  const [oneCompleted, setOneCompleted] = useState(false);
  const [twoCompleted, setTwoCompleted] = useState(false);
  const [threeCompleted, setThreeCompleted] = useState(false);
  const [fourCompleted, setFourCompleted] = useState(false);

  return (
    <>
      <Navigation />
      <div className="mb-6">
        <div className="mb-4">
          <p className="text-center text-2xl font-bold mt-10">Ichigo Jam</p>
          <p className="text-center mt-1">BY Emma on Feb 6, 2020</p>
        </div>
        <div className="flex justify-center">
          <Image
            src={final_traffic_light}
            alt="KEFL Logo image"
            className="w-[490px] h-[300px] cursor-pointer rounded-[5px] border-custom"
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
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <TbArrowBadgeDown className="text-3xl" /> STEP 1: Taking
                        S1 and S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
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
                          {oneCompleted ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  setOneCompleted(!oneCompleted);
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
                                onClick={() => setOneCompleted(!oneCompleted)}
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
                      } ${twoCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <GiPoliceBadge className="text-3xl" />
                        STEP 2: Plugging S2 into S1
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        twoSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={s1s2}
                          alt="KEFL Logo image"
                          className="w-[80%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {twoCompleted ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  setTwoCompleted(!twoCompleted);
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
                                onClick={() => setTwoCompleted(!twoCompleted)}
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
                  <AccordionItem
                    value="item-3"
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
                      } ${twoCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <SiOpslevel className="text-3xl" />
                        STEP 3: Full view of S1 and S2.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        twoSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={s1s2full}
                          alt="image"
                          className="w-[80%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {twoCompleted ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  setTwoCompleted(!twoCompleted);
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
                                onClick={() => setTwoCompleted(!twoCompleted)}
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
                  <AccordionItem
                    value="item-4"
                    className="border border-none mt-4"
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
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <GiArmorDowngrade className="text-3xl" /> STEP 4:
                        Plugging WD into S1 & S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2">
                        <Image
                          src={s4}
                          alt="KEFL Logo image"
                          className="w-[30%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                        <Image
                          src={s4s1}
                          alt="KEFL Logo image"
                          className="w-[70%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {oneCompleted ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  setOneCompleted(!oneCompleted);
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
                                onClick={() => setOneCompleted(!oneCompleted)}
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
                  <AccordionItem
                    value="item-5"
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
                      } ${twoCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <GiArmorDowngrade className="text-3xl" />
                        STEP 4: Plugging WD into S1 & S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        twoSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={plugs4s1}
                          alt="image"
                          className="w-[80%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {twoCompleted ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  setTwoCompleted(!twoCompleted);
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
                                onClick={() => setTwoCompleted(!twoCompleted)}
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
                  <AccordionItem
                    value="item-6"
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
                      } ${twoCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 5 FULL VIEW OF WD AND S1&S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        twoSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fulls1s2}
                          alt="image"
                          className="w-[80%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {twoCompleted ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  setTwoCompleted(!twoCompleted);
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
                                onClick={() => setTwoCompleted(!twoCompleted)}
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
                  <AccordionItem
                    value="item-7"
                    className="border border-none mt-4"
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
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <BiLogoUnsplash className="text-3xl" /> STEP 6: Plugging
                        L2 into WD&S1&S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2">
                        <Image
                          src={l2}
                          alt="KEFL Logo image"
                          className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                        <Image
                          src={wd}
                          alt="KEFL Logo image"
                          className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {oneCompleted ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  setOneCompleted(!oneCompleted);
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
                                onClick={() => setOneCompleted(!oneCompleted)}
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
                  <AccordionItem
                    value="item-8"
                    className="border border-none mt-4"
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
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                      <BiLogoUnsplash className="text-3xl" /> STEP 6: Plugging
                        L2 into WD&S1&S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                       <div className="flex gap-2 justify-center">
                        <Image
                          src={plugl2wd}
                          alt="image"
                          className="w-[80%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="m-2 flex justify-end">
                        <TooltipProvider>
                          {oneCompleted ? (
                            <Tooltip>
                              <TooltipTrigger
                                className="border text-green easy-bg px-3 rounded-full font-semibold flex items-center"
                                onClick={() => {
                                  setOneCompleted(!oneCompleted);
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
                                onClick={() => setOneCompleted(!oneCompleted)}
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
                  {/* <AccordionItem
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
                  </AccordionItem> */}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
