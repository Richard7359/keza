"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "../form/Button";
import { TbPlayerTrackNext } from "react-icons/tb";
import { useEffect, useState } from "react";
import Complexity from "./Complexity";
import Combobox from "./ComboBox";
import UploadImage from "./UploadImage";
import { IoPlayBackOutline } from "react-icons/io5";
import { IoFootstepsOutline } from "react-icons/io5";
import { step } from "@/app/store/currectStep";
import { ChangeEvent } from "react";

import { GrCloudUpload } from "react-icons/gr";
import { TbTrashX } from "react-icons/tb";

import { motion } from "framer-motion";
import { CourseData } from "@/app/store/courseData";

const FormSchema = z.object({
  title: z.string(),
  course_title: z.string(),
});

function AddCourseForm({ currentTitle, setCurrentTitle} : {currentTitle: string, setCurrentTitle: (value: string) => void}){
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      course_title: ""
    },
  });

  const [error, setError] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const { currentStep, setCurrentStep } = step();
  const [previousStep, setPreviousStep] = useState<number>(0);
  const [complexity, setComplexity] = useState<number>(0);
  const [level, setLevel] = useState("");
  const delta = currentStep - previousStep;
  const { course, setCourse } = CourseData();
  const course_title_Title = watch("course_title");
  const watchedTitle = watch("title");

  useEffect(() => {
    setCurrentTitle(course_title_Title);
  }, [course_title_Title]);

  const handleNext = () => {
    if (error) return;
    setPreviousStep(currentStep);
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    if (currentStep === 0)
      return console.log("You are at the first currentStep");
    setPreviousStep(currentStep);
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    setError("");
  }, [complexity, level, file, watchedTitle]);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("submitting..........................");
    console.log("these are the course data before: ", course);
    console.log(data);
    console.log(level);
    console.log(complexity);
    console.log(file);
    if (data.title === "" || !file || level === "" || complexity === 0) {
      return setError("All fields are required");
    }
    if (currentStep == 0) {
      setCourse({
        ...course,
        basicInfo: {
          title: data.title,
          level: level,
          complexity: complexity,
          uploadedBy: "Admin",
          attachment: file.name,
        },
      });
    } else {
    }
    console.log("these are the course data after:", course);
    handleNext();

    // if (data.title === "") {
    //   setError("Title is required");
    // }
    // if (!file) {
    //   return setError("File is required");
    // }

    // const formData = new FormData();
    // formData.append("file", file);
    // formData.append("folder", "courses");
    // try {
    //   const response = await fetch("/api/s3-upload", {
    //     method: "POST",
    //     body: formData,
    //   });
    //   const data = await response.json();
    //   if (data) setFile(null);
    //   console.log(data);
    // } catch (error) {
    //   console.log(error);
    // }
    setError("");
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[80%] ">
      <div className="flex gap-2 mb-3">
        <IoFootstepsOutline size={20} />
        {currentStep == 0 ? (
          <p className="text-sm font-semibold">Basic Course Information</p>
        ) : (
          <p className="text-sm font-semibold">Step : {currentStep}</p>
        )}
      </div>
      {currentStep == 0 && (
        <motion.div
          initial={{ x: 200 >= 0 ? "50%" : "-50%", opacity: 0 }}
          // delta was used to determine the direction but it's missbehaving for now will used later
          // initial={{ x: delte >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex flex-col gap-2 ">
            <div></div>
            <label htmlFor="title" className="text-sm font-semibold">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter the course title"
              className="w-full rounded-md input_text input_bg border border-input bg-background px-3 py-2 text-sm outline-none"
              {...register("title")}
            />
          </div>
          <div className="mt-2 grid grid-cols-2">
            <div>
              <label htmlFor="description" className="text-sm font-semibold">
                Course Level
              </label>
              <Combobox level={level} setLevel={setLevel} />
            </div>
            <div>
              <label htmlFor="description" className="text-sm font-semibold">
                Complexity
              </label>
              <div className="mt-2">
                <Complexity
                  complexity={1}
                  onClick={() => setComplexity(1)}
                  className={complexity == 1 ? "border border-green" : ""}
                />
                <Complexity
                  complexity={2}
                  onClick={() => setComplexity(2)}
                  className={complexity == 2 ? "border medium-border" : ""}
                />
                <Complexity
                  complexity={3}
                  onClick={() => setComplexity(3)}
                  className={complexity == 3 ? "border border-level4" : ""}
                />
              </div>
            </div>
          </div>
          <div>
            <UploadImage file={file} setFile={setFile} />
          </div>
        </motion.div>
      )}{" "}
      {currentStep > 0 && (
        <motion.div
          initial={{ x: 200 >= 0 ? "50%" : "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="flex">
            <div className="w-[75%]">
              <label htmlFor="title" className="text-sm font-semibold">
                Title
              </label>
              <input
                type="text"
                id="course_title"
                placeholder="Enter the course title"
                className="w-full rounded-md input_text input_bg border border-input bg-background px-3 py-2 text-sm outline-none"
                {...register("course_title")}
              />
            </div>
            <div className="w-[25%] flex items-end justify-end">
              <button className="border border-deepSkyBlue py-2 px-4 rounded-md">
                Change template
              </button>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex gap-2">
              <label className="opacity-1  text-xs font-bold hover:cursor-pointer w-[50%] h-[220px] cursor-pointer rounded-[5px]">
                <input
                  type="file"
                  accept="image/jpeg,image/png,application/pdf,image/jpg"
                  hidden={true}
                  // onChange={handleFileChange}
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
              <label className="opacity-1  text-xs font-bold hover:cursor-pointer w-[50%] h-[220px] cursor-pointer rounded-[5px]">
                <input
                  type="file"
                  accept="image/jpeg,image/png,application/pdf,image/jpg"
                  hidden={true}
                  // onChange={handleFileChange}
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
              {/* <div className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"></div>
              <div className="w-[50%] h-[220px] cursor-pointer rounded-[5px] border-custom"></div> */}
            </div>
          </div>
        </motion.div>
      )}
      {error ? <p className="text-red text-sm">{error}</p> : null}
      <div className="flex justify-between mt-2">
        <div>
          {currentStep > 0 && (
            <Button className="" onClick={() => handleBack()}>
              <p className="flex items-center gap-2 ">
                <IoPlayBackOutline />
                <p>back</p>
              </p>
            </Button>
          )}
        </div>
        <Button type="submit" className="">
          {/* <Button className="" onClick={() => handleNext()}> */}
          <p className="flex items-center gap-2 ">
            <p>Save-Next</p>
            <TbPlayerTrackNext />
          </p>
        </Button>
      </div>
    </form>
  );
}

export default AddCourseForm;
