"use client";

import { ChangeEvent, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { GrCloudUpload } from "react-icons/gr";

const FormSchema = z.object({
  title: z.string(),
});

function Page() {
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
      title: "",
    },
  });

  const [pdf, setPdf] = useState<File | null>(null);

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
    const formData = new FormData();
    formData.append("file", pdf as File);
    formData.append("folder", "courses");
    try {
      const response = await fetch("/api/s3-upload", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      alert("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full h-full flex justify-center items-center"
    >
      <Card className="w-[60%]">
        <CardHeader>
          <CardTitle className="text-2xl">Bunner Section</CardTitle>
          <CardDescription>
            Enter the description of the bunner and select pdf which describe
            the bunner.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Description</Label>
            <Input id="text" type="text" placeholder="" required />
          </div>
          <div className="grid gap-2">
            <label className="opacity-1  text-xs font-bold hover:cursor-pointer">
              Attach file
              <input
                type="file"
                accept="application/pdf"
                hidden={true}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setPdf(e.target.files![0]);
                }}
              />
              <div className="mt-2 flex h-52 flex-col items-center justify-center rounded-xl border border-dashed py-8 input_bg">
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
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" type="submit">
            Save Bunner
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default Page;
