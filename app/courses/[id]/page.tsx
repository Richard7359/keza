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
import fulll2wd from "../../images/TrafficLight/fulll2wd.jpeg";
import l1 from "../../images/TrafficLight/l1.jpeg";
import l1wd from "../../images/TrafficLight/l1wd.jpeg";
import l1wds1s2 from "../../images/TrafficLight/l1wds1s2.jpg";
import fulls1bottom from "../../images/TrafficLight/fulls1bottom.jpeg";
import w1 from "../../images/TrafficLight/w1.jpeg";
import w2 from "../../images/TrafficLight/w2.jpeg";
import w1w2 from "../../images/TrafficLight/w1w2.jpg";
import fullw1w2 from "../../images/TrafficLight/fullw1w2.jpeg";
import fullw1w2top from "../../images/TrafficLight/fullw1w2top.jpeg";
import plugtopbottom from "../../images/TrafficLight/plugtopbottom.jpg";
import top from "../../images/TrafficLight/bottom.jpeg";
import bottom from "../../images/TrafficLight/inner.jpeg";
import fullbottomtop from "../../images/TrafficLight/fulltopbottom.jpeg";
import x1 from "../../images/TrafficLight/x1.jpeg";
import x2 from "../../images/TrafficLight/x2.jpeg";
import x1x2 from "../../images/TrafficLight/x1x2.jpg";
import fulll1 from "../../images/TrafficLight/fulll1.jpeg";
import fulll1bottom from "../../images/TrafficLight/fulll1bottom.jpeg";
import b1 from "../../images/TrafficLight/b1.jpeg";
import b2 from "../../images/TrafficLight/b2.jpeg";
import b1b2 from "../../images/TrafficLight/b1b2.jpg";
import fullb1b2 from "../../images/TrafficLight/fullb1b2.jpeg";
import fullb1b2bottom from "../../images/TrafficLight/fullb1b2topbottom.jpeg";
import led1 from "../../images/TrafficLight/led1.jpeg";
import led2 from "../../images/TrafficLight/led2.jpeg";
import led3 from "../../images/TrafficLight/led3.jpeg";
import led4 from "../../images/TrafficLight/led4.jpeg";
import lh1 from "../../images/TrafficLight/lh1.jpeg";
import led1a from "../../images/TrafficLight/l1a.jpeg";
import lh1led1a from "../../images/TrafficLight/lh1led1a.jpg";
import fulll1lh1 from "../../images/TrafficLight/fulll1lh1.jpeg";
import fulll1lh2 from "../../images/TrafficLight/fulll1lh2.jpeg";
import lh1l4 from "../../images/TrafficLight/lh2l4.jpg";
import l1lh4 from "../../images/TrafficLight/l2lh1.jpg";
import fulll4 from "../../images/TrafficLight/fulll4.jpeg";

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
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <FaChessBishop className="text-3xl" /> STEP 1: Taking S1
                        and S2
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
                    // onClick={() => {
                    //   oneSetSelected(false);
                    //   twoSetSelected(!twoSelected);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        twoSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${twoCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <CgServerless className="text-3xl" />
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
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    // onClick={() => {
                    //   oneSetSelected(false);
                    //   twoSetSelected(!twoSelected);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
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
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
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
                      <div>
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
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={plugs4s1}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
                    // onClick={() => {
                    //   oneSetSelected(false);
                    //   twoSetSelected(!twoSelected);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
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
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
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
                      <div>
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
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={plugl2wd}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
                    value="item-7"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(false);
                    //   twoSetSelected(!twoSelected);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
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
                        STEP7:FULL VIEW OF L2 AND WD&S1&S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        twoSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fulll2wd}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    value="item-8"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <BiPackage className="text-3xl" /> STEP 8: Plugging L1
                        into L2&WD&S1&S2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={l1}
                            alt="KEFL Logo image"
                            className="w-[30%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={l1wd}
                            alt="KEFL Logo image"
                            className="w-[70%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={l1wds1s2}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
                    value="item-9"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(false);
                    //   twoSetSelected(!twoSelected);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
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
                        STEP 9: Full view of L1 and L2&WD&S1&S2 to form BOTTOM
                        PART
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        twoSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fulls1bottom}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    value="item-10"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <CgEricsson className="text-3xl" /> STEP 10: Plugging W2
                        into W1
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={w1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={w2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={w1w2}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
                    value="item-11"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(false);
                    //   twoSetSelected(!twoSelected);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
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
                        STEP 11: Full view of twice W1 and W2.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        twoSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fullw1w2}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    value="item-11"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(false);
                    //   twoSetSelected(!twoSelected);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
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
                        STEP 12: Full view box of W1&W2 to form TOP PART
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        twoSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fullw1w2top}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    value="item-13"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <CgFigma className="text-3xl" /> STEP 13: Plugging Top
                        part into Bottom part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={top}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={bottom}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={plugtopbottom}
                            alt="image"
                            className="w-[100%] h-[320px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
                    value="item-14"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(false);
                    //   twoSetSelected(!twoSelected);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
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
                        STEP 14: Full view of TOP & BOTTOM Part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        twoSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fullbottomtop}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    value="item-15"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <CgPolaroid className="text-3xl" /> STEP15:PLUGGING
                        L1(X4)INTO TOP&BOTTON PART
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={x1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={x2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={x1x2}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
                    value="item-16"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" /> STEP 16: Full view of
                        L1 and Top&Bottom Part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2">
                        <Image
                          src={fulll1}
                          alt="KEFL Logo image"
                          className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                        />
                        <Image
                          src={fulll1bottom}
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
                    value="item-17"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <CgTally className="text-3xl" /> STEP 17: Plugging B2
                        into B1
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={b1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={b2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={b1b2}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
                    value="item-18"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" /> STEP 18: Full view of
                        B1 and B2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fullb1b2}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    value="item-19"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <CgTrees className="text-3xl" /> STEP 19: Plugging B1&B2
                        into Top & Bottom part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={b1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={b2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={b1b2}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
                    value="item-20"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 20: Full view of B1&B2 and Top &Bottom Part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fullb1b2bottom}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    value="item-21"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <CgTapDouble className="text-3xl" /> STEP 21:Taking 2
                        LED&apos;s as Red, Yellow and Green with wires
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={led1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={led2}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={led3}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={led4}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
                    value="item-22"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <CgScreenShot className="text-3xl" /> STEP 22: Plugging
                        wires with LED to LH1
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={lh1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={led1a}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={lh1led1a}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
                    value="item-23"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 23: Full view of wires with LED to LH1
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex gap-2 justify-center">
                        <Image
                          src={fulll1lh1}
                          alt="image"
                          className="w-[50%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                        <Image
                          src={fulll1lh2}
                          alt="image"
                          className="w-[50%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    value="item-24"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <FaMonument className="text-3xl" />
                        STEP 24: Plugging L3 to wires with LED and LH2
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={lh1l4}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
                        />
                      </div>
                      <div className="flex justify-center mt-2">
                        <Image
                          src={l1lh4}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    value="item-25"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <AiFillApi className="text-3xl" />
                        STEP 25: Full view of 4 Inside parts with LEDs and
                        wires.
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div className="flex justify-center">
                        <Image
                          src={fulll4}
                          alt="image"
                          className="w-[80%] h-[260px] cursor-pointer rounded-[5px] border-custom"
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
                    value="item-26"
                    className="border border-none mt-4"
                    // onClick={() => {
                    //   oneSetSelected(!oneSelected);
                    //   twoSetSelected(false);
                    //   threeSetSelected(false);
                    //   fourSetSelected(false);
                    // }}
                  >
                    <AccordionTrigger
                      className={`pd_id _c uc pc_id hover:uf hover:se ${
                        oneSelected == true
                          ? "pc_id_courses_bottom uf_course se_course"
                          : ""
                      } ${oneCompleted ? "uf_course se_course" : ""}`}
                    >
                      <div className="flex items-center">
                        <FaPause className="text-3xl" /> STEP 26: Plugging
                        Inside parts into Model part
                      </div>
                    </AccordionTrigger>
                    <AccordionContent
                      className={`pd_id _c uc ${
                        oneSelected == true ? "pc_id_courses" : ""
                      } sm:pd_id gd`}
                    >
                      <div>
                        <div className="flex gap-2">
                          <Image
                            src={lh1}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                          <Image
                            src={led1a}
                            alt="KEFL Logo image"
                            className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
                        <div className="flex gap-2 justify-center mt-2">
                          <Image
                            src={lh1led1a}
                            alt="image"
                            className="w-[100%] h-[250px] cursor-pointer rounded-[5px] border-custom"
                          />
                        </div>
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
