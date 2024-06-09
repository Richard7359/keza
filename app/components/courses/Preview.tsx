"use client";
import { step } from "@/app/store/currectStep";

import { CourseData } from "@/app/store/courseData";

// templates
import TwoImagesSidebySideTemplate from "./templates/TwoImagesSidebySideTemplate";
import SingleImageTemplate from "./templates/SingleImageTemplate";
import SingleImageFitTemplate from "./templates/SingleImageFitTemplate";
import LargePicTemplate from "./templates/LargePicTemplate";
import LargePicBottomTemplate from "./templates/LargePicBottomTemplate";
import FourImageSidebySideTemplate from "./templates/FourImageSidebySideTemplate";
import TwoUpandDownTemplate from "./templates/TwoUpandDownTemplate";
import { TbPoint } from "react-icons/tb";
import { FcPositiveDynamic } from "react-icons/fc";
import { FcBiotech } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

import { FcHighPriority } from "react-icons/fc";

import { useEffect, useState } from "react";

const Preview = () => {
  const { currentStep } = step();
  const { course } = CourseData();
  const [currentCourse , setCurrentCourse ] = useState<any>(null);

  useEffect(() => {
    if (course.steps.length > 0) {
      setCurrentCourse(course.steps[currentStep - 1])
    }
  }, [course, currentStep]);

  return (
    <div className="">
      {currentStep == 0 ? (
        <div>
         <p className="flex items-center gap-2 text-base font-medium"><FcHighPriority className="h-5 w-5" /> Important Notes .</p> 
         <div className="ml-8">
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> <div><strong>Preview Availability:</strong>  Please note that the preview feature is only available for the steps section, not the basic information section.</div> </li>
            </ul>
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> <div><strong>Mandatory Image:</strong>When adding a step to the course, including an image is crucial and cannot be ignored.</div> </li>
            </ul>
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> <div><strong>Required Title:</strong>Each step must have a title to be meaningful and comprehensible.</div> </li>
            </ul>
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> <div><strong>Templates:</strong>There are several templates available that you need to choose from when adding steps.</div> </li>
            </ul>
         </div>
         <p className="flex items-center justify-center gap-2 text-base font-medium mt-2">Steps to Add a Course:</p>
         <p className="flex items-center gap-2 text-base font-medium mt-2"><FcBiotech className="h-5 w-5" /> Basic Information .</p> 
         <div className="ml-8">
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/>Fill in all the required fields in the basic information section. </li>
            </ul>
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> Ensure all details are accurate and complete before proceeding. </li>
            </ul>
         </div>
         <p className="flex items-center gap-2 text-base font-medium mt-2"><FcPositiveDynamic className="h-5 w-5" /> Adding Steps .</p> 
         <div className="ml-8">
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> Navigate to the steps section and Choose a suitable template. </li>
            </ul>
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> WAdd a clear, descriptive title and Upload a relevant image (mandatory). </li>
            </ul>
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> Each step must have a title to be meaningful and comprehensible.</li>
            </ul>
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> Use the preview feature to check the step&lsquo;s appearance. </li>
            </ul>
         </div>
         <p className="flex items-center gap-2 text-base font-medium mt-2"><FcApproval className="h-5 w-5" /> Review and Submit .</p> 
         <div className="ml-8">
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> Review all the information and steps you have added. </li>
            </ul>
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/> Make sure you are satisfied with all the entries. Once you feel everything is correct, click &#34;Submit&#34; </li>
            </ul>
            <ul>
              <li className="flex  gap-1 "><TbPoint className="h-5 w-5"/><div><strong>Note:</strong> Do not proceed to the next step if you are not satisfied with the current one. Make all necessary adjustments before submission.</div> </li>
            </ul>
         </div>
        </div>
      ) : (
        <div className="flex justify-center">
        <div className="w-full">
          {currentCourse?.template == "Single Image" && <SingleImageTemplate />}
          {currentCourse?.template == "Single Image Fit" && <SingleImageFitTemplate />}
          {currentCourse?.template == "Two Images Side by Side"  && <TwoImagesSidebySideTemplate />}
          {currentCourse?.template == "Large pic Left, Small pic Right with Bottom pic"  && <LargePicTemplate />}
          {currentCourse?.template == "Two Images Top, One Image Bottom"  && <LargePicBottomTemplate />}
          {currentCourse?.template == "Four Equal Images (2x2 Grid)"  && <FourImageSidebySideTemplate />}
          {currentCourse?.template == "Two Images Vertically Stacked"  && <TwoUpandDownTemplate />}
        </div></div>
      )}
    </div>
  );
};

export default Preview;
