"use client";

import React, { useState } from "react";
import AddCourseForm from "@/app/components/dashboard/AddCourseForm";
import Preview from "@/app/components/courses/Preview";

const Page = () => {
  const [currentTitle, setCurrentTitle] = useState("");
  const [file1, setFile1] = useState<File | null>(null);
  const [file2, setFile2] = useState<File | null>(null);
  const [file3, setFile3] = useState<File | null>(null);
  const [file4, setFile4] = useState<File | null>(null);
  return (
    <div className="flex justify-center text-sm">
      <div className="w-[98%] bg-white p-2 mt-2 rounded-sm uc grid  grid-cols-2">
        <div className="">
          <p className="font-bold mb-3">Add Course</p>
          <AddCourseForm
            currentTitle={currentTitle}
            setCurrentTitle={setCurrentTitle}
            file1={file1}
            setFile1={setFile1}
            file2={file2}
            setFile2={setFile2}
            file3={file3}
            setFile3={setFile3}
            file4={file4}
            setFile4={setFile4}
          />
        </div>
        <div className="">
          <p className=" font-bold">Preview</p>
          <div className="mt-2 ">
            <Preview
              currentTitle={currentTitle}
              setCurrentTitle={setCurrentTitle}
              file1={file1}
              setFile1={setFile1}
              file2={file2}
              setFile2={setFile2}
              file3={file3}
              setFile3={setFile3}
              file4={file4}
              setFile4={setFile4}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
