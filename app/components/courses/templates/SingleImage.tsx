"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../../form/Button";
import { TbPlayerTrackNext } from "react-icons/tb";
import { useEffect, useState } from "react";
import { IoPlayBackOutline } from "react-icons/io5";
import { step } from "@/app/store/currectStep";
import { ChangeEvent } from "react";

import { GrCloudUpload } from "react-icons/gr";
import { TbTrashX } from "react-icons/tb";

import { motion } from "framer-motion";
import { CourseData } from "@/app/store/courseData";
import TemplateOptions from "../../dashboard/TemplatesOptions";

const FormSchema = z.object({
  title: z.string(),
  course_title: z.string(),
});

function SingleImage() {
  const { currentStep, setCurrentStep, previousStep, setPreviousStep } = step();
  const { course, setCourse } = CourseData();
  const {
    handleSubmit,
    register,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: course.basicInfo ? course.basicInfo.title : "",
      course_title:
        course.steps.length > 0 && currentStep > 0
          ? course.steps[currentStep - 1].title
          : "",
    },
  });

  const [error, setError] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [complexity, setComplexity] = useState<number>(0);
  const [level, setLevel] = useState("");
  const [template, setTemplate] = useState("Two Images Side by Side");
  const delta = currentStep - previousStep;
  const course_title_value = watch("course_title");
  const watchedTitle = watch("title");

  const [currentImage1, setCurrentImage1] = useState<File | null>(null);
  const [currentImage2, setCurrentImage2] = useState<File | null>(null);

  useEffect(() => {
    console.log("template options", template);
  }, [template]);

  useEffect(() => {
    console.log("currentStep : ", currentStep);
    console.log("previousStep : ", previousStep);
    setValue(
      "course_title",
      course.steps.length > 0 && currentStep > 0
        ? course.steps[currentStep - 1].title
        : ""
    );
    setValue("title", course.basicInfo ? course.basicInfo.title : "");
  }, [currentStep, previousStep]);

  useEffect(() => {
    const currentStepObj = course.steps.find(
      (step) => step.step === currentStep
    );

    if (currentStepObj) {
      const up_left = currentStepObj.attachment.find(
        (att) => att.position === "up_left"
      );
      const up_right = currentStepObj.attachment.find(
        (att) => att.position === "up_right"
      );

      if (up_left) {
        setCurrentImage1(up_left.file);
      } else {
        setCurrentImage1(null);
      }
      if (up_right) {
        setCurrentImage2(up_right.file);
      } else {
        setCurrentImage2(null);
      }
    }
  }, [course]);

  useEffect(() => {
    setStepTitle(course_title_value);
  }, [course_title_value]);

  useEffect(() => {
    setBasicTitle(watchedTitle);
  }, [watchedTitle]);

  useEffect(() => {
    console.log("these are the course data after:", course);
  }, [course]);

  useEffect(() => {
    setError("");
  }, [complexity, level, file, watchedTitle]);

  const addAttachement = (position: string, file: File) => {
    if (currentStep > 0) {
      setCourse({
        ...course,
        steps: course.steps.map((step) => {
          if (step.step == currentStep) {
            return {
              ...step,
              attachment: [
                ...step.attachment,
                { position: position, file: file },
              ],
            };
          }
          return step;
        }),
      });
    }
  };

  const deleteAttachement = (position: string) => {
    if (currentStep > 0) {
      setCourse({
        ...course,
        steps: course.steps.map((step) => {
          if (step.step == currentStep) {
            return {
              ...step,
              attachment: step.attachment.filter(
                (att) => att.position !== position
              ),
            };
          }
          return step;
        }),
      });
    }
  };

  const setStepTitle = (title: string) => {
    if (currentStep > 0) {
      setCourse({
        ...course,
        steps: course.steps.map((step) => {
          if (step.step == currentStep) {
            return {
              ...step,
              title: title,
            };
          }
          return step;
        }),
      });
    }
  };

  const setBasicTitle = (title: string) => {
    if (currentStep == 0) {
      setCourse({
        ...course,
        basicInfo: {
          ...course.basicInfo,
          title: title,
        },
      });
    }
  };

  return (
    <div className="mt-3">
      <div className="flex justify-center gap-2">
        {!currentImage1 ? (
          <label className="opacity-1 w-[80%] h-[260px] text-xs font-bold hover:cursor-pointer cursor-pointer rounded-[5px]">
            <input
              type="file"
              accept="image/jpeg,image/png,application/pdf,image/jpg"
              hidden={true}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                addAttachement("up_left", e.target.files![0]);
              }}
            />
            <div className="h-full flex flex-col items-center justify-center border border-dashed rounded-[5px] py-8 input_bg">
              <span className="opacity-1 hover:shadow:sm flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <GrCloudUpload
                  size={34}
                  className="text-primary-500 text-deepSkyBlue"
                  strokeLinejoin="miter"
                />
              </span>
              <p className="mt-2 text-xs">
                Drop your files here or
                <span className="cursor-pointer text-deepSkyBlue underline">
                  {" "}
                  browse
                </span>
              </p>
              <p className="mt-2 text-xsm text_gray-400">
                Max file size 10MB, PDF, JPG,PNG or JPEG file supported.
              </p>
            </div>
          </label>
        ) : (
          <div className="mt-1 flex items-center gap-2 w-[50%] h-[220px]">
            <div className="flex items-center gap-7">
              <span className="flex cursor-pointer text-sky-600 font-bold text-sm">
                {currentImage1?.name}
              </span>
              <button
                onClick={() => {
                  deleteAttachement("up_left");
                }}
                className="flex items-center justify-center gap-2 rounded-lg px-[5px] py-1 text-xs font-semibold"
                type="button"
              >
                <TbTrashX
                  size={20}
                  className="text-primary text-red"
                  strokeLinejoin="miter"
                />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SingleImage;
