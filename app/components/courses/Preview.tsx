"use client";
import { step } from "@/app/store/currectStep";

import { CourseData } from "@/app/store/courseData";

// templates
import TwoImagesSidebySideTemplate from "./templates/TwoImagesSidebySideTemplate";
import SingleImageTemplate from "./templates/SingleImageTemplate";
import SingleImageFitTemplate from "./templates/SingleImageFitTemplate";
import LargePicTemplate from "./templates/LargePicTemplate";
import LargePicBottomTemplate from "./templates/LargePicBottomTemplate";

import { useEffect, useState } from "react";

const Preview = () => {
  const { currentStep } = step();
  const { course, setCourse } = CourseData();
  const [currentCourse, setCurrentCourse] = useState<any>(null);

  // const currentCourse = course.steps.find((step) => step.step === currentStep);


  useEffect(() => {
    console.log("currentCourse : ", currentCourse);
    console.log("course from the preview : ", course);
    setCurrentCourse(course.steps.find((step) => step.step === currentStep))
  }, [course])

  return (
    <div className="flex justify-center">
      {currentStep == 0 ? (
        <div>
          this section will provide an overview of the feature of adding courses
          is structured , like the way images are uploaded how to change the
          template, next and save, submit form as final form ..............
        </div>
      ) : (
        // <div></div>
        // <SingleImageTemplate />
        <div className="w-full">
          {currentCourse?.template == "Single Image" && <SingleImageTemplate />}
          {currentCourse?.template == "Single Image Fit" && <SingleImageFitTemplate />}
          {currentCourse?.template == "Two Images Side by Side"  && <TwoImagesSidebySideTemplate />}
          {currentCourse?.template == "Large pic Left, Small pic Right with Bottom pic"  && <LargePicTemplate />}
          {currentCourse?.template == "Two Images Top, One Image Bottom"  && <LargePicBottomTemplate />}
        </div>
      )}
    </div>
  );
};

export default Preview;
